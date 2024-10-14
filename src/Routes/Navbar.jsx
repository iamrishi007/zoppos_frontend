import { Link as ChakraLink, Flex, Box, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import AuthForm from "../Pages/AuthForm"
import {


    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverArrow,
    PopoverBody,
} from '@chakra-ui/react';


import { FaSearch } from 'react-icons/fa'
import { FaRegUserCircle } from "react-icons/fa"
import { TbShoppingBagPlus } from "react-icons/tb"

const navLinks = [
    { to: '/', label: "Home" },
    { to: '/new', label: "New" },
    { to: '/womans', label: "Womans" },
    { to: '/mens', label: "Mens" },
    { to: '/kids', label: "Kids" },
    { to: '/collection', label: "Collection" },
    { to: '/brand', label: "Brand" },
    { to: '/sale', label: "Sale" },
    { to: '/gifts', label: "Gifts" },
];

function Navbar() {
    return (
        <Box>


            <Box bg={'#E7F4FF'} p={3} width="100%">
                <Center fontSize="sm">
                    <b>Top Boots & Sneakers for Fall 2024 . </b>
                    <Heading size={"sm"}>
                    Shop Our Favorites
                    </Heading>
                </Center>
            </Box>


            <Flex
                p={2}
                justifyContent="space-between"
                alignItems="center"
                width="100%"

                boxShadow="md"
            >
                <Box display={"flex"} gap={3} alignItems={"center"} paddingLeft={7}>
                    <Box fontSize="xl" fontWeight="bold" color="black">
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg' alt='' />
                    </Box>

                    <InputGroup minW="650px" flex="1" mx={5}>
                        <InputLeftElement pointerEvents="none">
                            <FaSearch color="gray.300" />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Search for shoes, clothes, etc."
                            bg="white"
                            border="1px solid black"
                            borderRadius="full"
                        />
                    </InputGroup>
                </Box>

                <Flex alignItems="center" gap={1}>

                    <Popover>
                        <PopoverTrigger>
                            <Button variant="ghost" leftIcon={<FaRegUserCircle fontSize="2rem" />} />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>

                                <AuthForm />
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Button variant="ghost" leftIcon={<TbShoppingBagPlus fontSize="2rem" />} />
                </Flex>
            </Flex>

            <Flex as="nav" p={5} gap={4} justifyContent="start">
                {navLinks.map((el) => (
                    <ChakraLink
                        as={Link}
                        to={el.to}
                        key={el.to}
                        px={2}
                        py={1}
                        fontWeight={"bold"}
                        rounded="md"
                        _hover={{ bg: "#E8E8E8", textDecoration: "none", }}
                    >
                        {el.label}
                    </ChakraLink>
                ))}
            </Flex>
        </Box>
    );
}

export default Navbar;
