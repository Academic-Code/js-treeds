import {
  arrayNotOrdenatedWithRepeatedElements,
  arrayOrdenatedWithRepeatedElements,
  generateNotSortedArrayOfNumber,
  generateNotSortedArrayOfNumbersFloating,
  generateSortedArrayOfNumber,
  generateSortedArrayOfNumbersFloating,
  genericArrayNotOrdenated,
  genericArrayOrdenated,
} from "../../__tests__/utils";
import { mergeSort } from "./index";

describe("Merge sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(80);
    const sortedArray = generateSortedArrayOfNumber(80);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array is already sorted", () => {
    const array = generateSortedArrayOfNumber(30);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(array);
  });

  it("should return sorted array when array is empty", () => {
    const array: number[] = [];

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual([]);
  });

  it("should return sorted array when array contains negative numbers", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const sortedArray = generateNotSortedArrayOfNumber(30, true);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return an ordered array when the array contains repeated elements", () => {
    const array = arrayNotOrdenatedWithRepeatedElements;
    const sortedArray = arrayOrdenatedWithRepeatedElements;

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted big array", () => {
    const array = generateNotSortedArrayOfNumber(20000);
    const sortedArray = generateSortedArrayOfNumber(20000);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array contains floating numbers", () => {
    const array = generateNotSortedArrayOfNumbersFloating(30);
    const sortedArray = generateSortedArrayOfNumbersFloating(30);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array constains generics values", () => {
    const array = genericArrayNotOrdenated;
    const sortedArray = genericArrayOrdenated;

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });
});
