function isPalindrome(str) {
    const splitStr = str.split("");
    const reverseArr = splitStr.reverse();
    const reverseStr = reverseArr.join("");

    if (reverseStr.trim() === str.trim()) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isPalindrome };
