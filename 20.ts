const map = {
    '{': '}',
    '(': ')',
    '[': ']'
} as const 

function isValid(s: string): boolean {
    const open = []

    for (let i = 0; i < s.length; i ++) {
        let char = s[i]
        
        if (map.hasOwnProperty(char)) {
            open.push(char)
        } else {
            const opening = open.pop()
            if (map[opening as keyof typeof map] !== char) return false
        }
    }
    
    if (open.length === 0) {
        return true
    } 
    return false
};