const barWeight = 45
const plateSizes = [45, 35, 25, 10, 5, 2.5];

/**
 * @returns  An Array that represent the weight layout required for each side of a barbell. This layout should be applied to each side as the array only represent one side.
 */
export function getLayout(targetWeight: number): number[] {
  const dp: number[] = new Array(targetWeight + 1).fill(Infinity);
  dp[0] = 0;

  const weightCombinations: number[][] = new Array(targetWeight + 1).fill([]);

  for (let i = 1; i <= targetWeight; i++) {
    for (let j = 0; j < plateSizes.length; j++) {
      if (plateSizes[j] <= i && dp[i - plateSizes[j]] + 1 < dp[i]) {
        dp[i] = dp[i - plateSizes[j]] + 1;
        weightCombinations[i] = [...weightCombinations[i - plateSizes[j]], plateSizes[j]];
      }
    }
  }

  return weightCombinations[targetWeight].length === 0 ? [] : weightCombinations[targetWeight];
}
