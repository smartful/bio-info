"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodingRna = exports.dnaToRna = void 0;
const dnaToRna = (dna) => {
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
exports.dnaToRna = dnaToRna;
const getCodingRna = (rna) => {
    return [""];
};
exports.getCodingRna = getCodingRna;
