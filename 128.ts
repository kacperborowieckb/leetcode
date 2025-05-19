function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums)

    function isStartingSequence(num: number) {
        return !numsSet.has(num - 1)
    }

    function getSequenceLengthFromStart(num: number) {
        let sequenceLength = 1
        
        while (numsSet.has(num + sequenceLength)) {
            sequenceLength += 1
        }

        return sequenceLength
    }

    let longestSequenceLength = 0

    for (let num of numsSet) {
        if (isStartingSequence(num)) {
            const sequenceLength = getSequenceLengthFromStart(num)

            longestSequenceLength = Math.max(longestSequenceLength, sequenceLength)
        }
    }

    return longestSequenceLength
};