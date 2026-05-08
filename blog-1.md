*** Why is any labeled a "type safety hole
In TypeScript, any is called a type safety hole because it disables TypeScript’s type checking. Once a value is typed as any, you can do anything with it, and TypeScript will not warn you about possible mistakes.

***Why unknown is Safer

unknown is a safer alternative for data whose type is not known yet.

With unknown, TypeScript forces you to check the type before using the value.