import { rawMaterials } from ".";
import { snakeCase } from "change-case";
import sortBy from "lodash.sortby";
import { normalizeName } from "./normalizeName";

export function convertToRawMaterials(json) {
  const list = [];
  for (const item of json) {
    console.log(snakeCase(normalizeName(item["Item"])));
    const amounts = rawMaterials[snakeCase(normalizeName(item["Item"]))];
    amounts.forEach(amount => {
      if (!list.map(item => item.item).includes(amount.item)) {
        list.push({
          item: amount.item,
          quantity: amount.quantity * item["Total"],
        });
      } else {
        list.find(entry => entry.item === amount.item).quantity +=
          amount.quantity * item["Total"];
      }
    });
  }
  return sortBy(
    list.map(item => ({
      ...item,
      quantity: Math.ceil(item.quantity),
    })),
    ["quantity"]
  ).reverse();
}
