const barWeight = 45
const plateSizes = [45, 35, 25, 10, 5, 2.5];

/**
 * @returns  An Array that represent the weight layout required for each side of a barbell. This layout should be applied to each side as the array only represent one side.
 */
export function getLayout(targetWeight: number): number[] | Error {
  if (targetWeight < barWeight) return Error("Weight too low.")
  if (targetWeight % 5 !== 0) return Error("Weight not divisible by 5.")

  const layoutArray: number[] = []
  let requiredWeight = targetWeight - barWeight
  let plateIndex = 0
  const getSubtractionWeight = () =>
    plateSizes[plateIndex] * 2
  const lowestPairPlateSize = plateSizes[plateSizes.length - 1];

  while (lowestPairPlateSize <= requiredWeight) {
    if (getSubtractionWeight() <= requiredWeight) {
      layoutArray.push(plateSizes[plateIndex])
      requiredWeight = requiredWeight - getSubtractionWeight()
    } else { plateIndex++ }
  }

  return layoutArray
}
