import { adnToArn } from "./utils";

const adn = "attaaaggtttataccttcccaggtaacaaaccaaccaactttcgatctcttgtagatct";
const arn = adnToArn(adn);

console.log("--- TESTS ---");
console.log("Longueur ADN : ", adn.length);
console.log("Longueur ARN : ", arn.length);
console.log("--- AFFICHAGE ---");
console.log("ADN : ", adn);
console.log("ARN : ", arn);
