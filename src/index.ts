import { dnaToRna } from "./utils";
import { dna } from "./data/sars_cov2_wuhan";

const rna = dnaToRna(dna);

console.log("--- TESTS ---");
console.log("Longueur ADN : ", dna.length);
console.log("Longueur ARN : ", rna.length);
console.log("--- AFFICHAGE (10 premieres nucléotides) ---");
console.log("ADN : ", dna.substring(0, 10));
console.log("ARN : ", rna.substring(0, 10));
