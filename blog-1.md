# Why `any` is Called a “Type Safety Hole” and Why `unknown` is Safer in TypeScript ?

## Introduction

TypeScript adds static typing to JavaScript, helping developers catch errors before running the application. However, some types provide less safety than others. Among them, `any` is considered dangerous because it completely disables TypeScript’s type-checking system.And By using `any` we can pass any type of value . If I can pass any value it's dosen't make any sence. That is why developers often call it a **“type safety hole.”**

To solve this issue, TypeScript introduced the `unknown` type, which is much safer for handling unpredictable or external data.`unknown` is a safer alternative for data whose type is not known yet. With `unknown`, TypeScript forces you to check the type before using the value.

When a variable uses `any`, TypeScript stops checking its type completely.

```ts
let data: any = "Hello";
data.toUpperCase();
```
When a variable uses `unknown`, TypeScript forces you to check the type before using the value.

```ts
let value: unknown = "Hello";
// Error
value.toUpperCase();
```
----

In this blog,What we will learn:
- Why `any` is unsafe
- Why `unknown` is safer


