export const adnToArn = (adn: string) => {
  const adnArray = adn.split("");
  const arnArray = adnArray.map((nucleotide) => {
    switch (nucleotide) {
      case "a":
        return "u";
      case "t":
        return "a";
      case "g":
        return "c";
      case "c":
        return "g";
      default:
        return;
    }
  });
  const arn = arnArray.join("");
  return arn;
};
