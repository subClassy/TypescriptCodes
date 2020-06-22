const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corola"], ["camaro"]];

// Help with inference when extracting values
const myCar = carMakers.pop();

// Prevent addition of incorrect values
// carMakers.push(3);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push("2020-10-10");
importantDates.push(new Date());
