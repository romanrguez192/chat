import NextLink from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

type Props = LinkProps & {
  href: string;
  children?: string;
};

const Link = ({ href, children, ...props }: Props): JSX.Element => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
