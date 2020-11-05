// worker.ts
import { expose } from "threads/worker";

let currentCount = 0;

const worker = {
  /**
   * Example of a stateless function (most use cases)
   * @param a
   * @param b
   */
  add(a: number, b: number): number {
    return a + b;
  },
  /**
   * A stateful function that doesn't mutate state
   */
  getCount(): number {
    return currentCount;
  },
  /**
   * A stateful function that mutate state
   */
  increment(a: number): number {
    currentCount = currentCount + a;
    return currentCount;
  }
};

// const worker = (a: number, b: number): number => {
//   return a + b;
// };

export type Worker = typeof worker;

// https://threads.js.org/usage#expose
expose(worker);
