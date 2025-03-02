import { Flex, Container } from "@radix-ui/themes";
import { Navbar } from "./components/Navbar";
import { RecipeList } from "./components/RecipeList";
import { UploadCSV } from "./components/UploadCSV";

export function App() {
  return (
    <Container>
      <Flex direction="column" gap="5">
        <Navbar />
        <UploadCSV />
        <RecipeList />
      </Flex>
    </Container>
  );
}
