"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe("adnToArn", () => {
    test("should match properly", () => {
        expect((0, utils_1.adnToArn)("atcg")).toBe("uagc");
    });
    test("should manage incorrect nucleotide", () => {
        expect((0, utils_1.adnToArn)("atocg")).toBe("uagc");
    });
    test("should return empty arn if adn is empty", () => {
        expect((0, utils_1.adnToArn)("")).toBe("");
    });
});
