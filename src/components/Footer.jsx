import { Box, Text, Link } from "@radix-ui/themes";

export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        textAlign: "center",
      }}>
      <Text as="span">
        Created by <Link href="https://github.com/nacho-cs">nacho-cs</Link>,
        based on the original version by{" "}
        <Link href="https://github.com/ncolyer11">ncolyer</Link>
      </Text>
    </footer>
  );
}
