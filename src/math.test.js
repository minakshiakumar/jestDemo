import { sum, mul, sub, div } from "./math"

it.only("Adding 1 + 1 equals 2", () => {
    expect(sum(1, 1)).toBe(2)
});

it.only("Subtracting 1 - 1 equals 0", () => {
    expect(sub(1, 1)).toBe(0)
});

it("Multiplying 1 * 1 equals 1", () => {
    expect(mul(1, 1)).toBe(1)
});

it("dividing 1 / 1 equals 1", () => {
    expect(div(1, 1)).toBe(1)
});