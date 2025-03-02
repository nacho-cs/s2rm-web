import { Table, Card, Flex, Text, Checkbox, TextField } from "@radix-ui/themes";
import { capitalCase, snakeCase } from "change-case"
import { useState } from "react";
import { Search } from "lucide-react";
import { itemListAtom, convertToRawMaterials } from "../util";
import { useAtom } from "jotai";
import { csvParse } from "d3-dsv";

export function RecipeList() {
  const [query, setQuery] = useState("");
  const [itemList] = useAtom(itemListAtom);
  const formattedCSV = !!itemList ? csvParse(itemList) : [];
  const matsList = convertToRawMaterials(formattedCSV);

  return (
    <Card size="2" style={{ textAlign: "center" }}>
      <Flex direction="column" gap="2">
        <Text as="label">Raw materials list:</Text>
        <TextField.Root
          type="search"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}>
          <TextField.Slot>
            <Search />
          </TextField.Slot>
        </TextField.Root>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell align="center">
                Item
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                Quantity
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                Gathered?
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {matsList
              .filter(item =>
                item.item.includes(snakeCase(query))
              )
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
    </Card>
  );
}
