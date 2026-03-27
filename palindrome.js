function isPalindrome(str) {
    const trimmedStr = str.trim();
    const splitStr = trimmedStr.split("");
    const reverseArr = splitStr.reverse();
    const reverseStr = reverseArr.join("");

    if (reverseStr === trimmedStr) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isPalindrome };
