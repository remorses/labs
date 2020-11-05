import {
  integerInRange,
  floatInRange,
  seedRandom,
  defaultRandom,
  restoreDefaultRandom,
  sampleSize
} from "..";

describe("Example Module", () => {
  test("defaultRandom", () => {
    expect(defaultRandom()).toEqual(0.26398943283481946);
    expect(defaultRandom()).toEqual(0.44794045441867464);
    expect(defaultRandom()).toEqual(0.08465391893711484);
    expect(defaultRandom()).toEqual(0.19413631882476726);
  });

  test("Random seeded", () => {
    const pseudoRandom2 = seedRandom("toto");
    expect(pseudoRandom2()).toEqual(0.5427858027544761);
    expect(pseudoRandom2()).toEqual(0.005490064861435284);
    expect(pseudoRandom2()).toEqual(0.12797497275202563);
    expect(pseudoRandom2()).toEqual(0.1708935153318045);
  });

  test("Float in range", () => {
    const floatRandom = floatInRange(defaultRandom);
    expect(floatRandom(0, 100)).toEqual(96.80034550885706);
    expect(floatRandom(0, -1000)).toEqual(-655.1697020750386);
  });

  test("Integer in range", () => {
    const integerRandom = integerInRange(defaultRandom);
    expect(integerRandom(0, 100)).toEqual(46);
    expect(integerRandom(0, -1000)).toEqual(-641);
    expect(integerRandom(0, 100)).toEqual(2);
  });

  test("sampleSize", () => {
    const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const arraySampler = sampleSize(defaultRandom);
    expect(arraySampler(3, array)).toEqual([8, 4, 0]);
    expect(arraySampler(6, array)).toEqual([10, 6, 5, 2, 1, 0]);
    expect(arraySampler(20, array)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  test("Determinism", () => {
    const pseudoRandom2 = seedRandom("toto");
    expect(pseudoRandom2()).toEqual(0.5427858027544761);
    expect(pseudoRandom2()).toEqual(0.005490064861435284);
    const pseudoRandom3 = seedRandom("toto");
    expect(pseudoRandom3()).toEqual(0.5427858027544761);
    expect(pseudoRandom3()).toEqual(0.005490064861435284);
    expect(pseudoRandom3()).toEqual(0.12797497275202563);
    expect(pseudoRandom2()).toEqual(0.12797497275202563);
  });

  test("Empy sring is deterministic", () => {
    const pseudoRandom2 = seedRandom("");
    expect(pseudoRandom2()).toEqual(0.23144008215179881);
    expect(pseudoRandom2()).toEqual(0.27404636548159655);
    const pseudoRandom3 = seedRandom("");
    expect(pseudoRandom3()).toEqual(0.23144008215179881);
    expect(pseudoRandom3()).toEqual(0.27404636548159655);
    expect(pseudoRandom3()).toEqual(0.7901279251811976);
    expect(pseudoRandom2()).toEqual(0.7901279251811976);
  });

  test("Random if no arguments", () => {
    const pseudoRandom2 = seedRandom();
    expect(pseudoRandom2()).not.toEqual(0.23144008215179881);
  });

  test("Restore random", () => {
    restoreDefaultRandom();
    const random0 = defaultRandom();
    defaultRandom();
    defaultRandom();
    defaultRandom();
    defaultRandom();
    restoreDefaultRandom();
    const random1 = defaultRandom();
    expect(random0).toEqual(random1);
  });
});
