# How `Pick` and `Omit` Utility Types Keep TypeScript Code DRY?

## Introduction

In large TypeScript applications, developers often work with complex interfaces that contain many properties. However, different parts of an application may only need specific portions of that interface.

Creating separate interfaces manually for every situation can lead to:
- Code duplication
- Harder maintenance
- Inconsistent data structures

To solve this problem, TypeScript provides utility types like `Pick` and `Omit`.

These utility types help developers create specialized “slices” of a master interface while keeping the code **DRY (Don't Repeat Yourself).**

----

## Now imagine:

- The frontend only needs name and email
- The admin panel needs all fields except password

Without utility types, developers may create duplicate interfaces manually.

```ts
interface UserProfile {
  name: string;
  email: string;
}

interface PublicUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```
This creates duplication because the same properties are rewritten multiple times.

If the original User interface changes later, all duplicated interfaces must also be updated manually.

---

##    What is Pick?

Pick creates a new type by selecting specific properties from another interface.

Syntax:
```
Pick<Type, Keys>
```
Example:
```
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserProfile = Pick<User, "name" | "email">;
```
Now UserProfile automatically becomes:
```
{
  name: string;
  email: string;
}
```
No duplication is needed.

---
##    What is Omit?
Omit creates a new type by removing specific properties from an interface.
Syntax:
```
Omit<Type, Keys>
```
Example:
```
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type PublicUser = Omit<User, "password">;
```
Now PublicUser contains everything except password.
Now PublicUser automatically becomes:
```
{
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```

----

In this blog,What we will learn:
- What `Pick` and `Omit` are
- How they prevent duplication
- How they improve maintainability
- Real-world examples

