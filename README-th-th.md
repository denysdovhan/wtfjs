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
