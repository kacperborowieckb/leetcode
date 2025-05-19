function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>()
    let max = 0
    let left = 0

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++    
        }
        set.add(s[i])
        if (set.size > max) max = set.size
    }

    return max
};