// built in objects

let now: Date = new Date();

// array
let colors: string[] = ['red', 'orange', 'blue'];

console.log(colors);

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'orange', 'purple'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
