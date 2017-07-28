# What the f*ck JavaScript?

> A list of funny and tricky examples of JavaScript.

JavaScript is a great language. It has a simple syntax, large ecosystem and, what is the most important, great community.

At the same time, all we know that JavaScript is a quite funny language with tricky parts. Some of them can quickly turn our everyday job into hell, some of them can make us laugh out loud.

The primary goal of this list is to collect some crazy examples and explain how they work, if possible.

## Table of contents

- foo
- bar

## Motivation

just for fun.

Interview questions.

## Notation

`// ->` is used to show the result of an expression. For example:

```js
1 + 1 // -> 2
```

`// >` means the result of `console.log` and other output. For example:

```js
console.log('hello, world!') // > hello, world!
```


### `[]` is truly, but not `true`

An array is a truthy value, however, it's not equal `true`.

```js
!![]       // -> true
[] == true // -> false
```

**Explanation:** TODO

### `null` is falsy, but not `false`

Despite the fact that `null` is falsy value, it's not equal `false`.

```js
!!null        // -> false
null == false // -> false
```

At the same time, other falsy values, like `0` or `''` are equal `false`.

```js
0 == false  // -> true
'' == false // -> true
```

**Explanation:** TODO

### `undefined` and `Number`

If we don't pass any argument into a `Number` constructor, we'll get `0`. `undefined` is a value assigned to formal arguments which there are no actual arguments, so you might expect that `Number` without arguments takes `undefined` as a value of its parameter. However, when we pass `undefined`, we will get `NaN`.

```js
Number()          // -> 0
Number(undefined) // -> NaN
```

**Explanation:** TODO

### Math with `true` and `false`

We can coerce values to numbers with `Number` constructor. It's quite obvious that `true` will be coerced to `1`:

```js
Number(true) // -> 1
```

The unary plus operator attempts to convert its value into a number. It can convert string representations of integers and floats, as well as the non-string values `true`, `false`, and `null`. If it cannot parse a particular value, it will evaluate to `NaN`. That means we can coerce `true` to `1` easier:

```js
+true // -> 1
```

Hmmm… 🤔 Then probably we can do some math with `true`:

```js
true + true // -> 2
(true + true) * (true + true) - true // -> 3
```

**Explanation:** TODO

### `<!--` is a valid comment

You will be impressed, but `<!--` (which is known as HTML comment) is a valid comment in JavaScript.

```js
// valid comment
<!-- valid comment too
```

**Explanation:** TODO

### `NaN` is ~~not~~ a number

Despite the fact that type of `NaN` is a `'number'`, `NaN` is not instance of number

```js
typeof NaN            // -> 'number'
NaN instanceof Number // -> false
```

**Explanation:** TODO

### `[]` and `null` are objects

```js
typeof []   // -> 'object'
typeof null // -> 'object'
```

**Explanation:** TODO. However, you can check this using `toString` method.

```js
Object.prototype.toString.call([])
// -> '[object Array]'

Object.prototype.toString.call(new Date)
// -> '[object Date]'

Object.prototype.toString.call(null)
// -> '[object Null]'
```

### Magicaly increasing numbers

```js
999999999999999  // -> 999999999999999
9999999999999999 // -> 10000000000000000
```

**Explanation:** TODO

### Precision of `0.1 + 0.2`

Well known joke from JavaScript. An addition of `0.1` and `0.2` is deadly precise:

```js
0.1 + 0.2 // -> 0.30000000000000004
```

**Explanation:** TODO

### Patching numbers

You can add own methods to wrapper objects like `Number` or `String`.

```js
Number.prototype.isOne = function () {
  return Number(this) === 1
}

1.0.isOne() // -> true
1..isOne()  // -> true
2.0.isOne() // -> false
(7).isOne() // -> false
```

However, it's not recommended if the behavior of defined method is not a part of the specification.

**Explanation:** TODO

### Comparation of there numbers

```js
1 < 2 < 3 // -> true
3 > 2 > 1 // -> false
```

**Explanation:** Why does this work that way? Well, the problem is in the first part of an expression. Here's how it works:

```js
1 < 2 < 3 // 1 < 2 -> true
true  < 3 // true -> 1
1     < 3 // -> true

3 > 2 > 1 // 3 > 2 -> true
true  > 1 // true -> 1
1     > 1 // -> false
```

We can fix this with _Greater than or equal operator (`>=`)_. TODO(add link to spec):

```js
3 > 2 >= 1 // true
```

### Funny addition

Often the results of an addition operation in JavaScript might be quite unexpectable. Consider these examples:

```js
 3  - 1    // -> 2
 3  + 1    // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
[] + [] // -> ''
{} + [] // -> 0
[] + {} // -> '[object Object]'
{} + {} // -> '[object Object][object Object]'
```

**Explanation:** What's happening in the first four examples? Here's a small table to understand addition in JavaScript:

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

What about the rest examples? A `toString` method is being implicitly called for `[]` and `{}` before addition. TODO

### Strings aren't instances of `String`

```js
'str' // -> 'str'
typeof 'str' // -> 'string'
'str' instanceof String // -> false
```

**Explanation:**

The `String` construnctor returns a string:

```js
typeof String('str')   // -> 'string'
String('str')          // -> 'str'
String('str') == 'str' // -> true
```

Let's try with a `new`:

```js
new String('str') == 'str' // -> true
typeof new String('str')   // -> 'object'
```

Object? What's that?

```js
new String('str') // -> [String: 'str']
```

### Calling functions with backticks

Let's declare a function which logs all params into the console:

```js
function f(...args) {
  return args
}
```

No doubt, you know you can call this function like this:

```js
f(1, 2, 3) // -> [ 1, 2, 3 ]
```

But did you know you can call any function with backticks?

```js
f`true is ${true}, false is ${false}, array is ${[1,2,3]}`
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

**Explanation:** Well, this is not magic at all if you're familiar with _Tagged template literals_ TODO(link to spec). In the example above, `f` function is a tag for template literal. Tags before template literal allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. Example:

```js
function template(strings, ...keys) {
  // do something with strings and keys…
}
```

This is the magic behind famous library called styled-components, which is popular in React-community.

### A `constructor` property

```js
const c = 'constructor'
c[c][c]('console.log("WTF?")')() // > WTF?
```

**Explanation:** Let's consider this example step-by-step:

```js
// Declare a new constant which is a string 'constructor'
const c = 'constructor'

// c is a string
c // -> 'constructor'

// Getting a constructor of string
c[c] // -> [Function: String]

// Getting a constructor of constructor
c[c][c] // -> [Function: Function]

// Call the Function constructor and pass
// the body of new function as an argument
c[c][c]('console.log("WTF?")') // -> [Function: anonymous]

// And then call this anonymous function
// The result is console-logging a string 'WTF'
c[c][c]('console.log("WTF?")')() // > WTF
```

### Object as a key of object's property

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

**Explanation:** Why does this work so? Here we're using a _Computed property name_ TODO(add link to spec). When you pass an object between those brackets, it coerces object to a string, so we get a property key `'[object Object]'` and value `{}`.

The same way we can make brackets hell like this:

```js
({[{}]:{[{}]:{}}})[{}][{}] // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

### Accessing prototypes with `__proto__`

As we know, primitives don't have prototypes. However, if we try to get a value of `__proto__` for primitives, we would get this:

```js
(1).__proto__.__proto__.__proto__ // -> null
```

**Explanation:** It happens because of when primitive doesn't have a prototype, it will be wrapped in a wrapper object. So, spet-by-step:

```js
(1).__proto__ // -> [Number: 0]
(1).__proto__.__proto__ // -> {}
(1).__proto__.__proto__.__proto__ // -> null
```

TODO(add more comprehensive explanation)

### ``` `${{Object}}` ```

What the result of the expression below?

```js
`${{Object}}`
```

The answer is:

```js
// -> '[object Object]'
```

**Explanation:** We defined an object with a property `Object` using _Shorthand property notation_ TODO(add link to spec). Then we've passed this object to the template literal, so the `toString` method calls for that object. That's why we get string `'[object Object]'`.

### Destructoring with default values

Consider this example:

```js
let x, { x: y = 1 } = { x }; y;
```

The example above is a great task for an interview. What the value of `y`? The answer is:

```js
// -> 1
```

**Explanation:** TODO

### Dots and spreading

Interesting examples could be composed with spreading of arrays. Consider this:

```js
[...[...'...']].lenght // -> 3
```

**Explanation:** Why `3`? When we use spread operator TODO(link to spec), the `@@iterator` method calls, and the returned iterator is used to obtain the values to be iterated. The default iterator for string spreads string by character. After spreading, we're packing this characters into an array. Then spreading this array again and packing back to the array.

A `'...'` string consists with three `.`, so the length of resulting array will be `3`.

Now, step-by-step:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Obviously, we can spread and wrap the elements of array as many times as we want:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

### Labels

Not so many programmers know about labels in JavaScript. They are kind of interesting:

```js
foo: {
  console.log('first');
  break foo;
  console.log('second');
}

// > first
// -> undefined
```

**Explanation:** The labeled statement is used with `break` or `continue` statements. You can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

In the example above, we identify a label `foo`. Then `console.log('first');` executes and then we interrupt execution.

### Nested labels

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

**Explanation:** TODO

### Insidious `try..catch`

What will this expression return? `2` or `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})()
```

The answer is `3`. Surprised?

**Explanation:** TODO