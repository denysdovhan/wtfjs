[![SWUbanner](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua/)

# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Patreon][patreon-image]][patreon-url]
[![Buy Me A Coffee][bmc-image]][bmc-url]

> A list of funny and tricky JavaScript examples

JavaScript is a great language. It has a simple syntax, large ecosystem and, what is most important, a great community.

At the same time, we all know that JavaScript is quite a funny language with tricky parts. Some of them can quickly turn our everyday job into hell, and some of them can make us laugh out loud.

The original idea for WTFJS belongs to [Brian Leroux](https://twitter.com/brianleroux). This list is highly inspired by his talk [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node Packaged Manuscript

You can install this handbook using `npm`. Just run:

```
$ npm install -g wtfjs
```

You should be able to run `wtfjs` at the command line now. This will open the manual in your selected `$PAGER`. Otherwise, you may continue reading on here.

The source is available here: <https://github.com/denysdovhan/wtfjs>

# Translations

Currently, there are these translations of **wtfjs**:

- [中文](./README-zh-cn.md)
- [हिंदी](./README-hi.md)
- [Français](./README-fr-fr.md)
- [Português do Brasil](./README-pt-br.md)
- [Polski](./README-pl-pl.md)
- [Italiano](./README-it-it.md)
- [Russian](https://habr.com/ru/company/mailru/blog/335292/) (on Habr.com)
- [한국어](./README-kr.md)

[**Help translating to your language**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/blob/master/CONTRIBUTING.md#translations

**Note:** Translations are maintained by their translators. They may not contain every example, and existing examples may be outdated.

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 Motivation](#-motivation)
- [✍🏻 Notation](#-notation)
- [👀 Examples](#-examples)
  - [`[]` is equal `![]`](#-is-equal-)
  - [`true` is not equal `![]`, but not equal `[]` too](#true-is-not-equal--but-not-equal--too)
  - [true is false](#true-is-false)
  - [baNaNa](#banana)
  - [`NaN` is not a `NaN`](#nan-is-not-a-nan)
  - [`Object.is()` and `===` weird cases](#objectis-and--weird-cases)
  - [It's a fail](#its-a-fail)
  - [`[]` is truthy, but not `true`](#-is-truthy-but-not-true)
  - [`null` is falsy, but not `false`](#null-is-falsy-but-not-false)
  - [`document.all` is an object, but it is undefined](#documentall-is-an-object-but-it-is-undefined)
  - [Minimal value is greater than zero](#minimal-value-is-greater-than-zero)
  - [function is not a function](#function-is-not-a-function)
  - [Adding arrays](#adding-arrays)
  - [Trailing commas in array](#trailing-commas-in-array)
  - [Array equality is a monster](#array-equality-is-a-monster)
  - [`undefined` and `Number`](#undefined-and-number)
  - [`parseInt` is a bad guy](#parseint-is-a-bad-guy)
  - [Math with `true` and `false`](#math-with-true-and-false)
  - [HTML comments are valid in JavaScript](#html-comments-are-valid-in-javascript)
  - [`NaN` is ~~not~~ a number](#nan-is-not-a-number)
  - [`[]` and `null` are objects](#-and-null-are-objects)
  - [Magically increasing numbers](#magically-increasing-numbers)
  - [Precision of `0.1 + 0.2`](#precision-of-01--02)
  - [Patching numbers](#patching-numbers)
  - [Comparison of three numbers](#comparison-of-three-numbers)
  - [Funny math](#funny-math)
  - [Addition of RegExps](#addition-of-regexps)
  - [Strings aren't instances of `String`](#strings-arent-instances-of-string)
  - [Calling functions with backticks](#calling-functions-with-backticks)
  - [Call call call](#call-call-call)
  - [A `constructor` property](#a-constructor-property)
  - [Object as a key of object's property](#object-as-a-key-of-objects-property)
  - [Accessing prototypes with `__proto__`](#accessing-prototypes-with-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Destructuring with default values](#destructuring-with-default-values)
  - [Dots and spreading](#dots-and-spreading)
  - [Labels](#labels)
  - [Nested labels](#nested-labels)
  - [Insidious `try..catch`](#insidious-trycatch)
  - [Is this multiple inheritance?](#is-this-multiple-inheritance)
  - [A generator which yields itself](#a-generator-which-yields-itself)
  - [A class of class](#a-class-of-class)
  - [Non-coercible objects](#non-coercible-objects)
  - [Tricky arrow functions](#tricky-arrow-functions)
  - [Arrow functions can not be a constructor](#arrow-functions-can-not-be-a-constructor)
  - [`arguments` and arrow functions](#arguments-and-arrow-functions)
  - [Tricky return](#tricky-return)
  - [Chaining assignments on object](#chaining-assignments-on-object)
  - [Accessing object properties with arrays](#accessing-object-properties-with-arrays)
  - [`Number.toFixed()` display different numbers](#numbertofixed-display-different-numbers)
  - [`Math.max()` less than `Math.min()`](#mathmax-less-than-mathmin)
  - [Comparing `null` to `0`](#comparing-null-to-0)
  - [Same variable redeclaration](#same-variable-redeclaration)
  - [Default behavior Array.prototype.sort()](#default-behavior-arrayprototypesort)
  - [resolve() won't return Promise instance](#resolve-wont-return-promise-instance)
  - [`{}{}` is undefined](#-is-undefined)
  - [`arguments` binding](#arguments-binding)
  - [An `alert` from hell](#an-alert-from-hell)
  - [An infinite timeout](#an-infinite-timeout)
  - [A `setTimeout` object](#a-settimeout-object)
  - [Double dot](#double-dot)
  - [Extra Newness](#extra-newness)
  - [Why you should use semicolons](#why-you-should-use-semicolons)
  - [Split a string by a space](#split-a-string-by-a-space)
  - [A stringified string](#a-stringified-string)
  - [Non-strict comparison of a number to `true`](#non-strict-comparison-of-a-number-to-true)
- [📚 Other resources](#-other-resources)
- [🤝 Supporting](#-supporting)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 Motivation

> Just for fun
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

The primary goal of this list is to collect some crazy examples and explain how they work, if possible. Just because it's fun to learn something that we didn't know before.

If you are a beginner, you can use these notes to get a deeper dive into JavaScript. I hope these notes will motivate you to spend more time reading the specification.

If you are a professional developer, you can consider these examples as a great reference for all of the quirks and unexpected edges of our beloved JavaScript.

In any case, just read this. You're probably going to find something new.

> **⚠️ Note:** If you enjoy reading this document, please, [consider supporting the author of this collection](#-supporting).

# ✍🏻 Notation

**`// ->`** is used to show the result of an expression. For example:

```js
1 + 1; // -> 2
```

**`// >`** means the result of `console.log` or another output. For example:

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** is just a comment used for explanations. Example:

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 Examples

## `[]` is equal `![]`

Array is equal not array:

```js
[] == ![]; // -> true
```

### 💡 Explanation:

The abstract equality operator converts both sides to numbers to compare them, and both sides become the number `0` for different reasons. Arrays are truthy, so on the right, the opposite of a truthy value is `false`, which is then coerced to `0`. On the left, however, an empty array is coerced to a number without becoming a boolean first, and empty arrays are coerced to `0`, despite being truthy.

Here is how this expression simplifies:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

See also [`[]` is truthy, but not `true`](#-is-truthy-but-not-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

## `true` is not equal `![]`, but not equal `[]` too

Array is not equal `true`, but not Array is not equal `true` too;
Array is equal `false`, not Array is equal `false` too:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 Explanation:

```js
true == []; // -> false
true == ![]; // -> false

// According to the specification

true == []; // -> false

toNumber(true); // -> 1
toNumber([]); // -> 0

1 == 0; // -> false

true == ![]; // -> false

![]; // -> false

true == false; // -> false
```

```js
false == []; // -> true
false == ![]; // -> true

// According to the specification

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> true

![]; // -> false

false == false; // -> true
```

- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

## true is false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 Explanation:

Consider this step-by-step:

```js
// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

This is an old-school joke in JavaScript, but remastered. Here's the original one:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 Explanation:

The expression is evaluated as `'foo' + (+'bar')`, which converts `'bar'` to not a number.

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` is not a `NaN`

```js
NaN === NaN; // -> false
```

### 💡 Explanation:

The specification strictly defines the logic behind this behavior:

> 1. If `Type(x)` is different from `Type(y)`, return **false**.
> 2. If `Type(x)` is Number, then
>    1. If `x` is **NaN**, return **false**.
>    2. If `y` is **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

Following the definition of `NaN` from the IEEE:

> Four mutually exclusive relations are possible: less than, equal, greater than, and unordered. The last case arises when at least one operand is NaN. Every NaN shall compare unordered with everything, including itself.
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## `Object.is()` and `===` weird cases

`Object.is()` determines if two values have the same value or not. It works similar to the `===` operator but there are a few weird cases:

```javascript
Object.is(NaN, NaN); // -> true
NaN === NaN; // -> false

Object.is(-0, 0); // -> false
-0 === 0; // -> true

Object.is(NaN, 0 / 0); // -> true
NaN === 0 / 0; // -> false
```

### 💡 Explanation:

In JavaScript lingo, `NaN` and `NaN` are the same value but they're not strictly equal. `NaN === NaN` being false is apparently due to historical reasons so it would probably be better to accept it as it is.

Similarly, `-0` and `0` are strictly equal, but they're not the same value.

For more details about `NaN === NaN`, see the above case.

- [Here are the TC39 specs about Object.is](https://tc39.es/ecma262/#sec-object.is)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) on MDN

## It's a fail

You would not believe, but …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 Explanation:

By breaking that mass of symbols into pieces, we notice that the following pattern occurs often:

```js
![] + []; // -> 'false'
![]; // -> false
```

So we try adding `[]` to `false`. But due to a number of internal function calls (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) we end up converting the right operand to a string:

```js
![] + [].toString(); // 'false'
```

Thinking of a string as an array we can access its first character via `[0]`:

```js
"false"[0]; // -> 'f'
```

The rest is obvious, but the `i` is tricky. The `i` in `fail` is grabbed by generating the string `'falseundefined'` and grabbing the element on index `['10']`.

More examples:

```js
+![]          // -> 0
+!![]         // -> 1
!![]          // -> true
![]           // -> false
[][[]]        // -> undefined
+!![] / +![]  // -> Infinity
[] + {}       // -> "[object Object]"
+{}           // -> NaN
```

- [Brainfuck beware: JavaScript is after you!](http://patriciopalladino.com/blog/2012/08/09/non-alphanumeric-javascript.html)
- [Writing a sentence without using the Alphabet](https://bluewings.github.io/en/writing-a-sentence-without-using-the-alphabet/#weird-javascript-generator) — generate any phrase using JavaScript

## `[]` is truthy, but not `true`

An array is a truthy value, however, it's not equal to `true`.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 Explanation:

Here are links to the corresponding sections in the ECMA-262 specification:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

## `null` is falsy, but not `false`

Despite the fact that `null` is a falsy value, it's not equal to `false`.

```js
!!null; // -> false
null == false; // -> false
```

At the same time, other falsy values, like `0` or `''` are equal to `false`.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 Explanation:

The explanation is the same as for previous example. Here's the corresponding link:

- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

## `document.all` is an object, but it is undefined

> ⚠️ This is part of the Browser API and won't work in a Node.js environment ⚠️

Despite the fact that `document.all` is an array-like object and it gives access to the DOM nodes in the page, it responds to the `typeof` function as `undefined`.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

At the same time, `document.all` is not equal to `undefined`.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

But at the same time:

```js
document.all == null; // -> true
```

### 💡 Explanation:

> `document.all` used to be a way to access DOM elements, in particular with old versions of IE. While it has never been a standard it was broadly used in the old age JS code. When the standard progressed with new APIs (such as `document.getElementById`) this API call became obsolete and the standard committee had to decide what to do with it. Because of its broad use they decided to keep the API but introduce a willful violation of the JavaScript specification.
> The reason why it responds to `false` when using the [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) with `undefined` while `true` when using the [Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison) is due to the willful violation of the specification that explicitly allows that.
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) at YDKJS - Types & Grammar

## Minimal value is greater than zero

`Number.MIN_VALUE` is the smallest number, which is greater than zero:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Explanation:

> `Number.MIN_VALUE` is `5e-324`, i.e. the smallest positive number that can be represented within float precision, i.e. that's as close as you can get to zero. It defines the best resolution that floats can give you.
>
> Now the overall smallest value is `Number.NEGATIVE_INFINITY` although it's not really numeric in a strict sense.
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## function is not a function

> ⚠️ A bug present in V8 v5.5 or lower (Node.js <=7) ⚠️

All of you know about the annoying _undefined is not a function_, but what about this?

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 Explanation:

This is not a part of the specification. It's just a bug that has now been fixed, so there shouldn't be a problem with it in the future.

### Super constructor null of Foo is not a constructor

It's continuation of story with previous bug in modern environment (tested with Chrome 71 and Node.js v11.8.0).

```js
class Foo extends null {}
new Foo() instanceof null;
// > TypeError: Super constructor null of Foo is not a constructor
```

### 💡 Explanation:

This is not a bug because:

```js
Object.getPrototypeOf(Foo.prototype); // -> null
```

If the class has no constructor the call from prototype chain. But in the parent has no constructor. Just in case, I’ll clarify that `null` is an object:

```js
typeof null === "object";
```

Therefore, you can inherit from it (although in the world of the OOP for such terms would have beaten me). So you can't call the null constructor. If you change this code:

```js
class Foo extends null {
  constructor() {
    console.log("something");
  }
}
```

You see the error:

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

And if you add `super`:

```js
class Foo extends null {
  constructor() {
    console.log(111);
    super();
  }
}
```

JS throws an error:

```
TypeError: Super constructor null of Foo is not a constructor
```

- [An explanation of this issue](https://github.com/denysdovhan/wtfjs/pull/102#discussion_r259143582) by [@geekjob](https://github.com/geekjob)

## Adding arrays

What if you try to add two arrays?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Explanation:

The concatenation happens. Step-by-step, it looks like this:

```js
[1, 2, 3] +
  [4, 5, 6][
    // call toString()
    (1, 2, 3)
  ].toString() +
  [4, 5, 6].toString();
// concatenation
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

## Trailing commas in array

You've created an array with 4 empty elements. Despite all, you'll get an array with three elements, because of trailing commas:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 Explanation:

> **Trailing commas** (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can simply add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) at MDN

## Array equality is a monster

Array equality is a monster in JS, as you can see below:

```js
[] == ''   // -> true
[] == 0    // -> true
[''] == '' // -> true
[0] == 0   // -> true
[0] == ''  // -> false
[''] == 0  // -> true

[null] == ''      // true
[null] == 0       // true
[undefined] == '' // true
[undefined] == 0  // true

[[]] == 0  // true
[[]] == '' // true

[[[[[[]]]]]] == '' // true
[[[[[[]]]]]] == 0  // true

[[[[[[ null ]]]]]] == 0  // true
[[[[[[ null ]]]]]] == '' // true

[[[[[[ undefined ]]]]]] == 0  // true
[[[[[[ undefined ]]]]]] == '' // true
```

### 💡 Explanation:

You should watch very carefully for the above examples! The behaviour is described in section [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison) of the specification.

## `undefined` and `Number`

If we don't pass any arguments into the `Number` constructor, we'll get `0`. The value `undefined` is assigned to formal arguments when there are no actual arguments, so you might expect that `Number` without arguments takes `undefined` as a value of its parameter. However, when we pass `undefined`, we will get `NaN`.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Explanation:

According to the specification:

1. If no arguments were passed to this function's invocation, let `n` be `+0`.
2. Else, let `n` be ? `ToNumber(value)`.
3. In case of `undefined`, `ToNumber(undefined)` should return `NaN`.

Here's the corresponding section:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` is a bad guy

`parseInt` is famous by its quirks:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 Explanation:** This happens because `parseInt` will continue parsing character-by-character until it hits a character it doesn't know. The `f` in `'f*ck'` is the hexadecimal digit `15`.

Parsing `Infinity` to integer is something…

```js
//
parseInt("Infinity", 10); // -> NaN
// ...
parseInt("Infinity", 18); // -> NaN...
parseInt("Infinity", 19); // -> 18
// ...
parseInt("Infinity", 23); // -> 18...
parseInt("Infinity", 24); // -> 151176378
// ...
parseInt("Infinity", 29); // -> 385849803
parseInt("Infinity", 30); // -> 13693557269
// ...
parseInt("Infinity", 34); // -> 28872273981
parseInt("Infinity", 35); // -> 1201203301724
parseInt("Infinity", 36); // -> 1461559270678...
parseInt("Infinity", 37); // -> NaN
```

Be careful with parsing `null` too:

```js
parseInt(null, 24); // -> 23
```

**💡 Explanation:**

> It's converting `null` to the string `"null"` and trying to convert it. For radixes 0 through 23, there are no numerals it can convert, so it returns NaN. At 24, `"n"`, the 14th letter, is added to the numeral system. At 31, `"u"`, the 21st letter, is added and the entire string can be decoded. At 37 on there is no longer any valid numeral set that can be generated and `NaN` is returned.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

Don't forget about octals:

```js
parseInt("06"); // 6
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5
```

**💡 Explanation:** If the input string begins with "0", radix is eight (octal) or 10 (decimal). Exactly which radix is chosen is implementation-dependent. ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet. For this reason always specify a radix when using `parseInt`.

`parseInt` always convert input to string:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

Be careful while parsing floating point values

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 Explanation:** `ParseInt` takes a string argument and returns an integer of the specified radix. `ParseInt` also strips anything after and including the first non-digit in the string parameter. `0.000001` is converted to a string `"0.000001"` and the `parseInt` returns `0`. When `0.0000001` is converted to a string it is treated as `"1e-7"` and hence `parseInt` returns `1`. `1/1999999` is interpreted as `5.00000250000125e-7` and `parseInt` returns `5`.

## Math with `true` and `false`

Let's do some math:

```js
true + true; // -> 2
(true + true) * (true + true) - true; // -> 3
```

Hmmm… 🤔

### 💡 Explanation:

We can coerce values to numbers with the `Number` constructor. It's quite obvious that `true` will be coerced to `1`:

```js
Number(true); // -> 1
```

The unary plus operator attempts to convert its value into a number. It can convert string representations of integers and floats, as well as the non-string values `true`, `false`, and `null`. If it cannot parse a particular value, it will evaluate to `NaN`. That means we can coerce `true` to `1` easier:

```js
+true; // -> 1
```

When you're performing addition or multiplication, the `ToNumber` method is invoked. According to the specification, this method returns:

> If `argument` is **true**, return **1**. If `argument` is **false**, return **+0**.

That's why we can add boolean values as regular numbers and get correct results.

Corresponding sections:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML comments are valid in JavaScript

You will be impressed, but `<!--` (which is known as HTML comment) is a valid comment in JavaScript.

```js
// valid comment
<!-- valid comment too
```

### 💡 Explanation:

Impressed? HTML-like comments were intended to allow browsers that didn't understand the `<script>` tag to degrade gracefully. These browsers, e.g. Netscape 1.x are no longer popular. So there is really no point in putting HTML comments in your script tags anymore.

Since Node.js is based on the V8 engine, HTML-like comments are supported by the Node.js runtime too. Moreover, they're a part of the specification:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` is ~~not~~ a number

Type of `NaN` is a `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 Explanation:

Explanations of how `typeof` and `instanceof` operators work:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` and `null` are objects

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false
```

### 💡 Explanation:

The behavior of `typeof` operator is defined in this section of the specification:

- [**13.5.3** The `typeof` Operator](https://262.ecma-international.org/12.0/#sec-typeof-operator)

According to the specification, the `typeof` operator returns a string according to [Table 37: `typeof` Operator Results](https://262.ecma-international.org/12.0/#table-typeof-operator-results). For `null`, ordinary, standard exotic and non-standard exotic objects, which do not implement `[[Call]]`, it returns the string `"object"`.

However, you can check the type of an object by using the `toString` method.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Magically increasing numbers

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 Explanation:

This is caused by IEEE 754-2008 standard for Binary Floating-Point Arithmetic. At this scale, it rounds to the nearest even number. Read more:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## Precision of `0.1 + 0.2`

A well-known joke. An addition of `0.1` and `0.2` is deadly precise:

```js
0.1 + 0.2; // -> 0.30000000000000004
0.1 + 0.2 === 0.3; // -> false
```

### 💡 Explanation:

The answer for the [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) question on StackOverflow:

> The constants `0.2` and `0.3` in your program will also be approximations to their true values. It happens that the closest `double` to `0.2` is larger than the rational number `0.2` but that the closest `double` to `0.3` is smaller than the rational number `0.3`. The sum of `0.1` and `0.2` winds up being larger than the rational number `0.3` and hence disagreeing with the constant in your code.

This problem is so known that there is even a website called [0.30000000000000004.com](http://0.30000000000000004.com/). It occurs in every language that uses floating-point math, not just JavaScript.

## Patching numbers

You can add your own methods to wrapper objects like `Number` or `String`.

```js
Number.prototype.isOne = function() {
  return Number(this) === 1;
};

(1.0).isOne(); // -> true
(1).isOne(); // -> true
(2.0).isOne(); // -> false
(7).isOne(); // -> false
```

### 💡 Explanation:

Obviously, you can extend the `Number` object like any other object in JavaScript. However, it's not recommended if the behavior of the defined method is not a part of the specification. Here is the list of `Number`'s properties:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparison of three numbers

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Explanation:

Why does this work that way? Well, the problem is in the first part of an expression. Here's how it works:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

We can fix this with _Greater than or equal operator (`>=`)_:

```js
3 > 2 >= 1; // true
```

Read more about Relational operators in the specification:

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Funny math

Often the results of arithmetic operations in JavaScript might be quite unexpected. Consider these examples:

```js
 3  - 1  // -> 2
 3  + 1  // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
[] + [] // -> ''
{} + [] // -> 0
[] + {} // -> '[object Object]'
{} + {} // -> '[object Object][object Object]'

'222' - -'111' // -> 333

[4] * [4]       // -> 16
[] * []         // -> 0
[4, 4] * [4, 4] // NaN
```

### 💡 Explanation:

What's happening in the first four examples? Here's a small table to understand addition in JavaScript:

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

What about other examples? A `ToPrimitive` and `ToString` methods are being implicitly called for `[]` and `{}` before addition. Read more about evaluation process in the specification:

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

Notably, `{} + []` here is the exception. The reason why it differs from `[] + {}` is that, without parenthesis, it is interpreted as a code block and then a unary +, converting `[]` into a number. It sees the following:

```js
{
  // a code block here
}
+[]; // -> 0
```

To get the same output as `[] + {}` we can wrap it in parenthesis.

```js
({} + []); // -> [object Object]
```

## Addition of RegExps

Did you know you can add numbers like this?

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 Explanation:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Strings aren't instances of `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Explanation:

The `String` constructor returns a string:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Let's try with a `new`:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

Object? What's that?

```js
new String("str"); // -> [String: 'str']
```

More information about the String constructor in the specification:

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Calling functions with backticks

Let's declare a function which logs all params into the console:

```js
function f(...args) {
  return args;
}
```

No doubt, you know you can call this function like this:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

But did you know you can call any function with backticks?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Explanation:

Well, this is not magic at all if you're familiar with _Tagged template literals_. In the example above, `f` function is a tag for template literal. Tags before template literal allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. Example:

```js
function template(strings, ...keys) {
  // do something with strings and keys…
}
```

This is the [magic behind](http://mxstbr.blog/2016/11/styled-components-magic-explained/) famous library called [💅 styled-components](https://www.styled-components.com/), which is popular in the React community.

Link to the specification:

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> Found by [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 Explanation:

Attention, it could break your mind! Try to reproduce this code in your head: we're applying the `call` method using the `apply` method. Read more:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## A `constructor` property

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Explanation:

Let's consider this example step-by-step:

```js
// Declare a new constant which is a string 'constructor'
const c = "constructor";

// c is a string
c; // -> 'constructor'

// Getting a constructor of string
c[c]; // -> [Function: String]

// Getting a constructor of constructor
c[c][c]; // -> [Function: Function]

// Call the Function constructor and pass
// the body of new function as an argument
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// And then call this anonymous function
// The result is console-logging a string 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?
```

An `Object.prototype.constructor` returns a reference to the `Object` constructor function that created the instance object. In case with strings it is `String`, in case with numbers it is `Number` and so on.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## Object as a key of object's property

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 Explanation:

Why does this work so? Here we're using a _Computed property name_. When you pass an object between those brackets, it coerces object to a string, so we get the property key `'[object Object]'` and the value `{}`.

We can make "brackets hell" like this:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

Read more about object literals here:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## Accessing prototypes with `__proto__`

As we know, primitives don't have prototypes. However, if we try to get a value of `__proto__` for primitives, we would get this:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 Explanation:

This happens because when something doesn't have a prototype, it will be wrapped into a wrapper object using the `ToObject` method. So, step-by-step:

```js
(1).__proto__; // -> [Number: 0]
(1).__proto__.__proto__; // -> {}
(1).__proto__.__proto__.__proto__; // -> null
```

Here is more information about `__proto__`:

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

What is the result of the expression below?

```js
`${{ Object }}`;
```

The answer is:

```js
// -> '[object Object]'
```

### 💡 Explanation:

We defined an object with a property `Object` using _Shorthand property notation_:

```js
{
  Object: Object;
}
```

Then we've passed this object to the template literal, so the `toString` method calls for that object. That's why we get the string `'[object Object]'`.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Destructuring with default values

Consider this example:

```js
let x,
  { x: y = 1 } = { x };
y;
```

The example above is a great task for an interview. What the value of `y`? The answer is:

```js
// -> 1
```

### 💡 Explanation:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

With the example above:

1. We declare `x` with no value, so it's `undefined`.
2. Then we pack the value of `x` into the object property `x`.
3. Then we extract the value of `x` using destructuring and want to assign it to `y`. If the value is not defined, then we're going to use `1` as the default value.
4. Return the value of `y`.

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Dots and spreading

Interesting examples could be composed with spreading of arrays. Consider this:

```js
[...[..."..."]].length; // -> 3
```

### 💡 Explanation:

Why `3`? When we use the [spread operator](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), the `@@iterator` method is called, and the returned iterator is used to obtain the values to be iterated. The default iterator for string spreads a string into characters. After spreading, we pack these characters into an array. Then we spread this array again and pack it back to an array.

A `'...'` string consists with three `.` characters, so the length of resulting array is `3`.

Now, step-by-step:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Obviously, we can spread and wrap the elements of an array as many times as we want:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## Labels

Not many programmers know about labels in JavaScript. They are kind of interesting:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 Explanation:

The labeled statement is used with `break` or `continue` statements. You can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

In the example above, we identify a label `foo`. After that `console.log('first');` executes and then we interrupt the execution.

Read more about labels in JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Nested labels

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Explanation:

Similar to previous examples, follow these links:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Insidious `try..catch`

What will this expression return? `2` or `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

The answer is `3`. Surprised?

### 💡 Explanation:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Is this multiple inheritance?

Take a look at the example below:

```js
new class F extends (String, Array) {}(); // -> F []
```

Is this a multiple inheritance? Nope.

### 💡 Explanation:

The interesting part is the value of the `extends` clause (`(String, Array)`). The grouping operator always returns its last argument, so `(String, Array)` is actually just `Array`. That means we've just created a class which extends `Array`.

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## A generator which yields itself

Consider this example of a generator which yields itself:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

As you can see, the returned value is an object with its `value` equal to `f`. In that case, we can do something like this:

```js
(function* f() {
  yield f;
})()
  .next()
  .value()
  .next()(
    // -> { value: [GeneratorFunction: f], done: false }

    // and again
    function* f() {
      yield f;
    }
  )()
  .next()
  .value()
  .next()
  .value()
  .next()(
    // -> { value: [GeneratorFunction: f], done: false }

    // and again
    function* f() {
      yield f;
    }
  )()
  .next()
  .value()
  .next()
  .value()
  .next()
  .value()
  .next();
// -> { value: [GeneratorFunction: f], done: false }

// and so on
// …
```

### 💡 Explanation:

To understand why this works that way, read these sections of the specification:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## A class of class

Consider this obfuscated syntax playing:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

It seems like we're declaring a class inside of class. Should be an error, however, we get the string `'object'`.

### 💡 Explanation:

Since ECMAScript 5 era, _keywords_ are allowed as _property names_. So think about it as this simple object example:

```js
const foo = {
  class: function() {}
};
```

And ES6 standardized shorthand method definitions. Also, classes can be anonymous. So if we drop `: function` part, we're going to get:

```js
class {
  class() {}
}
```

The result of a default class is always a simple object. And its typeof should return `'object'`.

Read more here:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Non-coercible objects

With well-known symbols, there's a way to get rid of type coercion. Take a look:

```js
function nonCoercible(val) {
  if (val == null) {
    throw TypeError("nonCoercible should not be called with null or undefined");
  }

  const res = Object(val);

  res[Symbol.toPrimitive] = () => {
    throw TypeError("Trying to coerce non-coercible object");
  };

  return res;
}
```

Now we can use this like this:

```js
// objects
const foo = nonCoercible({ foo: "foo" });

foo * 10; // -> TypeError: Trying to coerce non-coercible object
foo + "evil"; // -> TypeError: Trying to coerce non-coercible object

// strings
const bar = nonCoercible("bar");

bar + "1"; // -> TypeError: Trying to coerce non-coercible object
bar.toString() + 1; // -> bar1
bar === "bar"; // -> false
bar.toString() === "bar"; // -> true
bar == "bar"; // -> TypeError: Trying to coerce non-coercible object

// numbers
const baz = nonCoercible(1);

baz == 1; // -> TypeError: Trying to coerce non-coercible object
baz === 1; // -> false
baz.valueOf() === 1; // -> true
```

### 💡 Explanation:

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## Tricky arrow functions

Consider the example below:

```js
let f = () => 10;
f(); // -> 10
```

Okay, fine, but what about this:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 Explanation:

You might expect `{}` instead of `undefined`. This is because the curly braces are part of the syntax of the arrow functions, so `f` will return undefined. It is however possible to return the `{}` object directly from an arrow function, by enclosing the return value with brackets.

```js
let f = () => ({});
f(); // -> {}
```

## Arrow functions can not be a constructor

Consider the example below:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> f { 'a': 1 }
```

Now, try do to the same with an arrow function:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Explanation:

Arrow functions cannot be used as constructors and will throw an error when used with `new`. Because they have a lexical `this`, and do not have a `prototype` property, so it would not make much sense.

## `arguments` and arrow functions

Consider the example below:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

Now, try do to the same with an arrow function:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 Explanation:

Arrow functions are a lightweight version of regular functions with a focus on being short and lexical `this`. At the same time arrow functions do not provide a binding for the `arguments` object. As a valid alternative use the `rest parameters` to achieve the same result:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## Tricky return

`return` statement is also tricky. Consider this:

<!-- prettier-ignore-start -->
```js
(function() {
  return
  {
    b: 10;
  }
})(); // -> undefined
```
<!-- prettier-ignore-end -->

### 💡 Explanation:

`return` and the returned expression must be in the same line:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

This is because of a concept called Automatic Semicolon Insertion, which automagically inserts semicolons after most newlines. In the first example, there is a semicolon inserted between the `return` statement and the object literal, so the function returns `undefined` and the object literal is never evaluated.

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## Chaining assignments on object

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

From right to left, `{n: 2}` is assigned to foo, and the result of this assignment `{n: 2}` is assigned to foo.x, that's why bar is `{n: 1, x: {n: 2}}` as bar is a reference to foo. But why foo.x is undefined while bar.x is not ?

### 💡 Explanation:

Foo and bar references the same object `{n: 1}`, and lvalues are resolved before assignations. `foo = {n: 2}` is creating a new object, and so foo is updated to reference that new object. The trick here is foo in `foo.x = ...` as a lvalue was resolved beforehand and still reference the old `foo = {n: 1}` object and update it by adding the x value. After that chain assignments, bar still reference the old foo object, but foo reference the new `{n: 2}` object, where x is not existing.

It's equivalent to:

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x point to the address of the new foo object
// it's not equivalent to: bar.x = {n: 2}
```

## Accessing object properties with arrays

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1

// this also works with nested arrays
var nestedArray = [[[[[[[[[["property"]]]]]]]]]];
obj[nestedArray]; // -> 1
```

What about pseudo-multidimensional arrays?

```js
var map = {};
var x = 1;
var y = 2;
var z = 3;

map[[x, y, z]] = true;
map[[x + 10, y, z]] = true;

map["1,2,3"]; // -> true
map["11,2,3"]; // -> true
```

### 💡 Explanation:

The brackets `[]` operator converts the passed expression using `toString`. Converting a one-element array to a string is akin to converting the contained element to the string:

```js
["property"].toString(); // -> 'property'
```

## `Number.toFixed()` display different numbers

`Number.toFixed()` can behave a bit strange in different browsers. Check out this example:

```js
(0.7875).toFixed(3);
// Firefox: -> 0.787
// Chrome: -> 0.787
// IE11: -> 0.788
(0.7876).toFixed(3);
// Firefox: -> 0.788
// Chrome: -> 0.788
// IE11: -> 0.788
```

### 💡 Explanation:

While your first instinct may be that IE11 is correct and Firefox/Chrome are wrong, the reality is that Firefox/Chrome are more directly obeying standards for numbers (IEEE-754 Floating Point), while IE11 is minutely disobeying them in (what is probably) an effort to give clearer results.

You can see why this occurs with a few quick tests:

```js
// Confirm the odd result of rounding a 5 down
(0.7875).toFixed(3); // -> 0.787
// It looks like it's just a 5 when you expand to the
// limits of 64-bit (double-precision) float accuracy
(0.7875).toFixed(14); // -> 0.78750000000000
// But what if you go beyond the limit?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

Floating point numbers are not stored as a list of decimal digits internally, but through a more complicated methodology that produces tiny inaccuracies that are usually rounded away by toString and similar calls, but are actually present internally.

In this case, that "5" on the end was actually an extremely tiny fraction below a true 5. Rounding it at any reasonable length will render it as a 5... but it is actually not a 5 internally.

IE11, however, will report the value input with only zeros appended to the end even in the toFixed(20) case, as it seems to be forcibly rounding the value to reduce the troubles from hardware limits.

See for reference `NOTE 2` on the ECMA-262 definition for `toFixed`.

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` less than `Math.min()`

I find this example hilarious:

```js
Math.min() > Math.max(); // -> true
Math.min() < Math.max(); // -> false
```

### 💡 Explanation:

This is a simple one. Let's consider each part of this expression separately:

```js
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Infinity > -Infinity; // -> true
```

Why so? Well, `Math.max()` is not the same thing as `Number.MAX_VALUE`. It does not return the largest possible number.

`Math.max` takes arguments, tries to convert the to numbers, compares each one and then returns the largest remaining. If no arguments are given, the result is −∞. If any value is `NaN`, the result is `NaN`.

The opposite is happening for `Math.min`. `Math.min` returns ∞, if no arguments are given.

- [**15.8.2.11** Math.max](https://262.ecma-international.org/5.1/#sec-15.8.2.11)
- [**15.8.2.11** Math.min](https://262.ecma-international.org/5.1/#sec-15.8.2.12)
- [Why is `Math.max()` less than `Math.min()`?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## Comparing `null` to `0`

The following expressions seem to introduce a contradiction:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

How can `null` be neither equal to nor greater than `0`, if `null >= 0` is actually `true`? (This also works with less than in the same way.)

### 💡 Explanation:

The way these three expressions are evaluated are all different and are responsible for producing this unexpected behavior.

First, the abstract equality comparison `null == 0`. Normally, if this operator can't compare the values on either side properly, it converts both to numbers and compares the numbers. Then, you might expect the following behavior:

```js
// This is not what happens
(null == 0 + null) == +0;
0 == 0;
true;
```

However, according to a close reading of the spec, the number conversion doesn't actually happen on a side that is `null` or `undefined`. Therefore, if you have `null` on one side of the equal sign, the other side must be `null` or `undefined` for the expression to return `true`. Since this is not the case, `false` is returned.

Next, the relational comparison `null > 0`. The algorithm here, unlike that of the abstract equality operator, _will_ convert `null` to a number. Therefore, we get this behavior:

```js
null > 0
+null = +0
0 > 0
false
```

Finally, the relational comparison `null >= 0`. You could argue that this expression should be the result of `null > 0 || null == 0`; if this were the case, then the above results would mean that this would also be `false`. However, the `>=` operator in fact works in a very different way, which is basically to take the opposite of the `<` operator. Because our example with the greater than operator above also holds for the less than operator, that means this expression is actually evaluated like so:

```js
null >= 0;
!(null < 0);
!(+null < +0);
!(0 < 0);
!false;
true;
```

- [**7.2.12** Abstract Relational Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison)
- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)
- [An in-depth explanation](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274)

## Same variable redeclaration

JS allows to redeclare variables:

```js
a;
a;
// This is also valid
a, a;
```

Works also in strict mode:

```js
var a, a, a;
var a;
var a;
```

### 💡 Explanation:

All definitions are merged into one definition.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Default behavior Array.prototype.sort()

Imagine that you need to sort an array of numbers.

```js
[10, 1, 3].sort(); // -> [ 1, 10, 3 ]
```

### 💡 Explanation:

The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### Hint

Pass `compareFn` if you try to sort anything but string.

```js
[10, 1, 3].sort((a, b) => a - b); // -> [ 1, 3, 10 ]
```

## resolve() won't return Promise instance

```js
const theObject = {
  a: 7
};
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // Promise instance object

thePromise.then(value => {
  console.log(value === theObject); // > true
  console.log(value); // > { a: 7 }
});
```

The `value` which is resolved from `thePromise` is exactly `theObject`.

How about input another `Promise` into the `resolve` function?

```js
const theObject = new Promise((resolve, reject) => {
  resolve(7);
}); // Promise instance object
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // Promise instance object

thePromise.then(value => {
  console.log(value === theObject); // > false
  console.log(value); // > 7
});
```

### 💡 Explanation:

> This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

- [Promise.resolve() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

The specification is [ECMAScript 25.6.1.3.2 Promise Resolve Functions](https://tc39.es/ecma262/#sec-promise-resolve-functions). But it is not quite human-friendly.

## `{}{}` is undefined

Write them in the console. They will return the value defined in the last object.

```js
{}{}; // -> undefined
{}{}{}; // -> undefined
{}{}{}{}; // -> undefined
{foo: 'bar'}{}; // -> 'bar'
{}{foo: 'bar'}; // -> 'bar'
{}{foo: 'bar'}{}; // -> 'bar'
{a: 'b'}{c:' d'}{}; // -> 'd'
{a: 'b', c: 'd'}{}; // > SyntaxError: Unexpected token ':'
({}{}); // > SyntaxError: Unexpected token '{'
```

### 💡 Explanation:

When inspecting each `{}`, they returns undefined. If you inspect `{foo: 'bar'}{}`, you will find `{foo: 'bar'}` is `'bar'`.

There are two meanings for `{}`: an object or a block. For example, the `{}` in `() => {}` means block. So we need to use `() => ({})` to return an object.

Let's use `{foo: 'bar'}` as a block. Write this snippet in your console:

```js
if (true) {
  foo: "bar";
} // -> 'bar'
```

Surprisingly, it behaviors the same! You can guess here that `{foo: 'bar'}{}` is a block.

## `arguments` binding

Consider this function:

```js
function a(x) {
  arguments[0] = "hello";
  console.log(x);
}

a(); // > undefined
a(1); // > "hello"
```

### 💡 Explanation:

`arguments` is an Array-like object that contains the values of the arguments passed to that function. When no arguments are passed, then there's no `x` to override.

- [The arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) on MDN

## An `alert` from hell

This on is literally from hell:

```js
[666]["\155\141\160"]["\143\157\156\163\164\162\165\143\164\157\162"](
  "\141\154\145\162\164(666)"
)(666); // alert(666)
```

### 💡 Explanation:

This one is based on octal escape sequences and multiple strings.

Any character with a character code lower than 256 (i.e. any character in the extended ASCII range) can be escaped using its octal-encoded character code, prefixed with `\`. An example above is basically and `alert` ecoded by octal escape sequances.

- [Martin Kleppe tweet about it](https://twitter.com/aemkei/status/897172907222237185)
- [JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes#octal)
- [Multi-Line JavaScript Strings](https://davidwalsh.name/multiline-javascript-strings)

## An infinite timeout

Guess what would happen if we set an infinite timeout?

```js
setTimeout(() => console.log("called"), Infinity); // -> <timeoutId>
// > 'called'
```

It will executed immediately instead of infinity delay.

### 💡 Explanation:

Usually, runtime stores the delay as a 32-bit signed integer internally. This causes an integer overflow, resulting in the timeout being executed immediately.

For example, in Node.js we will get this warning:

```
(node:1731) TimeoutOverflowWarning: Infinity does not fit into a 32-bit signed integer.
Timeout duration was set to 1.
(Use `node --trace-warnings ...` to show where the warning was created)
```

- [WindowOrWorkerGlobalScope.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) on MDN
- [Node.js Documentation on Timers](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args)
- [Timers](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html) on W3C

## A `setTimeout` object

Guess what would happen if we set an callback that's not a function to `setTimeout`?

```js
setTimeout(123, 100); // -> <timeoutId>
// > 'called'
```

This is fine.

```js
setTimeout('{a: 1}', 100); // -> <timeoutId>
// > 'called'
```

This is also fine.

```js
setTimeout({a: 1}, 100); // -> <timeoutId>
// > 'Uncaught SyntaxError: Unexpected identifier               setTimeout (async) (anonymous) @ VM__:1'
```

This throws an **SyntaxError**.

Note that this can easily happen if your function returns an object and you call it here instead of passing it! What if the content - policy is set to `self`?

```js
setTimeout(123, 100); // -> <timeoutId>
// > console.error("[Report Only] Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'report-sample' 'self' ")
```

The console refuses to run it at all!

### 💡 Explanation:

`WindowOrWorkerGlobalScope.setTimeout()` can be called with `code` as first argument, which will be passed on to `eval`, which is bad. Eval will coerce her input to String, and evaluate what is produced, so Objects becomes `'[object Object]'` which has hmmm ... an `'Unexpected identifier'`!

- [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) on MDN (don't use this)
- [WindowOrWorkerGlobalScope.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) on MDN
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
- [Timers](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html) on W3C

## Double dot

Let's try to coerce a number to a string:

```js
27.toString() // > Uncaught SyntaxError: Invalid or unexpected token
```

Maybe we should try with two dots?

```js
27..toString(); // -> '27'
```

But why doesn't first example work?

### 💡 Explanation:

It's just a language grammar limitation.

The `.` character presents an ambiguity. It can be understood to be the member operator, or a decimal, depending on its placement.

The specification's interpretation of the `.` character in that particular position is that it will be a decimal. This is defined by the numeric literal syntax of ECMAScript.

You must always use parenthesis or an addition dot to make such expression valid.

```js
(27).toString(); // -> '27'
// or
27..toString(); // -> '27'
```

- [Usage of toString in JavaScript](https://stackoverflow.com/questions/6853865/usage-of-tostring-in-javascript/6853910#6853910) on StackOverflow
- [Why does 10..toString() work, but 10.toString() does not?](https://stackoverflow.com/questions/13149282/why-does-10-tostring-work-but-10-tostring-does-not/13149301#13149301)

## Extra Newness

I present this as an oddity for your amusement.

```js
class Foo extends Function {
  constructor(val) {
    super();
    this.prototype.val = val;
  }
}

new new Foo(":D")().val; // -> ':D'
```

### 💡 Explanation:

Constructors in JavaScript are just functions with some special treatment. By extending Function using the class syntax you create a class that, when instantiated, is now a function, which you can then additionally instantiate.

While not exhaustively tested, I believe the last statement can be analyzed thus:

```js
new new Foo(":D")().val(new newFooInstance()).val;
veryNewFooInstance.val;
// -> ':D'
```

As a tiny addendum, doing `new Function('return "bar";')` of course creates a function with the body `return "bar";`. Since `super()` in the constructor of our `Foo` class is calling `Function`'s constructor, it should come as no surprise now to see that we can additionally manipulate things in there.

```js
class Foo extends Function {
  constructor(val) {
    super(`
      this.val = arguments[0];
    `);
    this.prototype.val = val;
  }
}

var foo = new new Foo(":D")("D:");
foo.val; // -> 'D:'
delete foo.val; // remove the instance prop 'val', deferring back to the prototype's 'val'.
foo.val; // -> ':D'
```

- [Class Extends Function: Extra Newness](https://github.com/denysdovhan/wtfjs/issues/78)

## Why you should use semicolons

Writing some standard JavaScript… and then BOOM!

```js
class SomeClass {
  ["array"] = []
  ["string"] = "str"
}

new SomeClass().array; // -> 'str'
```

What the …?

### 💡 Explanation:

Once again, this is all thanks to the Automatic Semicolon Insertion.

An example above is basically the same as:

```js
class SomeClass {
  ["array"] = ([]["string"] = "str");
}
```

You basically assign a string `str` into an `array` property.

- [An original tweet with an example](https://twitter.com/SeaRyanC/status/1148726605222535168) by Ryan Cavanaugh
- [TC39 meeting when they debated about it](https://github.com/tc39/notes/blob/master/meetings/2017-09/sept-26.md)

## Split a string by a space

Have you ever tried to split a string by a space?

```js
"".split(""); // -> []
// but…
"".split(" "); // -> [""]
```

### 💡 Explanation:

This is expected behaviour. Its responsibility is to divide the input string every time a separator occurs in that input string. When you pass in an empty string it'll never find a separator and thus return that string.

Let's quote the specification:

> The substrings are determined by searching from left to right for occurrences of `separator`; these occurrences are not part of any String in the returned array, but serve to divide up the String value.

- [**22.1.3.21** String.prototype.split](https://tc39.es/ecma262/#sec-string.prototype.split)
- [An original tween with an example](https://twitter.com/SeaRyanC/status/1331656278104440833) by Ryan Cavanaugh
- [A tween with an explanation](https://twitter.com/kl13nt/status/1331742810932916227?s=20) by Nabil Tharwat

## A stringified string

This caused a bug that I've been solving for a few days:

```js
JSON.stringify("production") === "production"; // -> false
```

### 💡 Explanation:

Let's see what `JSON.stringify` is returning:

```js
JSON.stringify("production"); // -> '"production"'
```

It is actually a stringified string, so it's true:

```js
'"production"' === "production"; // -> false
```

- [ECMA-404 The JSON Data Interchange Standard.](https://www.json.org/json-en.html)

## Non-strict comparison of a number to `true`

```js
1 == true; // -> true
// but…
Boolean(1.1); // -> true
1.1 == true; // -> false
```

### 💡 Explanation:

According to the specification:

> The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:
>
> 4. If `Type(x)` is Number and `Type(y)` is String, return the result of the comparison `x == ! ToNumber(y)`.

So this comparison is performed like this:

```js
1 == true;
1 == Number(true);
1 == 1; // -> true
// but…
1.1 == true;
1.1 == Number(true);
1.1 == 1; // -> false
```

- [**7.2.15** Abstract Equality Comparison](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

# 📚 Other resources

- [wtfjs.com](http://wtfjs.com/) — a collection of those very special irregularities, inconsistencies and just plain painfully unintuitive moments for the language of the web.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — A lightning talk by Gary Bernhardt from CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons talk for Forward 2 attempts to “pull out the crazy” from JavaScript. He wants to help you produce cleaner, more elegant, more readable code, then inspire people to contribute to the open source community.
- [Zeros in JavaScript](http://zero.milosz.ca/) — a comparison table of `==`, `===`, `+` and `*` in JavaScript.

# 🤝 Supporting

Hi! I work on this project in my spare time, in addition to my primary job. I hope you enjoy reading it. If you do, please, consider supporting me 🙏.

Every single donation is important. Your donation is gonna make a clear statement: My work is valued.

**🙏 Thank you for your support! 🙏**

| Service          |                     Link                     |                                                                   Action                                                                   |
| ---------------- | :------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| **Patreon**      |        [Become a patron][patreon-url]        | <a href="https://patreon.com/denysdovhan"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="120px"></a> |
| **BuyMeACoffee** |     [Buy me a cup of ☕️ or 🥤][bmc-url]     |    <a href="https://buymeacoffee.com/denysdovhan"><img src="https://cdn.buymeacoffee.com/buttons/default-black.png" width="120px"></a>     |
| **Bitcoin**      |     `1EJsKs6rPsqa7QLoVLpe3wgcdL9Q8WmDxE`     |      <img src="https://user-images.githubusercontent.com/3459374/107130426-0ae4f800-68d6-11eb-9b86-15bf33467615.png" width="120px"/>       |
| **Ethereum**     | `0x6aF39C917359897ae6969Ad682C14110afe1a0a1` |      <img src="https://user-images.githubusercontent.com/3459374/107130370-55b24000-68d5-11eb-93f5-075355c7fcd4.png" width="120px"/>       |

> **⚠️ Note:** I live in Ukraine and services like PayPal and Stripe don't work with Ukrainian bank accounts. This means there's no way for me to set up GitHub Sponsors, OpenCollective, or services relied on them. Sorry, those are the only ways you can support me for now.

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
[patreon-url]: https://patreon.com/denysdovhan
[patreon-image]: https://img.shields.io/badge/support-patreon-F96854.svg?style=flat-square
[bmc-url]: https://patreon.com/denysdovhan
[bmc-image]: https://img.shields.io/badge/support-buymeacoffee-222222.svg?style=flat-square
