import { Flex, Box, Heading, Link, Text } from "@radix-ui/themes";

function Navbar() {
  return (
    <Box>
      <Flex align="center" justify="between" py="3">
        <Heading as="h3" weight="regular">
          S2RM
        </Heading>
        <Link href="https://github.com/nacho-cs/s2rm-web">
          <Text as="span">Github</Text>
        </Link>
        <Heading as="h1">PLEASE DO NOT USE YET!!!!</Heading>
      </Flex>
    </Box>
  );
}

export { Navbar };
