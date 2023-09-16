export class WeightCalc {
  barWeight = 45
  plateSizes = [45, 35, 25, 10, 5, 2.5];
  targetWeight: number;

  constructor(targetWeight: number) {
    this.targetWeight = targetWeight;
  }

  setTargetWeight(targetWeight: number) {
    this.targetWeight = targetWeight;
  }

  /**
   * @returns  An Array that represent the weight layout required for each side of a barbell. This layout should be applied to each side as the array only represent one side.
   */
  getLayout(): number[] | Error {
    if (this.targetWeight < this.barWeight) return Error("Weight too low.")
    if (this.targetWeight % 5 !== 0) return Error("Weight not divisible by 5.")
    if (this.targetWeight === this.barWeight) return [0]
    const layoutArray: number[] = []
    let requiredWeight = this.targetWeight - this.barWeight
    let plateIndex = 0
    const getSubtractionWeight = () =>
      this.plateSizes[plateIndex] * 2
    const lowestPairPlateSize = 5;

    while (lowestPairPlateSize <= requiredWeight) {
      if (getSubtractionWeight() <= requiredWeight) {
        layoutArray.push(this.plateSizes[plateIndex])
        requiredWeight = requiredWeight - getSubtractionWeight()
      } else { plateIndex++ }
    }

    return layoutArray
  }
}
