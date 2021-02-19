# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

JavaScript เป็นภาษาที่ดีภาษานึง มีไวยากรณ์ง่ายๆ มี ecosystem ขนาดใหญ่ และสิ่งที่สำคัญที่สุดคือ community ที่ยอดเยี่ยม

ในเวลาเดียวกัน เรารู้ดีว่า JavaScript ที่ค่อนข้างตลกด้วยส่วนที่ยุ่งยาก บางคนสามารถเปลี่ยนงานประจำวันของเขาให้กลายเป็นนรกได้อย่างรวดเร็วและสามารถทำให้เราหัวเราะออกมาดัง ๆ ได้

The original idea เป็นของ [Brian Leroux](https://twitter.com/brianleroux) บทความนี้ได้รับรแรงบันดาลใจอย่างมากจากการ talk [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node Packaged Manuscript

You can install this handbook using `npm`. Just run:

```bash
npm install -g wtfjs
```

คุณควรจะเรียกใช้ "wtfjs" ที่บรรทัดคำสั่งได้แล้ว เพื่อเปิดคู่มือใน "$ PAGER" ที่คุณเลือก มิฉะนั้นคุณสามารถอ่านต่อได้ที่นี่

ดูแหล่งข้อมูลได้ที่นี่: <https://github.com/denysdovhan/wtfjs>

# การแปล

ปัจจุบันมีการแปล **wtfjs** เหล่านี้:

- [中文版] (./ README-zh-cn.md)
- [ฝรั่งเศส] (./ README-fr-fr.md)

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

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

# Motivation

> Just for fun
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

เป้าหมายหลักคือการรวบรวมตัวอย่างที่บ้าคลั่งและอธิบายวิธีการทำงานของพวกมัน, เท่าที่จะทำได้ เพราะว่ามันสนุกที่ได้เรียนรู้บางสิ่งที่เราไม่รู้มาก่อน

ถ้าคุณเป็นมือใหม่ คุณสามารถใช้บันทึกเหล่านี้เพื่อเจาะลึกเกี่ยวกับ ๋JavaScript ผมหวังว่าบันทึกเหล่านี้จะกระตุ้นให้คุณใช้เวลาอ่านข้อกำหนดมากขึ้น

หากคุณเป็นนักพัฒนามืออาชีพ คุณสามารถพิจารณาตัวอย่างเหล่านี้เป็นข้อมูลอ้างอิงที่ดีเยี่ยมสำหรับนิสัยใจคอและขอบที่ไม่คาดคิดของ JavaScript อันเป็นที่รักของเรา

ไม่ว่าในกรณีใดเพียงแค่อ่านสิ่งนี้ คุณอาจจะได้พบกับสิ่งใหม่ ๆ

# ✍🏻 Notation

**`// ->`** ใช้เพื่อแสดงผลลัพธ์ของนิพจน์ ตัวอย่างเช่น:

```js
1 + 1; // -> 2
```

**`//`** เป็นเพียงความคิดเห็นที่ใช้ในการอธิบาย ตัวอย่าง:

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 Example

## `[]` is equal `![]`

Array is equal not array:

```js
[] == ![]; // -> true
```

### 💡คำอธิบาย

ตัวดำเนินการ The abstract equality แปลงทั้งสองด้านเป็น numbers เพื่อเปรียบเทียบและทั้งสองข้างจะกลายเป็นเลข `0` ด้วยเหตุผลที่ต่างกัน
arrays มีค่าเป็น truthy ดังนั้นทางด้านขวา `!true` จะเป็น `false` แล้วถูกบังคับให้เป็น `0` อย่างไงก็ตาม ทางด้านซ้าย empty array จะถูกบังคับให้เป็นเลขโดยไม่ต้องเป็น boolean ก่อน

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

ดูเพิ่มเติม [`[]` is truthy, but not `true`](#-is-truthy-but-not-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` is not equal `![]`, but not equal `[]` too

Array ไม่เท่ากับ `true` แต่ not Array(![]) ไม่เท่ากับ `true` เช่นกัน Array มีค่าเท่ากับ `false` not Array(![]) มีค่าเท่ากับ `false` เช่นกัน

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 คำอธิบาย

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

## true is false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 คำอธิบาย

พิจารณาสิ่งนี้ทีละขั้นตอน:

```js
// true คือ 'truthy' และเป็นตัวแทนของค่า  1 (number), 'true'  ในรูปแบบ strinh คิอ NaN
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
// 'false' ไม่ใช้ค่า emptu string ดังนั้นจึงเป็น truthy
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

ผลลัพธ์การแปล
นี่เป็นเรื่องตลกสมัยก่อนใน JavaScript แต่ได้รับการรีมาสเตอร์ นี่คือต้นฉบับ:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

`'foo' + (+'bar')`, มันจะแปลง `'bar'` ซึ่งไม่ใช้ number. เลยได้ NaN ออกมาแทน

expression

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` is not a `NaN`

```js
NaN === NaN; // -> false
```

### 💡 คำอธิบาย

ข้อกำหนดกำหนดตรรกะที่อยู่เบื้องหลังพฤติกรรมนี้อย่างเคร่งครัด:

> 1. ถ้า `Type(x)` แตกต่างจาก `Type(y)`, return **false**.
> 2. ถ้า `Type(x)` คือ Number, then
>    1. ถ้า `x` เป็น **NaN**, return **false**.
>    2. ถ้า `y` เป็น **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

ตามคำจำกัดความของ "NaN" จาก IEEE:

> ความสัมพันธ์พิเศษซึ่งกันและกันเป็นไปได้สี่ประการ: น้อยกว่า(<),เท่ากับ(==),มากกว่า(>)และไม่เรียงลำดับ กรณีสุดท้ายเกิดขึ้นเมื่ออย่างน้อยหนึ่งตัวถูกดำเนินการคือ NaN ทุก NaN จะเปรียบเทียบไม่เรียงลำดับกับทุกสิ่งรวมทั้งตัวมันเองด้วย
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## It's a fail

You would not believe, but …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 คำอธิบาย

เราสังเกตเห็นว่ารูปแบบต่อไปนี้เกิดขึ้นบ่อยครั้ง:

```js
![] + []; // -> 'false'
![]; // -> false
```

เราจึงลองเพิ่ม `[]` เป็น `false` แต่เนื่องจากมีการเรียกใช้ฟังก์ชันภายในจำนวนมาก (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) เราจะแปลงตัวถูกดำเนินการทางขวาเป็นสตริง:

```js
![] + [].toString(); // 'false'
```

string ของ array ตัวแรกคือ `[0]` :

```js
"false"[0]; // -> 'f'
```

The rest is obvious, but the i is tricky. The i in fail is grabbed by generating the string 'falseundefined' and grabbing the element on index ['10']

## `[]` is truthy, but not `true`

array เป็นค่า `truthy` แต่ไม่เท่ากับ `true`

```js
!![]       // -> true
[] == true // -> false
```

### 💡 คำอธิบาย

นี่คือลิงค์ไปยังส่วนที่เกี่ยวข้องในข้อกำหนด ECMA-262:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` is falsy, but not `false`

แม้ว่า "null" จะเป็นค่า `falsy` แต่ก็ไม่เท่ากับ `false`

```js
!!null; // -> false
null == false; // -> false
```

ในขณะเดียวกันค่าเท็จอื่น ๆ เช่น `0` หรือ `''` จะเท่ากับ `false`

```js
0 == false; // -> true
"" == false; // -> true
```

คำอธิบายเหมือนกับตัวอย่างก่อนหน้านี้ นี่คือลิงค์ที่เกี่ยวข้อง:

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` is an object, but it is undefined

> ⚠️ This is part of the Browser API and won't work in a Node.js environment ⚠️

แม้ว่า `document.all` จะเป็น object ที่เหมือน array และให้การเข้าถึงโหนด DOM ใน page แต่ก็ตอบสนองต่อ function "typeof" เป็น `undefined`

ในขณะเดียวกัน "document.all" ไม่เท่ากับ `undefined`

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

แต่ในขณะเดียวกัน:

```js
document.all == null; // -> true
```

### 💡 คำอธิบาย

> "document.all`เคยเป็นวิธีเข้าถึงองค์ประกอบ DOM โดยเฉพาะอย่างยิ่งกับ IE เวอร์ชันเก่า แม้ว่าจะไม่เคยเป็นมาตรฐาน แต่ก็ใช้กันอย่างแพร่หลายในรหัส JS ยุคเก่า เมื่อมาตรฐานดำเนินไปด้วย API ใหม่ ๆ (เช่น "document.getElementById`) การเรียก API นี้ล้าสมัยและคณะกรรมการมาตรฐานต้องตัดสินใจว่าจะทำอย่างไรกับมัน เนื่องจากการใช้งานในวงกว้างพวกเขาจึงตัดสินใจที่จะเก็บ API ไว้ แต่นำเสนอการละเมิดข้อกำหนดจาวาสคริปต์โดยเจตนา
> เหตุผลที่ตอบสนองต่อ `false` เมื่อ [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) with `undefined` while `true` when using the [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) เกิดจากการจงใจละเมิดข้อกำหนดที่อนุญาตอย่างชัดเจนเกิดจากการจงใจละเมิดข้อกำหนดที่อนุญาตอย่างชัดเจน

## Minimal value is greater than zero

`Number.MIN_VALUE` คือตัวเลขที่น้อยที่สุดซึ่งมากกว่าศูนย์:

```js
Number.MIN_VALUE > 0; // -> true
```

> `Number.MIN_VALUE` คือ "5e-324" นั่นคือจำนวนบวกที่น้อยที่สุดที่สามารถแทนค่าได้ภายในความแม่นยำแบบ flota นั่นคือใกล้เคียงที่สุดเท่าที่คุณจะทำได้เป็นศูนย์ เป็นการกำหนดความละเอียดที่ดีที่สุดที่สามารถให้คุณได้
>
> ตอนนี้ค่าที่น้อยที่สุดโดยรวมคือ `Number.NEGATIVE_INFINITY` แม้ว่าจะไม่ใช่ตัวเลขในแง่ที่เข้มงวด
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## function is not a function

> ⚠️ A bug present in V8 v5.5 or lower (Node.js <=7) ⚠️

พวกคุณทุกคนรู้เกี่ยวกับ _undefined is not a function_ แล้วสิ่งนี้หล่ะ

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 คำอธิบาย

นี่ไม่ใช่ส่วนหนึ่งของข้อกำหนด เป็นเพียงข้อบกพร่องที่ได้รับการแก้ไขแล้วดังนั้นจึงไม่ควรมีปัญหาในอนาคต

## Adding arrays

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 คำอธิบาย

การต่อกันเกิดขึ้น ทีละขั้นตอนจะมีลักษณะดังนี้:

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

คุณได้สร้างอาร์เรย์ที่มีองค์ประกอบว่าง 4 elements อย่างไรก็ตามคุณจะได้อาร์เรย์ที่มี 3 elements เนื่องจากมีเครื่องหมายจุลภาคต่อท้าย:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 คำอธิบาย

> **Trailing commas** (บางครั้งเรียกว่า "final commas") จะมีประโยชน์เมื่อเพิ่มองค์ประกอบพารามิเตอร์หรือคุณสมบัติใหม่ให้กับโค้ด JavaScript หากคุณต้องการเพิ่มคุณสมบัติใหม่คุณสามารถเพิ่มบรรทัดใหม่ได้โดยไม่ต้องแก้ไขบรรทัดสุดท้ายก่อนหน้านี้หากบรรทัดนั้นใช้คอมมาต่อท้ายอยู่แล้ว สิ่งนี้ทำให้ความแตกต่างของการควบคุมเวอร์ชันสะอาดขึ้นและการแก้ไขโค้ดอาจจะยุ่งยากน้อยลง
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) at MDN

## Array equality is a monster

การเท่ากันกับของ array คือ monster in JS คุณสามารถดูได้ด้านล่างนี้:

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

### 💡 คำอธิบาย

คุณควรดูตัวอย่างข้างต้นอย่างระมัดระวัง! ลักษณะการทำงานได้อธิบายไว้ในหัวข้อ [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) of the specification. ของข้อกำหนด

## `undefined` and `Number`

หากเราไม่ส่ง arguments ใด ๆ ไปยังตัวสร้าง "Number" constructor เราจะได้ 0 `undefined` ถูกกำหนดให้เป็น formal arguments เมื่อไม่มี arguments ที่แท้จริง

ดังนั้นคุณอาจคาดหวังว่า "Number" ที่ไม่มีอาร์กิวเมนต์จะใช้ `undefined` เป็นค่าของพารามิเตอร์ อย่างไรก็ตามเมื่อเรา pass `undefined`, จะได้ `NaN`.

### 💡 คำอธิบาย

According to the specification:

<!-- 1. If no arguments were passed to this function's invocation, let `n` be `+0`.
2. Else, let `n` be ? `ToNumber(value)`.
3. In case of `undefined`, `ToNumber(undefined)` should return `NaN`. -->

1. หากไม่มีการส่งอาร์กิวเมนต์ไปยังการเรียกใช้ฟังก์ชันนี้ให้ `n` เป็น `+ 0`
2. Else, ให้ `n` เป็น ? `ToNumber(value)`.
3. กรณีของ `undefined`, `ToNumber(undefined)` ควรจะ return `NaN`.

นี่คือส่วนที่เกี่ยวข้อง:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` is a bad guy

"parseInt" มีชื่อเสียงจากนิสัยใจคอ:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡คำอธิบาย:** สิ่งนี้เกิดขึ้นเนื่องจาก "parseInt" จะยังคงแยกวิเคราะห์อักขระทีละอักขระจนกว่าจะพบอักขระที่ไม่รู้จัก `f` ใน `'f \* ck'` คือเลขฐานสิบหก" 15 "

การแปลง `Infinity` to integer is something…

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

ระวังการแปลงกับ `null`

```js
parseInt(null, 24); // -> 23
```

**💡 💡คำอธิบาย:**

> It's converting `null` to the string `"null"` and trying to convert it. For radixes 0 through 23, there are no numerals it can convert, so it returns NaN. At 24, `"n"`, the 14th letter, is added to the numeral system. At 31, `"u"`, the 21st letter, is added and the entire string can be decoded. At 37 on there is no longer any valid numeral set that can be generated and `NaN` is returned.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

Don't forget about octals:

```js
parseInt("06"); // 6
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5
```

**💡 Explanation:** ากสตริงอินพุตขึ้นต้นด้วย "0" เลขฐานแปด (ฐานแปด) หรือ 10 (ทศนิยม) รัศมีที่เลือกนั้นขึ้นอยู่กับการนำไปใช้งาน ECMAScript 5 ระบุว่ามีการใช้ 10 (ทศนิยม) แต่เบราว์เซอร์บางตัวยังไม่รองรับสิ่งนี้ ด้วยเหตุนี้จึงต้องระบุรัศมีเสมอเมื่อใช้ `parseInt`

"parseInt` แปลงอินพุตเป็นสตริงเสมอ:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

ระวังการแปลงแบบ floating point

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡คำอธิบาย:** `ParseInt` รับอาร์กิวเมนต์สตริงและส่งคืนจำนวนเต็มของรัศมีที่ระบุ นอกจากนี้ `ParseInt` ยังขีดทับสิ่งที่อยู่หลังและรวมถึงตัวเลขที่ไม่ใช่ตัวเลขแรกในพารามิเตอร์สตริงด้วย `0.000001` จะถูกแปลงเป็นสตริง `"0.000001"` และ `parseInt` จะส่งกลับ "0" เมื่อแปลง `0.0000001` เป็นสตริงจะถือว่าเป็น `"1e-7"` และด้วยเหตุนี้ `parseInt` จะคืนค่า "1" `1/1999999` ถูกตีความเป็น `5.00000250000125e-7` และ `parseInt` ส่งกลับ `5`

## Math with `true` and `false`

มาทำคณิตศาสตร์กันบ้าง:

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

### 💡 คำอธิบาย

เราสามารถบังคับค่าเป็นตัวเลขด้วยตัวสร้าง `Number` ค่อนข้างชัดเจนว่า `true` จะถูกบังคับให้เป็น `1`:

```js
Number(true); // -> 1
```

ตัวดำเนินการ unary plus พยายามแปลงค่าเป็นตัวเลข สามารถแปลงการแสดงสตริงของจำนวนเต็มและจำนวนทศนิยมรวมทั้งค่าที่ไม่ใช่สตริง `true`, `false` และ `null` หากไม่สามารถแยกวิเคราะห์ค่าใดค่าหนึ่งได้ค่านั้นจะประเมินเป็น `NaN` นั่นหมายความว่าเราสามารถบังคับให้ `true` เป็น `1` ได้ง่ายขึ้น:

```js
+true; // -> 1
```

เมื่อคุณทำการบวกหรือคูณเมธอด "ToNumber" จะถูกเรียกใช้ ตามข้อกำหนดวิธีนี้จะคืนค่า:

> ถ้า "อาร์กิวเมนต์" เป็น **true** ให้ส่งคืน **1** ถ้า "อาร์กิวเมนต์" เป็น **false** ให้ส่งคืน **+ 0**

นั่นเป็นเหตุผลที่เราสามารถเพิ่มค่าบูลีนเป็นตัวเลขปกติและได้ผลลัพธ์ที่ถูกต้อง

ส่วนที่เกี่ยวข้อง:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML comments are valid in JavaScript

`<!--` (comment in HTML) is a valid comment in JavaScript.

```js
// valid comment
<!-- valid comment too
```

### 💡 คำอธิบาย

Impressed? HTML-like comments were intended to allow browsers that didn't understand the `<script>` tag to degrade gracefully. These browsers, e.g. Netscape 1.x are no longer popular. So there is really no point in putting HTML comments in your script tags anymore.

Since Node.js is based on the V8 engine, HTML-like comments are supported by the Node.js runtime too. Moreover, they're a part of the specification:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` is ~~not~~ a number

Type of `NaN` is a `'number'`:

```js
typeof NaN; // -> 'number'
```

คำอธิบายว่าตัวดำเนินการ `typeof` และ `instanceof` ทำงานอย่างไร:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` and `null` are objects

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false
```

### 💡 คำอธิบาย

ลักษณะการทำงานของตัวดำเนินการ `typeof` ถูกกำหนดไว้ในส่วนนี้ของข้อกำหนด:

ตามสเปค ตัวดำเนินการ `typeof` return string ตาม [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35) สำหรับ `null`, ordinary , standard exotic and non-standard exotic objects ซึ่งไม่ใช้ `[[Call]]` มันจะ return string `"string"`

อย่างไรก็ตามคุณสามารถตรวจสอบประเภทของ object ได้โดยใช้เมธอด "toString"

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

### 💡 คำอธิบาย

สิ่งนี้เกิดจากมาตรฐาน IEEE 754-2008 สำหรับเลขคณิต Binary Floating-Point ที่มาตราส่วนนี้จะปัดเศษเป็นเลขคู่ที่ใกล้ที่สุด อ่านเพิ่มเติม:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## Precision of `0.1 + 0.2`

เรื่องตลกที่รู้จักกันดี การเพิ่ม "0.1" และ "0.2" นั้นแม่นยำมาก:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

The answer for the [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) question on StackOverflow:
