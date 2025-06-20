type User = { name: string; age: number };
const user: User = { name: "John", age: 30 };

interface Car { name: string; model: string; }
const car: Car = { name: "Toyota", model: "Corolla" };

class Monument { constructor(public name: string) {} }
const monument = new Monument("Eiffel Tower");

function printName(obj: User | Car | Monument) { /* stuff */ }

printName(user);
printName(car);
printName(monument);
