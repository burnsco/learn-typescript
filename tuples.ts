// Tuples, static information record.

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type or interface ?
// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
