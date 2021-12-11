import { morse } from "./morse";

describe("Testing sum ()", () => {
    it("Should add two numbers together", () => {
        expect(sum(3, 5)).toBe(8);
        expect(sum(2, 40)).toBe(42);
        expect(sum(8000, -600)).toBe(7400);
    });

    describe("Testing calculateRectangleArea()", () => {
        it("Should return correct result", () => {
            expect(calculateRectangleArea(2, 4)).toBe(8);
            expect(calculateRectangleArea(6, 6)).toBe(36);
            expect(calculateRectangleArea(52, 96)).toBe(4992);
        });
        it("Should work with numbers as string", () => {
            expect(calculateRectangleArea("3", "4")).toBe(12);
            expect(calculateRectangleArea(8, "5")).toBe(40);
            expect(calculateRectangleArea("128", 4)).toBe(512);
        });
    });
});
