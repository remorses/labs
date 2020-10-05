import { startWorkerSingle, stopWorkerSingle, addInWorkerSingle } from "..";

let worker;

beforeAll(async () => {
  try {
    worker = await startWorkerSingle({
      workerPath: "../../module-threads-worker/lib/index.web.js"
    });
  } catch (error) {
    console.log("beforeAllerror");
    console.log(error);
  } finally {
    // console.log("beforeAllworker");
    // console.log(worker);
  }

  return;
});

afterAll(async () => {
  try {
    // console.log("afterAllworker");
    // console.log(worker);
    await stopWorkerSingle(worker);
  } catch (error) {
    console.log("afterAllerror");
    console.log(error);
  }
  return;
});

// describe("Worker pool stuff", () => {
test("Module Worker Thread Master web single", async () => {
  // console.log("testworker");
  // console.log(worker);
  const add = addInWorkerSingle(worker);
  expect(await add(1, 2)).toEqual(3);
});
// });
