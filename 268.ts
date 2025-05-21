function missingNumber(nums: number[]): number {
    return nums.reduce((sum, currNum, i) => {
        return sum + i - currNum
    }, nums.length)
};