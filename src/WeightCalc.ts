const barWeight = 45;
const plateSizes = [45, 35, 25, 10, 5, 2.5];

/**
 * @returns An Array that represents the weight layout required for each side of a barbell. This layout should be applied to each side as the array only represents one side.
 */
export function getLayout(targetWeight: number): number[] | Error {
  if (targetWeight < barWeight) {
    return new Error("Weight too low.");
  }
  if (targetWeight % 5 !== 0) {
    return new Error("Weight not divisible by 5.");
  }

  let bestLayout: number[] = [];
  let smallestPlateCount = Number.MAX_SAFE_INTEGER;

  function findOptimalLayout(currentLayout: number[], currentWeight: number, currentIndex: number) {
    if (currentWeight === 0) {
      // We found a valid layout
      if (currentLayout.length < smallestPlateCount) {
        bestLayout = [...currentLayout];
        smallestPlateCount = currentLayout.length;
      }
      return;
    }

    if (currentIndex === plateSizes.length || currentLayout.length >= smallestPlateCount) {
      // No more plates to consider or the current layout is not promising
      return;
    }

    const currentPlateSize = plateSizes[currentIndex];

    // Try adding one plate of the current size
    if (currentWeight >= currentPlateSize) {
      currentLayout.push(currentPlateSize);
      findOptimalLayout([...currentLayout], currentWeight - currentPlateSize, currentIndex);
      currentLayout.pop();
    }

    // Skip to the next plate size
    findOptimalLayout([...currentLayout], currentWeight, currentIndex + 1);
  }

  findOptimalLayout([], (targetWeight - barWeight) / 2, 0);
  return bestLayout;
}
