import { morse } from "./morse";

describe("Testing Morse Code()", () => {
    it("Should return correct result", () => {
        expect(calculateRectangleArea("A", "B")).toBe(".- -...");
        expect(calculateRectangleArea("H", "I")).toBe(".... ..");
        expect(calculateRectangleArea("M", "I")).toBe("-- ..");
    });
    it("Should work with morse as string", () => {
        expect(calculateRectangleArea("....", "..")).toBe("HI");
        expect(calculateRectangleArea("....", ".", "-.--")).toBe("HEY");
        expect(calculateRectangleArea("-----", ".----")).toBe("01");
    });
    it("Should work with spaces", () => {
        expect(calculateRectangleArea("how are you")).toBe(
            ".... --- .-- / .- .-. . / -.-- --- ..-"
        );
        expect(calculateRectangleArea("whats up")).toBe(
            ".-- .... .- - ... / ..- .--."
        );
        expect(
            calculateRectangleArea(
                "i will write many words so that there are many spaces"
            )
        ).toBe(
            ".. / .-- .. .-.. .-.. / .-- .-. .. - . / -- .- -. -.-- / .-- --- .-. -.. ... / ... --- / - .... .- - / - .... . .-. . / .- .-. . / -- .- -. -.-- / ... .--. .- -.-. . ..."
        );
    });
});
