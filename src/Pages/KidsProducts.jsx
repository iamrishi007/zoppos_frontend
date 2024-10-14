import { useEffect, useState } from "react";
import {
  Box, Image, Badge, SimpleGrid, Divider, Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { FaRegUserCircle } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import JoinList from "./JoinList";
import Footer from "./Footer";

function KidsProducts() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const toast=useToast()

  const fetchData = async () => {
    try {
      const api = await fetch('http://localhost:3000/api/kids_products');
      const finalRes = await api.json();
      setData(finalRes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    toast({
      title: 'Order Placed',
      description: 'Your order has been successfully placed!',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  };

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Flex
        p={4}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        bg="white"
        boxShadow="md"
      >
        <Box fontSize="xl" fontWeight="bold" color="black">
          <Image src='https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg' alt='' />
        </Box>

        <InputGroup maxW="500px" flex="1" mx={4}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for shoes, clothes, etc."
            bg="white"
            border="1px solid #ddd"
            borderRadius="full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
          />
        </InputGroup>

        <Flex alignItems="center" gap={4}>
          <Button variant="ghost" leftIcon={<FaRegUserCircle fontSize="2.2rem" />}></Button>
          <Button variant="ghost" leftIcon={<TbShoppingBagPlus fontSize="2.2rem" />}></Button>
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4} width="90%" margin="10px auto">
        {filteredData.length > 0 ? (
          filteredData.map((property) => (
            <Box key={property._id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.img} alt={property.title} />

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">New</Badge>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                  {property.title}
                </Box>

                <Box mt="1" color={"gray"} fontWeight="semibold" as="h5" lineHeight="tight" noOfLines={1}>
                  {property.category}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" fontWeight={"bold"} color="black" fontSize="sm">
                    ${property.price}
                  </Box>
                </Box>
              </Box>
                <Button marginLeft={2} marginBottom={2} colorScheme='teal' size='sm' onClick={handleClick}>
                  Buy Now
                </Button>
            </Box>
          ))
        ) : (
          <Text fontSize="xl" fontWeight="bold" textAlign="center" margin="20px auto" color="gray.500">
            Products not available
          </Text>
        )}
      </SimpleGrid>

      <Divider />
      <Box>
        <JoinList />
      </Box>
      <Divider />
      <Box>
        <Footer />
      </Box>
      <Divider />
    </>
  );
}

export default KidsProducts;



