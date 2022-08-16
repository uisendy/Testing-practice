const stringLength = (string) => {
  return string.length <= 10 && string.length > 0
    ? string.length
    : "string should be greater than 1 and less than 10 Charater";
};

module.exports = stringLength;
