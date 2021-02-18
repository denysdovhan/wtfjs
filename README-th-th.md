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
