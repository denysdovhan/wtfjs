# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> Lista zabawnych i trudnych przykładów JavaScript

JavaScript to świetny język. Ma prostą składnię, duży ekosystem i, co najważniejsze, wspaniałą społeczność.

Jednocześnie wszyscy wiemy, że JavaScript jest dość zabawnym językiem z trudnymi częściami. Niektóre z nich mogą szybko zamienić naszą codzienną pracę w piekło, a niektóre mogą rozśmieszyć nas na głos.

Oryginalny pomysł na WTFJS należy do [Brian Leroux](https://twitter.com/brianleroux). Ta lista jest bardzo zainspirowana jego przemową
 [**“WTFJS”** na dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node Packaged Manuscript

Możesz zainstalować ten podręcznik za pomocą `npm`. Po prostu uruchom:

```
$ npm install -g wtfjs
```

Powinieneś być teraz w stanie uruchomić `wtfjs` w linii poleceń. Spowoduje to otwarcie instrukcji w wybranym `$PAGER`. W przeciwnym razie możesz kontynuować czytanie tutaj.

Źródło jest dostępne tutaj: <https://github.com/denysdovhan/wtfjs>

# Tłumaczenia

Obecnie są następujące tłumaczenia **wtfjs**:

- [中文版](./README-zh-cn.md)
- [Français](./README-fr-fr.md)
- [Polski](./README-pl-pl.md)

[**Poproś o kolejne tłumaczenie**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Spis treści

- [💪🏻 Motywacja](#-motivation)
- [✍🏻 Notacja](#-notation)
- [👀 Przykłady](#-examples)
  - [`[]` is equal `![]`](#-is-equal-)
  - [`true` is not equal `![]`, but not equal `[]` too](#true-is-not-equal--but-not-equal--too)
  - [true is false](#true-is-false)
  - [baNaNa](#banana)
  - [`NaN` is not a `NaN`](#nan-is-not-a-nan)
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
  - [Null and Relational Operators](#null-and-relational-operators)
  - [`Number.toFixed()` display different numbers](#numbertofixed-display-different-numbers)
  - [`Math.max()` less than `Math.min()`](#mathmax-less-than-mathmin)
  - [Comparing `null` to `0`](#comparing-null-to-0)
  - [Same variable redeclaration](#same-variable-redeclaration)
  - [Default behavior Array.prototype.sort()](#default-behavior-arrayprototypesort)
- [📚 Other resources](#-other-resources)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 Motywacja

> Dla zabawy
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

Głównym celem tej listy jest zebranie szalonych przykładów i wyjaśnienie, w jaki sposób działają, jeśli to możliwe. Tylko dlatego, że fajnie jest nauczyć się czegoś, czego wcześniej nie znaliśmy.

Jeśli jesteś początkujący, możesz skorzystać z tych notatek, aby głębiej zagłębić się w JavaScript. Mam nadzieję, że te notatki zmotywują cię do spędzenia więcej czasu na czytaniu specyfikacji.

Jeśli jesteś profesjonalnym programistą, możesz rozważyć te przykłady jako świetne źródło informacji o wszystkich dziwactwach i nieoczekiwanych krawędziach naszego ukochanego JavaScript.

W każdym razie po prostu przeczytaj to. Prawdopodobnie znajdziesz coś nowego.

# ✍🏻 Notacja

**`// ->`** służy do wyświetlenia wyniku wyrażenia. Na przykład:

```js
1 + 1; // -> 2
```

**`// >`** oznacza wynik `console.log` lub wyświetlenie innego wyniku. Na przykład:

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** jest tylko komentarzem używanym w celu wyjaśnienia. Przykład:

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 Przykłady

## `[]` is equal `![]`

Tablica jest równa zanegowanej tablicy:

```js
[] == ![]; // -> true
```

### 💡 Wytłumaczenie:

Abstrakcyjny operator równości przekształca obie strony na liczby, aby je porównać, a obie strony stają się liczbą `0` z różnych powodów. Tablice są prawdziwe, więc po prawej stronie przeciwieństwem prawdziwej wartości jest `false`, który jest następnie wymuszany na `0`. Po lewej jednak pusta tablica jest wymuszana na liczbę, nie będąc najpierw wartością logiczną, a puste tablice są wymuszane na `0`, mimo że są prawdziwe.

Oto jak to wyrażenie upraszcza:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

Zobacz też [`[]` is truthy, but not `true`](#-is-truthy-but-not-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` nie jest równe `![]`, ale też nie równe `[]`

Tablica nie jest równa `true`, ale nie Tablica nie jest równa `true` również;
Tablica jest równa `false`, nie Tablica jest równa `false` również:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 Wytłumaczenie:

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

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## prawda to fałsz

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 Wytłumaczenie:

Rozważ to krok po kroku:

```js
// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

This is an old-school joke in JavaScript, but remastered. Here's the original one:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 Wytłumaczenie:

Wyrażenie jest oceniane jako `'foo' + (+'bar')`, które konwertuje `'bar'` nie na liczbę.

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` nie jest `NaN`

```js
NaN === NaN; // -> false
```

### 💡 Wytłumaczenie:

Specyfikacja ściśle określa logikę tego zachowania:

> 1. Jeśli `Type(x)` jest różny od `Type(y)`, zwraca **false**.
> 2. Jeśli `Type(x)` jest Number, wtedy
>    1. Jeśli `x` jest **NaN**, zwraca **false**.
>    2. Jeśli `y` jest **NaN**, zwraca **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

Zgodnie z definicją `NaN` z IEEE:

> Możliwe są cztery wzajemnie wykluczające się relacje: mniejszy, równy, większy niż i nieuporządkowany. Ostatni przypadek powstaje, gdy co najmniej jednym operandem jest NaN. Każdy NaN porównuje się nieuporządkowany ze wszystkim, w tym samym sobą.
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## To jest fail

Nie uwierzyłbyś, ale …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 Wytłumaczenie:

Po rozbiciu masy symboli na części zauważamy, że często występuje następujący wzór:

```js
![] + []; // -> 'false'
![]; // -> false
```

Więc próbujemy dodać `[]` do `false`. Ale z powodu wielu wywołań funkcji wewnętrznych (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) w końcu konwertujemy odpowiedni operand na ciąg:

```js
![] + [].toString(); // 'false'
```

Myśląc o łańcuchu jako tablicy, możemy uzyskać dostęp do jego pierwszego znaku za pośrednictwem `[0]`:

```js
"false"[0]; // -> 'f'
```

Reszta jest oczywista, ale `i` jest podchwytliwe. `i` w `fail` jest pobierany przez generowanie ciągu `'falseundefined'` i łapanie elementu na indeks `['10']`

## `[]` jest prawdziwe, ale nie `true`

Tablica jest prawdziwą wartością, jednak nie jest równa `true`.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 Wytłumaczenie:

Oto linki do odpowiednich sekcji specyfikacji ECMA-262:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` jest fałszywe, ale nie `false`

Pomimo faktu, że`null` jest wartością fałszywą, nie jest równa `false`.

```js
!!null; // -> false
null == false; // -> false
```

W tym samym czasie inne wartości fałszywe, takie jak `0` lub `''` są równe do `false`.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 Wytłumaczenie:

Wytłumaczenie jest takie samo jak w poprzednim przykładzie. Oto odpowiedni link:

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` jest obiektem, ale jest undefined

> ⚠️ Jest to część interfejsu API przeglądarki i nie będzie działać w środowisku Node.js ⚠️

Pomimo faktu, że `document.all` jest obiektem tablicowym i daje dostęp do węzłów DOM na stronie, odpowiada na funkcję `typeof` jako `undefined`.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

W tym samym czasie, `document.all` nie jest równe `undefined`.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

Ale w tym samym czasie:

```js
document.all == null; // -> true
```

### 💡 Wytłumaczenie:

> `document.all` used to be a way to access DOM elements, in particular with old versions of IE. While it has never been a standard it was broadly used in the old age JS code. When the standard progressed with new APIs (such as `document.getElementById`) this API call became obsolete and the standard committee had to decide what to do with it. Because of its broad use they decided to keep the API but introduce a willful violation of the JavaScript specification.
> The reason why it responds to `false` when using the [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) with `undefined` while `true` when using the [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) is due to the willful violation of the specification that explicitly allows that.
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) at YDKJS - Types & Grammar

## Minimal value is greater than zero

`Number.MIN_VALUE` is the smallest number, which is greater than zero:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

This is not a part of the specification. It's just a bug that has now been fixed, so there shouldn't be a problem with it in the future.

## Adding arrays

What if you try to add two arrays?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

You should watch very carefully for the above examples! The behaviour is described in section [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) of the specification.

## `undefined` and `Number`

If we don't pass any arguments into the `Number` constructor, we'll get `0`. The value `undefined` is assigned to formal arguments when there are no actual arguments, so you might expect that `Number` without arguments takes `undefined` as a value of its parameter. However, when we pass `undefined`, we will get `NaN`.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Wytłumaczenie:

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

**💡 Wytłumaczenie:** This happens because `parseInt` will continue parsing character-by-character until it hits a character it doesn't know. The `f` in `'f*ck'` is the hexadecimal digit `15`.

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

**💡 Wytłumaczenie:**

> It's converting `null` to the string `"null"` and trying to convert it. For radixes 0 through 23, there are no numerals it can convert, so it returns NaN. At 24, `"n"`, the 14th letter, is added to the numeral system. At 31, `"u"`, the 21st letter, is added and the entire string can be decoded. At 37 on there is no longer any valid numeral set that can be generated and `NaN` is returned.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

Don't forget about octals:

```js
parseInt("06"); // 6
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5
```

**💡 Wytłumaczenie:** If the input string begins with "0", radix is eight (octal) or 10 (decimal). Exactly which radix is chosen is implementation-dependent. ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet. For this reason always specify a radix when using `parseInt`.

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

**💡 Wytłumaczenie:** `ParseInt` takes a string argument and returns an integer of the specified radix. `ParseInt` also strips anything after and including the first non-digit in the string parameter. `0.000001` is converted to a string `"0.000001"` and the `parseInt` returns `0`. When `0.0000001` is converted to a string it is treated as `"1e-7"` and hence `parseInt` returns `1`. `1/1999999` is interpreted as `5.00000250000125e-7` and `parseInt` returns `5`.

## Math with `true` and `false`

Let's do some math:

```js
true +
  true(
    // -> 2
    true + true
  ) *
    (true + true) -
  true; // -> 3
```

Hmmm… 🤔

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

Impressed? HTML-like comments were intended to allow browsers that didn't understand the `<script>` tag to degrade gracefully. These browsers, e.g. Netscape 1.x are no longer popular. So there is really no point in putting HTML comments in your script tags anymore.

Since Node.js is based on the V8 engine, HTML-like comments are supported by the Node.js runtime too. Moreover, they're a part of the specification:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` is ~~not~~ a number

Type of `NaN` is a `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 Wytłumaczenie:

Wytłumaczenies of how `typeof` and `instanceof` operators work:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` and `null` are objects

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false
```

### 💡 Wytłumaczenie:

The behavior of `typeof` operator is defined in this section of the specification:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

According to the specification, the `typeof` operator returns a string according to [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). For `null`, ordinary, standard exotic and non-standard exotic objects, which do not implement `[[Call]]`, it returns the string `"object"`.

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

### 💡 Wytłumaczenie:

This is caused by IEEE 754-2008 standard for Binary Floating-Point Arithmetic. At this scale, it rounds to the nearest even number. Read more:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## Precision of `0.1 + 0.2`

A well-known joke. An addition of `0.1` and `0.2` is deadly precise:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 Wytłumaczenie:

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
(2.0)
  .isOne()(
    // -> false
    7
  )
  .isOne(); // -> false
```

### 💡 Wytłumaczenie:

Obviously, you can extend the `Number` object like any other object in JavaScript. However, it's not recommended if the behavior of the defined method is not a part of the specification. Here is the list of `Number`'s properties:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparison of three numbers

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Strings aren't instances of `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

Attention, it could break your mind! Try to reproduce this code in your head: we're applying the `call` method using the `apply` method. Read more:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## A `constructor` property

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

This happens because when something doesn't have a prototype, it will be wrapped into a wrapper object using the `ToObject` method. So, step-by-step:

```js
(1)
  .__proto__(
    // -> [Number: 0]
    1
  )
  .__proto__.__proto__(
    // -> {}
    1
  ).__proto__.__proto__.__proto__; // -> null
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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

The labeled statement is used with `break` or `continue` statements. You can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

In the example above, we identify a label `foo`. After that `console.log('first');` executes and then we interrupt the execution.

Read more about labels in JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Nested labels

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Is this multiple inheritance?

Take a look at the example below:

```js
new class F extends (String, Array) {}(); // -> F []
```

Is this a multiple inheritance? Nope.

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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
new f(); // -> { 'a': 1 }
```

Now, try do to the same with an arrow function:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Wytłumaczenie:

Arrow functions cannot be used as constructors and will throw an error when used with new. Because has a lexical `this`, and do not have a `prototype` property, so it would not make much sense.

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

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

### 💡 Wytłumaczenie:

The brackets `[]` operator converts the passed expression using `toString`. Converting a one-element array to a string is akin to converting the contained element to the string:

```js
["property"].toString(); // -> 'property'
```

## Null and Relational Operators

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 Wytłumaczenie:

Long story short, if `null` is less than `0` is `false`, then `null >= 0` is `true`. Read in-depth Wytłumaczenie for this [here](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

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

### 💡 Wytłumaczenie:

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

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 Wytłumaczenie:

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## Comparing `null` to `0`

The following expressions seem to introduce a contradiction:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

How can `null` be neither equal to nor greater than `0`, if `null >= 0` is actually `true`? (This also works with less than in the same way.)

### 💡 Wytłumaczenie:

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
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

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

### 💡 Wytłumaczenie:

All definitions are merged into one definition.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Default behavior Array.prototype.sort()

Imagine that you need to sort an array of numbers.

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 Wytłumaczenie:

The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### Wskazówka

Przekaż `comparefn` jeśli spróbujesz posortować cokolwiek poza ciągiem znaków.

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

# 📚 Inne materiały

- [wtfjs.com](http://wtfjs.com/) — zbiór tych bardzo wyjątkowych nieprawidłowości, niespójności i po prostu bolesnie nieintuicyjnych momentów dla języka webowego.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — Lightning talk od Gary Bernhardt z CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons mówi dla Forward 2 o próbach "wyciągnięcia szaleństwa" z JavaScript. Chce pomóc ci w tworzeniu czystszego, bardziej eleganckiego, bardziej czytelnego kodu, a następnie zainspirować ludzi do współpracy w społeczności open source.

# 🎓 Licencja

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square

Wersja polska od @[mbiesiad](https://github.com/mbiesiad)
