import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
     Button,
     FormControl,
     FormLabel,
     Input,
     VStack,
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalCloseButton,
     ModalBody,
     ModalFooter,
     useToast,
     Box,
     Image
} from "@chakra-ui/react";

function AuthModal() {
     const [isOpen, setIsOpen] = useState(false)
     const [isLoginMode, setIsLoginMode] = useState(false)
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [age, setAge] = useState("")
     const toast = useToast();
     const navigate = useNavigate()
     const handleSignUp = async (e) => {
          e.preventDefault();

          try {
               const response = await fetch("http://localhost:3000/user/register", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password, age }),
               });

               const data = await response.json();

               if (response.ok) {
                    toast({
                         title: "Sign up successful!",
                         description: data.message || "You can now log in with your credentials.",
                         status: "success",
                         duration: 3000,
                         isClosable: true,
                    });
                   
                    setName("")
                    setEmail("")
                    setPassword("")
                    setAge("")

                   
                    setIsLoginMode(true)
               } else {
                    toast({
                         title: "Error",
                         description: data.message || "An error occurred during sign up.",
                         status: "error",
                         duration: 3000,
                         isClosable: true,
                    });
               }
          } catch (error) {
               toast({
                    title: "Sign up failed.",
                    description: "An error occurred while signing up. Please try again.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
               });
               console.log(error);

          }
     };

     const handleLogin = async (e) => {
          e.preventDefault();

          try {
               const response = await fetch("http://localhost:3000/user/login", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password })
               });

               const data = await response.json();

               if (response.ok) {
                    toast({
                         title: "Login successful!",
                         description: data.message || "Welcome back!",
                         status: "success",
                         duration: 3000,
                         isClosable: true,
                    });
                    navigate("/new")
                    setIsOpen(false)
               } else {
                    toast({
                         title: "Invalid credentials.",
                         description: data.message || "Please check your email and password.",
                         status: "error",
                         duration: 3000,
                         isClosable: true,
                    });
               }
          } catch (error) {
               toast({
                    title: "Login failed.",
                    description: "An error occurred while logging in. Please try again.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,

               });
               console.log(error)
          }
     };

     return (
          <>
               <Button onClick={() => setIsOpen(true)} >
                    Sign Up / Log In
               </Button>

               <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <ModalOverlay />
                    <ModalContent>
                         <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              height="8vh"
                              m={4}

                         >
                              <Image
                                   src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg"
                                   alt="Zappos 25 Years Logo"
                              />
                         </Box>
                         <ModalHeader fontWeight={"bold"} fontStyle={"initial"}>{isLoginMode ? "Log In" : "Please Register first"}</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <VStack spacing={4}>
                                   {!isLoginMode && (
                                        <form onSubmit={handleSignUp}>
                                             <FormControl isRequired>
                                                  <FormLabel>Name</FormLabel>
                                                  <Input
                                                       value={name}
                                                       onChange={(e) => setName(e.target.value)}
                                                       placeholder="Enter your name"
                                                  />
                                             </FormControl>
                                             <FormControl isRequired>
                                                  <FormLabel>Email</FormLabel>
                                                  <Input
                                                       type="email"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       placeholder="Enter your email"
                                                  />
                                             </FormControl>
                                             <FormControl isRequired>
                                                  <FormLabel>Password</FormLabel>
                                                  <Input
                                                       type="password"
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                       placeholder="Enter your password"
                                                  />
                                             </FormControl>
                                             <FormControl isRequired>
                                                  <FormLabel>Age</FormLabel>
                                                  <Input
                                                       type="number"
                                                       value={age}
                                                       onChange={(e) => setAge(e.target.value)}
                                                       placeholder="Enter your age"
                                                  />
                                             </FormControl>
                                             <Button mt={4} colorScheme="teal" type="submit" width="full">
                                                  Sign Up
                                             </Button>
                                             <Button
                                                  mt={2}
                                                  variant="link"
                                                  onClick={() => setIsLoginMode(true)}
                                             >
                                                  Already have an account? Log In
                                             </Button>
                                        </form>
                                   )}

                                   {isLoginMode && (
                                        <form onSubmit={handleLogin}>
                                             <FormControl isRequired>
                                                  <FormLabel>Email</FormLabel>
                                                  <Input
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       placeholder="Enter your email"
                                                  />
                                             </FormControl>
                                             <FormControl isRequired>
                                                  <FormLabel>Password</FormLabel>
                                                  <Input
                                                       type="password"
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                       placeholder="Enter your password"
                                                  />
                                             </FormControl>
                                             <Button mt={4} colorScheme="teal" type="submit" width="full">
                                                  Log In
                                             </Button>
                                             <Button
                                                  mt={2}
                                                  variant="link"
                                                  onClick={() => setIsLoginMode(false)}
                                             >
                                                  Don't have an account? Sign Up
                                             </Button>
                                        </form>
                                   )}
                              </VStack>
                         </ModalBody>

                         <ModalFooter>
                              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                                   Close
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
}

export default AuthModal;
