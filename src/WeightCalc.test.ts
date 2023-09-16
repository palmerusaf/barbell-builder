import { test, expect } from 'vitest';

import { WeightCalc } from "./WeightCalc";

test('number below bar weight returns error', () => {
  let newWeightCalc = new WeightCalc(0);
  expect(newWeightCalc.getLayout()).toEqual(new Error("Weight too low."))
  newWeightCalc = new WeightCalc(44)
  expect(newWeightCalc.getLayout()).toEqual(new Error("Weight too low."))
})

test('not divisible by five returns error', () => {
  let newWeightCalc = new WeightCalc(56);
  expect(newWeightCalc.getLayout()).toEqual(new Error("Weight not divisible by 5."))
  newWeightCalc = new WeightCalc(102)
  expect(newWeightCalc.getLayout()).toEqual(new Error("Weight not divisible by 5."))
})

test('bar weight returns [0]', () => {
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
  const newWeightCalc = new WeightCalc(barWeight + 180);
  expect(newWeightCalc.getLayout()).toEqual([45, 45])
})

test('target wight 230 returns [45,45,2.5]', () => {
  const newWeightCalc = new WeightCalc(230);
  expect(newWeightCalc.getLayout()).toEqual([45, 45, 2.5])
})

test('target wight 205 returns [45 , 35 ]', () => {
  const newWeightCalc = new WeightCalc(205);
  expect(newWeightCalc.getLayout()).toEqual([45, 35])
})

test('target wight 185 returns [45 , 25 ]', () => {
  const newWeightCalc = new WeightCalc(185);
  expect(newWeightCalc.getLayout()).toEqual([45, 25])
})

test('target wight 255 returns [45, 45, 10, 5]', () => {
  const newWeightCalc = new WeightCalc(255);
  expect(newWeightCalc.getLayout()).toEqual([45, 45, 10, 5])
})

test('target wight 270 returns [45, 45, 10, 10, 2.5]', () => {
  const newWeightCalc = new WeightCalc(270);
  expect(newWeightCalc.getLayout()).toEqual([45, 45, 10, 10, 2.5])
})
