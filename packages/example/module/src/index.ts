import seedrandom from "seedrandom";
import { range, map, reduce, slice, xor } from "lodash/fp";

const seedDefault = "sterblue is the best.";

/**
 * A function to generate a pseudo random number generator from a seed
 * @param   seed
 * @return a pseudo random number generator
 */
export const seedRandom = seedrandom;

/**
 * A default pseudo random generator
 */
export let defaultRandom = seedRandom(seedDefault);

/**
 * Restore the random default to initial
 */
export const restoreDefaultRandom = (): void => {
  defaultRandom = seedRandom(seedDefault);
};

/**
 * Create an integer in [[ min , max [[
 * From a float in [ 0, 1 [
 * @param   min
 * @param   max
 * @param   value a float in [ 0, 1 [
 * @return an integer in [[ min , max [[
 */
export function integerInRange(generator: () => number = defaultRandom) {
  return (min: number, max: number): number => {
    const value = generator();
    return Math.floor(value * (max - min) + min);
  };
}

/**
 * Create a float in [ min , max [
 * From a float in [ 0, 1 [
 * @param   min
 * @param   max
 * @param   value a float in [ 0, 1 [
 * @return a float in [ min , max [
 */
export function floatInRange(generator: () => number = defaultRandom) {
  return (min: number, max: number): number => {
    const value = generator();
    return value * (max - min) + min;
  };
}

/**
 * Extracts a sample from an array
 * @param size size of the sample to extract
 * @param array array to extract the sample from
 */
export function sampleSize<T>(
  generator: () => number = defaultRandom
): (size: number, array: Array<T>) => Array<T> {
  const integerInRangeGenerator = integerInRange(generator);
  return (size: number, array: Array<T>): Array<T> => {
    if (size >= array.length) {
      return array;
    } else {
      const indices = range(0, array.length);
      const indicesRemaining = reduce(
        (indicesRemaining /*, indexSample*/) => {
          const indexRandom = integerInRangeGenerator(
            0,
            indicesRemaining.length
          );
          return [
            ...slice(0, indexRandom, indicesRemaining),
            ...slice(indexRandom + 1, indicesRemaining.length, indicesRemaining)
          ];
        },
        indices,
        range(0, size)
      );
      return map(
        (index: number) => array[index],
        xor(indices, indicesRemaining)
      );
    }
  };
}
