import { startWorkerPool, stopWorkerPool, addInWorkerPool } from "..";

let workerPool;

beforeAll(async () => {
  try {
    workerPool = await startWorkerPool({ poolSize: 2 });
  } catch (error) {
    console.log("beforeAllerror");
    console.log(error);
  } finally {
    // console.log("beforeAllworkerPool");
    // console.log(workerPool);
  }

  return;
});

afterAll(async () => {
  try {
    // console.log("afterAllworkerPool");
    // console.log(workerPool);
    await stopWorkerPool(workerPool);
  } catch (error) {
    console.log("afterAllerror");
    console.log(error);
  }
  return;
});

// describe("Worker pool stuff", () => {
test("Module Worker Thread Master node pool", async () => {
  // console.log("testworkerPool");
  // console.log(workerPool);
  const add = addInWorkerPool(workerPool);
  expect(await add(1, 2)).toEqual(3);
});
// });
