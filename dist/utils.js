"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodingRna = exports.getIndexes = exports.dnaToRna = void 0;
const constants_1 = require("./constants");
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
const getIndexes = (rna, kind) => {
    const indexes = [];
    let i = 0;
    while (i < rna.length) {
        const codons = rna.charAt(i) + rna.charAt(i + 1) + rna.charAt(i + 2);
        if (kind === "start" && constants_1.RNA_START.includes(codons)) {
            indexes.push(i);
        }
        if (kind === "stop" && constants_1.RNA_STOP.includes(codons)) {
            indexes.push(i);
        }
        i++;
    }
    return indexes;
};
exports.getIndexes = getIndexes;
const getCodingRna = (rna) => {
    const exons = [];
    let exon = "";
    let i = 0;
    let start = false;
    let step = 1;
    while (i < rna.length) {
        const codons = rna.charAt(i) + rna.charAt(i + 1) + rna.charAt(i + 2);
        const nextCodons = rna.charAt(i + 3) + rna.charAt(i + 4) + rna.charAt(i + 5);
        if (constants_1.RNA_START.includes(codons)) {
            start = true;
            step = 3;
        }
        if (start &&
            !constants_1.RNA_START.includes(nextCodons) &&
            !constants_1.RNA_STOP.includes(nextCodons)) {
            exon += nextCodons;
        }
        if (start && constants_1.RNA_START.includes(nextCodons)) {
            exon = "";
        }
        if (start && constants_1.RNA_STOP.includes(nextCodons)) {
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
exports.getCodingRna = getCodingRna;
