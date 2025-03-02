import { Flex, Box, Heading, Link, Text } from "@radix-ui/themes";

function Navbar() {
  return (
    <Box>
      <Flex align="center" justify="between" py="3">
        <Heading as="h3" weight="regular">
          S2RM
        </Heading>
        <Flex justify="between" gap="4">
          <Link href="https://github.com/nacho-cs/s2rm-web">
            <Text as="span">Github</Text>
          </Link>
          <Link href="https://github.com/ncolyer11/s2rm">
            Desktop App
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export { Navbar };
