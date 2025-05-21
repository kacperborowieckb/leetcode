function wordBreak(s: string, wordDict: string[]): boolean {
  const matchFlags: boolean[] = [];
  matchFlags[s.length] = true;

  for (const i in s.split('')) {
    const currentIndex = s.length - Number(i) - 1;

    for (const word of wordDict) {
      const fitInside = currentIndex + word.length <= s.length;
      const currentSlice = s.slice(currentIndex, currentIndex + word.length);

      if (fitInside && currentSlice === word) {
        matchFlags[currentIndex] = matchFlags[currentIndex + word.length];
      }

      if (matchFlags[currentIndex]) {
        break;
      }
    }
  }

  return matchFlags[0];
}
