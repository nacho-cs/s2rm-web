const replacements = {
  "Redstone Comparator": "Comparator",
  "Redstone Repeater": "Repeater",
  "Redstone Dust": "Redstone",
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

function clean(str) {
  const noControlChars = Array.from(str)
    .filter(c => {
      const charCode = c.charCodeAt(0);
      return !(
        (charCode >= 0 && charCode <= 31) ||
        (charCode >= 127 && charCode <= 159)
      );
    })
    .join("");
  return noControlChars.replace(/[^a-zA-Z'\s].*/, "");
}

export function normalizeName(str) {
  str = clean(str);
  str = str
    .replace(/Lapis Lazuli/gi, "Lapis ")
    .replace(/chiselled/gi, "chiseled")
    .replace(/grey/gi, "gray")
    .replace(/dised/gi, "dized")
    .replace(/Block of (\w+ \w+|\w+)/gi, "$1 Block");
  if (Object.keys(replacements).includes(str)) {
    str = replacements[str];
  }
  return str;
}
