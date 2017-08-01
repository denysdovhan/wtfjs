# What the f*ck JavaScript? [![CC 4.0][license-image]][license-url]

> 一个有趣和棘手的JavaScript示例列表。

基于个人理解加google翻译，如有问题请指正，谢谢。

JavaScript是一种伟大的语言。 它有一个简单的语法，大的生态系统，什么是最重要的，伟大的社区。

同时，我们都知道，JavaScript是一个非常有趣的语言，具有棘手的部分。 他们中的一些可以迅速将我们的日常工作变成地狱，有些可以让我们大声笑起来。

WTFJS的原创思想属于 [Brian Leroux](https://twitter.com/brianleroux). 这个列表受到他的讲话的高度启发 [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# 目录

- [💪🏻 动机](#-motivation)
- [✍🏻 符号](#-notation)
- [👀 例子](#-examples)
  - [`[]` 等于 `![]`](#-is-equal-)
  - [true is false](#true-is-false)
  - [fooNaN](#foonan)
  - [`NaN` 不是一个 `NaN`](#nan-is-not-a-nan)
  - [It's a fail](#its-a-fail)
  - [`[]` 本身是true, 但又不等于 `true`](#-is-truthy-but-not-true)
  - [`null` 本身是false, 但又不等于 `false`](#null-is-falsy-but-not-false)
  - [最小值大于零](#minimal-value-is-greater-than-zero)
  - [函数又不是函数](#function-is-not-function)
  - [数组相加](#adding-arrays)
  - [`undefined` 和 `Number`](#undefined-and-number)
  - [`parseInt` 是一个坏蛋 ](#parseint-is-a-bad-guy)
  - [数学计算中 `true` 和 `false`](#math-with-true-and-false)
  - [HTML注释在JavaScript中有效](#html-comments-are-valid-in-javascript)
  - [`NaN` ~~不是~~ 一个数值](#nan-is-not-a-number)
  - [`[]` 和 `null` 都是对戏那个](#-and-null-are-objects)
  - [神奇的数字](#magicaly-increasing-numbers)
  - [精度问题 `0.1 + 0.2`](#precision-of-01--02)
  - [修复数字](#patching-numbers)
  - [三个数字的比较](#comparison-of-three-numbers)
  - [有趣的数学](#funny-math)
  - [添加正则表达式](#addition-of-regexps)
  - [字符串不是 `String` 的实例](#strings-arent-instances-of-string)
  - [用反引号调用函数](#calling-functions-with-backticks)
  - [调用 调用 调用](#call-call-call)
  - [一个 `constructor` 属性](#a-constructor-property)
  - [将对象做为另一个对象的key](#object-as-a-key-of-objects-property)
  - [用`__proto__`访问原型](#accessing-prototypes-with-__proto__)
  - [``` `${{Object}}` ```](#-object-)
  - [使用默认值进行结构化](#destructoring-with-default-values)
  - [点 和 解构](#dots-and-spreading)
  - [标签](#labels)
  - [嵌套标签](#nested-labels)
  - [阴险的 `try..catch`](#insidious-trycatch)
  - [这是多重继承吗？](#is-this-multiple-inheritance)
  - [A generator which yields itself](#a-generator-which-yields-itself)
  - [A class of class](#a-class-of-class)
  - [非强制对象](#non-coercible-objects)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 💪🏻 动机

> 只是为了好玩 （tips：我翻译这篇文章同样也是为了好玩）
>
> &mdash; _[**“只是为了好玩：一个意外革命的故事”**](https://en.m.wikipedia.org/wiki/Just_for_Fun), 托瓦兹_

这个列表的主要目的是收集一些疯狂的例子，并解释它们如何工作，如果可能的话。 只是因为学习以前不了解的东西很有趣。

如果您是初学者，您可以使用此笔记来深入了解JavaScript。 我希望这个笔记会激励你花更多的时间阅读规范。

如果您是专业开发人员，您可以将这些示例视为您公司新手访问问题和测验的重要资源。 同时，这些例子在准备面试时会很方便。

无论如何，只是读这个。 也许你会为自己找到新的东西。

# ✍🏻 符号

**`// ->`** 用于显示表达式的结果。 例如：

```js
1 + 1 // -> 2
```

**`// >`** 意思是 `console.log` 或其他输出的结果。 例如：

```js
console.log('hello, world!') // > hello, world!
```

**`//`** 只是一个解释的评论。 例：

```js
// Assigning a function to foo constant
const foo = function () {}
```

# 👀 例子

## `[]` 等于 `![]`

数组等于一个数组取反

```js
[] == ![] // -> true
```

### 💡 说明:

* [**12.5.9** 逻辑非运算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
* [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true 是 false

```js
!!'false' ==  !!'true'  // -> true
!!'false' === !!'true' // -> true
```

### 💡 说明:

考虑一下这一步：

```js
true == 'true'    // -> true
false == 'false'  // -> false

// 'false' 不是空字符串，所以它的值是true
!!'false' // -> true
!!'true'  // -> true
```

* [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## fooNaN

用JavaScript写的老派笑话：

```js
"foo" + + "bar" // -> 'fooNaN'
```

### 💡 说明:

The expression is evaluted as `'foo' + (+'bar')`, which converts `'bar'` to not a number.
这个表达式可以转化成 `'foo' + (+'bar')`，但无法将`'bar'`强制转化成数值

* [**12.8.3** 加法运算符 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)

## `NaN` 不是一个 `NaN`

```js
NaN === NaN // -> false
```

### 💡 说明:

规范严格定义了这种行为背后的逻辑：

> 1. 如果 `Type(x)` 不同于 `Type(y)`, return **false**.
> 2. 如果 `Type(x)` 数值, 然后
>     1. 如果 `x` 是 **NaN**, return **false**.
>     2. 如果 `y` 是 **NaN**, return **false**.
>     3. … … …
>
> &mdash; [**7.2.14** 严格模式相等比较 ](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

遵循IEEE的“NaN”的定义：

> 四个相互排斥的关系是可能的：小于，等于，大于和无序。 当至少一个操作数是NaN时，最后一种情况出现。 每个NaN都要比较无穷无尽的一切，包括自己。
> 
> &mdash; [“对于IEEE754 NaN值的所有比较返回false的理由是什么？”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## 它是fail

你不会相信，但...

```js
(![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]
// -> 'fail'
```

### 💡 说明:

将大量的符号分解成碎片，我们注意到，以下表达式经常发生：

```js
(![]+[]) // -> 'false'
![]      // -> false
```

所以我们尝试将`[]`和`false`加起来。 但是通过一些内部函数调用（`binary + Operator` - >`ToPrimitive` - >`[[DefaultValue]]），我们最终将右边的操作数转换为一个字符串：

```js
(![]+[].toString()) // 'false'
```

将字符串作为数组，我们可以通过`[0]`来访问它的第一个字符：

```js
'false'[0] // -> 'f'
```

现在，其余的是明显的，可以自己弄清楚！

## `[]` 是 `true`, 但它不等于 `true`

数组是一个`true`，但是它不等于`true`。

```js
!![]       // -> true
[] == true // -> false
```

### 💡 说明:

以下是ECMA-262规范中相应部分的链接：

* [**12.5.9** 逻辑非运算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
* [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` 是false, 但又不等于 `false`

尽管 `null` 是 `false` ，但它不等于 `false`。

```js
!!null        // -> false
null == false // -> false
```

同时，其他的一些等于false的值，如 `0` 或 `''` 等于 `false` 。

```js
0 == false  // -> true
'' == false // -> true
```

### 💡 说明:

跟前面的例子相同。 这是一个相应的链接：

* [**7.2.13** 抽象相等比较 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## 最小值大于零

`Number.MIN_VALUE` 是最小的数字，大于零：

```js
Number.MIN_VALUE > 0 // -> true
```

### 💡 说明:

> `Number.MIN_VALUE` 是 `5e-324` ，即可以在浮点精度内表示的最小正数，即可以达到零。 它定义了最好的分辨率浮标给你。

>
> 现在，整体最小的值是 `Number.NEGATIVE_INFINITY` ，尽管这在严格意义上并不是真正的数字。
>
> &mdash; [“为什么在JavaScript中`0`小于`Number.MIN_VALUE`？”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

* [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 函数又不是函数

> ⚠️ V8 v5.5或更低版本中出现的Bug（Node.js <= 7） ⚠️

所有你知道的关于噪声 _undefined不是function_ 。是关于这个吗？

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo instanceof null
// > TypeError: function is not a function
// >     at … … …
```

### 💡 说明:

这不是规范的一部分。这只是一个错误，现在它是固定的，所以将来不会有这个问题。

## 数组相加

如果您尝试两个数组相加呢？

```js
[1, 2, 3] + [4, 5, 6]  // -> '1,2,34,5,6'
```

### 💡 说明:

串联发生。一步一步地像这样：

```js
[1, 2, 3] + [4, 5, 6]
// joining
[1, 2, 3].join() + [4, 5, 6].join()
// concatenation
'1,2,3' + '4,5,6'
// ->
'1,2,34,5,6'
```

## `undefined` 和 `Number`

如果我们不把任何参数传递到 `Number` 构造函数中，我们将得到 `0` 。`undefined` 是一个赋值形参，没有实际的参数，所以您可能期望 `NaN` 将 `undefined` 作为参数的值。然而，当我们通过 `undefined` ，我们将得到 `NaN` 。


```js
Number()          // -> 0
Number(undefined) // -> NaN
```

### 💡 说明:

根据规格：

1. 如果没有参数传递给这个函数，让 `n` 为 `+0` ;
2. 否则，让 `n` 调用 `ToNumber(value)`
3. 如果值为 `undefined`,那么 `ToNumber(undefined)` 应该返回 `NaN`.

这是相应的部分：

* [**20.1.1** Number 构造器函数 ](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
* [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` 是一个坏蛋

`parseInt` 它以的怪癖而出名。

```js
parseInt('f*ck');     // -> NaN
parseInt('f*ck', 16); // -> 15
```

**💡 说明:

** 这是因为 `parseInt` 会继续通过解析直到它解析到一个不识别的字符，`f` 在 `'fuck'` 是 `15进制`

解析 `Infinity` 到整数是什么…

```js
//
parseInt('Infinity', 10) // -> NaN
// ...
parseInt('Infinity', 18) // -> NaN...
parseInt('Infinity', 19) // -> 18
// ...
parseInt('Infinity', 23) // -> 18...
parseInt('Infinity', 24) // -> 151176378
// ...
parseInt('Infinity', 29) // -> 385849803
parseInt('Infinity', 30) // -> 13693557269
// ...
parseInt('Infinity', 34) // -> 28872273981
parseInt('Infinity', 35) // -> 1201203301724
parseInt('Infinity', 36) // -> 1461559270678...
parseInt('Infinity', 37) // -> NaN
```

小心解析 `null` ：

```js
parseInt(null, 24) // -> 23
```

**💡 说明:**

> 它将 `null` 转换成字符串 `'null'` ，并尝试转换它。 对于基数0到23，没有可以转换的数字，因此返回NaN。 在24，`“n”` ，第14个字母被添加到数字系统。 在31，“u”`，添加第21个字母，可以解码整个字符串。 在37处，不再有可以生成的有效数字集，并返回 `NaN` 。
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

不要忘记八进制：

```js
parseInt('06'); // 6
parseInt('08'); // 0
```

**💡 说明:** 

这是因为 `parseInt` 接受参数的第二个参数。 如果没有提供，并且字符串以 `0` 开始，它将被解析为八进制数。

## `true` 和 `false` 数学运算

我们做一些数学计算：

```js
true + true // -> 2
(true + true) * (true + true) - true // -> 3
```

嗯… 🤔

### 💡 说明:

我们可以用 `Number` 构造函数强制数值。 很明显，`true` 将被强制转换为 `1` ：

```js
Number(true) // -> 1
```

一元加运算符尝试将其值转换成数字。 它可以转换整数和浮点的字符串表示，以及非字符串值 `true` ，`false` 和 `null` 。 如果它不能解析特定的值，它将转化为 `NaN` 。 这意味着我们可以更容易地强制将 `true` 换成 `1`

```js
+true // -> 1
```

当你执行加法或乘法时，`ToNumber`方法调用。 根据规范，该方法返回：

> 如果 `参数` is **true** , 返回 **1*** 。 如果 `参数` 是 **false** 返回 **+0**。

这就是为什么我们可以将布尔值添加为常规数字并获得正确的结果

相应部分：

* [**12.5.6** 一元 `+` 运算符 ](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
* [**12.8.3** 加法运算符（`+`） ](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
* [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML注释在JavaScript中有效

你会留下深刻的印象， `<!--` (这被称为HTML注释）是一个有效的JavaScript注释。

```js
// valid comment
<!-- valid comment too
```

### 💡 说明:

印象深刻？ HTML类似的注释旨在允许不明白 `<script>` 标签的浏览器正常地降级。 这些浏览器，例如 Netscape 1.x不再受欢迎。 所以，将HTML注释放在你的脚本标签中真的没有任何意义。

由于Node.js基于V8引擎，Node.js运行时也支持类似HTML的注释。 而且，它们是规范的一部分：

* [**B.1.3** 类似HTML的注释 ](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` 不是一个数值

尽管 `NaN` 类型是 `'number'` ，但是 `NaN` 不是数字的实例：

```js
typeof NaN            // -> 'number'
NaN instanceof Number // -> false
```

### 💡 说明:

说明的 `typeof` 和 `instanceof` 运算符的工作原理：

* [**12.5.5**  `typeof` 操作符](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
* [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` 和 `null` 是对象

```js
typeof []   // -> 'object'
typeof null // -> 'object'

// 然而
null instanceof Object // false
```

### 💡 说明:

`typeof` 运算符的行为在本节的规范中定义：

* [**12.5.5** `typeof` 操作符 ](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

根据规范，`typeof`操作符返回一个字符串 [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). 对于 `null` ，普通的，标准的异常和非标准的异常对象，它不实现 `[[Call]]` 它返回字符串 `"对象“` 。


但是，您可以使用 `toString` 方法检查对象的类型。

```js
Object.prototype.toString.call([])
// -> '[object Array]'

Object.prototype.toString.call(new Date)
// -> '[object Date]'

Object.prototype.toString.call(null)
// -> '[object Null]'
```

## 神奇多位的数字

```js
999999999999999  // -> 999999999999999
9999999999999999 // -> 10000000000000000
```

### 💡 说明:

这是由IEEE 754-2008二进制浮点运算标准引起的。 阅读更多：

* [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
* [IEEE 754](https://en.m.wikipedia.org/wiki/IEEE_754) on Wikipedia

## `0.1 + 0.2` 精度计算

来自JavaScript的知名笑话 `0.1` 和 `0.2` 相加是致命的精度问题：

```js
0.1 + 0.2 // -> 0.30000000000000004
```

### 💡 说明:

答案为 [”浮点数学是坏的？”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) question on StackOverflow:

> 程序中的常量 `0.2` 和 `0.3` 也将近似为真值。 发生最接近的 `double` 到 `0.2` 大于有理数 `0.2` ，但最接近的 `double` 到 `0.3` 小于有理数 `0.3` 。 `0.1` 和 `0.2` 的总和大于理性数 `0.3` ，因此不符合您的代码中的常数。

这个问题是众所周知的，甚至有一个网站叫 [0.30000000000000004.com](http://0.30000000000000004.com/).

## 修复数字

您可以添加自己的方法来包装对象，如 `Number` 或 `String` 。

```js
Number.prototype.isOne = function () {
  return Number(this) === 1
}

1.0.isOne() // -> true
1..isOne()  // -> true
2.0.isOne() // -> false
(7).isOne() // -> false
```

### 💡 说明:

显然，您可以像JavaScript中的任何其他对象一样扩展 `Number` 对象。 但是，如果定义的方法的行为不是规范的一部分，则不建议。 以下是 `Number` 属性的列表：

* [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## 三个数字的比较

```js
1 < 2 < 3 // -> true
3 > 2 > 1 // -> false
```

### 💡 说明:

为什么这样做呢？ 那么问题在于表达式的第一部分。 以下是它的工作原理：

```js
1 < 2 < 3 // 1 < 2 -> true
true  < 3 // true -> 1
1     < 3 // -> true

3 > 2 > 1 // 3 > 2 -> true
true  > 1 // true -> 1
1     > 1 // -> false
```

我们可以用大于或等于运算符（`> =`）

```js
3 > 2 >= 1 // true
```

详细了解规范中的关系运算符：

* [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## 有趣的数学

通常JavaScript中的算术运算的结果可能是非常难以预料的。 考虑这些例子：

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

前四个例子发生了什么？ 这是一个小表，以了解JavaScript中的添加：

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

剩下的例子呢？ 在相加之前，`[]` 和 `{}` 隐含地调用 `ToPrimitive` 和 `ToString` 方法。 详细了解规范中的评估过程：

* [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
* [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
* [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## 扩展正则

你知道你可以做这样数学运算吗？

```js
// Patch a toString method
RegExp.prototype.toString = function() {
  return this.source
}

/7/ - /5/ // -> 2
```

### 💡 说明:

* [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## 字符串不是 `String` 的实例

```js
'str' // -> 'str'
typeof 'str' // -> 'string'
'str' instanceof String // -> false
```

### 💡 说明:

`String` 构造函数返回一个字符串： 

```js
typeof String('str')   // -> 'string'
String('str')          // -> 'str'
String('str') == 'str' // -> true
```

我们来试试一个 `new` ：

```js
new String('str') == 'str' // -> true
typeof new String('str')   // -> 'object'
```

对象?那是什么?

```js
new String('str') // -> [String: 'str']
```

有关规范中的String构造函数的更多信息：

* [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## 用反引号调用函数

我们来声明一个返回所有参数到控制台中的函数：

```js
function f(...args) {
  return args
}
```

毫无疑问，你知道你可以这样调用这个函数：

```js
f(1, 2, 3) // -> [ 1, 2, 3 ]
```

但是你知道你可以使用反引号来调用任何函数吗？

```js
f`true is ${true}, false is ${false}, array is ${[1,2,3]}`
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 说明:

那么，如果你熟悉 _Tagged模板文字_ ，这根本就不是魔术。 在上面的例子中，`f`函数是模板文字的标签。 模板文字之前的标签允许您使用函数解析模板文字。 标签函数的第一个参数包含字符串值的数组。 其余的参数与表达式有关。 例：

```js
function template(strings, ...keys) {
  // do something with strings and keys…
}
```
This is the [magic behind](http://mxstbr.blog/2016/11/styled-components-magic-explained/) famous library called [💅 styled-components](https://www.styled-components.com/), which is popular in React community.

链接到规范：

* [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## 调用 调用 调用

> 发现于 [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2])
```

### 💡 说明:

注意，可能会打破你的头脑！ 尝试在您的头脑中重现此代码：我们使用`apply`方法应用`call`方法。 阅读更多：

* [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
* [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## 一个`constructor`属性

```js
const c = 'constructor'
c[c][c]('console.log("WTF?")')() // > WTF?
```

### 💡 说明:

让我们逐步考虑一下这个例子：

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

一个 `Object.prototype.constructor` 返回一个引用对象的构造函数创建的实例对象。 在字符串的情况下，它是 `String` ，在数字的情况下它是 `数字` 等等。

* [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
* [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## 将对象做为另一个对象的key

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 说明:

为什么这样工作？ 这里我们使用 _计算属性的名称_ TODO（添加链接到spec）。 当这些方括号之间传递一个对象时，它会将对象强制转换成一个字符串，所以我们得到一个属性键 `[object Object]` 和 值是 `{}` 。

同样的方式，我们可以使括号的地狱像这样：

```js
({[{}]:{[{}]:{}}})[{}][{}] // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

阅读更多关于对象litarals这里：

* [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 访问原型 `__proto__`

正如我们所知道的，原本是没有原型。但是，如果我们尝试为原始对象获取一个 `__proto__` 的值，我们会得到这样的一个结果：

```js
(1).__proto__.__proto__.__proto__ // -> null
```

### 💡 说明:

这是因为原本的没有原型，它将使用 `ToObject` 方法包装在包装器对象中。 所以，一步一步：

```js
(1).__proto__ // -> [Number: 0]
(1).__proto__.__proto__ // -> {}
(1).__proto__.__proto__.__proto__ // -> null
```

以下是关于 `__proto__`的更多信息： 

* [**B.2.2.1** Object.prototype.__proto__](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
* [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## ``` `${{Object}}` ```

下面的表达结果如何？

```js
`${{Object}}`
```

答案是：

```js
// -> '[object Object]'
```

### 💡 说明:

We defined an object with a property `Object` using _Shorthand property notation_:
我们使用速记属性符号表示法定义了一个具有 `Object` 属性的对象：

```js
{ Object: Object }
```

然后我们将该对象传递给模板文字，因此 `toString` 方法调用该对象。 这就是为什么我们得到字符串 `'[object Object]'` 。


* [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
* [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 使用默认值进行结构化

思考这个例子：

```js
let x, { x: y = 1 } = { x }; y;
```

上面的例子是访问的一个很好的任务。 `y` 有什么值？ 答案是：

```js
// -> 1
```

### 💡 说明:

```js
let x, { x: y = 1 } = { x }; y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

以上示例：

1. 我们声明 `x` 没有赋值，所以它是'undefined`。
2. 然后我们将 `x` 的值打包到对象属性 `x` 中。
3. 然后我们使用解构来提取 `x` 的值，并且要将这个值分配给 `y`。 如果未定义该值，那么我们将使用 `1` 作为默认值。
4. 返回 `y` 的值。

* [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 点 和 解构

有趣的例子可以由阵列的扩展组成。 考虑这个：

```js
[...[...'...']].length // -> 3
```

### 💡 说明:

为什么是3？当我们使用扩展运算符 TODO链接到规范）时，`@@iterator` 方法调用，而返回的迭代器用于获取要迭代的值。字符串的默认迭代器按字符传播字符串。传播之后，我们把这些字符打包成一个数组。然后再展开这个数组并打包回数组

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

很多程序员不知道JavaScript中的标签。 但它们很实用

```js
foo: {
  console.log('first');
  break foo;
  console.log('second');
}

// > first
// -> undefined
```

### 💡 说明:

带标签的语句与 `break` 或 `continue` 语句一起使用。 您可以使用标签来标识循环，然后使用 `break` 或 `continue` 语句来指示程序是否应该中断循环或继续执行它。

在上面的例子中，我们识别一个标签 `foo` 。 然后 `console.log（'first'）;` 执行，然后中断执行。

详细了解JavaScript中的标签：

* [**13.13** 标签语句 ](https://tc39.github.io/ecma262/#sec-labelled-statements)
* [标签语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 嵌套标签

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 说明:

像以前的例子一样，请遵循以下链接：

* [**12.16** 逗号运算符(`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
* [**13.13** 标签语句](https://tc39.github.io/ecma262/#sec-labelled-statements)
* [标签语句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 阴险的 `try..catch`

这个表达将返回什么？ `2` 或 `3`？

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})()
```

答案是3。惊讶吗？

### 💡 说明:

* [**13.15** `try`声明 ](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## 这是多重继承吗？

看下面的例子：

```js
new (class F extends (String, Array) { }) // -> F []
```

这是多重继承吗？ 不。

### 💡 说明:

有趣的部分是 `extends` 子句的值（ `（String，Array）` ）。 分组运算符总是返回其最后一个参数，所以 `（String，Array）` 实际上只是 `Array`。 这意味着我们刚刚创建了一个扩展 `Array` 的类。

* [**14.5** 类定义 ](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
* [**12.16** 逗号运算符 (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## A generator which yields itself

考虑一下这个例子，它产生了一个生成器：

```js
(function* f() { yield f })().next()
// -> { value: [GeneratorFunction: f], done: false }
```

如您所见，返回的值是一个值等于 `f` 的对象。那样的话，我们可以做这样的事情：

```js
(function* f() { yield f })().next().value().next()
// -> { value: [GeneratorFunction: f], done: false }

// and again
(function* f() { yield f })().next().value().next().value().next()
// -> { value: [GeneratorFunction: f], done: false }

// and again
(function* f() { yield f })().next().value().next().value().next().value().next()
// -> { value: [GeneratorFunction: f], done: false }

// and so on
// …
```

### 💡 说明:

要理解为什么这样工作，请阅读规范的这些部分：

* [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
* [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## 内部类

考虑这个混淆的语法游戏：

```js
(typeof (new (class { class () {} }))) // -> 'object'
```

似乎我们在类内部声明了一个类。应该和错误，然而，我们得到一个 `'object'` 字符串。

### 💡 说明:

ECMAScript 5时代以来，关键字允许访问属性。所以请考虑一下这个简单的对象示例：

```js
const foo = {
  class: function() {}
};
```

和6标准速记方法定义。此外，类可能是匿名的。因此，如果我们放弃 `函数` 部分，我们将得到：

```js
class {
  class() {}
}
```

默认类的结果总是一个简单的对象。其类型应返回 `'object'` 。

在这里阅读更多

* [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
* [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## 非强制对象

有着名的符号，有一种方法可以摆脱类型的强制。 看一看：

```js
function nonCoercible(val) {
  if (val == null) {
    throw TypeError('nonCoercible should not be called with null or undefined')
  }

  const res = Object(val)

  res[Symbol.toPrimitive] = () => {
    throw TypeError('Trying to coerce non-coercible object')
  }

  return res
}
```

现在我们可以这样使用：

```js
// objects
const foo = nonCoercible({foo: 'foo'})

foo * 10      // -> TypeError: Trying to coerce non-coercible object
foo + 'evil'  // -> TypeError: Trying to coerce non-coercible object

// strings
const bar = nonCoercible('bar')

bar + '1'                 // -> TypeError: Trying to coerce non-coercible object
bar.toString() + 1        // -> bar1
bar === 'bar'             // -> false
bar.toString() === 'bar'  // -> true
bar == 'bar'              // -> TypeError: Trying to coerce non-coercible object

// numbers
const baz = nonCoercible(1)

baz == 1             // -> TypeError: Trying to coerce non-coercible object
baz === 1            // -> false
baz.valueOf() === 1  // -> true
```

### 💡 说明:

* [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
* [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
