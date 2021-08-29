import {
  Center,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "@components/Link";
import SignupForm from "@components/SignupForm";
import Meta from "@components/Meta";

const Signup: NextPage = () => {
  const bg = useColorModeValue("gray.100", "inherit");
  const cardBg = useColorModeValue("white", "gray.700");
  const linkColor = useColorModeValue("teal.500", "teal.100");

  return (
    <>
      <Meta title="Sign up" />
      <Center minH="100vh" bg={[cardBg, bg]}>
        <Stack bg={cardBg} p={12} boxShadow={[0, "lg"]} rounded={[0, "lg"]}>
          <Heading as="h1" textAlign="center" fontWeight="extrabold">
            Sign up
          </Heading>
          <SignupForm />
          <Text as="span" align="center" fontWeight="medium">
            {"Already have an account? "}
            <Link href="/signup" color={linkColor}>
              Sign in!
            </Link>
          </Text>
        </Stack>
      </Center>
    </>
  );
};

export default Signup;
