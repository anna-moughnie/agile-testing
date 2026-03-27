// Operation should return sum of two numbers

const { addition } = require("./addition");

test("2 + 4 = 6", () => {
    expect(addition(2, 4)).toBe(6);
});

test("19 + 84 = 103", () => {
    expect(addition(19, 84)).toBe(103);
});

test.each([
    [3, 4, 7],
    [5, -10, -5],
    [0, 2, 2],
])("a + b = c", (a, b, expected) => {
    expect(addition(a, b)).toBe(expected);
});
