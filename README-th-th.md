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

- [จีน] (./ README-zh-cn.md)
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

### 💡 Explanation

The answer for the [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) question on StackOverflow:

> The constants `0.2` and `0.3` in your program will also be approximations to their true values. It happens that the closest `double` to `0.2` is larger than the rational number `0.2` but that the closest `double` to `0.3` is smaller than the rational number `0.3`. The sum of `0.1` and `0.2` winds up being larger than the rational number `0.3` and hence disagreeing with the constant in your code.

This problem is so known that there is even a website called [0.30000000000000004.com](http://0.30000000000000004.com/). It occurs in every language that uses floating-point math, not just JavaScript.

## Patching numbers

คุณสามารถเพิ่มวิธีการของคุณเองให้กับวัตถุ Wrapper เช่น `Number` หรือ `String`

Number.prototype.isOne = function() {
return Number(this) === 1;
};

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

### 💡 คำอธิบาย

เห็นได้ชัด คุณสามารถขยายออบเจ็กต์ "Number" เหมือนกับออบเจ็กต์อื่น ๆ ใน JavaScript อย่างไรก็ตาม ไม่แนะนำหากลักษณะการทำงานของวิธีการที่กำหนดไม่ได้เป็นส่วนหนึ่งของข้อกำหนด นี่คือรายการคุณสมบัติของ "Number":

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparison of three numbers

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 คำอธิบาย

ทำไมถึงได้ผลอย่างนั้น? ปัญหาอยู่ในส่วนแรกของนิพจน์ นี่คือวิธีการทำงาน:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

เราสามารถแก้ไขได้ด้วยตัวดำเนินการ _Greater มากกว่าหรือเท่ากับ (`> =`) _:

```js
3 > 2 >= 1; // true
```

Read more about Relational operators in the specification:

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Funny math

บ่อยครั้งที่ผลลัพธ์ของการคำนวณทางคณิตศาสตร์ใน JavaScript อาจไม่คาดคิด ลองพิจารณาตัวอย่างเหล่านี้:

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

เกิดอะไรขึ้นในสี่ตัวอย่างแรก นี่คือตารางขนาดเล็กเพื่อทำความเข้าใจเพิ่มเติมใน JavaScript:

```js
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

แล้วตัวอย่างอื่น ๆ ล่ะ? วิธีการ "ToPrimitive" และ "ToString" ถูกเรียกโดยปริยายสำหรับ `[]` และ `{}` ก่อนที่จะเพิ่ม อ่านเพิ่มเติมเกี่ยวกับกระบวนการประเมินในไฟล์

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

โดยเฉพาะอย่างยิ่ง `{} + []` นี่คือข้อยกเว้น สาเหตุที่มันแตกต่างจาก `[] + {}` ก็คือหากไม่มีวงเล็บมันจะถูกตีความว่าเป็นโค้ดบล็อกแล้วจึงเป็นยูนารี + โดยแปลง "[]` เป็นตัวเลข จะเห็นสิ่งต่อไปนี้:

```js
{
  // a code block here
}
+[]; // -> 0
```

เพื่อให้ได้ผลลัพธ์เดียวกันกับ `[] + {}` เราสามารถใส่ไว้ในวงเล็บ

```js
({} + []); // -> [object Object]
```

## Addition of RegExps

คุณทราบหรือไม่ว่าคุณสามารถเพิ่มตัวเลขเช่นนี้ได้?

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 คำอธิบาย

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Strings aren't instances of `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 คำอธิบาย

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

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Calling functions with backticks

มาประกาศฟังก์ชั่นที่บันทึกพารามิเตอร์ทั้งหมดลงในคอนโซล:

```js
function f(...args) {
  return args;
}
```

ไม่ต้องสงสัยเลยว่าคุณสามารถเรียกใช้ฟังก์ชันนี้ว่า:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

แต่คุณรู้หรือไม่ว่าคุณสามารถเรียกใช้ฟังก์ชันใดก็ได้โดยใช้ backticks?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Explanation

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

### 💡 คำอธิบาย

ความสนใจมันอาจทำลายความคิดของคุณ! ลองสร้างรหัสนี้ขึ้นมาใหม่: เรากำลังใช้วิธี "โทร" โดยใช้วิธี "ใช้" อ่านเพิ่มเติม:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## A `constructor` property

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 คำอธิบาย

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

### 💡 คำอธิบาย

ทำไมถึงได้ผล? เรากำลังใช้ _Computed property name_ เมื่อคุณส่งออบเจ็กต์ระหว่างวงเล็บเหล่านั้นมันจะบังคับอ็อบเจกต์ไปยังสตริงดังนั้นเราจึงได้รับคีย์คุณสมบัติ `` '[อ็อบเจกต์อ็อบเจกต์]' 'และค่า `{}"

เราสามารถสร้าง "วงเล็บนรก" ได้ดังนี้:

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

อย่างที่เราทราบกันดีว่า primitives ไม่มี prototypes อย่างไรก็ตาม
ถ้าเราพยายามหาค่า "**proto**" สำหรับprimitives เราจะได้ค่านี้

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 คำอธิบาย

สิ่งนี้เกิดขึ้นเนื่องจากเมื่อบางสิ่งบางอย่างไม่มีต้นแบบมันจะถูกห่อเป็นวัตถุห่อหุ้มโดยใช้เมธอด `ToObject` ดังนั้นทีละขั้นตอน:

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

```js
`${{ Object }}`;
```

The answer is:

```js
// -> '[object Object]'
```

### 💡 คำอธิบาย

เรากำหนด object ด้วย property `Object` โดยใช้คุณสมบัติ _Shorthand notation_:

```js
{
  Object: Object;
}
```

จากนั้นเราก็ส่งออบเจ็กต์นี้ไปยัง template literal ดังนั้นเมธอด "toString" จึงเรียกใช้ออบเจ็กต์นั้น นั่นเป็นเหตุผลที่เราได้รับสตริง "[object Object]"

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Destructuring with default values

ลองพิจารณาตัวอย่างนี้:

```js
let x,
  { x: y = 1 } = { x };
y;
```

ตัวอย่างข้างต้นเป็นงานที่ยอดเยี่ยมสำหรับการสัมภาษณ์ ค่าของ "y" คืออะไร? คำตอบคือ:

```js
// -> 1
```

### 💡 คำอธิบาย

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

1. เราประกาศ `x` โดยไม่มีค่าดังนั้นจึงเป็น "undefined"

2.จากนั้นเราบรรจุค่าของ `x` ลงใน object property `x`

3.จากนั้นเราแยกค่าของ `x` โดยใช้ destructuring และต้องการกำหนดให้กับ `y` ถ้าหากไม่ได้กำหนดค่าเราจะใช้ "1" เป็นค่าเริ่มต้น

4. Return the value of `y`.

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Dots and spreading

Interesting examples could be composed with spreading of arrays. Consider this:

ตัวอย่างที่น่าสนใจอาจประกอบด้วยการ composed with spreading of arrays พิจารณาสิ่งนี้:

```js
[...[..."..."]].length; // -> 3
```

### 💡 คำอธิบาย

ทำไม `3`? When we use the [spread operator](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer),

เรียกว่าเมธอด "@@ iterator` และตัวiterator ที่ return จะใช้เพื่อรับค่าที่จะทำซ้ำ ตัว default iterator สำหรับ string จะกระจายสตริงเป็น characters หลังจากแยกแล้ว เราบรรจุอักขระเหล่านี้ลงในอาร์เรย์ จากนั้นเราก็กระจายอาร์เรย์นี้อีกครั้งและบรรจุกลับไปที่อาร์เรย์

สตริง `'... '` ประกอบด้วยอักขระ `.` สามตัวดังนั้นความยาวของอาร์เรย์ผลลัพธ์คือ "3"

Now, step-by-step:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

เห็นได้ชัดว่าเราสามารถกระจายและรวมองค์ประกอบของอาร์เรย์ได้หลายครั้งตามที่เราต้องการ:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## Labels

โปรแกรมเมอร์จำนวนไม่น้อยที่รู้เกี่ยวกับ labels กำกับใน JavaScript พวกมันน่าสนใจมาก:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> u
```

### 💡 คำอธิบาย

The labeled statement ใช้กับ `break` or `continue` statements คุณสามารถใช้ label กับ loop และใช้ `break` or `continue` statements พื่อระบุว่าโปรแกรมควรขัดจังหวะลูปหรือดำเนินการต่อ

ในตัวอย่างด้านบนเราระบุ label "foo" หลังจากนั้น `` console.log ('first'); ดำเนินการแล้วเราขัดจังหวะการดำเนินการ

Read more about labels in JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Nested labels

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 คำอธิบาย

Similar to previous examples, follow these links:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Insidious `try..catch`

expression นี้จะกลับมาเป็นอย่างไร? `2` หรือ`3`?

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

### 💡 คำอธิบาย

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Is this multiple inheritance?

ดูตัวอย่างด้านล่าง:

```js
new class F extends (String, Array) {}(); // -> F []
```

Is this a multiple inheritance? Nope.

### 💡 คำอธิบาย

ส่วนที่น่าสนใจคือ `extends` clause (`(String, Array)`) ตัวดำเนินการจัดกลุ่มจะส่งคืนอาร์กิวเมนต์สุดท้ายเสมอ ดังนั้น `(String, Array)` แท้จริงแล้วเป็นเพียงแค่ "อาร์เรย์" นั่นหมายความว่าเราเพิ่งสร้างคลาสที่ขยาย "Array"

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## A generator which yields itself

ลองพิจารณาตัวอย่างของ generator which yields itself:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

อย่างที่คุณเห็นค่าที่ส่งคืนคือวัตถุที่มี `value` เท่ากับ `f` ในกรณีนี้เราสามารถทำสิ่งนี้ได้:

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
//
```

### 💡 คำอธิบาย

หากต้องการทำความเข้าใจว่าเหตุใดจึงได้ผลเช่นนั้นโปรดอ่านข้อกำหนดเหล่านี้:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## A class of class

พิจารณาการเล่นไวยากรณ์ที่ซับซ้อนนี้:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

ดูเหมือนว่าเรากำลังประกาศclass inside class อย่างไรก็ตามควรเป็นข้อผิดพลาดเราได้รับสตริง `'object'`

ตั้งแต่ยุค ECMAScript 5 _keywords_ ได้รับอนุญาตให้เป็น *property names*ลองคิดดูเป็นตัวอย่างวัตถุง่ายๆนี้:

```js
const foo = {
  class: function() {}
};
```

And ES6 standardized shorthand method definitions นอกจากนี้ class สามารถเป็น anonymous ได้ ดังนั้น ถ้าเราทิ้ง `function` part จะได้

```js
class {
  class() {}
}
```

ผลลัพธ์ของ default class มักจะเป็นออบเจ็กต์ธรรมดา และ typeof ควรส่งคืน `"object"`

Read more here:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Non-coercible objects

ด้วย symbols ที่รู้จักกันดีมีวิธีกำจัดการบีบบังคับประเภทต่างๆ ลองดูสิ:

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

### 💡 คำอธิบาย

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols

## Tricky arrow functions

พิจราณาตัวอย่างต่อไปนี้

```js
let f = () => 10;
f(); // -> 10
```

Okay, fine, but what about this:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 คำอธิบาย

คุณอาจคาดหวังว่าจะเป็น `{}` แทนที่จะเป็น `undefined` เนื่องจากวงเล็บปีกกาเป็นส่วนหนึ่งของไวยากรณ์ของ arrow function ดังนั้น `f` จะ reuturn undefined
อย่างไรก็ตามเป็นไปได้ที่จะส่งคืนอ็อบเจ็กต์ `{}` โดยตรงจาก arrow function โดยใส่ค่าที่ส่งคืนด้วยวงเล็บ

```js
let f = () => ({});
f(); // -> {}
```

## Arrow functions can not be a constructor

พิจราณาตัวอย่างต่อไปนี้

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

ตอนนี้ลองทำเช่นเดียวกันกับฟังก์ชันลูกศร:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 คำอธิบาย

ไม่สามารถใช้ arrow functions เป็น constructor และจะทำให้เกิดข้อผิดพลาดเมื่อใช้กับ new เนื่องจากมีคำว่า `this` และไม่มี property `prototype` จึงไม่สมเหตุสมผลเท่าไหร่

## `arguments` and arrow functions

พิจราณาตัวอย่างต่อไปนี้

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

ลองแบบเดียวกันบน arrow function

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 คำอธิบาย

arrow functions เป็น lightweight version ที่เน้นความสั้นและ lexical `this` ในขณะเดียวกันarrow functions จะไม่มีการเชื่อมโยงสำหรับออบเจ็กต์ `arguments`

ทางเลือกอื่นที่ถูกต้องให้ใช้ `rest parameters` เพื่อให้ได้ผลลัพธ์เดียวกัน:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## Tricky return

คำสั่ง `return` ยังเป็นเรื่องยุ่งยาก พิจารณาสิ่งนี้:

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

### 💡 คำอธิบาย

`return` and the returned expression ต้องอยู่ในบรรทัดเดียวกัน

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

เพราะว่า concept called Automatic Semicolon Insertion ซึ่งจะแทรก semicolon โดยอัตโนมัติหลังจากขึ้นบรรทัดใหม่ ในตัวอย่างแรก semicolon จะแทรกระหว่าง `return` statement and the object literal ดังนั้น function เลย return `underfined`และไม่มีการประเมินผล object

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

จากขวาไปซ้าย `{n: 2}` ถูกกำหนดให้กับ foo และผลลัพธ์ของการมอบหมายนี้ `{n: 2}` ถูกกำหนดให้กับ foo.x นั่นคือสาเหตุที่ทำให้ bar เป็น `{n: 1, x: { n: 2}}`as bar เป็นการอ้างอิงถึง foo แต่ทำไม foo.x ถึงไม่ถูกกำหนดในขณะที่ bar.x ไม่ใช่?

### 💡 คำอธิบาย

Foo and bar references ไปหา object เดียวกัน
Foo and bar references the same object `{n: 1}` และlvaluesจะได้รับการแก้ไขก่อนกำหนด `foo = {n: 2}` คือการสร้าง new object และ foo update to reference that new object trick อยู่ที่ foo ใน `foo.x=...`
เนื่องจาก lvalue ได้รับการแก้ไข้ล่วงหน้าและยังคง reference the old `foo = {n: 1}` object update โดยการเพิ่มค่า x จากนั้น
chain assignments bar ยังคง eference the old foo object แต่ foo reference the new `{n: 2}` object โดยที่ x ไม่มีอยู่

เทียบเท่ากับ:

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

### 💡 คำอธิบาย

เครื่องหมายวงเล็บ `[]` ตัวดำเนินการแปลง expression ที่ผ่านโดยใช้ "toString" การแปลง one-element array to a sting คล้ายกับการแปลงองค์ประกอบที่มีอยู่เป็นสตริง:

```js
["property"].toString(); // -> 'property'
```

## Null and Relational Operators

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 คำอธิบาย

เรื่องสั้นขนาดยาวถ้า `null` น้อยกว่า "0" คือ "เท็จ" ดังนั้น "null> = 0" คือ "จริง" อ่านคำอธิบายเชิงลึกสำหรับสิ่งนี้ [here](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274)

## `Number.toFixed()` display different numbers

`Number.toFixed()` สามารถทำงานได้ค่อนข้างแปลกในเบราว์เซอร์ต่างๆ ดูตัวอย่างนี้:

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

### 💡 คำอธิบาย

ในขณะที่สัญชาตญาณแรกของคุณอาจเป็นไปได้ว่า IE11 นั้นถูกต้องและ Firefox / Chrome ผิด ความจริงก็คือ Firefox / Chrome ปฏิบัติตามมาตรฐานสำหรับตัวเลขโดยตรง (IEEE-754 Floating Point) while IE11 is minutely disobeying them in (what is probably) an effort to give clearer results.

คุณสามารถดูสาเหตุที่เกิดขึ้นได้จากการทดสอบสั้น ๆ บางส่วน:

```js
// Confirm the odd result of rounding a 5 down
(0.7875).toFixed(3); // -> 0.787
// It looks like it's just a 5 when you expand to the
// limits of 64-bit (double-precision) float accuracy
(0.7875).toFixed(14); // -> 0.78750000000000
// But what if you go beyond the limit?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

ตัวเลขทศนิยมจะไม่ถูกจัดเก็บเป็นรายการของหลักทศนิยมภายใน แต่ด้วยวิธีการที่ซับซ้อนกว่าซึ่งก่อให้เกิดความไม่ถูกต้องเล็ก ๆ น้อย ๆ ที่มักจะปัดเศษโดย toString และการเรียกที่คล้ายกัน แต่จริงๆแล้วจะมีอยู่ภายใน

ในกรณีนี้ "5" ที่อยู่ด้านท้ายนั้นเป็นเศษส่วนที่เล็กมากซึ่งอยู่ต่ำกว่า 5 จริงการปัดเศษด้วยความยาวที่เหมาะสมจะทำให้เป็น 5 ... แต่จริงๆแล้วมันไม่ใช่ 5 ภายใน

อย่างไรก็ตาม IE11 จะรายงานการป้อนค่าที่มีเพียงศูนย์ต่อท้ายแม้ในกรณี toFixed (20) เนื่องจากดูเหมือนว่าจะบังคับให้ปัดเศษค่าเพื่อลดปัญหาจากขีด จำกัด ของฮาร์ดแวร์

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` less than `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 คำอธิบาย

`Math.min` all number จะต่ำกว่า positive infinity
`Math.max` all number จะต่ำกว่า negative infinity

ตัวอย่างเช่น Math.min(5) โดยที่ 5 มีค่าน้อยกว่าอินฟินิตี้บวก(Infinity) it will return 5.

-[why-math-min-math-max](https://stackoverflow.com/questions/8848779/why-math-min-math-max)

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## Comparing `null` to `0`

นิพจน์ต่อไปนี้ดูเหมือนจะทำให้เกิดความขัดแย้ง:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

`null` จะไม่เท่ากับหรือมากกว่า "0" ได้อย่างไรถ้า `null> = 0` เป็น`true` (ซึ่งใช้งานได้น้อยกว่าในลักษณะเดียวกัน)

### 💡 คำอธิบาย

วิธีประเมินนิพจน์ทั้งสามนี้แตกต่างกันทั้งหมดและมีหน้าที่ในการสร้างพฤติกรรมที่ไม่คาดคิดนี้

ขั้นแรกการเปรียบเทียบความเท่าเทียมเชิงนามธรรม "null == 0" โดยปกติถ้าตัวดำเนินการนี้ไม่สามารถเปรียบเทียบค่าของด้านใดด้านหนึ่งได้อย่างถูกต้องมันจะแปลงทั้งสองเป็นตัวเลขและเปรียบเทียบตัวเลข จากนั้นคุณอาจคาดหวังพฤติกรรมต่อไปนี้:

```js
// This is not what happens
(null == 0 + null) == +0;
0 == 0;
true;
```

อย่างไรก็ตามจากการอ่านข้อมูลจำเพาะอย่างใกล้ชิดการแปลงตัวเลขไม่ได้เกิดขึ้นจริงในด้านที่เป็น `null` หรือ `undefined` ดังนั้นหากคุณมี `null` ที่ด้านหนึ่งของเครื่องหมายเท่ากับอีกด้านหนึ่งจะต้องเป็น `null` หรือ `undefined` เพื่อให้นิพจน์แสดงผลเป็น `true` เนื่องจากไม่เป็นเช่นนั้นระบบจะส่งคืน `false`

สุดท้ายการเปรียบเทียบเชิงสัมพันธ์ `null> = 0` คุณสามารถโต้แย้งว่านิพจน์นี้ควรเป็นผลลัพธ์ของ `null> 0 || null == 0` ถ้าเป็นกรณีนี้ ผลลัพธ์ข้างต้นก็หมายความว่านี่จะเป็น "false" ด้วย อย่างไงก็ตาม ในความเป็นจริงตัวดำเนินการ `> =` ทำงานในลักษณะที่แตกต่างกันมาก ซึ่งโดยพื้นฐานแล้วจะตรงข้ามกับตัวดำเนินการ "<" เนื่องจากตัวอย่างของเราที่มีตัวดำเนินการมากกว่ามากกว่าข้างต้นจะถือไว้สำหรับตัวดำเนินการน้อยกว่า นั่นหมายความว่านิพจน์นี้ได้รับการประเมินเช่นนั้นจริง:

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

### 💡 คำอธิบาย

All definitions are merged into one definition.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Default behavior Array.prototype.sort()

ลองนึกภาพว่าคุณต้องเรียงลำดับตัวเลข

```js
[10, 1, 3].sort(); // -> [ 1, 10, 3 ]
```

ลำดับการเรียงเริ่มต้นสร้างขึ้นจากการแปลงองค์ประกอบเป็นสตริงจากนั้นเปรียบเทียบลำดับของค่าหน่วยรหัส UTF-16

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### Hint

Pass "Comparefn" หากคุณพยายามจัดเรียงอะไรก็ตามยกเว้นสตริง

[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]

# 📚 Other resources

- [wtfjs.com](http://wtfjs.com/) — คอลเลกชันของความผิดปกติที่พิเศษมากความไม่สอดคล้องกันและเป็นเพียงช่วงเวลาที่เจ็บปวดโดยไม่ได้ตั้งใจสำหรับภาษาของเว็บ.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — คำบรรยายสั้น ๆ โดย Gary Bernhardt จาก CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons talk for Forward 2 attempts to “pull out the crazy” from JavaScript. He wants to help you produce cleaner, more elegant, more readable code, then inspire people to contribute to the open source community.

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
