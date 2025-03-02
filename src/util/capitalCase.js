export function capitalCase(inputString) {
  return inputString
    .replace("_", " ")
    .replace(/\b\w/g, char => char.toUpperCase());
}
