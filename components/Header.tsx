import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "@components/Link";

const Header = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("teal.500", "teal.100");

  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    >
      <Heading as="h1">Chat App</Heading>
      <IconButton
        display={{ md: "none" }}
        bg="transparent !important"
        onClick={toggleMenu}
        icon={show ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={show ? "Close menu" : "Open menu"}
      />
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end"]}
          direction={["column", "row"]}
          pt={{ base: 7, md: 0 }}
        >
          <Link href="/home" mb={[8, 0]} mr={[0, 8]}>
            Home
          </Link>
          <Link href="/home" mb={[8, 0]} mr={[0, 8]}>
            Features
          </Link>
          <Link href="/home" mb={[8, 0]} mr={[0, 8]}>
            Pricing
          </Link>
          <Button size="sm" colorScheme="teal">
            Create Account
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
