import {
  Center,
  Stack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import LoginForm from "@components/LoginForm";

const Login: NextPage = () => {
  const bg = useColorModeValue("gray.100", "inherit");
  const cardBg = useColorModeValue("white", "gray.700");
  const signupColor = useColorModeValue("teal.500", "teal.100");

  return (
    <Center minH="100vh" bg={[cardBg, bg]}>
      <Box bg={cardBg} p={12} boxShadow={[0, "lg"]} rounded={[0, "lg"]}>
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
  );
};

export default Login;
