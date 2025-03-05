import {
  Table,
  Card,
  Flex,
  Checkbox,
  TextField,
  Tabs,
  Box,
} from "@radix-ui/themes";
import { capitalCase, snakeCase } from "change-case";
import { useState } from "preact/compat";
import { Search } from "lucide-react";
import { itemListAtom, convertToRawMaterials } from "../util";
import { useAtom } from "jotai";

export function RecipeList() {
  const [query, setQuery] = useState("");
  const [itemList, setItemList] = useAtom(itemListAtom);
  const matsList = convertToRawMaterials(itemList);

  return (
    <Card size="2" style={{ textAlign: "center" }}>
      <Tabs.Root defaultValue="ml">
        <Tabs.List>
          <Tabs.Trigger value="ml">Materials List</Tabs.Trigger>
          <Tabs.Trigger value="rml">Raw Materials List</Tabs.Trigger>
        </Tabs.List>
        <Box pt="3">
          <Tabs.Content value="ml">
            <Flex direction="column" gap="2">
              <TextField.Root
                type="search"
                placeholder="Search..."
                defaultValue={query}
                onInput={e => setQuery(e.target.value)}>
                <TextField.Slot>
                  <Search />
                </TextField.Slot>
              </TextField.Root>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell align="center" width="33%">
                      Item
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell align="center" width="33%">
                      Quantity
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell align="center" width="33%">
                      Exclude Quantity
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {itemList
                    .filter(item =>
                      snakeCase(item["Item"]).includes(snakeCase(query))
                    )
                    .map(item => (
                      <Table.Row key={item["Item"]}>
                        <Table.RowHeaderCell align="center">
                          {capitalCase(item["Item"])}
                        </Table.RowHeaderCell>
                        <Table.Cell align="center">{item["Total"]}</Table.Cell>
                        <Table.Cell align="center">
                          <TextField.Root
                            type="number"
                            placeholder="0"
                            defaultValue={item["Missing"] - item["Total"]}
                            onBlur={e => {
                              if (Number(e.target.value) > item["Missing"]) {
                                e.target.value = item["Missing"];
                              }
                              if (
                                Number(e.target.value) < 0 ||
                                e.target.value === ""
                              ) {
                                e.target.value = 0;
                              }
                              setItemList(old => {
                                return old.map(idx =>
                                  idx["Item"] === item["Item"]
                                    ? {
                                        ...idx,
                                        Total: String(
                                          item["Missing"] - e.target.value
                                        ),
                                      }
                                    : idx
                                );
                              });
                            }}
                          />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table.Root>
            </Flex>
          </Tabs.Content>
          <Tabs.Content value="rml">
            <Flex direction="column" gap="2">
              <TextField.Root
                type="search"
                placeholder="Search..."
                defaultValue={query}
                onInput={e => setQuery(e.target.value)}>
                <TextField.Slot>
                  <Search />
                </TextField.Slot>
              </TextField.Root>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell align="center" width="33%">
                      Item
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell align="center" width="33%">
                      Quantity
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell align="center" width="33%">
                      Gathered?
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {matsList
                    .filter(item => item.item.includes(snakeCase(query)))
                    .map(item => (
                      <Table.Row key={item["Item"]}>
                        <Table.RowHeaderCell align="center">
                          {capitalCase(item.item)}
                        </Table.RowHeaderCell>
                        <Table.Cell align="center">{item.quantity}</Table.Cell>
                        <Table.Cell align="center">
                          <Checkbox />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table.Root>
            </Flex>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Card>
  );
}
