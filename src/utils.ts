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

export const getIndexes = (rna: string, kind: string): number[] => {
  const indexes: number[] = [];
  let i = 0;
  while (i < rna.length) {
    const codons = rna.charAt(i) + rna.charAt(i + 1) + rna.charAt(i + 2);
    if (kind === "start" && RNA_START.includes(codons)) {
      indexes.push(i);
    }

    if (kind === "stop" && RNA_STOP.includes(codons)) {
      indexes.push(i);
    }
    i++;
  }

  return indexes;
};

export const getCodingRna = (rna: string): string[] => {
  const exons: string[] = [];
  let exon = "";
  let i = 0;
  let start = false;
  let step = 1;

  while (i < rna.length) {
    const codons = rna.charAt(i) + rna.charAt(i + 1) + rna.charAt(i + 2);
    const nextCodons =
      rna.charAt(i + 3) + rna.charAt(i + 4) + rna.charAt(i + 5);

    if (RNA_START.includes(codons)) {
      start = true;
      step = 3;
    }

    if (
      start &&
      !RNA_START.includes(nextCodons) &&
      !RNA_STOP.includes(nextCodons)
    ) {
      exon += nextCodons;
    }

    if (start && RNA_START.includes(nextCodons)) {
      exon = "";
    }

    if (start && RNA_STOP.includes(nextCodons)) {
      start = false;
      i += 3;
      step = 1;

      if (exon.length > 0) {
        exons.push(exon);
        exon = "";
      }
    }

    i += step;
  }

  return exons;
};
