const { isPalindrome } = require("./palindrome");

test("racecar", () => {
    expect(isPalindrome("racecar")).toBe(true);
});

test("palindrome with spaces", () => {
    expect(isPalindrome("me em")).toBe(true);
});

test("Hi Tomoko", () => {
    expect(isPalindrome("Hi Tomoko")).toBe(false);
});
