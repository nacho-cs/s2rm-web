import {
  Card,
  Heading,
  Flex,
  Tabs,
  Box,
  Table,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import { FileInput } from "./FileInput";

export function UploadCSV() {
  const [inputRows, setInputRows] = useState([{ value: "", quantity: 0 }]);

  return (
    <Card>
      <Tabs.Root defaultValue="csv">
        <Tabs.List>
          <Tabs.Trigger value="csv">Upload CSV</Tabs.Trigger>
          <Tabs.Trigger value="already-collected">
            How to upload a CSV?
          </Tabs.Trigger>
        </Tabs.List>
        <Box pt="3">
          <Tabs.Content value="csv">
            <FileInput />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Card>
  );
}
