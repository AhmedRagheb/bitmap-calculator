import { NearestPath } from "./nearestPath";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// example: [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
rl.question('enter the input: ', (input) => {
    const data = JSON.parse(input) as number[][];
    const nearestPath = new NearestPath();
    const output = nearestPath.calculate(data);

    console.log(output);

    process.exit(0);
});
