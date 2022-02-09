import { RNA_START, RNA_STOP } from "./constants";

export const dnaToRna = (dna: string): string => {
  const dnaArray = dna.split("");
  const rnaArray = dnaArray.map((nucleotide) => {
    switch (nucleotide.toUpperCase()) {
      case "A":
        return "U";
      case "T":
        return "A";
      case "G":
        return "C";
      case "C":
        return "G";
      default:
        return;
    }
  });
  const rna = rnaArray.join("");
  return rna;
};

export const getCodingRna = (rna: string): string[] => {
  return [""];
};
