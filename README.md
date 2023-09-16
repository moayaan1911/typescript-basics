<!-- @format -->

# TypeScript Crash Course

This repository contains a TypeScript crash course, complete with code snippets and detailed explanations for each major code block. The comments within the code have been used as breakers to provide comprehensive insights into TypeScript concepts.

## Components

### Basic Data Types

- TypeScript allows you to define variables with specific data types like `number`, `string`, `boolean`, and `any`.
- Example:
  ```typescript
  let num: number = 69;
  let username: string = 'moayaan.eth';
  let isRight: boolean = true;
  let x: any = 'Ayaan';
  ```

### Arrays

- Arrays can contain various data types or specific types.
- Example:
  ```typescript
  let arr: any[] = [1, 'ayaan', true];
  let ids: number[] = [1, 2, 3, 4, 5];
  ```

### Tuple

- Tuples are arrays with a fixed size and defined types for each element.
- Example:
  ```typescript
  let tupleExample: [string, boolean, number] = ['ayaan', true, 1];
  ```

### Tuple Array

- An array of tuples with defined types for each element.
- Example:
  ```typescript
  let tupleArrayExample: [number, string][] = [
    [1, 'ayaan'],
    [2, 'rehan'],
    [3, 'saud'],
  ];
  ```

### Union

- Union types allow variables to have multiple types.
- Example:
  ```typescript
  let uniqueIds: string | number = 22;
  ```

### Enums

- Enums define named constants with associated values.
- Example:
  ```typescript
  enum Direction {
    North = 1,
    South = 2,
    East = 3,
    West = 4,
  }
  ```

### Objects

- Custom types can be defined using objects.
- Example:
  ```typescript
  type User = {
    id: number;
    name: string;
    isAdult: boolean;
    status: any;
  };
  ```

### Type Assertion

- Type assertion specifies a variable's type explicitly.
- Example:
  ```typescript
  let cid: any = 1;
  const cidAsNumber = cid as number;
  ```

### Functions

- Functions in TypeScript can specify argument and return types.
- Example:
  ```typescript
  function addTwoNumbers(x: number, y: number): number {
    return x + y;
  }
  ```

### Interfaces vs. Type

- Both interfaces and types can define custom structures.
- Example:

  ```typescript
  interface UserInterface {
    userId: number;
    userName: string;
  }

  type Point = string | number;
  ```

### Classes

- TypeScript supports classes with constructors and methods.
- Example:
  ```typescript
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
  ```

### Subclasses

- Subclasses can inherit properties and methods from parent classes.
- Example:
  ```typescript
  class Employee extends Company {
    position: string;
    constructor(id: number, name: string, position: string) {
      super(id, name);
      this.position = position;
    }
  }
  ```

### Generics

- Generics enable writing reusable code for different data types.
- Example:
  ```typescript
  function getArray<GenericType>(items: GenericType[]): GenericType[] {
    return new Array().concat(items);
  }
  ```

## Resources

Explore these additional resources to deepen your understanding of TypeScript:

1. [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
2. [TypeScript Playground (Online Editor)](https://www.typescriptlang.org/play)
3. [TypeScript GitHub Repository](https://github.com/microsoft/TypeScript)
4. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
5. [TypeScript Deep Dive (Book)](https://basarat.gitbook.io/typescript/)
6. [TypeScript Design Patterns](https://refactoring.guru/design-patterns/typescript)

# About the Developer

Hello everyone, myself **Mohammad Ayaan Siddiqui** from India. I am a Full Stack WEB3 developer and a **DECENTRALIZATION MAXI**. Currently working as TECHNICAL CO-FOUNDER in a web3 startup based in Netherlands.

<p align="center">
<img src="./public/profile.jpg" alt="profile" style="height: 400px; width:500px;"/>
</p>

If you are interested in either of the topics or building in similar skills, connect with me below:-

1.  ![Alt text](./public/taplink.png 'Taplink') [My Taplink Dashboard](https://moayaan.taplink.ws/)

2.  ![Alt text](./public/linktree.png 'linktree') [My Linktree with ALL SOCIALS](https://linktr.ee/ayaaneth)
3.  ![Alt text](./public/github.png 'github') [Connect on Github](https://github.com/moayaan1911)
4.  ![Alt text](./public/linkedin.png 'linkedin') [Connect on Linkedin](www.linkedin.com/in/ayaaneth)
5.  ![Alt text](./public/hashnode.png 'dev') [Connect on Hashnode](https://moayaan.hashnode.dev/)
6.  ![Alt text](./public/twitter.png 'twitter') [Connect on Twitter](https://www.twitter.com/usdisshitcoin)
7.  ![Alt text](./public/telegram.png 'telegram') [Connect on Telegram](https://t.me/usdisshitcoin)
8.  ![Alt text](./public/dev.png 'dev') [Connect on dev.to](https://dev.to/moayaan1911)
