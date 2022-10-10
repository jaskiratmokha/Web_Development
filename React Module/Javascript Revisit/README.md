### There are a few JavaScript + ES6 concepts that you must be fully aware of before jumping on to React. 


1. [let vs const vs var](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
2. [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
3. [Export and Import](https://javascript.info/import-export)
4. [Classes in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
5. [Spread and Rest Operators](https://www.tutorialspoint.com/rest-and-spread-operators-in-javascript#:~:text=The%20rest%20operator%20(%E2%80%A6)%20allows,array%20into%20its%20individual%20elements.)
6. [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
7. [Reference and Primitive Types](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)
8. [Array Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


## Understanding let and const

let and const basically replace var . You use let instead of var and const instead of var if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore)."let" is used for assigning variable values and "const" is used for assigning constant value which we do not intend to change later.

## Arrow Functions in ES6

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword. 

```

function callMe(name) {
console.log(name);
}
```

Now the above statement can be written in the format of arrow functions 

```
const callMe=name=>name;
```

[Understanding more about arrow functions in ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)



