export class WeightCalc {
  barWeight = 45
  plateSizes = [45, 35, 25, 5, 2.5];
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
  getLayout(): number[] {
    if (this.targetWeight < this.barWeight) return []
    if (this.targetWeight === this.barWeight) return [0]
    const layoutArray: number[] = []
    let requiredWeight = this.targetWeight - this.barWeight
    const plateIndex = 0


    if (this.plateSizes[plateIndex] * 2 <= requiredWeight) {
      layoutArray.push(this.plateSizes[plateIndex])
      requiredWeight = requiredWeight - this.plateSizes[plateIndex] * 2
    }

    return layoutArray
  }
}
