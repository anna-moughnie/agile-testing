const { isPalindrome } = require("./palindrome");

test("racecar", () => {
    expect(isPalindrome("racecar")).toBe(true);
});

test("palindrome with spaces", () => {
    expect(
        isPalindrome(
            "i made in eden a cradle here we were held arcane denied am i",
        ),
    ).toBe(true);
});

test("Hi Tomoko", () => {
    expect(isPalindrome("Hi Tomoko")).toBe(false);
});
