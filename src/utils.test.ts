import { dnaToRna, getCodingRna } from "./utils";

describe("dnaToRna", () => {
  test("should match properly", () => {
    expect(dnaToRna("atcg")).toBe("UAGC");
  });

  test("should manage incorrect nucleotide", () => {
    expect(dnaToRna("atocg")).toBe("UAGC");
  });

  test("should return empty arn if adn is empty", () => {
    expect(dnaToRna("")).toBe("");
  });
});

describe("getCodingRna", () => {
  test("should return the appropriate coding rna", () => {
    const rna =
      " UAAUUUCCAAAUAUGGAAGGGUCCAUUGUUUGGUUGGUUGAAAGCUAGAGAACAUCUAGACAAGAGAUUU";
    const exons = ["GUUGAAAGC"];

    expect(getCodingRna(rna)).toEqual(exons);
  });
});
