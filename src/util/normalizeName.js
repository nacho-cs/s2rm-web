const replacements = {
  "Redstone Comparator": "Comparator",
  "Redstone Repeater": "Repeater",
  "Redstone Dust": "Redstone",
  "Deepslate Lapis Lazuli Ore": "Deepslate Lapis Ore",
  "Smooth Quartz Block": "Smooth Quartz",
  "Jack o'Lantern": "Jack O Lantern",
  Vines: "Vine",
  "Hay Bale": "Hay Block",
  monster_spawner: "Spawner",
  "Jigsaw Block": "Jigsaw",
  "Compressed Ice": "Packed Ice",
  Biscuit: "Cookie",
  "Beet Seeds": "Beetroot Seeds",
  "Moon Daisy": "Oxeye Daisy",
  Watermelon: "Melon",
  "Watermelon Seeds": "Melon Seeds",
  "Ender Dragon Head": "Dragon Head",
};
const regex = /Block of (\w+)/;

export function normalizeName(str) {
  if (regex.test(str)) {
    return str.replace(regex, "$1 Block");
  } else if (Object.keys(replacements).includes(str)) {
    return replacements[str];
  }
  return str;
}
