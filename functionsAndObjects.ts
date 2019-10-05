// Type Annotations + Type Inference with Objects and Functions

const add = (a: number, b: number): number => {
  return a + b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({
  date,
  weather
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)

const user = {
  name: 'Corey',
  age: 33,
  sex: 'Male'
}

const logUser = ({
  name,
  age,
  sex
}: {
  name: string
  age: number
  sex: string
}): void => {
  console.log(`
  name: ${name}
  age:  ${age}
  sex:  ${sex}
  `)
}

logUser(user)

// Objects
