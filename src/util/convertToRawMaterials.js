import { rawMaterials } from ".";
import slugify from "slugify";
import sortBy from "lodash.sortby";
import { normalizeName } from "./normalizeName";

// const TEST_MATS = [
//   {
//     Item: "Black Stained Glass",
//     Total: 1782,
//     Missing: 1782,
//     Available: 0,
//   },
//   {
//     Item: "Obsidian",
//     Total: 1550,
//     Missing: 1550,
//     Available: 0,
//   },
//   {
//     Item: "Spruce Log",
//     Total: 1256,
//     Missing: 1256,
//     Available: 0,
//   },
//   {
//     Item: "Observer",
//     Total: 479,
//     Missing: 479,
//     Available: 0,
//   },
//   {
//     Item: "Spruce Trapdoor",
//     Total: 451,
//     Missing: 451,
//     Available: 0,
//   },
//   {
//     Item: "Blue Ice",
//     Total: 412,
//     Missing: 412,
//     Available: 0,
//   },
//   {
//     Item: "Gray Glazed Terracotta",
//     Total: 307,
//     Missing: 307,
//     Available: 0,
//   },
//   {
//     Item: "Polished Deepslate Wall",
//     Total: 281,
//     Missing: 281,
//     Available: 0,
//   },
//   {
//     Item: "Piston",
//     Total: 232,
//     Missing: 232,
//     Available: 0,
//   },
//   {
//     Item: "Sticky Piston",
//     Total: 224,
//     Missing: 224,
//     Available: 0,
//   },
//   {
//     Item: "Polished Deepslate",
//     Total: 207,
//     Missing: 207,
//     Available: 0,
//   },
//   {
//     Item: "Stone Button",
//     Total: 203,
//     Missing: 203,
//     Available: 0,
//   },
//   {
//     Item: "Slime Block",
//     Total: 196,
//     Missing: 196,
//     Available: 0,
//   },
//   {
//     Item: "Hopper",
//     Total: 142,
//     Missing: 142,
//     Available: 0,
//   },
//   {
//     Item: "Honey Block",
//     Total: 104,
//     Missing: 104,
//     Available: 0,
//   },
//   {
//     Item: "Redstone Dust",
//     Total: 88,
//     Missing: 88,
//     Available: 1,
//   },
//   {
//     Item: "Block of Redstone",
//     Total: 85,
//     Missing: 85,
//     Available: 0,
//   },
//   {
//     Item: "Redstone Repeater",
//     Total: 75,
//     Missing: 75,
//     Available: 1,
//   },
//   {
//     Item: "Note Block",
//     Total: 74,
//     Missing: 74,
//     Available: 0,
//   },
//   {
//     Item: "Dropper",
//     Total: 63,
//     Missing: 63,
//     Available: 0,
//   },
//   {
//     Item: "Black Stained Glass Pane",
//     Total: 55,
//     Missing: 55,
//     Available: 0,
//   },
//   {
//     Item: "Iron Trapdoor",
//     Total: 54,
//     Missing: 54,
//     Available: 0,
//   },
//   {
//     Item: "Water Bucket",
//     Total: 35,
//     Missing: 35,
//     Available: 0,
//   },
//   {
//     Item: "Polished Deepslate Stairs",
//     Total: 28,
//     Missing: 28,
//     Available: 0,
//   },
//   {
//     Item: "Composter",
//     Total: 22,
//     Missing: 22,
//     Available: 0,
//   },
//   {
//     Item: "Redstone Comparator",
//     Total: 22,
//     Missing: 22,
//     Available: 1,
//   },
//   {
//     Item: "Chest",
//     Total: 17,
//     Missing: 17,
//     Available: 0,
//   },
//   {
//     Item: "Scaffolding",
//     Total: 17,
//     Missing: 17,
//     Available: 0,
//   },
//   {
//     Item: "Spruce Leaves",
//     Total: 16,
//     Missing: 16,
//     Available: 0,
//   },
//   {
//     Item: "TNT",
//     Total: 14,
//     Missing: 14,
//     Available: 0,
//   },
//   {
//     Item: "White Wool",
//     Total: 13,
//     Missing: 13,
//     Available: 0,
//   },
//   {
//     Item: "Activator Rail",
//     Total: 8,
//     Missing: 8,
//     Available: 0,
//   },
//   {
//     Item: "Cauldron",
//     Total: 7,
//     Missing: 7,
//     Available: 0,
//   },
//   {
//     Item: "Lever",
//     Total: 7,
//     Missing: 7,
//     Available: 0,
//   },
//   {
//     Item: "Melon",
//     Total: 7,
//     Missing: 7,
//     Available: 0,
//   },
//   {
//     Item: "Dispenser",
//     Total: 6,
//     Missing: 6,
//     Available: 0,
//   },
//   {
//     Item: "Redstone Torch",
//     Total: 6,
//     Missing: 6,
//     Available: 0,
//   },
//   {
//     Item: "Podzol",
//     Total: 4,
//     Missing: 4,
//     Available: 0,
//   },
//   {
//     Item: "Polished Deepslate Slab",
//     Total: 4,
//     Missing: 4,
//     Available: 0,
//   },
//   {
//     Item: "Gray Banner",
//     Total: 3,
//     Missing: 3,
//     Available: 0,
//   },
//   {
//     Item: "Detector Rail",
//     Total: 2,
//     Missing: 2,
//     Available: 0,
//   },
//   {
//     Item: "Iron Door",
//     Total: 2,
//     Missing: 2,
//     Available: 0,
//   },
//   {
//     Item: "White Shulker Box",
//     Total: 2,
//     Missing: 2,
//     Available: 0,
//   },
//   {
//     Item: "Redstone Lamp",
//     Total: 1,
//     Missing: 1,
//     Available: 0,
//   },
//   {
//     Item: "Spruce Door",
//     Total: 1,
//     Missing: 1,
//     Available: 0,
//   },
//   {
//     Item: "Spruce Fence Gate",
//     Total: 1,
//     Missing: 1,
//     Available: 0,
//   },
// ];

export function convertToRawMaterials(json) {
  const list = [];
  for (const item of json) {
    const amounts =
      rawMaterials[
        slugify(normalizeName(item["Item"]), { replacement: "_", lower: true })
      ];
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
