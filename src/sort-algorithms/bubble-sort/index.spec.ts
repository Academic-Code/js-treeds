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
import { bubbleSort } from "./index";

describe("Bubble sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(60);
    const sortedArray = generateSortedArrayOfNumber(60);

    bubbleSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("must return an array ordered from largest to smallest", () => {
    const array = generateSortedArrayOfNumber(60);
    const sortedArray = generateNotSortedArrayOfNumber(60);

    bubbleSort({ array, isDecreasing: false });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array contains negative numbers", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const sortedArray = generateNotSortedArrayOfNumber(30, true);

    bubbleSort({ array });
    expect(array).toEqual(sortedArray);
  });

  it("should return an ordered array when the array contains repeated elements", () => {
    const array = arrayNotOrdenatedWithRepeatedElements;
    const sortedArray = arrayOrdenatedWithRepeatedElements;

    bubbleSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array contains floating numbers", () => {
    const array = generateNotSortedArrayOfNumbersFloating(30);
    const sortedArray = generateSortedArrayOfNumbersFloating(30);

    bubbleSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted big array", () => {
    const array = generateNotSortedArrayOfNumber(1000);
    const sortedArray = generateSortedArrayOfNumber(1000);

    bubbleSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array constains generics values", () => {
    const array = genericArrayNotOrdenated;
    const sortedArray = genericArrayOrdenated;

    bubbleSort({ array });

    expect(array).toEqual(sortedArray);
  });
});
