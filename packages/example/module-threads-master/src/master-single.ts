import { Worker as AdditionWorker } from "@sterblue/example-module-threads-worker";

// https://github.com/andywer/threads.js/issues/303
import { spawn, Worker, Thread, ModuleThread } from "threads";

/**
 * Start a worker
 * @param options
 */
export const startWorkerSingle = async ({
  workerPath = "../../module-threads-worker/lib/index.node.js"
} = {}): Promise<ModuleThread<AdditionWorker>> => {
  return await spawn<AdditionWorker>(new Worker(workerPath));
};

/**
 * Stop a worker
 * @param worker
 */
export const stopWorkerSingle = async (
  worker: ModuleThread<AdditionWorker>
): Promise<void> => {
  await Thread.terminate(worker);
  return;
};

/**
 * Perform an operation using the worker
 * @param pool
 * @param a
 * @param b
 */
export const addInWorkerSingle = (
  worker: ModuleThread<AdditionWorker>
) => async (
  ...args: Parameters<AdditionWorker["add"]>
): Promise<ReturnType<AdditionWorker["add"]>> => {
  return await worker.add(...args);
};
