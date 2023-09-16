import { test, expect } from 'vitest';

import { WeightCalc } from './WeightCalc';

test('number below bar weight returns an empty array', () => {
  let newWeightCalc = new WeightCalc(0);
  expect(newWeightCalc.getLayout()).toEqual([])
  newWeightCalc = new WeightCalc(44)
  expect(newWeightCalc.getLayout()).toEqual([])
})

test('bar weight returns bar weight', () => {
  const barWeight = 45
  const newWeightCalc = new WeightCalc(barWeight);
  expect(newWeightCalc.getLayout()).toEqual([0])
})

test('bar weight plus 90 returns 45', () => {
  const barWeight = 45
  const newWeightCalc = new WeightCalc(barWeight + 90);
  expect(newWeightCalc.getLayout()).toEqual([45])
})

test('bar weight plus 180 returns [45,45]', () => {
  const barWeight = 45
  const newWeightCalc = new WeightCalc(barWeight + 90);
  expect(newWeightCalc.getLayout()).toEqual([45, 45])
})
