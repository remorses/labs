import { floatInRange } from "@sterblue/example-module";

const a = "Coucou";

console.log(a + floatInRange()(0, 10));

const serve = async () => {
  let i = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log(i);
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
    i++;
  }
};

serve();
