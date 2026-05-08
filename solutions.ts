// Problem 1:
function filterEvenNumbers(arr: number[]){
    return arr.filter(num => num % 2 === 0)
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// Problem 2:
function reverseString(text: string){
    let reversed:string = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}
// console.log(reverseString("typescript"));

// Problem 3:
type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}
// console.log(checkType("Hello"));
// console.log(checkType(42));


// Problem 4:

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key] ;
};
// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));


// Problem 5:

interface Book {
  title: string;
  author: string;
  publishedYear: number; 
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead:  true
  };
}
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));

// Problem 6:

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails())

// Problem 7:
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => arr2.includes(num));
}
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));