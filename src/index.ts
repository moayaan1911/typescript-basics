/** @format */

// Basic Data Types in typescript
let num: number = 69;

let username: string = 'moayaan.eth';

let isRight: boolean = true;

let x: any = 'Ayaan';

// Array in typescript
let arr: any[] = [1, 'ayaan', true];
let ids: number[] = [1, 2, 3, 4, 5];

// Tuple in typescript
let tupleExample: [string, boolean, number] = ['ayaan', true, 1];

// Tuple Array in typescript
let tupleArrayExample: [number, string][] = [
  [1, 'ayaan'],
  [2, 'rehan'],
  [3, 'saud'],
];

// Union
let uniqueIds: string | number = 22;

// Enums
enum Direction {
  North = 1,
  South = 2,
  East = 3,
  West = 4,
}

enum Cursor {
  Up = 'Up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

console.log(Direction.North, Cursor.Up);

// Objects in typescript
type User = {
  id: number;
  name: string;
  isAdult: boolean;
  status: any;
};

const user: User = {
  id: 1,
  name: 'ayaan',
  isAdult: true,
  status: 'moayaan.eth',
};
console.log(user);

// Type Assertion
let cid: any = 1;

const cidAsNumber = cid as number;

console.log(cidAsNumber);

// Functions
function addTwoNumbers(x: number, y: number): number {
  return x + y;
}
console.log(addTwoNumbers(2, 3));

function log(message: string | number): string | number {
  return message;
}

console.log(log('Hello'));
console.log(log(3));

// Interfaces
interface UserInterface {
  userId: number;
  userName: string;
}

const userDetails: UserInterface = {
  userId: 1,
  userName: 'ayaan',
};

// Interfaces vs Unions

type Point = string | number;
const point: Point = 1;

// interface Point2 = string | number {this will throw error}
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered with id ${this.id}`;
  }
}

const ayaan = new Person(1, 'ayaan');
const moayaan = new Person(2, 'moayaan.eth');
console.log(ayaan, moayaan);
console.log(ayaan.register());

// interface class
interface CompanyInterface {
  id: number;
  name: string;
  register(): string;
}
class Company implements CompanyInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered with id ${this.id}`;
  }
}

const huawei = new Company(1, 'huawei');
console.log(huawei.register());

// Subclasses

class Employee extends Company {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee(1, 'shawn', 'project manager');
console.log(emp1);
console.log(emp1.register());

// Generics

function getArray<GenericType>(items: GenericType[]): GenericType[] {
  return new Array().concat(items);
}

const numArray = getArray<number>([1, 2, 3, 4, 5]);
const strArray = getArray<string>(['a', 'b', 'c', 'd', 'e']);
console.log(numArray, strArray);
