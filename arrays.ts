const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];
// Help with inference when extracting values
const car = carMakers[0];

// Flexible Types
const importantDates = [new Date(), '2030-10-10'];

const userInfo: object | string[] = [
  { id: 1, name: 'Corey', age: 33 },
  { id: 2, name: 'Bob', age: 56 },
  'Frank'
];

console.log(userInfo[2]);
