import { useColorMode } from "@chakra-ui/react";

const Header = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

  return (
    <button
      style={{ position: "absolute" }}
      onClick={() => {
        alert("Oh");
        toggleColorMode();
      }}
    >
      Coo
    </button>
  );
};

export default Header;
