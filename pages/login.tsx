import {
  Center,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import LoginForm from "@components/LoginForm";
import Meta from "@components/Meta"

const Login: NextPage = () => {
  const bg = useColorModeValue("gray.100", "inherit");
  const cardBg = useColorModeValue("white", "gray.700");
  const linkColor = useColorModeValue("teal.500", "teal.100");

  return (
    <>
    <Meta title="Sign in" />
    <Center minH="100vh" bg={[cardBg, bg]}>
      <Stack bg={cardBg} p={12} boxShadow={[0, "lg"]} rounded={[0, "lg"]}>
        <Heading as="h1" textAlign="center" fontWeight="extrabold">
          Sign in
        </Heading>
        <LoginForm />
        <Text as="span" align="center" fontWeight="medium">
          {"Don't have an account? "}
          <Link href="/signup" passHref>
            <ChakraLink color={linkColor}>Sign up!</ChakraLink>
          </Link>
        </Text>
      </Stack>
    </Center>
    </>
    
  );
};

export default Login;
