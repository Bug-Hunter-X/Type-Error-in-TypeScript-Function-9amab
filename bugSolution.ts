function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMany(people: string[]): string {
  return people.map(person => greeter(person)).join('\n');
}

let user = ["Jane User", "John Smith"];
console.log(greetMany(user)); // This works correctly by iterating through the array.