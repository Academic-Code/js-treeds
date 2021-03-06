import {
  generateArrayOfString,
  generateSortedArrayOfNumber,
  generateSortedArrayOfNumbersFloating,
} from "../../__tests__/utils";
import { linearSearch } from "./index";

describe("Linear search tests", () => {
  it("should find the item in an array", () => {
    const array = generateSortedArrayOfNumber(30);
    const wanted = 2;
    const index = linearSearch<number>({ array, wanted });
    expect(index).toBe(2);
  });

  it("should return -1 when the item is not found", () => {
    const array = generateSortedArrayOfNumber(30);
    const wanted = 31;
    const index = linearSearch<number>({ array, wanted });
    expect(index).toBe(-1);
  });

  it("should return item index if item is found using negative numbers in array", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const wanted = -29;
    const index = linearSearch<number>({ array, wanted });
    expect(index).toBe(29);
  });

  it("should return -1 if item is not found using negative numbers in array", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const wanted = -31;
    const index = linearSearch<number>({ array, wanted });
    expect(index).toBe(-1);
  });

  it("should return item index if item is found using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 2.2;
    const index = linearSearch<number>({ array, wanted });
    expect(index).toBe(22);
  });

  it("should return -1 if item is not found using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 3.0;
    const index = linearSearch<number>({ array, wanted });
    expect(index).toBe(-1);
  });

  it("should return item index is found in array of strings", () => {
    const array = generateArrayOfString(30, "flag");
    const wanted = "flag20";
    const index = linearSearch<String>({ array, wanted });
    expect(index).toBe(20);
  });

  it("should return -1 if item is not found in array of strings", () => {
    const array = generateArrayOfString(30, "flag");
    const wanted = "flag31";
    const index = linearSearch<String>({ array, wanted });
    expect(index).toBe(-1);
  });
});
