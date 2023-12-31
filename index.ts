import { default as solution } from "./solutions/solution18";

// let's initialise this here.
// const triangle: Array<Array<number>> = [
//     [3], [7, 4], [2, 4, 6], [8, 5, 9, 3]
// ]; // this will result in a total sum of 23 (3 + 7 + 4 + 9)
const triangle: Array<Array<number>> = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];



const server = Bun.serve({
  port: 3000,
  async fetch(_req: Request) {
    // let's get the text file containing problem 67
    // local copy of https://projecteuler.net/resources/documents/0067_triangle.txt
    const problem67File = await Bun.file('./files/problem67.txt').text();

    // as the file is an array of arrays containing string variables we should parse the values as integers.
    // but we should trim it first (in case there's some unexpected new lines in the text file, etc.)
    const problem67Triangle = problem67File
      .trim()
      .split('\n')
      .map((v) => v.split(' ').map((u) => parseInt(u)));

    // we're only doing this to ensure that we've got a fresh array every time the
    // page reloads
    const clonedTriangle = JSON.parse(JSON.stringify(triangle));
    let body: string = `Solution 18: ${solution(Object.assign([], clonedTriangle))}\n`;
    body += `Solution 67: ${solution(problem67Triangle)}`
    return new Response(body);
  },
});

console.log(`Listening on localhost:${server.port}...\nHit Cmd+C or Ctrl+C to terminate this process.`);
