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

// Help with 'map' HOC

const newCarMakers = carMakers.map((car: string): string => {
  return car.toUpperCase();
});

console.log(newCarMakers);

// Flexible types
const importantDates2: (Date | string)[] = [new Date(), 'hello'];
console.log(importantDates2);
