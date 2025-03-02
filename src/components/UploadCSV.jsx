import {
  Card,
  Tabs,
  Box,
} from "@radix-ui/themes";
import { FileInput } from "./FileInput";

export function UploadCSV() {
  return (
    <Card>
      <Tabs.Root defaultValue="csv">
        <Tabs.List>
          <Tabs.Trigger value="csv">Upload CSV</Tabs.Trigger>
          <Tabs.Trigger value="how-to-upload">
            How to upload a CSV?
          </Tabs.Trigger>
        </Tabs.List>
        <Box pt="3">
          <Tabs.Content value="csv">
            <FileInput />
          </Tabs.Content>
          <Tabs.Content value="how-to-upload">
            <Box px="6">
              <ol>
                <li>Open Litematica in game</li>
                <li>Select the litematic you want to view</li>
                <li>Click "Material List"</li>
                <li>Make sure to press SHIFT and click "Write to File". This will ensure it is a .csv</li>
                <li>Open `.minecaft/config/litematic` and open the .csv in this website</li>
              </ol>
            </Box>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Card>
  );
}
