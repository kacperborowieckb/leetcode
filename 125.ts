function isPalindrome(s: string): boolean {
    const cleanedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

    return cleanedString.split('').reverse().join('') === cleanedString
};