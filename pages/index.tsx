import {
  Center,
  Stack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import LoginForm from "@components/LoginForm";

const Login: NextPage = () => {

  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("blue.100", "inherit");
  const cardBg = useColorModeValue("white", "gray.700");
  const signupColor = useColorModeValue("blue.500", "blue.200");

  return (
    <>
      <button
        style={{ position: "absolute" }}
        onClick={() => {
          alert("Oh");
          toggleColorMode();
        }}
      >
        Coo
      </button>
      <Center h="100vh" bg={bg}>
        <Box bg={cardBg} p={12} boxShadow="lg" rounded="lg">
          <Heading as="h1" textAlign="center" fontWeight="extrabold">
            Sign in
          </Heading>
          <LoginForm />
          <Text as="span" fontWeight="medium">
            {"Don't have an account? "}
            <Link href="/signup" passHref>
              <ChakraLink color={signupColor}>Click here!</ChakraLink>
            </Link>
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default Login;
