import { Worker as AdditionWorker } from "@sterblue/example-module-threads-worker";

// https://github.com/andywer/threads.js/issues/303
import { spawn, Worker, Pool, ModuleThread } from "threads";

/**
 * Start a worker pool
 * @param options
 */
export const startWorkerPool = async ({
  poolSize = 8,
  workerPath = "../../module-threads-worker/lib/index.node.js"
} = {}): Promise<Pool<ModuleThread<AdditionWorker>>> => {
  return Pool(() => spawn<AdditionWorker>(new Worker(workerPath)), poolSize);
};

/**
 * Stop a worker pool
 * @param pool
 */
export const stopWorkerPool = async (
  pool: Pool<ModuleThread<AdditionWorker>>
): Promise<void> => {
  // await pool.completed();
  await pool.terminate();
  return;
};

/**
 * Perform an operation using the worker pool
 * @param pool
 * @param a
 * @param b
 */
export const addInWorkerPool = (
  pool: Pool<ModuleThread<AdditionWorker>>
) => async (
  ...args: Parameters<AdditionWorker["add"]>
): Promise<ReturnType<AdditionWorker["add"]>> => {
  return await pool.queue(async worker => {
    return await worker.add(...args);
  });
};
