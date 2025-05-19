function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  function getLongestExpandingPalindrome(
    s: string,
    startIndex: number,
    endIndex: number
  ): string {
    if (startIndex < 0 || endIndex > s.length - 1 || startIndex > endIndex) {
      return '';
    }

    let currLongest = '';

    while (
      startIndex >= 0 &&
      endIndex < s.length &&
      s.at(startIndex) === s.at(endIndex)
    ) {
      if (endIndex - startIndex + 1 > currLongest.length) {
        currLongest = s.substring(startIndex, endIndex + 1);
      }

      startIndex--;
      endIndex++;
    }

    return currLongest;
  }

  return s.split('').reduce((currLongest, _, currIndex) => {
    const longestOdd = getLongestExpandingPalindrome(s, currIndex, currIndex);
    const longestEven = getLongestExpandingPalindrome(
      s,
      currIndex,
      currIndex + 1
    );

    const newMax =
      longestOdd.length > longestEven.length ? longestOdd : longestEven;

    return newMax.length > currLongest.length ? newMax : currLongest;
  }, '');
}
