# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> 一个有趣和棘手的 JavaScript 示例列表。

JavaScript 是一种很好的语言。它有一个简单的语法，庞大的生态系统，以及最重要，最伟大的社区。

同时，我们都知道，JavaScript 是一个非常有趣又充满戏法的语言。他们中的有些可以迅速将我们的日常工作变成地狱，有些可以让我们大声笑起来。

WTFJS 的原创思想属于 [Brian Leroux](https://twitter.com/brianleroux)。这个列表受到他的讲话的高度启发 [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8)：

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# npm 手稿

你可以通过 `npm` 来安装。只要运行：

```
$ npm install -g wtfjs
```

你应该能够在命令行中运行`wtfjs`，这将打开手册并在你选择的`$PAGER`中，否则你也可以选择在这里阅读。

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 动机](#-%E5%8A%A8%E6%9C%BA)
- [✍🏻 符号](#-%E7%AC%A6%E5%8F%B7)
- [👀 例子](#-%E4%BE%8B%E5%AD%90)
  - [`[]` 等于 `![]`](#-%E7%AD%89%E4%BA%8E-)
  - [true 是 false](#true-%E6%98%AF-false)
  - [baNaNa](#banana)
  - [`NaN` 不是一个 `NaN`](#nan-%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA-nan)
  - [它是 fail](#%E5%AE%83%E6%98%AF-fail)
  - [`[]` 是 `true`, 但它不等于 `true`](#-%E6%98%AF-true-%E4%BD%86%E5%AE%83%E4%B8%8D%E7%AD%89%E4%BA%8E-true)
  - [`null` 是 false, 但又不等于 `false`](#null-%E6%98%AF-false-%E4%BD%86%E5%8F%88%E4%B8%8D%E7%AD%89%E4%BA%8E-false)
  - [`document.all` 是一个 object，但又同时是 undefined](#documentall-%E6%98%AF%E4%B8%80%E4%B8%AA-object%E4%BD%86%E5%8F%88%E5%90%8C%E6%97%B6%E6%98%AF-undefined)
  - [最小值大于零](#%E6%9C%80%E5%B0%8F%E5%80%BC%E5%A4%A7%E4%BA%8E%E9%9B%B6)
  - [函数不是函数](#%E5%87%BD%E6%95%B0%E4%B8%8D%E6%98%AF%E5%87%BD%E6%95%B0)
  - [数组相加](#%E6%95%B0%E7%BB%84%E7%9B%B8%E5%8A%A0)
- [数组中的逗号](#%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%80%97%E5%8F%B7)
  - [数组相等是一个怪物](#%E6%95%B0%E7%BB%84%E7%9B%B8%E7%AD%89%E6%98%AF%E4%B8%80%E4%B8%AA%E6%80%AA%E7%89%A9)
  - [`undefined` 和 `Number`](#undefined-%E5%92%8C-number)
  - [`parseInt` 是一个坏蛋](#parseint-%E6%98%AF%E4%B8%80%E4%B8%AA%E5%9D%8F%E8%9B%8B)
  - [`true` 和 `false` 数学运算](#true-%E5%92%8C-false-%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97)
  - [HTML 注释在 JavaScript 中有效](#html-%E6%B3%A8%E9%87%8A%E5%9C%A8-javascript-%E4%B8%AD%E6%9C%89%E6%95%88)
  - [`NaN` ~~不是~~一个数值](#nan-%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E6%95%B0%E5%80%BC)
  - [`[]` 和 `null` 是对象](#-%E5%92%8C-null-%E6%98%AF%E5%AF%B9%E8%B1%A1)
  - [神奇的数字增长](#%E7%A5%9E%E5%A5%87%E7%9A%84%E6%95%B0%E5%AD%97%E5%A2%9E%E9%95%BF)
  - [`0.1 + 0.2` 精度计算](#01--02-%E7%B2%BE%E5%BA%A6%E8%AE%A1%E7%AE%97)
  - [扩展数字的方法](#%E6%89%A9%E5%B1%95%E6%95%B0%E5%AD%97%E7%9A%84%E6%96%B9%E6%B3%95)
  - [三个数字的比较](#%E4%B8%89%E4%B8%AA%E6%95%B0%E5%AD%97%E7%9A%84%E6%AF%94%E8%BE%83)
  - [有趣的数学](#%E6%9C%89%E8%B6%A3%E7%9A%84%E6%95%B0%E5%AD%A6)
  - [正则表达式的加法](#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E5%8A%A0%E6%B3%95)
  - [字符串不是 `String` 的实例](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8D%E6%98%AF-string-%E7%9A%84%E5%AE%9E%E4%BE%8B)
  - [用反引号调用函数](#%E7%94%A8%E5%8F%8D%E5%BC%95%E5%8F%B7%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0)
  - [调用 调用 调用](#%E8%B0%83%E7%94%A8-%E8%B0%83%E7%94%A8-%E8%B0%83%E7%94%A8)
  - [一个 `constructor` 属性](#%E4%B8%80%E4%B8%AA-constructor-%E5%B1%9E%E6%80%A7)
  - [将对象做为另一个对象的 key](#%E5%B0%86%E5%AF%B9%E8%B1%A1%E5%81%9A%E4%B8%BA%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84-key)
  - [访问原型 `__proto__`](#%E8%AE%BF%E9%97%AE%E5%8E%9F%E5%9E%8B-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [使用默认值解构](#%E4%BD%BF%E7%94%A8%E9%BB%98%E8%AE%A4%E5%80%BC%E8%A7%A3%E6%9E%84)
  - [点和扩展运算符](#%E7%82%B9%E5%92%8C%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [标签](#%E6%A0%87%E7%AD%BE)
  - [嵌套标签](#%E5%B5%8C%E5%A5%97%E6%A0%87%E7%AD%BE)
  - [阴险的 `try..catch`](#%E9%98%B4%E9%99%A9%E7%9A%84-trycatch)
  - [这是多重继承吗？](#%E8%BF%99%E6%98%AF%E5%A4%9A%E9%87%8D%E7%BB%A7%E6%89%BF%E5%90%97)
  - [](#)
  - [一个类的类](#%E4%B8%80%E4%B8%AA%E7%B1%BB%E7%9A%84%E7%B1%BB)
  - [非强制对象](#%E9%9D%9E%E5%BC%BA%E5%88%B6%E5%AF%B9%E8%B1%A1)
  - [棘手的箭头功能](#%E6%A3%98%E6%89%8B%E7%9A%84%E7%AE%AD%E5%A4%B4%E5%8A%9F%E8%83%BD)
  - [箭头函数不能作为构造器](#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%8D%E8%83%BD%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%99%A8)
  - [`arguments` 和箭头函数](#arguments-%E5%92%8C%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
  - [棘手的返回](#%E6%A3%98%E6%89%8B%E7%9A%84%E8%BF%94%E5%9B%9E)
  - [对象的链式赋值](#%E5%AF%B9%E8%B1%A1%E7%9A%84%E9%93%BE%E5%BC%8F%E8%B5%8B%E5%80%BC)
  - [使用数组访问对象属性](#%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84%E8%AE%BF%E9%97%AE%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)
  - [Null 和关系运算符](#null-%E5%92%8C%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [`Number.toFixed()`显示不同的数字](#numbertofixed%E6%98%BE%E7%A4%BA%E4%B8%8D%E5%90%8C%E7%9A%84%E6%95%B0%E5%AD%97)
  - [`Math.max()` 小于 `Math.min()`](#mathmax-%E5%B0%8F%E4%BA%8E-mathmin)
  - [比较 `null` 和 `0`](#%E6%AF%94%E8%BE%83-null-%E5%92%8C-0)
  - [相同变量重复声明](#%E7%9B%B8%E5%90%8C%E5%8F%98%E9%87%8F%E9%87%8D%E5%A4%8D%E5%A3%B0%E6%98%8E)
  - [Array.prototype.sort() 的默认行为](#arrayprototypesort-%E7%9A%84%E9%BB%98%E8%AE%A4%E8%A1%8C%E4%B8%BA)
  - [resolve() 不会返回 Promise 实例](#resolve-%E4%B8%8D%E4%BC%9A%E8%BF%94%E5%9B%9E-promise-%E5%AE%9E%E4%BE%8B)
- [其他资源](#%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 动机

> 只是为了好玩
>
> &mdash; _[**“只是为了好玩：一个意外革命的故事”**](https://en.m.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

这个列表的主要目的是收集一些疯狂的例子，并解释它们如何工作，如果可能的话。只是因为学习以前不了解的东西很有趣。

如果您是初学者，您可以使用此笔记来深入了解 JavaScript。我希望这个笔记会激励你花更多的时间阅读规范。

如果您是专业开发人员，您可以将这些示例视为您公司新手访问问题和测验的重要资源。同时，这些例子在准备面试时会很方便。

无论如何，读读看。也许你会为自己找到新的东西。

# ✍🏻 符号

**`// ->`** 用于显示表达式的结果。例如：

```js
1 + 1; // -> 2
```

**`// >`** 意思是 `console.log` 或其他输出的结果。例如：

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** 只是一个解释的评论。例如：

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 例子

## `[]` 等于 `![]`

数组等于一个数组取反：

```js
[] == ![]; // -> true
```

### 💡 说明：

- [**12.5.9** 逻辑非运算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true 是 false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 说明：

考虑一下这一步：

```js
true == "true"; // -> true
false == "false"; // -> false

// 'false' 不是空字符串，所以它的值是 true
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a";
```

用 JavaScript 写的老派笑话：

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 说明：

这个表达式可以转化成 `'foo' + (+'bar')`，但无法将`'bar'`强制转化成数值。

- [**12.8.3** 加法运算符 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)

## `NaN` 不是一个 `NaN`

```js
NaN === NaN; // -> false
```

### 💡 说明：

规范严格定义了这种行为背后的逻辑：

> 1. 如果 `Type(x)` 不同于 `Type(y)`, return **false**.
> 2. 如果 `Type(x)` 数值, 然后
>    1. 如果 `x` 是 **NaN**, return **false**.
>    2. 如果 `y` 是 **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** 严格模式相等比较 ](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

遵循 IEEE 的“NaN”的定义：

> 有四种可能的相互排斥的关系：小于，等于，大于和无序。 当至少一个操作数是 NaN 时，便是最后一种情况。每个 NaN 都要比较无穷无尽的一切，包括自己。
>
> &mdash; [“对于 IEEE754 NaN 值的所有比较返回 false 的理由是什么？”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## 它是 fail

你不会相信，但...

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 说明：

将大量的符号分解成片段，我们注意到，以下表达式经常出现：

```js
![] + []; // -> 'false'
![]; // -> false
```

所以我们尝试将`[]`和`false`加起来。 但是通过一些内部函数调用（`binary + Operator` - >`ToPrimitive` - >`[[DefaultValue]` ]），我们最终将右边的操作数转换为一个字符串：

```js
![] + [].toString(); // 'false'
```

将字符串作为数组，我们可以通过`[0]`来访问它的第一个字符：

```js
"false"[0]; // -> 'f'
```

现在，其余的是明显的，可以自己弄清楚！

## `[]` 是 `true`, 但它不等于 `true`

数组是一个`true`，但是它不等于`true`。

```js
!![]       // -> true
[] == true // -> false
```

### 💡 说明：

以下是 ECMA-262 规范中相应部分的链接：

- [**12.5.9** 逻辑非运算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` 是 false, 但又不等于 `false`

尽管 `null` 是 `false`，但它不等于 `false`。

```js
!!null; // -> false
null == false; // -> false
```

同时，其他的一些等于 false 的值，如 `0` 或 `''` 等于 `false` 。

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 说明：

跟前面的例子相同。这是一个相应的链接：

- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` 是一个 object，但又同时是 undefined

> ⚠️ 这是浏览器 API 的一部分，对于 Node.js 环境无效 ⚠️

尽管 document.all 是一个 array-like object 并且通过它可以访问页面中的 DOM 节点，但在通过 `typeof` 的检测结果是 `undefined`。

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

同时，`document.all` 不等于 `undefined`。

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

但是同时：

```js
document.all == null; // -> true
```

### 💡 说明：

> `document.all` 曾经是访问页面 DOM 节点的一种方式，特别是在早期版本的 IE 浏览器中。它从未成为标准，但被广泛使用在早期的 JS 代码中。当标准演变出新的 API 时（例如 `document.getElementById`）这个 API 调用就被废弃了，标准委员会必须决定如何处理它。因为它被广泛使用嗯他们决定保留这个 API 但引入一个有意的对 JavaScript 的标准的违反。
> 其与 `undefined` 使用[严格相等比较](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)得出 `false` 而使用[抽象相等比较](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) 得出 `true` 是因为这个有意的对标准的违反明确地允许了这一点。
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) at YDKJS - Types & Grammar

## 最小值大于零

`Number.MIN_VALUE` 是最小的数字，大于零：

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 说明：

> `Number.MIN_VALUE` 是 `5e-324` ，即可以在浮点精度内表示的最小正数，即可以达到零。 它定义了浮点数的最高精度。

> 现在，整体最小的值是 `Number.NEGATIVE_INFINITY` ，尽管这在严格意义上并不是真正的数字。
>
> &mdash; [“为什么在 JavaScript 中`0`小于`Number.MIN_VALUE`？”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 函数不是函数

> ⚠️ V8 v5.5 或更低版本中出现的 Bug（Node.js <= 7） ⚠️

你们所有人都知道的关于讨厌的 _undefined 不是 function_ ，但是这个呢？

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 说明：

这不是规范的一部分。这只是一个错误，现在它已被修复，所以将来不会有这个问题。

## 数组相加

如果您尝试两个数组相加呢？

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 说明：

会发生合并。一步一步地，它是这样的:

```js
[1, 2, 3] +
  [4, 5, 6][
    // joining
    (1, 2, 3)
  ].join() +
  [4, 5, 6].join();
// concatenation
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

# 数组中的逗号

您已经创建了一个包含 4 个空元素的数组。尽管如此，你还是会得到一个有三个元素的，因为后面的逗号：

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 说明：

> **尾逗号** (有时也称为“最后逗号”) 在向 JavaScript 代码中添加新元素、参数或属性时有用。如果您想添加一个新属性，您可以简单地添加一个新行，而不用修改以前的最后一行，如果该行已经使用了后面的逗号。这使得版本控制比较清洁和编辑代码可能不太麻烦。
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) at MDN

## 数组相等是一个怪物

数组进行相等比较是一个怪物，看下面的例子：

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

### 💡 说明：

你应该非常小心留意上面的例子！ [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) 规范描述了这些行为。

## `undefined` 和 `Number`

如果我们不把任何参数传递到 `Number` 构造函数中，我们将得到 `0` 。`undefined` 是一个赋值形参，没有实际的参数，所以您可能期望 `NaN` 将 `undefined` 作为参数的值。然而，当我们通过 `undefined` ，我们将得到 `NaN` 。

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 说明：

根据规范：

1. 如果没有参数传递给这个函数，让 `n` 为 `+0` ;
2. 否则，让 `n` 调用 `ToNumber(value)`
3. 如果值为 `undefined`,那么 `ToNumber(undefined)` 应该返回 `NaN`.

这是相应的部分：

- [**20.1.1** Number 构造器函数 ](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` 是一个坏蛋

`parseInt` 它以的怪异而出名。

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

\*\*💡 说明：

\*\* 这是因为 `parseInt` 会持续通过解析直到它解析到一个不识别的字符，`'f*ck'` 中的 `f` 是 16 进制下的 `15`。

解析 `Infinity` 到整数也很有意思…

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

也要小心解析 `null`：

```js
parseInt(null, 24); // -> 23
```

**💡 说明：**

> 它将 `null` 转换成字符串 `'null'` ，并尝试转换它。 对于基数 0 到 23，没有可以转换的数字，因此返回 NaN。 在 24，`“n”` ，第 14 个字母被添加到数字系统。 在 31，`“u”` ，添加第 21 个字母，可以解码整个字符串。 在 37 处，不再有可以生成的有效数字集，并返回 `NaN` 。
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

不要忘记八进制：

```js
parseInt("06"); // 6
parseInt("08"); // 8 如果支持 ECMAScript 5
parseInt("08"); // 0 如果不支持 ECMAScript 5
```

**💡 说明：**

这是因为 `parseInt` 能够接受两个参数，如果没有提供第二个参数，并且第一个参数以 `0` 开始，它将把第一个参数当做八进制数解析。

`parseInt` 总是把输入转为字符串：

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

解析浮点数的时候要注意

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 说明：** `ParseInt` 接受字符串参数并返回一个指定基数下的证书。`ParseInt` 也去除第一个字符串中非数字字符（字符集由基数决定）后的内容。`0.000001` 被转换为 `"0.000001"` 而 `parseInt` 返回 `0`。当 `0.0000001` 被转换为字符串时它被处理为 `"1e-7"` 因此 `parseInt` 返回 `1`。`1/1999999` 被转换为 `5.00000250000125e-7` 而 `parseInt` 返回 `5`。

## `true` 和 `false` 数学运算

我们做一些数学计算：

```js
true +
  true(
    // -> 2
    true + true
  ) *
    (true + true) -
  true; // -> 3
```

嗯… 🤔

### 💡 说明：

我们可以用 `Number` 构造函数强制转化成数值。 很明显，`true` 将被强制转换为 `1` ：

```js
Number(true); // -> 1
```

一元加运算符尝试将其值转换成数字。 它可以转换整数和浮点的字符串表示，以及非字符串值 `true` ，`false` 和 `null` 。 如果它不能解析特定的值，它将转化为 `NaN` 。 这意味着我们可以更容易地强制将 `true` 换成 `1`

```js
+true; // -> 1
```

当你执行加法或乘法时，`ToNumber`方法调用。 根据规范，该方法返回：

> 如果 `参数` is **true** , 返回 **1** 。 如果 `参数` 是 **false** 返回 **+0**。

这就是为什么我们可以进行进行布尔值相加并得到正确的结果

相应部分：

- [**12.5.6** 一元 `+` 运算符 ](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** 加法运算符（`+`） ](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML 注释在 JavaScript 中有效

你会留下深刻的印象，`<!--` (这是 HTML 注释）是一个有效的 JavaScript 注释。

```js
// 有效注释
<!-- 也是有效的注释
```

### 💡 说明：

感动吗? 类似 HTML 的注释旨在允许不理解标签的浏览器优雅地降级。这些浏览器，例如 Netscape 1.x 已经不再流行。因此，在脚本标记中添加 HTML 注释是没有意义的。

由于 Node.js 基于 V8 引擎，Node.js 运行时也支持类似 HTML 的注释。 而且，它们是规范的一部分：

- [**B.1.3** 类似 HTML 的注释 ](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` ~~不是~~一个数值

尽管 `NaN` 类型是 `'number'` ，但是 `NaN` 不是数字的实例：

```js
typeof NaN; // -> 'number'
NaN instanceof Number; // -> false
```

### 💡 说明：

`typeof` 和 `instanceof` 运算符的工作原理：

- [**12.5.5** `typeof` 操作符](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` 和 `null` 是对象

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// 然而
null instanceof Object; // false
```

### 💡 说明：

`typeof` 运算符的行为在本节的规范中定义：

- [**12.5.5** `typeof` 操作符](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

根据规范，`typeof` 操作符返回一个字符串 [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35)。对于没有 `[[Call]]` 实现的 `null`、普通对象、标准特异对象和非标准特异对象，它返回字符串 `"object“`。

但是，您可以使用 `toString` 方法检查对象的类型。

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## 神奇的数字增长

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000
```

### 💡 说明：

这是由 IEEE 754-2008 二进制浮点运算标准引起的。阅读更多：

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.m.wikipedia.org/wiki/IEEE_754) on Wikipedia

## `0.1 + 0.2` 精度计算

来自 JavaScript 的知名笑话。`0.1` 和 `0.2` 相加是存在精度错误的

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 说明：

[”浮点计算坏了？”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) 问题的答案在 StackOverflow:

> 程序中的常量 `0.2` 和 `0.3` 也将近似为真实值。最接近 `0.2` 的 `double` 大于有理数 `0.2` ，但最接近 `0.3` 的 `double` 小于有理数 `0.3`。`0.1` 和 `0.2` 的总和大于有理数 `0.3`，因此不符合您的代码中的常数判断。

这个问题是众所周知的，甚至有一个网站叫 [0.30000000000000004.com](http://0.30000000000000004.com/)。

## 扩展数字的方法

您可以添加自己的方法来包装对象，如 `Number` 或 `String` 。

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

### 💡 说明：

显然，您可以像 JavaScript 中的任何其他对象一样扩展 `Number` 对象。但是，不建议扩展不属于规范的行为定义。以下是 `Number` 属性的列表：

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## 三个数字的比较

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 说明：

为什么会这样呢？其实问题在于表达式的第一部分。以下是它的工作原理：

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

我们可以用 _大于或等于运算符（`>=`）_：

```js
3 > 2 >= 1; // true
```

详细了解规范中的关系运算符：

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## 有趣的数学

通常 JavaScript 中的算术运算的结果可能是非常难以预料的。 考虑这些例子：

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

### 💡 说明：

前四个例子发生了什么？这是一个小表，以了解 JavaScript 中的添加：

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

剩下的例子呢？在相加之前，`[]` 和 `{}` 隐式调用 `ToPrimitive` 和 `ToString` 方法。详细了解规范中的求值过程：

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## 正则表达式的加法

你知道可以做这样的运算吗？

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 说明：

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## 字符串不是 `String` 的实例

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 说明：

`String` 构造函数返回一个字符串：

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

我们来试试一个 `new`：

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

对象？那是什么？

```js
new String("str"); // -> [String: 'str']
```

有关规范中的 String 构造函数的更多信息：

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## 用反引号调用函数

我们来声明一个返回所有参数的函数：

```js
function f(...args) {
  return args;
}
```

毫无疑问，你知道你可以这样调用这个函数：

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

但是你知道你可以使用反引号来调用任何函数吗？

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 说明：

那么，如果你熟悉 _标签模板字面量_ ，这根本就不是魔术。在上面的例子中，`f` 函数是模板字面量的标签。模板文字之前的标签允许您使用函数解析模板文字。标签函数的第一个参数包含字符串值的数组。其余的参数与表达式有关。例：

```js
function template(strings, ...keys) {
  // 用字符串和键做一些事情
}
```

这是 React 社区很流行的库[💅 styled-components](https://www.styled-components.com/)的[背后的秘密](http://mxstbr.blog/2016/11/styled-components-magic-explained/)。

规范的链接：

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## 调用 调用 调用

> 发现于 [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 说明：

注意，可能会打破你的头脑！ 尝试在您的头脑中重现此代码：我们使用`apply`方法应用`call`方法。 阅读更多：

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## 一个 `constructor` 属性

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 说明：

让我们逐步考虑一下这个例子：

```js
// 声明一个新的常字符串 'constructor'
const c = "constructor";

// c 是一个字符串
c; // -> 'constructor'

// 获取字符串的构造函数
c[c]; // -> [Function: String]

// 获取构造函数的构造函数
c[c][c]; // -> [Function: Function]

// 调用函数构造函数并将新函数的主体作为参数传递
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// 然后调用这个匿名函数得到的结果是一个字符串 'WTF'
c[c][c]('console.log("WTF?")')(); // > WTF
```

一个 `Object.prototype.constructor` 返回一个引用对象的构造函数创建的实例对象。在字符串的情况下，它是 `String` ，在数字的情况下它是 `Number` 等等。

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## 将对象做为另一个对象的 key

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 说明：

为什么这样工作？这里我们使用 _已计算的属性名称_ 。当这些方括号之间传递一个对象时，它会将对象强制转换成一个字符串，所以我们得到一个属性键 `[object Object]` 以及值是 `{}` 。

我们可以把括号地狱搞成这样：

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// 结构:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

这里阅读更多关于对象字面量：

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 访问原型 `__proto__`

正如我们所知道的，原始数据（premitives）没有原型。但是，如果我们尝试为原始数据获取一个 `__proto__` 的值，我们会得到这样的一个结果：

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 说明：

这是因为原始数据的没有原型，它将使用 `ToObject` 方法包装在包装器对象中。所以，一步一步：

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

以下是关于 `__proto__`的更多信息：

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

下面的表达式结果如何？

```js
`${{ Object }}`;
```

答案是：

```js
// -> '[object Object]'
```

### 💡 说明：

我们通过 _简写属性表示_ 使用一个 `Object` 属性定义了一个对象：

```js
{
  Object: Object;
}
```

然后我们将该对象传递给模板文字，因此 `toString` 方法调用该对象。这就是为什么我们得到字符串 `'[object Object]'`。

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 使用默认值解构

考虑这个例子：

```js
let x,
  { x: y = 1 } = { x };
y;
```

上面的例子是面试中的一个很好的任务。`y` 有什么值？ 答案是：

```js
// -> 1
```

### 💡 说明：

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

以上示例：

1. 我们声明 `x` 没有赋值，所以它是 'undefined`。
2. 然后我们将 `x` 的值打包到对象属性 `x` 中。
3. 然后我们使用解构来提取 `x` 的值，并且要将这个值赋给 `y`。 如果未定义该值，那么我们将使用 `1` 作为默认值。
4. 返回 `y` 的值。

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 点和扩展运算符

数组的扩展可以组成有趣的例子。考虑这个：

```js
[...[..."..."]].length; // -> 3
```

### 💡 说明：

为什么是 3？当我们使用[扩展运算符](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer)时，`@@iterator` 方法会被调用，而返回的迭代器用于获取要迭代的值。字符串的默认迭代器按字符展开字符串。展开之后，我们把这些字符打包成一个数组。然后再展开这个数组并再打包回数组。

一个 `'...'` 字符串包含 `.` ，所以结果数组的长度将 `3`。

现在，一步一步的看：

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

显然，我们可以展开和包装数组的元素任意多次，只要你想：

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// 以此类推 …
```

## 标签

很多程序员不知道 JavaScript 中的标签。它们很有去

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 说明：

带标签的语句与 `break` 或 `continue` 语句一起使用。您可以使用标签来标识循环，然后使用 `break` 或 `continue` 语句来指示程序是否应该中断循环或继续执行它。

在上面的例子中，我们识别一个标签 `foo`。然后 `console.log（'first'）;` 执行，然后中断执行。

详细了解 JavaScript 中的标签：

- [**13.13** 标签语句 ](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [标签语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 嵌套标签

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 说明：

像以前的例子一样，请遵循以下链接：

- [**12.16** 逗号运算符(`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** 标签语句](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [标签语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 阴险的 `try..catch`

这个表达式将返回什么？`2` 还是 `3`？

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

答案是 `3`。惊讶吗？

### 💡 说明：

- [**13.15** `try` 语句](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## 这是多重继承吗？

看下面的例子：

```js
new class F extends (String, Array) {}(); // -> F []
```

这是多重继承吗？不。

### 💡 说明：

有趣的部分是 `extends` 子句的值（`（String，Array）`）。分组运算符总是返回其最后一个参数，所以 `（String，Array）` 实际上只是 `Array`。 这意味着我们刚刚创建了一个扩展 `Array` 的类。

- [**14.5** 类定义 ](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** 逗号运算符 (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

##

考虑一下这个 yield 自身的生成器例子：

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

如您所见，返回的值是一个值等于 `f` 的对象。那样的话，我们可以做这样的事情：

```js
(function* f() {
  yield f;
})()
  .next()
  .value()
  .next()(
    // -> { value: [GeneratorFunction: f], done: false }

    // 再一次
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

    // 再一次
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

// 以此类推
// …
```

### 💡 说明：

要理解为什么这样工作，请阅读规范的这些部分：

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## 一个类的类

考虑这个混淆语法：

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

似乎我们在类内部声明了一个类。应该是个错误，然而，我们得到一个 `'object'` 字符串。

### 💡 说明：

ECMAScript 5 时代以来，关键字允许访问属性。所以请考虑一下这个简单的对象示例：

```js
const foo = {
  class: function() {}
};
```

还有 ES6 标准速记方法定义。此外，类可能是匿名的。因此，如果我们放弃 `: function` 部分，我们将得到：

```js
class {
  class() {}
}
```

默认类的结果总是一个简单的对象。其类型应返回 `'object'` 。

在这里阅读更多

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## 非强制对象

有着名的符号，有一种方法可以摆脱类型的强制。看一看：

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

现在我们可以这样使用：

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

### 💡 说明：

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 棘手的箭头功能

考虑下面的例子：

```js
let f = () => 10;
f(); // -> 10
```

好吧，但是这是怎么说的呢？

```js
let f = () => {};
f(); // -> undefined
```

### 💡 说明：

你可能期待 `{}` 而不是 `undefined`。这是因为花括号是箭头函数语法的一部分，所以 `f` 会返回未定义的。然而要从箭头函数直接返回 `{}` 对象也是可能的，要通过用括号把返回值括起来。

## 箭头函数不能作为构造器

考虑下面的例子：

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

现在，试着用箭头函数做同样的事情：

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 说明：

箭头函数不能作为构造器并且会在被 new 时抛出错误。因为它有一个词域的 `this`，而且也没有 `prototype` 属性，所以这样做没什么意义。

## `arguments` 和箭头函数

考虑下面的例子：

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

现在，试着用箭头函数做同样的事情：

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 说明：

箭头函数是注重短小和词域下的 `this` 的常规函数的轻量级版本。同时箭头函数不提供 `arguments` 对象的绑定。作为一个有效的替代选择使用 `rest parameters` 来得到同样的结果：

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## 棘手的返回

`return` 语句是很棘手的. 看下面的代码:

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

### 💡 说明：

`return` 和返回的表达式必须在同一行:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

这是因为一个叫自动插入分号的概念，它会在大部分换行处插入分号。第一个例子里，有一个分号被插入到 `return` 语句和对象字面量中间。所以函数返回 `undefined` 而对象字面量不会被求值。

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## 对象的链式赋值

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

从右到左，`{n: 2}` 被赋值给 `foo`，而此赋值的结果 `{n: 2}` 被赋值给 `foo.x`，因此 `bar` 是 `{n: 1, x: {n: 2}}` 因为 `bar` 是 `foo` 的一个引用。但为什么 `foo.x` 是 `undefined` 而 `bar.x` 不是呢？

### 💡 说明：

`foo` 和 `bar` 引用同一个对象 `{n: 1}`，而左值在赋值前解析。`foo = {n: 2}` 是创建一个新对象，所以 `foo` 被更新为引用那个新的对象。这里的戏法是 `foo.x = ...` 中的 `foo` 作为左值在赋值前就被解析并依然引用旧的 `foo = {n: 1}` 对象并为其添加了 `x` 值。在那个链式赋值之后，`bar` 依然引用旧的 `foo` 对象，但 `foo` 引用新的没有 `x` 的 `{n: 2}` 对象。

它等价于：

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x 指向新的 foo 对象的地址
// 这不等价于：bar.x = {n: 2}
```

## 使用数组访问对象属性

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

那关于伪多维数组创建对象呢？

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

### 💡 说明：

括号操作符将传递给字符串的表达式转换为字符串。将一个元素数组转换为字符串，就像将元素转换为字符串:

```js
["property"].toString(); // -> 'property'`
```

## Null 和关系运算符

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 说明：

长话短说，如果 `null` 小于 `0` 是 `false`，那么 `null >= 0` 则是 `true`。
请阅读[这里](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274)的详细解释。

## `Number.toFixed()`显示不同的数字

`Number.toFixed()` 在不同的浏览器中会表现得有点奇怪。看看这个例子：

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

### 💡 说明：

尽管你的第一直觉可能是 IE11 是正确的而 Firefox/Chrome 错了，事实是 Firefox/Chrome 更直接地遵循数字运算的标准（IEEE-754 Floating Point），而 IE11 经常违反它们（可能）去努力得出更清晰的结果。

你可以通过一些快速的测试来了解为什么它们发生：

```js
// 确认 5 向下取证的奇怪结果
(0.7875).toFixed(3); // -> 0.787
// 当你展开到 64 位（双精度）浮点数准确度限制时看起来就是一个 5
(0.7875).toFixed(14); // -> 0.78750000000000
// 但如果你超越这个限制呢？
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

浮点数在计算机内部不是以一系列十进制数字的形式存储的，而是通过一个可以产生一点点通常会被 toString 或者其他调用取整的不准确性的更复杂的方法，但它实际上在内部会被表示。

在这里，那个结尾的 "5" 实际上是一个极其小的略小于 5 的分数。将其以任何常理的长度取整它都会被看作一个 5，但它在内部通常不是 5。

IE11，尽管如此，描述这个数字时只是加上一些 0，甚至在 toFixed(20) 的时候也是这样，因为它看起来强制取整了值来减少硬件限制带来的问题。

详见 ECMA-262 中 `NOTE 2` 的 `toFixed` 的定义。

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` 小于 `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 说明：

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## 比较 `null` 和 `0`

下面的表达式似乎有点矛盾：

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

`null` 怎么既不等于也不大于 `0`，如果`null >= 0` 实际上是 `true`?（这也适用于少于同样的方法。）

### 💡 说明：

执行这三个表达式的方式各不相同，并负责产生这种意外行为。
首先，抽象相等比较 `null == 0`。通常情况下，如果这个运算符不能正确地比较两边的值，则它将两个数字转换为数字，并对数字进行比较。然后，您可能会期望以下行为：

```js
// 事实并非如此
(null == 0 + null) == +0;
0 == 0;
true;
```

然而，根据对规范的仔细阅读，数字转换实际上并没有发生在 `null` 或 `undefined` 的一侧。因此，如果在等号的一侧有 `null`，则另一侧的表达式必须为 `null` 或 `undefined`，以返回 `true`。既然不是这样，就会返回 `false`。

接下来，关系比较 `null > 0` 。这里的算法不同于抽象的相等运算符，将 `null` 转换为一个数字。因此，我们得到这样的行为:

```js
null > 0
+null = +0
0 > 0
false
```

最后，关系比较 `null >= 0`。你可以认为这个表达式应该是 `null > 0 || null == 0` 的结果；如果是这样，那么以上的结果将意味着这也是`false`。然而，`>=` 操作符实际上以一种非常不同的方式工作，这基本上与 `<` 操作符相反。因为我们的例子中，大于运算符的例子也适用于小于运算符，也就是说这个表达式的值是这样的:

```js
null >= 0;
!(null < 0);
!(+null < +0);
!(0 < 0);
!false;
true;
```

- [**7.2.12** 抽象的关系比较](https://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison)
- [**7.2.13** 比较抽象的平等](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## 相同变量重复声明

JS 允许重复声明变量：

```js
a;
a;
// 这也是有效的
a, a;
```

严格模式也可以运行：

```js
var a, a, a;
var a;
var a;
```

### 💡 解释：

所有的定义都被合并成一条定义。

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Array.prototype.sort() 的默认行为

想象你需要排序数组中的数字。

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 说明：

默认排序基于将给定元素转换为字符串，然后比较它们的 UTF-16 序列中的值。

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### 提示

传入一个 `compareFn` 比较函数如果你想对字符串以外的内容排序。

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

## resolve() 不会返回 Promise 实例

```javascript
const theObject = {
  a: 7
};
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Promise 实例对象

thePromise.then(value => {
  console.log(value === theObject); // -> true
  console.log(value); // -> { a: 7 }
});
```

从`thePromise`接收到的`value`值完全就是`theObject`。

那么，如果向`resolve`传入另外一个`Promise`会怎样？

```javascript
const theObject = new Promise((resolve, reject) => {
  resolve(7);
}); // -> Promise 实例对象
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Promise 实例对象

thePromise.then(value => {
  console.log(value === theObject); // -> false
  console.log(value); // -> 7
});
```

### 💡 说明：

> 此函数将类 promise 对象的多层嵌套展平。

&ndash; [Promise.resolve() on MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

官方规范是 [ECMAScript 25.6.1.3.2 Promise Resolve Functions](https://tc39.es/ecma262/#sec-promise-resolve-functions)，由于是机械思维，所以难以读懂。

# 其他资源

- [wtfjs.com](http://wtfjs.com/) — 这是一组非常特别的不规范，不一致的地方，以及那些对于网络语言来说非常痛苦的不直观的时刻。
- [Wat](https://www.destroyallsoftware.com/talks/wat) — A lightning talk by Gary Bernhardt from CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — 凯尔。辛普森一家谈到了前两次试图从 JavaScript 中“拉出疯狂”的尝试。他希望帮助您生成更干净、更优雅、更可读的代码，然后鼓励人们为开源社区做出贡献。

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
