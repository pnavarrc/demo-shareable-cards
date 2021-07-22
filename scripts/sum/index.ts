/**
 * sum - Calculates the sum of the given numbers.
 */
import yargs from "yargs";

async function main(numbers: number[]): Promise<void> {
  console.log(sum(numbers));
}

const add = (a: number, b: number): number => a + b;
const sum = (numbers: number[]) => numbers.reduce(add, 0);

if (require.main === module) {
  yargs(process.argv.slice(1))
    .scriptName("yarn run-script")
    .command(
      "* scripts/sum <numbers...>",
      "Calculates the sum of the given numbers",
      {},
      (argv) => main(argv.numbers as number[])
    )
    .help().argv;
}
