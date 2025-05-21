

function countPalindromes(word: string, left: number, right: number): number {
    let palindromesCount = 0 

    const canIterate = () => !(left < 0 || right > word.length || right < left)

    if (!canIterate()) {
        return 0
    }
    while (canIterate()) {
        if (word[left] !== word[right]) {
            break
        }

        palindromesCount++

        left--
        right++
    }

    return palindromesCount
}

function countSubstrings(s: string): number {
    return s.split('').reduce((count, _, i) => {
        return count + countPalindromes(s, i, i) + countPalindromes(s, i, i + 1)
    }, 0)
};