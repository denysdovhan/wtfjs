# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> 一个有趣和棘手的 JavaScript 示例列表。

基于个人理解加 google 翻译，如有问题请指正，谢谢。

JavaScript 是一种很好的语言。它有一个简单的语法，庞大的生态系统，以及最重要，最伟大的社区。

同时，我们都知道，JavaScript 是一个非常有趣的语言，具有棘手的部分。 他们中的一些可以迅速将我们的日常工作变成地狱，有些可以让我们大声笑起来。

WTFJS 的原创思想属于 [Brian Leroux](https://twitter.com/brianleroux). 这个列表受到他的讲话的高度启发 [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# npm 手稿

你可以通过 `npm` 来安装。只要运行：

```
$ npm install -g wtfjs
```

你应该能够在命令行中运行`wtfjs`，这将打开手册并在你选择的`$PAGER`中，否则你也可以选择在这里阅读。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# 目录

- [💪🏻 动机](#-动机)
- [✍🏻 符号](#-符号)
- [👀 例子](#-例子)
  - [`[]` 等于 `![]`](#-等于-)
  - [true is false](#true-是-false)
  - [baNaNa](#baNaNa)
  - [`NaN` 不是一个 `NaN`](#nan-不是一个-nan)
  - [It's a fail](#它是fail)
  - [`[]` 本身是 true, 但又不等于 `true`](#-是-true-但它不等于-true)
  - [`null` 本身是 false, 但又不等于 `false`](#null-是false-但又不等于-false)
  - [最小值大于零](#最小值大于零)
  - [函数又不是函数](#函数又不是函数)
  - [数组相加](#数组相加)
  - [`undefined` 和 `Number`](#undefined-和-number)
  - [`parseInt` 是一个坏蛋 ](#parseint-是一个坏蛋)
  - [数学计算中 `true` 和 `false`](#true-和-false-数学运算)
  - [HTML 注释在 JavaScript 中有效](#html注释在javascript中有效)
  - [`NaN` ~~不是~~ 一个数值](#nan-不是一个数值)
  - [`[]` 和 `null` 都是对戏那个](#-和-null-是对象)
  - [神奇的数字](#神奇多位的数字)
  - [精度问题 `0.1 + 0.2`](#01--02-精度计算)
  - [修复数字](#扩展数字的方法)
  - [三个数字的比较](#三个数字的比较)
  - [有趣的数学](#有趣的数学)
  - [添加正则表达式](#扩展正则)
  - [字符串不是 `String` 的实例](#字符串不是-string-的实例)
  - [用反引号调用函数](#用反引号调用函数)
  - [调用 调用 调用](#调用-调用-调用)
  - [一个 `constructor` 属性](#一个constructor属性)
  - [将对象做为另一个对象的 key](#将对象做为另一个对象的key)
  - [用`__proto__`访问原型](#访问原型-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [使用默认值进行结构化](#使用默认值进行结构化)
  - [点 和 解构](#点-和-解构)
  - [标签](#标签)
  - [嵌套标签](#嵌套标签)
  - [阴险的 `try..catch`](#阴险的-trycatch)
  - [这是多重继承吗？](#这是多重继承吗)
  - [A generator which yields itself](#a-generator-which-yields-itself)
  - [一个类的类](#一个类的类)
  - [非强制转换对象](#非强制转换对象)
  - [棘手的箭头功能](#棘手的箭头功能)
  - [`arguments`和箭头函数](#arguments-和箭头函数)
  - [棘手的返回](#棘手的返回)
  - [使用数组访问对象属性](#使用数组访问对象属性)
  - [Null 和关系操作符](#空和关系操作符)
  - [`Number.toFixed()` 显示不同的数字](#numbertofixed-显示不同的数字)
  - [比较 `null` to `0`](#比较-null-to-0)
- [其他资源](#其他资源)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 💪🏻 动机

> 只是为了好玩 （tips：我翻译这篇文章同样也是为了好玩）
>
> &mdash; _[**“只是为了好玩：一个意外革命的故事”**](https://en.m.wikipedia.org/wiki/Just_for_Fun), 托瓦兹_

这个列表的主要目的是收集一些疯狂的例子，并解释它们如何工作，如果可能的话。 只是因为学习以前不了解的东西很有趣。

如果您是初学者，您可以使用此笔记来深入了解 JavaScript。 我希望这个笔记会激励你花更多的时间阅读规范。

如果您是专业开发人员，您可以将这些示例视为您公司新手访问问题和测验的重要资源。 同时，这些例子在准备面试时会很方便。

无论如何，只是读这个。 也许你会为自己找到新的东西。

# ✍🏻 符号

**`// ->`** 用于显示表达式的结果。 例如：

```js
1 + 1; // -> 2
```

**`// >`** 意思是 `console.log` 或其他输出的结果。 例如：

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** 只是一个解释的评论。 例：

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 例子

## `[]` 等于 `![]`

数组等于一个数组取反

```js
[] == ![]; // -> true
```

### 💡 说明:

- [**12.5.9** 逻辑非运算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true 是 false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 说明:

考虑一下这一步：

```js
true == "true"; // -> true
false == "false"; // -> false

// 'false' 不是空字符串，所以它的值是true
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

### 💡 说明:

这个表达式可以转化成 `'foo' + (+'bar')`，但无法将`'bar'`强制转化成数值

- [**12.8.3** 加法运算符 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)

## `NaN` 不是一个 `NaN`

```js
NaN === NaN; // -> false
```

### 💡 说明:

规范严格定义了这种行为背后的逻辑：

> 1. 如果 `Type(x)` 不同于 `Type(y)`, return **false**.
> 2. 如果 `Type(x)` 数值, 然后
>    1. 如果 `x` 是 **NaN**, return **false**.
>    2. 如果 `y` 是 **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** 严格模式相等比较 ](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

遵循 IEEE 的“NaN”的定义：

> 四个相互排斥的关系是可能的：小于，等于，大于和无序。 当至少一个操作数是 NaN 时，最后一种情况出现。 每个 NaN 都要比较无穷无尽的一切，包括自己。
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

### 💡 说明:

将大量的符号分解成片段，我们注意到，以下表达式经常发生：

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

### 💡 说明:

以下是 ECMA-262 规范中相应部分的链接：

- [**12.5.9** 逻辑非运算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` 是 false, 但又不等于 `false`

尽管 `null` 是 `false` ，但它不等于 `false`。

```js
!!null; // -> false
null == false; // -> false
```

同时，其他的一些等于 false 的值，如 `0` 或 `''` 等于 `false` 。

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 说明:

跟前面的例子相同。 这是一个相应的链接：

- [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## 最小值大于零

`Number.MIN_VALUE` 是最小的数字，大于零：

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 说明:

> `Number.MIN_VALUE` 是 `5e-324` ，即可以在浮点精度内表示的最小正数，即可以达到零。 它定义了最好的分辨率浮标给你。

> 现在，整体最小的值是 `Number.NEGATIVE_INFINITY` ，尽管这在严格意义上并不是真正的数字。
>
> &mdash; [“为什么在 JavaScript 中`0`小于`Number.MIN_VALUE`？”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 函数不是函数

> ⚠️ V8 v5.5 或更低版本中出现的 Bug（Node.js <= 7） ⚠️

所有你知道的关于噪声 _undefined 不是 function_ 。是关于这个吗？

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 说明:

这不是规范的一部分。这只是一个错误，现在它已被修复，所以将来不会有这个问题。

## 数组相加

如果您尝试两个数组相加呢？

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 说明:

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

您已经创建了一个包含 4 个空元素的数组。尽管如此，你还是会得到一个有三个元素的，因为后面的逗号:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 说明:

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

### 💡 说明:

你应该非常小心，因为上面！这是一个复杂的例子，但它的描述 [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) 规范部分。

## `undefined` 和 `Number`

如果我们不把任何参数传递到 `Number` 构造函数中，我们将得到 `0` 。`undefined` 是一个赋值形参，没有实际的参数，所以您可能期望 `NaN` 将 `undefined` 作为参数的值。然而，当我们通过 `undefined` ，我们将得到 `NaN` 。

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 说明:

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

\*\*💡 说明:

\*\* 这是因为 `parseInt` 会继续通过解析直到它解析到一个不识别的字符，`f` 在 `'fuck'` 是 `15进制`

解析 `Infinity` 到整数是什么…

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

小心解析 `null` ：

```js
parseInt(null, 24); // -> 23
```

**💡 说明:**

> 它将 `null` 转换成字符串 `'null'` ，并尝试转换它。 对于基数 0 到 23，没有可以转换的数字，因此返回 NaN。 在 24，`“n”` ，第 14 个字母被添加到数字系统。 在 31，`“u”` ，添加第 21 个字母，可以解码整个字符串。 在 37 处，不再有可以生成的有效数字集，并返回 `NaN` 。
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

不要忘记八进制：

```js
parseInt("06"); // 6
parseInt("08"); // 0
```

**💡 说明:**

这是因为 `parseInt` 能够接受两个参数，如果没有提供第二个参数，并且第一个参数以 `0` 开始，它将被解析为八进制数。

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

### 💡 说明:

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

你会留下深刻的印象， `<!--` (这被称为 HTML 注释）是一个有效的 JavaScript 注释。

```js
// valid comment
<!-- valid comment too
```

### 💡 说明:

深刻的印象吗? html 类似的注释旨在允许不理解标签的浏览器优雅地降级。这些浏览器，例如 Netscape 1。x 不再受欢迎。因此，在脚本标记中添加 HTML 注释是没有意义的。

由于 Node.js 基于 V8 引擎，Node.js 运行时也支持类似 HTML 的注释。 而且，它们是规范的一部分：

- [**B.1.3** 类似 HTML 的注释 ](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` 不是一个数值

尽管 `NaN` 类型是 `'number'` ，但是 `NaN` 不是数字的实例：

```js
typeof NaN; // -> 'number'
NaN instanceof Number; // -> false
```

### 💡 说明:

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

### 💡 说明:

`typeof` 运算符的行为在本节的规范中定义：

- [**12.5.5** `typeof` 操作符 ](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

根据规范，`typeof` 操作符返回一个字符串 [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). 对于 `null` ，普通的，标准的异常和非标准的异常对象，它不实现 `[[Call]]` 它返回字符串 `"对象“` 。

但是，您可以使用 `toString` 方法检查对象的类型。

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## 神奇多位的数字

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000
```

### 💡 说明:

这是由 IEEE 754-2008 二进制浮点运算标准引起的。 阅读更多：

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.m.wikipedia.org/wiki/IEEE_754) on Wikipedia

## `0.1 + 0.2` 精度计算

来自 JavaScript 的知名笑话 `0.1` 和 `0.2` 相加是存在精度错误的

```js
0.1 + 0.2; // -> 0.30000000000000004
```

### 💡 说明:

答案为 [”浮点数学是坏的？”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) 问题在 StackOverflow:

> 程序中的常量 `0.2` 和 `0.3` 也将近似为真值。 发生最接近的 `double` 到 `0.2` 大于有理数 `0.2` ，但最接近的 `double` 到 `0.3` 小于有理数 `0.3` 。 `0.1` 和 `0.2` 的总和大于理性数 `0.3` ，因此不符合您的代码中的常数。

这个问题是众所周知的，甚至有一个网站叫 [0.30000000000000004.com](http://0.30000000000000004.com/).

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

### 💡 说明:

显然，您可以像 JavaScript 中的任何其他对象一样扩展 `Number` 对象。 但是，如果定义的方法的行为不是规范的一部分，则不建议。 以下是 `Number` 属性的列表：

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## 三个数字的比较

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 说明:

为什么这样做呢？ 那么问题在于表达式的第一部分。 以下是它的工作原理：

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

我们可以用大于或等于运算符（`> =`）

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

### 💡 说明:

前四个例子发生了什么？ 这是一个小表，以了解 JavaScript 中的添加：

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

剩下的例子呢？ 在相加之前，`[]` 和 `{}` 隐含地调用 `ToPrimitive` 和 `ToString` 方法。 详细了解规范中的评估过程：

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## 扩展正则

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

### 💡 说明:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## 字符串不是 `String` 的实例

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 说明:

`String` 构造函数返回一个字符串：

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

我们来试试一个 `new` ：

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

对象?那是什么?

```js
new String("str"); // -> [String: 'str']
```

有关规范中的 String 构造函数的更多信息：

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## 用反引号调用函数

我们来声明一个返回所有参数到控制台中的函数：

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

### 💡 说明:

那么，如果你熟悉 _Tagged 模板文字_ ，这根本就不是魔术。 在上面的例子中，`f` 函数是模板文字的标签。 模板文字之前的标签允许您使用函数解析模板文字。 标签函数的第一个参数包含字符串值的数组。 其余的参数与表达式有关。 例：

```js
function template(strings, ...keys) {
  // 用字符串和键做一些事情
}
```

这是[💅 styled-components](https://www.styled-components.com/)这个React社区很流行的库[背后的秘密](http://mxstbr.blog/2016/11/styled-components-magic-explained/)。

规范的链接：

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## 调用 调用 调用

> 发现于 [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 说明:

注意，可能会打破你的头脑！ 尝试在您的头脑中重现此代码：我们使用`apply`方法应用`call`方法。 阅读更多：

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## 一个`constructor`属性

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 说明:

让我们逐步考虑一下这个例子：

```js
// Declare a new constant which is a string 'constructor'
const c = "constructor";

// c 是一个字符串
c; // -> 'constructor'

// 获取字符串的构造函数
c[c]; // -> [Function: String]

// 获取构造函数的构造函数
c[c][c]; // -> [Function: Function]

// 调用函数构造函数并将新函数的主体作为参数传递
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// 然后调用这个匿名函数得到的结果是一个字符串'WTF'
c[c][c]('console.log("WTF?")')(); // > WTF
```

一个 `Object.prototype.constructor` 返回一个引用对象的构造函数创建的实例对象。 在字符串的情况下，它是 `String` ，在数字的情况下它是 `数字` 等等。

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## 将对象做为另一个对象的 key

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 说明:

为什么这样工作？ 这里我们使用 _计算属性的名称_ 。 当这些方括号之间传递一个对象时，它会将对象强制转换成一个字符串，所以我们得到一个属性键 `[object Object]` 和 值是 `{}` 。

同样的，我们也可以这样:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

阅读更多关于对象 litarals 这里：

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 访问原型 `__proto__`

正如我们所知道的，原本是没有原型。但是，如果我们尝试为原始对象获取一个 `__proto__` 的值，我们会得到这样的一个结果：

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 说明:

这是因为原本的没有原型，它将使用 `ToObject` 方法包装在包装器对象中。 所以，一步一步：

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

下面的表达结果如何？

```js
`${{ Object }}`;
```

答案是：

```js
// -> '[object Object]'
```

### 💡 说明:

我们使用一个属性 `object` 定义了一个对象:

```js
{
  Object: Object;
}
```

然后我们将该对象传递给模板文字，因此 `toString` 方法调用该对象。 这就是为什么我们得到字符串 `'[object Object]'` 。

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 使用默认值进行结构化

思考这个例子：

```js
let x,
  { x: y = 1 } = { x };
y;
```

上面的例子是访问的一个很好的任务。 `y` 有什么值？ 答案是：

```js
// -> 1
```

### 💡 说明:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

以上示例：

1. 我们声明 `x` 没有赋值，所以它是'undefined`。
2. 然后我们将 `x` 的值打包到对象属性 `x` 中。
3. 然后我们使用解构来提取 `x` 的值，并且要将这个值分配给 `y`。 如果未定义该值，那么我们将使用 `1` 作为默认值。
4. 返回 `y` 的值。

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 点 和 解构

有趣的例子可以由阵列的扩展组成。 考虑这个：

```js
[...[..."..."]].length; // -> 3
```

### 💡 说明:

为什么是 3？当我们使用扩展运算符 TODO 链接到规范）时，`@@iterator` 方法调用，而返回的迭代器用于获取要迭代的值。字符串的默认迭代器按字符传播字符串。传播之后，我们把这些字符打包成一个数组。然后再展开这个数组并打包回数组

一个 `'...'` 字符串包含 `.` ，所以结果数组的长度将' 3 '。

现在，一步一步的看

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

显然，我们可以像我们想要的那样传播和包装数组的元素：

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## 标签

很多程序员不知道 JavaScript 中的标签。 但它们很实用

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 说明:

带标签的语句与 `break` 或 `continue` 语句一起使用。 您可以使用标签来标识循环，然后使用 `break` 或 `continue` 语句来指示程序是否应该中断循环或继续执行它。

在上面的例子中，我们识别一个标签 `foo` 。 然后 `console.log（'first'）;` 执行，然后中断执行。

详细了解 JavaScript 中的标签：

- [**13.13** 标签语句 ](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [标签语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 嵌套标签

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 说明:

像以前的例子一样，请遵循以下链接：

- [**12.16** 逗号运算符(`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** 标签语句](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [标签语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 阴险的 `try..catch`

这个表达将返回什么？ `2` 或 `3`？

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

答案是 3。惊讶吗？

### 💡 说明:

- [**13.15** `try`声明 ](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## 这是多重继承吗？

看下面的例子：

```js
new class F extends (String, Array) {}(); // -> F []
```

这是多重继承吗？ 不。

### 💡 说明:

有趣的部分是 `extends` 子句的值（ `（String，Array）` ）。 分组运算符总是返回其最后一个参数，所以 `（String，Array）` 实际上只是 `Array`。 这意味着我们刚刚创建了一个扩展 `Array` 的类。

- [**14.5** 类定义 ](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** 逗号运算符 (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## A generator which yields itself

考虑一下这个例子，它产生了一个生成器：

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

### 💡 说明:

要理解为什么这样工作，请阅读规范的这些部分：

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## 一个类的类

考虑这个混淆的语法游戏：

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

似乎我们在类内部声明了一个类。应该和错误，然而，我们得到一个 `'object'` 字符串。

### 💡 说明:

ECMAScript 5 时代以来，关键字允许访问属性。所以请考虑一下这个简单的对象示例：

```js
const foo = {
  class: function() {}
};
```

和 6 标准速记方法定义。此外，类可能是匿名的。因此，如果我们放弃 `函数` 部分，我们将得到：

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

有着名的符号，有一种方法可以摆脱类型的强制。 看一看：

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

### 💡 说明:

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 棘手的箭头功能

考虑下面的例子:

```js
let f = () => 10;
f(); // -> 10
```

好吧，但是这是怎么说的呢?

```js
let f = () => {};
f(); // -> undefined
```

### 💡 说明:

你可以期待 `{}` 而不是 `undefined` 。这是因为花括号是箭头函数语法的一部分，所以 f 会返回未定义的。

## 棘手的返回

`return` 声明是很棘手的. 看下面的代码:

```js
(function() {
  return;
  {
    b: 10;
  }
})(); // -> undefined
```

### 💡 说明:

`return` 一个表达式必须在同一行:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

## 使用数组访问对象属性

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

那关于维多维数组创建对象呢？

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

### 💡 说明:

括号操作符将传递给字符串的表达式转换为字符串。将一个元素数组转换为字符串，就像将元素转换为字符串:

```js
["property"].toString(); // -> 'property'`
```

## 棘手的箭头函数

思考一下下面的例子：

```js
let f = () => 10;
f(); // -> 10
```

好，很好，但是下面那个又输出什么？

```js
let f = () => {};
f(); // -> undefined
```

### 💡 说明:

你可能会期望`{}`而不是`undefined`。这是因为花括号是箭头函数语法的一部分，所以 `f`将返回为定义。但是，可以直接从箭头函数中返回`{}`，采用括号括起来。

```js
let f = () => ({});
f(); // -> {}
```

## `arguments`和箭头函数

思考一下下面的例子：

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

现在，试着用一个箭头函数来做同样的事情:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 说明:

箭头函数是普通函数的轻量级版本，重点是简短和 `this` 上。与此同时，箭头函数不为 `arguments` 对象提供绑定。作为一个有效的替代使用 `rest parameters` 来达到相同的结果:

```js
let f = (...args) => args;
f("a");
```

- [箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## 棘手的返回值

`return` 也是很棘手。思考一下这个：

```js
(function() {
  return;
  {
    b: 10;
  }
})(); // -> undefined
```

### 💡 说明:

`return` 返回的表达式必须在同一行：

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

这是因为一个概念叫自动分号，分号后，自动插入最新行。在第一个示例中，在`return`语句和对象文本之间插入一个分号，因此函数返回`undefined` 后面代码将不会被执行。

- [**11.9.1** 自动分号插入规则](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** `return` 声明](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## 使用数组访问对象属性

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

伪多维数组呢？

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

### 💡 说明:

方括号`[]`操作符使用`toString`进行转换，将一个元素数组转换为字符串:

```js
["property"].toString(); // -> 'property'
```

## Null 和关系运算符

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 说明:

长话短说，如果`null`小于`0`是`false`,那么`null >= 0`则是`true`。
请阅读下面的详细解释[这里](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

## `Number.toFixed()`显示不同的数字

`Number.toFixed()` 在不同的浏览器中会表现得有点奇怪。看看这个例子:

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

### 💡 说明:

查看 Firefox 源码, `toFixed` 方法是转换的值，而不是标准的实现。

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## 比较`null` to `0`

下面的表达式似乎有点矛盾：

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

`null`怎么既不等于也不大于`0`，如果`null >= 0` 实际上是 `true`? (这也适用于少于同样的方法。)

### 💡 说明:

执行这三个表达式的方式各不相同，并负责产生这种意外行为。
首先，抽象相等比较`null == 0`。通常情况下，如果这个运算符不能正确地比较两边的值，则它将两个数字转换为数字，并对数字进行比较。然后，您可能会期望以下行为：

```js
// 事实并非如此
(null == 0 + null) == +0;
0 == 0;
true;
```

然而，根据对规范的仔细阅读，数字转换实际上并没有发生在`null` 或 `undefined`的一侧。因此，如果在等号的一侧有`null`，则另一侧的表达式必须为`null` 或 `undefined`，以返回 `true`。既然不是这样，就会返回 false。

Next, the relational comparison `null > 0`. The algorithm here, unlike that of the abstract equality operator, _will_ convert `null` to a number. Therefore, we get this behavior:

接下来，关系比较 `null > 0` 。这里的算法不同于抽象的相等运算符，将 `null` 转换为一个数字。因此，我们得到这样的行为:

```js
null > 0
+null = +0
0 > 0
false
```

最后，关系比较`null >= 0`。你可以认为这个表达式应该是 `null > 0 || null == 0` 的结果;如果是这样，那么以上的结果将意味着这也是`false`。然而，`>=`操作符实际上以一种非常不同的方式工作，这基本上与 `<` 操作符相反。因为我们的例子中，大于运算符的例子也适用于小于运算符，也就是说这个表达式的值是这样的:

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
