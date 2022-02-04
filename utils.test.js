import { adnToArn } from "./utils.js";

describe("adnToArn", () => {
  test("should match properly", () => {
    expect(adnToArn("atcg")).toBe("uagc");
  });

  test("should manage incorrect nucleotide", () => {
    expect(adnToArn("atocg")).toBe("uagc");
  });

  test("should return empty arn if adn is empty", () => {
    expect(adnToArn("")).toBe("");
  });
});
