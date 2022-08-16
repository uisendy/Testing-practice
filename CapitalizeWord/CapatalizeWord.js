function capitalizeWord(string) {
  return typeof string === "string"
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : `${string} is not a string type`;
}

module.exports = capitalizeWord;
