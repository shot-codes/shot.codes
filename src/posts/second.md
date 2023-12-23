---
title: Second Post
description: This is the second post in my blog.
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---

## Markdown

Hey friends! 👋

```rust
use tonka::some::test::{something, somethinelse}
// Constants
const PI: f64 = 3.14159;
const MAX_COUNT: u32 = 100;

// Strings
let greeting = "Hello, ";
let name = "Bob";

// Function with Parameters
fn greet_person(name: &str) {
    println!("{}{}", greeting, name);
}

// Calling the function
greet_person(name);

// Struct
struct Rectangle {
    width: u32,
    height: u32,
}

// Implementation for Rectangle struct
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

// Creating an instance of Rectangle
let rect = Rectangle { width: 5, height: 10 };
let area = rect.area();
println!("Area of the rectangle: {}", area);
```

```ts
// this is a comment
// Constants
const PI: number = 3.14159;
const MAX_COUNT: number = 100;

// Strings
const greeting: string = 'Hello, ';
const name: string = 'Alice';

// Function with Parameters
function greetPerson(name: string): void {
	console.log(greeting + name);
}

// Calling the function
greetPerson(name);

// Interface
interface Shape {
	calculateArea(): number;
}

// Class implementing the Shape interface
class Circle implements Shape {
	constructor(public radius: number) {}

	calculateArea(): number {
		return PI * this.radius * this.radius;
	}
}

// Creating an instance of Circle
const circle = new Circle(5);
const area = circle.calculateArea();
console.log('Area of the circle:', area);
```

# First

hello there

- list item 1
- list item 2

- [x] checkbox

```rust
pub fn hello() -> {
  "shot.codes""
}
```

| Left | Center | Right |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |
