interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2002,
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken: ${this.broken}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
