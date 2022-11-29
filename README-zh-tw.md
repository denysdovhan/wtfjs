# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Patreon][patreon-image]][patreon-url]
[![Buy Me A Coffee][bmc-image]][bmc-url]

> 一個有趣和棘手的 JavaScript 示例列表。

JavaScript 是一個不錯的語言。它的語法簡單，生態系統也很龐大，最重要的是，它擁有最偉大的社區力量。

我們知道，JavaScript 是一個非常有趣的語言，但同時也充滿了各種奇怪的行為。這些奇怪的行為有時會搞砸我們的日常工作，有時則會讓我們忍俊不禁。

WTFJS 的靈感源於 [Brian Leroux](https://twitter.com/brianleroux)。這個列表受到他 [在 2012 年的 dotJS 上的演講 **“WTFJS”**](https://www.youtube.com/watch?v=et8xNAc2ic8) 的高度啟發：

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# 適用於 NodeJS 的指南手冊

你可以通過 `npm` 安裝該項目的指南手冊。只需運行：

```
$ npm install -g wtfjs
```

然後在命令行中運行 `wtfjs`，將會在命令行中打開手冊並跳轉至你選擇的頁數 `$PAGER`。這不是必需的步驟，你也可以繼續在這裡閱讀。

源碼在此處: <https://github.com/denysdovhan/wtfjs>

# 翻譯

如今，**wtfjs** 已被翻譯成多種語言:

- [简体中文](./README-zh-cn.md)
- [繁體中文](./README-zh-tw.md) 
- [हिंदी](./README-hi.md)
- [Français](./README-fr-fr.md)
- [Português do Brasil](./README-pt-br.md)
- [Polski](./README-pl-pl.md)
- [Italiano](./README-it-it.md)
- [Russian](https://habr.com/ru/company/mailru/blog/335292/) (on Habr.com)
- [한국어](./README-kr.md)

[**點此添加新的語言翻譯**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/blob/master/CONTRIBUTING.md#translations

**注意:** 翻譯由該語言的譯者維護，因此可能缺失部分例子，或存在過時的例子等。

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 初衷](#-%E5%88%9D%E8%A1%B7)
- [✍🏻 符號](#-%E7%AC%A6%E5%8F%B7)
- [👀 例子](#-%E4%BE%8B%E5%AD%90)
  - [`[]` 等於 `![]`](#-%E7%AD%89%E4%BA%8E-)
  - [`true` 不等於 `![]`，也不等於 `[]`](#true-%E4%B8%8D%E7%AD%89%E4%BA%8E-%E4%B9%9F%E4%B8%8D%E7%AD%89%E4%BA%8E-)
  - [true 是 false](#true-%E6%98%AF-false)
  - [baNaNa](#banana)
  - [`NaN` 不是 `NaN`](#nan-%E4%B8%8D%E6%98%AF-nan)
  - [奇怪的 `Object.is()` 和 `===`](#%E5%A5%87%E6%80%AA%E7%9A%84-objectis-%E5%92%8C-)
  - [它是 fail](#%E5%AE%83%E6%98%AF-fail)
  - [`[]` 是真值，但不等於 `true`](#-%E6%98%AF%E7%9C%9F%E5%80%BC%E4%BD%86%E4%B8%8D%E7%AD%89%E4%BA%8E-true)
  - [`null` 是假值，但又不等於 `false`](#null-%E6%98%AF%E5%81%87%E5%80%BC%E4%BD%86%E5%8F%88%E4%B8%8D%E7%AD%89%E4%BA%8E-false)
  - [`document.all` 是一个 object，但又同時是 undefined](#documentall-%E6%98%AF%E4%B8%80%E4%B8%AA-object%E4%BD%86%E5%8F%88%E5%90%8C%E6%97%B6%E6%98%AF-undefined)
  - [最小值大於零](#%E6%9C%80%E5%B0%8F%E5%80%BC%E5%A4%A7%E4%BA%8E%E9%9B%B6)
  - [函數不是函數](#%E5%87%BD%E6%95%B0%E4%B8%8D%E6%98%AF%E5%87%BD%E6%95%B0)
  - [數組相加](#%E6%95%B0%E7%BB%84%E7%9B%B8%E5%8A%A0)
- [數組中的尾逗號](#%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%B0%BE%E9%80%97%E5%8F%B7)
  - [數組的相等性是深水猛獸](#%E6%95%B0%E7%BB%84%E7%9A%84%E7%9B%B8%E7%AD%89%E6%80%A7%E6%98%AF%E6%B7%B1%E6%B0%B4%E7%8C%9B%E5%85%BD)
  - [`undefined` 和 `Number`](#undefined-%E5%92%8C-number)
  - [`parseInt` 是一个壞蛋](#parseint-%E6%98%AF%E4%B8%80%E4%B8%AA%E5%9D%8F%E8%9B%8B)
  - [`true` 和 `false` 的數字運算](#true-%E5%92%8C-false-%E7%9A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97)
  - [HTML 註釋在 JavaScript 中有效](#html-%E6%B3%A8%E9%87%8A%E5%9C%A8-javascript-%E4%B8%AD%E6%9C%89%E6%95%88)
  - [`NaN` ~~不是~~一个數值](#nan-%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E6%95%B0%E5%80%BC)
  - [`[]` 和 `null` 是對象](#-%E5%92%8C-null-%E6%98%AF%E5%AF%B9%E8%B1%A1)
  - [神奇的數字增長](#%E7%A5%9E%E5%A5%87%E7%9A%84%E6%95%B0%E5%AD%97%E5%A2%9E%E9%95%BF)
  - [`0.1 + 0.2` 精度計算](#01--02-%E7%B2%BE%E5%BA%A6%E8%AE%A1%E7%AE%97)
  - [擴展數字的方法](#%E6%89%A9%E5%B1%95%E6%95%B0%E5%AD%97%E7%9A%84%E6%96%B9%E6%B3%95)
  - [三個數字的比較](#%E4%B8%89%E4%B8%AA%E6%95%B0%E5%AD%97%E7%9A%84%E6%AF%94%E8%BE%83)
  - [有趣的數學](#%E6%9C%89%E8%B6%A3%E7%9A%84%E6%95%B0%E5%AD%A6)
  - [正則表達式的加法](#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E5%8A%A0%E6%B3%95)
  - [字符串不是 `String` 的實例](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8D%E6%98%AF-string-%E7%9A%84%E5%AE%9E%E4%BE%8B)
  - [用反引號調用函數](#%E7%94%A8%E5%8F%8D%E5%BC%95%E5%8F%B7%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0)
  - [到底 call 了誰](#%E5%88%B0%E5%BA%95-call-%E4%BA%86%E8%B0%81)
  - [`constructor` 屬性](#constructor-%E5%B1%9E%E6%80%A7)
  - [將對象做為另一個對象的 key](#%E5%B0%86%E5%AF%B9%E8%B1%A1%E5%81%9A%E4%B8%BA%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84-key)
  - [訪問原形 `__proto__`](#%E8%AE%BF%E9%97%AE%E5%8E%9F%E5%9E%8B-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [使用默認值解構](#%E4%BD%BF%E7%94%A8%E9%BB%98%E8%AE%A4%E5%80%BC%E8%A7%A3%E6%9E%84)
  - [點和擴展運算符](#%E7%82%B9%E5%92%8C%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [標籤](#%E6%A0%87%E7%AD%BE)
  - [嵌套標籤](#%E5%B5%8C%E5%A5%97%E6%A0%87%E7%AD%BE)
  - [陰險的 `try..catch`](#%E9%98%B4%E9%99%A9%E7%9A%84-trycatch)
  - [這是多重繼承嗎？](#%E8%BF%99%E6%98%AF%E5%A4%9A%E9%87%8D%E7%BB%A7%E6%89%BF%E5%90%97)
  - [yield 返回自身的生成器](#yield-%E8%BF%94%E5%9B%9E%E8%87%AA%E8%BA%AB%E7%9A%84%E7%94%9F%E6%88%90%E5%99%A8)
  - [類的類](#%E7%B1%BB%E7%9A%84%E7%B1%BB)
  - [不可轉換類型的對象](#%E4%B8%8D%E5%8F%AF%E8%BD%AC%E6%8D%A2%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%AF%B9%E8%B1%A1)
  - [棘手的箭頭函數](#%E6%A3%98%E6%89%8B%E7%9A%84%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
  - [箭頭函數不能作為建構函數](#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%8D%E8%83%BD%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0)
  - [`arguments` 和箭头函數](#arguments-%E5%92%8C%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
  - [棘手的返回](#%E6%A3%98%E6%89%8B%E7%9A%84%E8%BF%94%E5%9B%9E)
  - [對象的鏈式賦值](#%E5%AF%B9%E8%B1%A1%E7%9A%84%E9%93%BE%E5%BC%8F%E8%B5%8B%E5%80%BC)
  - [使用數組訪問對象屬性](#%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84%E8%AE%BF%E9%97%AE%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)
  - [`Number.toFixed()` 顯示不同的數字](#numbertofixed-%E6%98%BE%E7%A4%BA%E4%B8%8D%E5%90%8C%E7%9A%84%E6%95%B0%E5%AD%97)
  - [`min` 大於 `max`](#min-%E5%A4%A7%E4%BA%8E-max)
  - [比較 `null` 和 `0`](#%E6%AF%94%E8%BE%83-null-%E5%92%8C-0)
  - [相同變量重複聲明](#%E7%9B%B8%E5%90%8C%E5%8F%98%E9%87%8F%E9%87%8D%E5%A4%8D%E5%A3%B0%E6%98%8E)
  - [Array.prototype.sort() 的默認行為](#arrayprototypesort-%E7%9A%84%E9%BB%98%E8%AE%A4%E8%A1%8C%E4%B8%BA)
  - [resolve() 不會返回 Promise 實例](#resolve-%E4%B8%8D%E4%BC%9A%E8%BF%94%E5%9B%9E-promise-%E5%AE%9E%E4%BE%8B)
  - [`{}{}` 是 undefined](#-%E6%98%AF-undefined)
  - [`arguments` 綁定](#arguments-%E7%BB%91%E5%AE%9A)
  - [來自地域的 `alert`](#%E6%9D%A5%E8%87%AA%E5%9C%B0%E7%8B%B1%E7%9A%84-alert)
  - [沒有盡頭的計時](#%E6%B2%A1%E6%9C%89%E5%B0%BD%E5%A4%B4%E7%9A%84%E8%AE%A1%E6%97%B6)
  - [`setTimeout` 對象](#settimeout-%E5%AF%B9%E8%B1%A1)
  - [點點運算符](#%E7%82%B9%E7%82%B9%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [再 new 一次](#%E5%86%8D-new-%E4%B8%80%E6%AC%A1)
  - [你應該用上分號](#%E4%BD%A0%E5%BA%94%E8%AF%A5%E7%94%A8%E4%B8%8A%E5%88%86%E5%8F%B7)
  - [用空格分割（split）字符串](#%E7%94%A8%E7%A9%BA%E6%A0%BC%E5%88%86%E5%89%B2split%E5%AD%97%E7%AC%A6%E4%B8%B2)
  - [對字符串 stringify](#%E5%AF%B9%E5%AD%97%E7%AC%A6%E4%B8%B2-stringify)
  - [對數字和 `true` 的非嚴格相等比较](#%E5%AF%B9%E6%95%B0%E5%AD%97%E5%92%8C-true-%E7%9A%84%E9%9D%9E%E4%B8%A5%E6%A0%BC%E7%9B%B8%E7%AD%89%E6%AF%94%E8%BE%83)
- [其他資源](#%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90)
- [🤝 捐贈支持](#-%E6%8D%90%E8%B5%A0%E6%94%AF%E6%8C%81)
- [🎓 許可證](#-%E8%AE%B8%E5%8F%AF%E8%AF%81)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 初衷

> 只是因為好玩
>
> &mdash; _[**“只是為了好玩：一个意外革命的故事”**](https://en.m.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

這個列表的主要目的是收集一些瘋狂的例子，並儘可能解釋它們的原理。我很喜歡學習以前不了解的東西。

如果您是初學者，您可以根據此筆記深入了解 JavaScript。我希望它會激勵你在閱讀規範上投入更多時間和精力。

如果您是專業開發人員，您將從這些例子中看到人見人愛的 JavaScript 也充滿了非預期的邊界行為。

總之，古人云：三人行，必有我師焉。我相信這些例子總能讓你學習到新的知識。

> **⚠️ Note:** 如果這些例子幫助到你，請[務必贊助收集了這些例子的作者](#-supporting).

# ✍🏻 符号

**`// ->`** 表示表達式的結果。例如：

```js
1 + 1; // -> 2
```

**`// >`** 表示 `console.log` 等输出的結果。例如：

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** 則是用於解釋的註釋。例如：

```js
// 將一個函數賦值給 foo 常量
const foo = function() {};
```

# 👀 例子

## `[]` 等於 `![]`

數組等於一個數組取反：

```js
[] == ![]; // -> true
```

### 💡 說明：

抽象相等運算符會將其兩端的表達式轉換為數字值進行比較，儘管這個例子中，左右兩端均被轉換為 `0`，但原因各不相同。數組總是真值（truthy）,因此右值的數組取反後總是為 `false`，然後在抽象相等比較中被被類型轉換為 `0`。而左值則是另一種情形，空數組沒有被轉換為布爾值的話，儘管在邏輯上是真值（truthy），但在抽象相等比較中，會被類型轉換為數字 `0`。

該表達式的運算步驟如下：

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

了解更多：[`[]` 是真值，但並非 `true`](#-is-truthy-but-not-true).

- [**12.5.9** 邏輯非運算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 抽象相等比較 ](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` 不等於 `![]`，也不等於 `[]`

數組不等於 `true`，但數組取反也不等於 `true`；
數組等於 `false`數組取反也等於 `false`：

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 說明:

```js
true == []; // -> false
true == ![]; // -> false

// 根據規範

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

// 規具規範

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> true

![]; // -> false

false == false; // -> true
```

- [**7.2.15** 抽象相等比較](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

## true 是 false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 說明：

考慮以下步驟：

```js
// true 是真值（truthy），並且隱式轉換為數字1，而字符串 'true' 會被轉換為 NaN。
true == "true"; // -> false
false == "false"; // -> false

// 'false' 不是空字符串，所以它的值是 true
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** 抽象相等比較](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a";
```

這是用 JavaScript 寫的老派笑話，原版如下：

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 說明：

這個表達式可以轉化成 `'foo' + (+'bar')`，但無法將`'bar'`強制轉化成數值。

- [**12.8.3** 加法運算符 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 一元 + 運算符](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` 不是 `NaN`

```js
NaN === NaN; // -> false
```

### 💡 說明：

規範嚴格定義了這種行為背後的邏輯：

> 1. 如果 `Type(x)` 不同於 `Type(y)`，返回 **false**。
> 2. 如果 `Type(x)` 數值, 然後
>    1. 如果 `x` 是 **NaN**，返回 **false**。
>    2. 如果 `y` 是 **NaN**，返回 **false**。
>    3. ……
>
> &mdash; [**7.2.14** 嚴格模式相等比較 ](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

根據 IEEE 對 NaN 的定義：

> 有四種可能的相互排斥的關係：小於、等於、大於和無序。當比較操作中至少一個操作數是 NaN 時，便是無序的關係。換句話說，NaN 對任何事物包括其本身比較都應當是無序關係。
>
> &mdash; StackOverflow 上的 [“為什麼對於 IEEE754 NaN 值的所有比較返回 false？”](https://stackoverflow.com/questions/1565164/1573715#1573715)

## 奇怪的 `Object.is()` 和 `===`

`Object.is()` 用於判斷兩個值是否相同。和 `===` 操作符像作用類似，但它也有一些奇怪的行為：

```javascript
Object.is(NaN, NaN); // -> true
NaN === NaN; // -> false

Object.is(-0, 0); // -> false
-0 === 0; // -> true

Object.is(NaN, 0 / 0); // -> true
NaN === 0 / 0; // -> false
```

### 💡 说明:

在 JavaScript “語言”中，`NaN` 和 `NaN` 的值是相同的，但卻不是嚴格相等。`NaN === NaN` 返回 false 是因為歷史包袱，記住這個特例就行了。

基于同樣的原因，`-0` 和 `0` 是嚴格相等的，但它們的值卻不同。

關於 `NaN === NaN` 的更多細節，請參閱上一個例子。

- [這是 TC39 中關於 Object.is 的規範](https://tc39.es/ecma262/#sec-object.is)
- MDN 上的[相等比較與相同值比較](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## 它是 fail

你可能不會相信，但……

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 說明：

將大量的符號分解成片段，我們注意到，以下表达式经常出现：

```js
![] + []; // -> 'false'
![]; // -> false
```

所以我們嘗試將 `[]` 和 `false` 加起來。但是因為一些內部函數調用（`binary + Operator` - >`ToPrimitive` - >`[[DefaultValue]` ]），我們最終將右邊的操作數轉換為一個字符串：

```js
![] + [].toString(); // 'false'
```

將字符串作為數組，我們可以通過`[0]`來訪問它的第一個字符：

```js
"false"[0]; // -> 'f'
```

剩下的部分以此類推，不過此處的 `i` 字符是比較討巧的。 `fail` 中的 `i` 來自於生成的字符串 `falseundefined`，通過指定序號 `['10']` 取得的。

更多的例子：

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

- [燒腦預警：瘋狂的 JavaScript](http://patriciopalladino.com/blog/2012/08/09/non-alphanumeric-javascript.html)
- [寫個句子幹嘛要用字母](https://bluewings.github.io/en/writing-a-sentence-without-using-the-alphabet/#weird-javascript-generator) — 用 JavaScript 生成任意短語

## `[]` 是真值，但不等於 `true`

數組是一个真值，但卻不等於 `true`。

```js
!![]       // -> true
[] == true // -> false
```

### 💡 說明：

以下是 ECMA-262 規範中相應部分的鏈接：

- [**12.5.9** 邏輯非運算符 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 抽象相等比較](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` 是假值，但又不等於 `false`

僅管 `null` 是假值，但它不等於 `false`。

```js
!!null; // -> false
null == false; // -> false
```

但是，别的被當作假值的卻等於 `false`，如 `0` 或 `''`。

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 說明：

跟前面的例子相同。這是一个相應的鏈接：

- [**7.2.13** 抽象相等比较](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` 是一个 object，但又同時是 undefined

> ⚠️ 這是瀏覽器 API 的一部分，對於 Node.js 環境無敵 ⚠️

僅管 document.all 是一個類數組對象（array-like object），並且通過它可以訪問頁面中的 DOM 節點，但在通過 `typeof` 的檢測結果是 `undefined`。

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

同時，`document.all` 不等於 `undefined`。

```js
document.all === undefined; // -> false
typeof document.all; // -> 'undefined'
```

但是同時，`document.all` 不等於 `undefined`：

```js
document.all === undefined; // -> false
document.all == null; // -> true
```

不過：

```js
document.all == null; // -> true
```

### 💡 說明：

> `document.all` 作為訪問頁面 DOM 節點的一種方式，在早期版本的 IE 瀏覽器中較為流行。儘管這一 API 從未成為標準，但被廣泛使用在早期的 JS 代碼中。當標準演變出新的 API（例如 `document.getElementById`）時，這個 API 調用就被廢棄了。因為這個 API 的使用範圍較為廣泛，標準委員會決定保留這個 API，但有意地引入一個違反 JavaScript 標準的規範。
> 這個有意的對違反標準的規范明確地允許該 API 與 `undefined` 使用[嚴格相等比較](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)得出 `false` 而使用[抽象相等比較](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) 得出 `true`。
>
> &mdash; [“廢棄功能 - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; YDKJS（你不懂 JS） - 類型與語法 中的 [“第 4 章 - ToBoolean - 假值](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects)

## 最小值大於零

`Number.MIN_VALUE` 是最小的數字，大於零：

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 說明：

> `Number.MIN_VALUE` 是 `5e-324`，即可以在浮點精度内表示的最小正数，也是在該精度内無限接近零的數字。它定義了浮點數的最高精度。

> 現在，整體最小的值是 `Number.NEGATIVE_INFINITY`，儘管這在嚴格意義上並不是真正的數字。
>
> &mdash; StackOverflow 上的[“為甚麼在 JavaScript 中 `0` 小於 `Number.MIN_VALUE`？”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript)

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 函數不是函數

> ⚠️ V8 v5.5 或更低版本中出現的 Bug（Node.js <= 7） ⚠️

大家都知道 _undefined 不是 function_ 對吧？但是你知道這個嗎？

```js
// 聲明一個繼承null的類
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 說明：

這不是規範的一部分。這只是一个缺陷，且已經修復了。所以將來不會有這個問題。

### Super constructor null of Foo is not a constructor (Foo 的超類的構造函數 null 不是構造函數)

這是前述缺陷的後續行為，在現代環境中可以復現（在 Chrome 71 和 Node.js v11.8.0 測試成功）。

```js
class Foo extends null {}
new Foo() instanceof null;
// > TypeError: Super constructor null of Foo is not a constructor
```

### 💡 說明：

這並不是缺陷，因為：

```js
Object.getPrototypeOf(Foo.prototype); // -> null
```

若當前類沒有構造函數，則在構造該類時會順次調用其原型鏈上的構造函數，而本例中其父類沒有構造函數。補充一下，`null` 也是一个 `object`：

```js
typeof null === "object";
```

因此，你可以繼承 `null`（僅管在面向對象编程的世界里這是不允許的），但是卻不能調用 `null` 的構造函數。若你把代碼改成這樣：

```js
class Foo extends null {
  constructor() {
    console.log("something");
  }
}
```

將會報錯：

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// 引用錯誤：在訪問`this`或返回之前，你需要在子類中先調用super構造函數
```

但是當你加上 `super` 時：

```js
class Foo extends null {
  constructor() {
    console.log(111);
    super();
  }
}
```

JS 抛出錯誤：

```
TypeError: Super constructor null of Foo is not a constructor
// 類型錯誤：Foo的超類的構造函數null不是構造函數
```

- [@geekjob](https://github.com/geekjob) 發布的 [對問题的解釋](https://github.com/denysdovhan/wtfjs/pull/102#discussion_r259143582)

## 數組相加

如果你嘗試將兩個數組相加：

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 說明：

數據之間會發生串聯。步驟如下：

```js
[1, 2, 3] +
  [4, 5, 6][
    // 调用 toString()
    (1, 2, 3)
  ].toString() +
  [4, 5, 6].toString();
// 串联
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

# 數組中的尾逗號

假設你想要創建了一个包含 4 个空元素的數組。如下所示，最終只能得到一个包含三個元素的數組，原因在於尾逗號：

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 說明：

> **尾逗號** （trailing commas，有時也稱為“最后逗號”（final commas）） 在向 JavaScript 代碼中添加新元素、参數或屬性時非常有用。如果您想添加一个新屬性，若前一行已經有尾逗號，你无需修改前一行，只要添加一個新一行並加上尾逗號即可。這使得版本控制歷史較為乾淨，編輯代碼也很簡單。
>
> &mdash; MDN 上的 [尾逗號](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

## 數組的相等性是深水猛獸

數組之間進行相等比較是 JS 中的深水猛獸，看看這些例子：

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

### 💡 說明：

仔細閱讀上面的例子！規範中的 [**7.2.13** 抽象相等比較](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) 一節描述了這些行為。

## `undefined` 和 `Number`

無參數調用 `Number` 構造函數會返回 `0`。我們知道，當函數沒有接受到指定位置的實際參數時，該處的形式參數的值會是 `undefined`。因此，你可能覺得當我們傳入 `undefined` 時應當同樣返回 `0`。然而實際上傳入 `undefined` 返回的是 `NaN`。

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 說明：

根據規範：

1. 若無參數調用該函數，`n` 將為 `+0`。
2. 否則，`n` 將為？ `ToNumber(value)`。
3. 如果值為 `undefined`，`ToNumber(undefined)` 應該返回 `NaN`。

這是相應的部分：

- [**20.1.1** Number 構造函數 ](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` 是一個壞蛋

`parseInt` 以它的怪異而出名。

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 說明：**
這是因為 `parseInt` 會持續解析直到它解析到一個不識別的字符，`'f*ck'` 中的 `f` 是 16 進制下的 `15`。

解析 `Infinity` 到整數也很有意思……

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

**💡 說明：**

> 它將 `null` 轉換成字符串 `'null'`，並嘗試轉換它。對於基數 0 到 23，沒有可以轉換的數字，因此返回 NaN。而當基數為 24 時，第 14 個字母`“n”`也可以作數字用。當基數為 31 時，第 21 個字母`“u”`進入數字的行列，此時整個字符串都可以解析了。而當基數增加到 37 以上，已經超出了數字和字母所能表達的數字範圍，因此一律返回 `NaN`。
>
> &mdash; StackOverflow 上的 [“parseInt(null, 24) === 23 什么鬼”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what)

不要忘记八進制：

```js
parseInt("06"); // 6
parseInt("08"); // 8 如果支持 ECMAScript 5
parseInt("08"); // 0 如果不支持 ECMAScript 5
```

**💡 說明：**
當輸入的字符串以“0”開始時，根據實現的不同，會被解釋為八進製或十進制。 ECMAScript 5 明確表示應當使用十進制，但有部分瀏覽器仍不支持。因此推薦在調用 `parseInt` 函數時總是傳入表示基數的第二個參數。

`parseInt` 會先將參數值轉換為字符串：

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

解析浮點數的時候要注意

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 說明：** `parseInt` 接受字符串參數並返回一個指定基數下的整數。 `parseInt` 會將字符串中首個非數字字符（字符集由基數決定）及其後的內容全部截斷。如 `0.000001` 被轉換為 `"0.000001"`，因此 `parseInt` 返回 `0`。而 `0.0000001` 轉換為字符串會變成 `"1e-7"`，因此 `parseInt` 返回 `1`。 `1/1999999` 被轉換為 `5.00000250000125e-7`，所以 `parseInt` 返回 `5`。
## `true` 和 `false` 的數學運算

做一下數學計算：

```js
true + true; // -> 2
(true + true) * (true + true) - true; // -> 3
```

嗯……🤔

### 💡 說明：

我們可以用 `Number` 構造函數將值強制轉化成數值。很明顯，`true` 將被強制轉換為 `1` ：

```js
Number(true); // -> 1
```

一元加運算符會嘗試將其值轉換成數字。它可以轉換字符串形式表達的整數和浮點數，以及非字符串值 `true`、`false` 和 `null`。如果它不能解析特定的值，它將轉化為 `NaN`。這意味著我們可以有更簡便的方式將 `true` 轉換成 `1`：

```js
+true; // -> 1
```

當你執行加法或乘法時，將會 `ToNumber` 方法。根據規範，該方法的返回值為：

> 如果`參數`是 **true**，返回 **1**。如果`參數`是 **false**，則返回 **+0**。

因此我們可以將布爾值相加並得到正確的結果

相應章節：

- [**12.5.6** 一元 `+` 運算符 ](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** 加法運算符（`+`） ](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML 註釋在 JavaScript 中有效

你可能會感到震驚，`<!--` (這是 HTML 註釋格式）也是一个有效的 JavaScript 註釋。

```js
// 有效註釋
<!-- 也是有效的註釋
```

### 💡 說明：

震驚嗎？類 HTML 註釋旨在容許不理解 `<script>` 標籤的瀏覽器優雅降級。這些瀏覽器，例如 Netscape 1.x 已經不再流行。因此，在腳本標記中添加 HTML 註釋是沒有意義的。

由於 Node.js 基於 V8 引擎，Node.js 運行時也支持類似 HTML 的註釋。而且，它們是規範的一部分：

- [**B.1.3** 類 HTML 註釋 ](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` ~~不是~~一个數值

`NaN` 類型是 `'number'`：

```js
typeof NaN; // -> 'number'
```

### 💡 說明：

`typeof` 和 `instanceof` 運算符的工作原理：

- [**12.5.5** `typeof` 操作符](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** 運行時語法：InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` 和 `null` 是對象

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// 然而
null instanceof Object; // false
```

### 💡 說明：

`typeof` 運算符的行為在本節的規範中定義：

- [**13.5.3** `typeof` 操作符](https://262.ecma-international.org/12.0/#sec-typeof-operator)

根據規範，`typeof` 操作符返回一個字符串，且必須符合 [Table 37: `typeof` 操作符 返回值](https://262.ecma-international.org/12.0/#table-typeof-operator-results)。對於沒有實現 `[[Call]]` 的 `null`、普通對象、標準特異對象和非標準特異對象，它返回字符串 `"object“`。

但是，你可以使用 `toString` 方法檢查對象的類型。
```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## 神奇的數字增長

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 說明：

這是由 IEEE 754-2008 二進制浮點運算標準引起的。極大的數字會被四捨五入到最近的偶數。閱讀更多：

- [**6.1.6** 數字類型](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- 维基百科上的 [IEEE 754](https://en.m.wikipedia.org/wiki/IEEE_754)

## `0.1 + 0.2` 精度计算

來自 JavaScript 的知名笑話。`0.1` 和 `0.2` 相加是存在精度錯誤的

```js
0.1 + 0.2; // -> 0.30000000000000004
0.1 + 0.2 === 0.3; // -> false
```

### 💡 說明：

來自於 StackOverflow 上的問題[“浮點計算壞了？”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken)的答案：

> 程序中的常量 `0.2` 和 `0.3` 是最接近真實值的近似值。最接近 `0.2` 的 `double` 大於有理數 `0.2`，但最接近 `0.3` 的 `double` 小於有理數 `0.3`。 `0.1` 和 `0.2` 的和大於有理數 `0.3`，因此在程序中進行常量比較會得到假。

這個問題太過於出名，甚至有一個網站叫 [0.30000000000000004.com](http://0.30000000000000004.com/)。這不僅僅是 JavaScript 特有的問題，在其他採用浮點計算的語言中也廣泛存在。

## 擴展數字的方法

你可以向包裝對象添加自己的方法，比如 `Number` 或 `String`。

```js
Number.prototype.isOne = function() {
  return Number(this) === 1;
};

(1.0).isOne(); // -> true
(1).isOne(); // -> true
(2.0).isOne(); // -> false
(7).isOne(); // -> false
```

### 💡 說明：

顯然，在 JavaScript 中擴展 `Number` 對象和擴展其他對象並無不同之處。但是，擴展不符合規範的函數行為是不推薦的。以下是 `Number` 屬性的列表：

- [**20.1** Number 對象](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## 三個數字的比較

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 說明：

為什麼會這樣呢？其實問題在於表達式的第一部分。以下是它的工作原理：

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

我們可以用 _大於或等於運算符（`>=`）_：

```js
3 > 2 >= 1; // true
```

詳細了解規範中的關係運算符：

- [**12.10** 关系操作符](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## 有趣的數學

通常 JavaScript 中的算術運算的結果可能是非常難以預料的。考慮這些例子：

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

### 💡 說明：

前四個例子發生了什麼？你可以參考此處的給出的關於 JavaScript 中的加法的對照表：

```
Number  + Number  -> 加法
Boolean + Number  -> 加法
Boolean + Boolean -> 加法
Number  + String  -> 串聯字符串
String  + Boolean -> 串聯字符串
String  + String  -> 串聯字符串
```

那其他例子呢？在相加之前，`[]` 和 `{}` 隱式調用 `ToPrimitive` 和 `ToString` 方法。詳細了解規範中的求值過程：

- [**12.8.3** 加法操作符 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

不過需要注意此處的 `{} + []`，這是一個例外。你可以發現它的求值結果與 `[] + {}` 不同，這是因為當我們不加括號時，它被當作是一個空的代碼塊和一個一元加法運算符，這個運算符會把其後的 `[]` 轉換為數字。具體如下：

```js
{
  // 代碼塊
}
+[]; // -> 0
```

當我們加上括號，情況就不一樣了：

```js
({} + []); // -> [object Object]
```

## 正則表達式的加法

你知道可以做這樣的運算嗎？

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 說明：

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## 字符串不是 `String` 的實例

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 說明：

`String` 構造函數返回一个字符串：

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

再試試 `new`：

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

對象？啥玩意？

```js
new String("str"); // -> [String: 'str']
```

有關規範中的 String 構造函數的更多信息：

- [**21.1.1** String 构造函数](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## 用反引號調用函數

我們來聲明一個返回所有參數的函數：

```js
function f(...args) {
  return args;
}
```

你肯定知道調用這個函數的方式應當是：

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

但是你知道你還可以使用反引號調用任意函數嗎？

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 說明：

其實，如果你熟悉 _標籤模板字面量_，你會知道這不是什麼魔法。在上面的例子中，`f` 函數是模板字面量的標籤。你可以定義這個標籤以使用函數解析模板文字。標籤函數的第一個參數是包含字符串的數組，剩餘的參數與表達式有關。例：

```js
function template(strings, ...keys) {
  // 操作字符串和鍵值
}
```

這也是在 React 社區很流行的庫[💅 styled-components](https://www.styled-components.com/)的[背後的秘密](http://mxstbr.blog/2016/11/styled-components-magic-explained/)。

規範的鏈接：

- [**12.3.7** 標籤模板](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## 到底 call 了誰

> 由 [@cramforce](http://twitter.com/cramforce) 發現

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 說明：

注意，這可能會擊碎你的三觀！嘗試在您的頭腦中重現此代碼：我們使用 `apply` 方法調用 `call` 方法。閱讀更多：

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## `constructor` 屬性

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 說明：

讓我們逐步分解這個例子：

```js
// 聲明一個新的常量字符串 'constructor'
const c = "constructor";

// c 是一个字符串
c; // -> 'constructor'

// 獲取字符串的構造函數
c[c]; // -> [Function: String]

// 獲取構造函數的構造函數
c[c][c]; // -> [Function: Function]

// 調用函數構造函數並將新函數的主體作為參數傳遞
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// 然後調用這個匿名函數得到的結果是一個字符串 'WTF'
c[c][c]('console.log("WTF?")')(); // > WTF
```

`Object.prototype.constructor` 返回一個創建示例對象的 `Object` 構造函數引用。噹噹前對像是字符串時，它是 `String`；噹噹前對像是數字時，它是 `Number`；以此類推。

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## 將對像做為另一個對象的 key

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 說明：

為何可以正常運行？這裡我們使用的是 _計算屬性_。當你將對像用方括號括起來當作對象的屬性名時，它會將對象強制轉換成一個字符串，所以我們得到屬性鍵是 `[object Object]`，其值為 `{}`。

體驗一下簡單的“括號地獄”：

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// 結構:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

關於對象字面量，點擊這裡閱讀更多：

- [对象初始化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 訪問原型 `__proto__`

我們知道，原始數據（premitives）是沒有原型的。但是，如果我們嘗試獲取原始數據的 `__proto__` 屬性的值，我們會得到這樣的一個結果：

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 說明：

這是因為原始數據的沒有原型，它將使用 `ToObject` 方法包裝在包裝器對像中。這個步驟如下所示：

```js
(1).__proto__; // -> [Number: 0]
(1).__proto__.__proto__; // -> {}
(1).__proto__.__proto__.__proto__; // -> null
```

以下是關於 `__proto__`的更多信息：

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

下面的表達式結果如何？

```js
`${{ Object }}`;
```

答案是：

```js
// -> '[object Object]'
```

### 💡 說明：

我們通過 _簡寫屬性表示_ 使用一個 `Object` 屬性定義了一個對象：

```js
{
  Object: Object;
}
```

然後我們將該對像傳遞給模板文字，`toString` 方法調用該對象。這就是為什麼我們得到字符串 `'[object Object]'`。

- [**12.2.9** 模板字面量](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- MDN 上的 [對象初始化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## 使用默認值解構

考慮這個例子：

```js
let x,
  { x: y = 1 } = { x };
y;
```

這在面試中是一個很好的問題。問 `y` 的值是什麼？答案是：

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

1. 我們聲明了 `x`，但沒有立刻賦值，所以它是 `undefined`。
2. 我們將 `x` 的值打包到對象屬性 `x` 中。
3. 我們使用解構來提取 `x` 的值，並且要將這個值賦給 `y`。如果未定義該值，那麼我們將使用 `1` 作為默認值。
4. 返回 `y` 的值。

- MDN 上的 [對像初始化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## 點和擴展運算符

數組的擴展可以組成有趣的例子。考慮這個：

```js
[...[..."..."]].length; // -> 3
```

### 💡 說明：

為什麼是 3？當我們使用[擴展運算符](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer)時，`@@iterator` 方法會被調用，而返回的迭代器用於獲取要迭代的值。字符串的默認迭代器按字符展開字符串。展開之後，我們把這些字符打包成一個數組。然後再展開這個數組並再打包回數組。

一個 `'...'` 字符串包含 `.` ，所以結果數組的長度將 `3`。

現在，一步一步的看：

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

顯然，我們可以展開和包裝數組的元素任意多次，只要你想：

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// 以此類推 …
```

## 標籤

很多程序員不知道 JavaScript 中也有標籤，並且很有趣：

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 說明：

帶標籤的語句與 `break` 或 `continue` 語句一起使用。您可以使用標籤來標識循環，然後使用 `break` 或 `continue` 語句來指示程序是否應該中斷循環或繼續執行它。

在上面的例子中，我們識別一個標籤 `foo`。然後 `console.log（'first'）;` 執行，然後中斷執行。

詳細了解 JavaScript 中的標籤：

- [**13.13** 標籤語句 ](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [標籤語句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 嵌套標籤

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 說明：

和上面的例子類似，請遵循以下鏈接：

- [**12.16** 逗號運算符(`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** 標籤語句](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [標籤語句](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 陰險的 `try..catch`

這個表達式將返回什麼？ `2` 還是 `3`？

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

答案是 `3`。驚訝嗎？

### 💡 說明：

- [**13.15** `try` 語句](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## 這是多重繼承嗎？

看下面的例子：

```js
new class F extends (String, Array) {}(); // -> F []
```

這是多重繼承嗎？不。

### 💡 說明：

有趣的部分是 `extends` 子句的值（`（String，Array）`）。分組運算符總是返回其最後一個參數，所以 `（String，Array）` 實際上只是 `Array`。這意味著我們剛剛創建了一個擴展 `Array` 的類。

- [**14.5** 類定義 ](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** 逗號運算符 (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## yield 返回自身的生成器

考慮這個 yield 返回自身的生成器例子：

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

如您所見，返回的值是一個值等於 `f` 的對象。那樣的話，我們可以做這樣的事情：

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

// 以此類推
// …
```

### 💡 說明：

要理解為什麼這樣工作，請閱讀規範的這些部分：

- [**25** 控制流抽像對象](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** 生成器對象](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## 類的類

考慮這個混淆語法：

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

似乎我們在類內部聲明了一個類。應該是個錯誤，然而，我們得到一個 `'object'` 字符串。

### 💡 說明：

ECMAScript 5 時代以來，允許 _關鍵字_ 作為 _屬性名稱_。請看下面這個簡單的對象示例：

```js
const foo = {
  class: function() {}
};
```

還有 ES6 標準中的簡寫方法定義。此外，類也可以是匿名的。因此，如果我們刪去 `: function` 部分，將會得到：

```js
class {
  class() {}
}
```

默認類的結果總是一個簡單的對象。其類型應返回 `'object'` 。

在這裡閱讀更多

- [**14.3** 方法定義](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** 類定義](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## 不可轉換類型的對象

有一種方法可以擺脫類型的轉換，那就是使用內置符號：

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

現在我們可以這樣使用 :

```js
// 對象
const foo = nonCoercible({ foo: "foo" });

foo * 10; // -> TypeError: Trying to coerce non-coercible object
foo + "evil"; // -> TypeError: Trying to coerce non-coercible object

// 字符串
const bar = nonCoercible("bar");

bar + "1"; // -> TypeError: Trying to coerce non-coercible object
bar.toString() + 1; // -> bar1
bar === "bar"; // -> false
bar.toString() === "bar"; // -> true
bar == "bar"; // -> TypeError: Trying to coerce non-coercible object

// 數字
const baz = nonCoercible(1);

baz == 1; // -> TypeError: Trying to coerce non-coercible object
baz === 1; // -> false
baz.valueOf() === 1; // -> true
```

### 💡 說明：

- [Sergey Rubanov 的 gist](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** 内置符號](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 棘手的箭头函數

考慮下面的例子：

```js
let f = () => 10;
f(); // -> 10
```

這看起來沒問題，但是如果這樣呢？

```js
let f = () => {};
f(); // -> undefined
```

### 💡 說明：

你可能覺得應該返回 `{}` 而不是 `undefined`。這是因為花括號是箭頭函數語法的一部分，所以 `f` 會返回 `undefined`。不過要從箭頭函數明確返回 `{}` 對像也是有可能的，這時你需要用括號把返回值括起來。

```js
let f = () => ({});
f(); // -> {}
```

## 箭頭函數不能作為構造函數

考慮下面的例子：

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

現在，試著用箭頭函數做同樣的事情：

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 說明：

箭頭函數不能作為構造函數調用，並且會在 `new` 的時候拋出錯誤。因為它具有詞域 `this`，而且它也沒有 `prototype` 屬性，所以這樣做沒什麼意義。

## `arguments` 和箭頭函數

考慮下面的例子：

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

現在，試著用箭頭函數做同樣的事情：

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 說明：

箭頭函數是常規函數的輕量級版本，注重於短小和詞域 `this`。同時箭頭函數不提供 `arguments` 對象的綁定。你可以使用 `剩餘參數（rest parameters）` 來得到同樣的結果：

```js
let f = (...args) => args;
f("a");
```

- MDN 上的 [箭頭函數](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 棘手的返回

`return` 語句是很棘手的. 看下面的代碼:

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

### 💡 說明：

`return` 和返回的表達式必須在同一行:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

這是因為一個叫自動分號插入的概念，它會在大部分換行處插入分號。第一個例子裡，`return` 語句和對象字面量中間被插入了一個分號。所以函數返回 `undefined`，其後的對象字面量永遠不會被求值。

- [**11.9.1** 自動分號插入的規則](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** `return` 語句](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## 對象的鍊式賦值

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

從右到左，`{n: 2}` 被賦值給 `foo`，而此賦值的結果 `{n: 2}` 被賦值給 `foo.x`，因此 `bar` 是 `{n: 1, x: {n: 2}}`，畢竟 `bar` 是 `foo` 的一個引用。但為什麼 `foo.x` 是 `undefined` 而 `bar.x` 不是呢？

### 💡 說明：

`foo` 和 `bar` 引用同一個對象 `{n: 1}`，而左值在賦值前解析。 `foo = {n: 2}` 是創建一個新對象，所以 `foo` 被更新為引用那個新的對象。因為 `foo.x = ...` 中的 `foo` 作為左值在賦值前就被解析並依然引用舊的 `foo = {n: 1}` 對象並為其添加了 `x` 值。在鍊式賦值之後，`bar` 依然引用舊的 `foo` 對象，但 `foo` 更新為沒有 `x` 屬性的 `{n: 2}` 對象。

它等價於：

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x 指向新的 foo 對象的地址
// 這不等價於：bar.x = {n: 2}
```

## 使用數組訪問對象屬性

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

那關於偽多維數組創建對象呢？

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

### 💡 說明：

`[]` 操作符會使用 `toString` 將傳遞的表達式轉換為字符串。將單元素數組轉換為字符串，相當於將這個元素轉換為字符串：

```js
["property"].toString(); // -> 'property'`
```

## `Number.toFixed()` 顯示不同的數字

`Number.toFixed()` 在不同的瀏覽器中會表現得有點奇怪。看看這個例子：

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

### 💡 說明：

儘管你的第一直覺可能是 IE11 是正確的而 Firefox/Chrome 錯了，事實是 Firefox/Chrome 更直接地遵循數字運算的標準（IEEE-754 Floating Point），而 IE11 經常違反它們（可能）去努力得出更清晰的結果。

你可以通過一些快速的測試來了解為什麼它們發生：

```js
// 確認 5 向下取整的奇怪結果
(0.7875).toFixed(3); // -> 0.787
// 當你展開到 64 位（雙精度）浮點數準確度限制時看起來就是一個 5
(0.7875).toFixed(14); // -> 0.78750000000000
// 但如果你超越這個限制呢？
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

浮點數在計算機內部不是以一系列十進制數字的形式存儲的，而是通過一個可以產生一點點通常會被 toString 或者其他調用取整的不准確性的更複雜的方法，但它實際上在內部會被表示。

在這裡，那個結尾的 "5" 實際上是一個極其小的略小於 5 的分數。將其以任何常理的長度取整它都會被看作一個 5，但它在內部通常不是 5。

然而 IE11 會直接在這個數字後面補 0，甚至在 toFixed(20) 的時候也是這樣，因為它看起來強制取整了值來減少硬件限制帶來的問題。

詳見 ECMA-262 中 `NOTE 2` 的 `toFixed` 的定義。

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `min` 大於 `max`

我發現一個神奇的例子：

```js
Math.min() > Math.max(); // -> true
Math.min() < Math.max(); // -> false
```

### 💡 說明：

這是一個簡單的例子。我們一步一步來：

```js
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Infinity > -Infinity; // -> true
```

為什麼是這樣呢？其實 `Math.max()` 並不會返回最大的正數，即 `Number.MAX_VALUE`。

`Math.max` 接受兩個參數，將它們轉換到數字，比較之後返回最大的那個。若沒有傳入參數，結果將是 -∞。若參數中存在 `NaN`，則返回 `NaN`。

反過來，當 `Math.min` 沒有傳入參數，會返回 ∞。

- [**15.8.2.11** Math.max](https://262.ecma-international.org/5.1/#sec-15.8.2.11)
- [**15.8.2.11** Math.min](https://262.ecma-international.org/5.1/#sec-15.8.2.12)
- [為什麼 `Math.max()` 小於 `Math.min()`？ ](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min)## `Math.max()` 小於 `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 說明：

- Charlie Harvey 的 [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min)

## 比較 `null` 和 `0`

下面的表達式似乎有點矛盾：

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

既然 `null >= 0` 返回 `true`，為什麼 `null` 既不等於也不大於 `0`？ （對於小於比較也可以得出相似的結果。）

### 💡 說明：

這三個表達式的求值方式各不相同，因此產生了非預期的結果。
首先，對於 `null == 0` 這個抽象相等比較操作，通常當該運算符不能正確地比較兩邊的值，則它會將兩邊的值都轉換為數字，再對數字進行比較。那麼，您可能會期望以下行為：

```js
// 事實並非如此
(null == 0 + null) == +0;
0 == 0;
true;
```

然而，仔細閱讀規範就會發現，數字轉換實際上並沒有發生在 `null` 或 `undefined` 的一側。也就是說，如果在等號的一側有 `null`，則當另一側的表達式為 `null` 或 `undefined`就返回 `true`；反之則返回 `false`。

接下來，對於 `null > 0` 這個比較關係。與抽象相等運算符的算法不同，它 _會_ 先將 `null` 轉換為一個數字。因此，我們得到這樣的行為:

```js
null > 0
+null = +0
0 > 0
false
```

最後一個，對於 `null >= 0` 的比較關係。你可能認為這個表達式應該等同於 `null > 0 || null == 0` 的結果；如果真是這樣，那麼基於上述的討論，這裡的結果也應當是 `false` 才對。然而，`>=` 操作符的工作方式實際上是 `<` 操作符的取反。在我們上述的討論中，關於大於運算符的論述也適用於小於運算符，也就是說這個表達式的值是這樣出來的：

```js
null >= 0;
!(null < 0);
!(+null < +0);
!(0 < 0);
!false;
true;
```

- [**7.2.12** 抽象關係比較](https://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison)
- [**7.2.13** 抽象相等比較](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)
- [一篇深入淺出的說明](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274)

## 相同變量重複聲明

JS 允許重複聲明變量：

```js
a;
a;
// 這也是有效的
a, a;
```

嚴格模式也可以運行：

```js
var a, a, a;
var a;
var a;
```

### 💡 解釋：

所有的定義都被合併成一條定義。

- [**13.3.2** 變量表達式](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Array.prototype.sort() 的默認行為

假設你需要對數組排序。

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 說明：

默認的排序算法基於將給定元素轉換為字符串，然後比較它們的 UTF-16 序列中的值。

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### 提示

傳入一個 `compareFn` 比較函數，對非字符串的其他值排序。

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

## resolve() 不會返回 Promise 實例

```javascript
const theObject = {
  a: 7
};
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Promise 實例對象

thePromise.then(value => {
  console.log(value === theObject); // -> true
  console.log(value); // -> { a: 7 }
});
```

從 `thePromise` 接收到的 `value` 值確實是 `theObject`。

那麼，如果向 `resolve` 傳入另外一個 `Promise` 會怎樣？

```javascript
const theObject = new Promise((resolve, reject) => {
  resolve(7);
}); // -> Promise 實例對象
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Promise 實例對象

thePromise.then(value => {
  console.log(value === theObject); // -> false
  console.log(value); // -> 7
});
```

### 💡 說明：

> 此函數將類 promise 對象的多層嵌套平鋪到單層嵌套。 （例如上述的 promise 函數 resolve 了另一個會 resolve 出其他對象的 promise 函數）

&ndash; [MDN 上的 Promise.resolve()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

官方規範是 [ECMAScript 25.6.1.3.2 Promise 的 Resolve 函數](https://tc39.es/ecma262/#sec-promise-resolve-functions)，但是這一章節對人類非常不友好。

## `{}{}` 是 undefined

你可以在終端測試一下。類似這樣的結構會返回最後定義的對像中的值。

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

### 💡 说明：

解析到 `{}` 會返回 `undefined`，而解析 `{foo: 'bar'}{}`時，表達式 `{foo: 'bar'}` 返回 `'bar'`。

`{}` 有兩重含義：表示對象，或表示代碼塊。例如，在 `() => {}` 中的 `{}` 表示代碼塊。所以我們必須加上括號：`() => ({})` 才能讓它正確地返回一個對象。

因此，我們現在將 `{foo: 'bar'}` 當作代碼塊使用，則可以在終端中這樣寫：

```js
if (true) {
  foo: "bar";
} // -> 'bar'
```

啊哈，一樣的結果！所以 `{foo: 'bar'}{}` 中的花括號就是表示代碼塊。

## `arguments` 綁定

考慮以下函數：

```js
function a(x) {
  arguments[0] = "hello";
  console.log(x);
}

a(); // > undefined
a(1); // > "hello"
```

### 💡 說明

`arguments` 是一個類數組對象，包含了所有傳入當前函數的參數。當沒有傳入參數時，該對像中就不存在 `x` 屬性，也就無法覆蓋。

- [arguments 對象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) on MDN

## 來自地獄的 `alert`

如題，從地獄而來的代碼：

```js
[666]["\155\141\160"]["\143\157\156\163\164\162\165\143\164\157\162"](
  "\141\154\145\162\164(666)"
)(666); // alert(666)
```

### 💡 說明

這一串代碼是基於多個採用了八進制轉義序列的字符串構造的。

任何碼值小於 256 的字符（又稱擴展 ASCII 碼表域）都可以用 `\` 加上其八進制代碼的轉義方式寫出來。上面這個簡單的例子就是將 `alert` 編碼到八進制轉義序列。

- [Martin Kleppe 的推特](https://twitter.com/aemkei/status/897172907222237185)
- [JavaScript 字符轉義序列](https://mathiasbynens.be/notes/javascript-escapes#octal)
- [多行 JavaScript 字符串](https://davidwalsh.name/multiline-javascript-strings)

## 沒有盡頭的計時

如果我們對 `setTimeout` 賦予無限大會如何？

```js
setTimeout(() => console.log("called"), Infinity); // -> <timeoutId>
// > 'called'
```

結果是，它會立即運行，並沒有等待無限長的時間。

### 💡 說明：

通常運行時內部會將延時存儲為一個 32 位的有符號整數，而上述代碼會導致運行時在解析延時參數時發生整數溢出，從而使函數立即執行而不等待。

例如，在 Node.js 中我們可以看到這樣的警告信息：

```
(node:1731) TimeoutOverflowWarning: Infinity does not fit into a 32-bit signed integer.
Timeout duration was set to 1.
(Use `node --trace-warnings ...` to show where the warning was created)
```

- [WindowOrWorkerGlobalScope.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) on MDN
- [Node.js 文檔中關於計時器的章節](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args)
- W3C 上的 [計時器]](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html)

## `setTimeout` 對象

如果我們給 `setTimeout` 的回調函數參數傳非函數值會發生什麼？

```js
setTimeout(123, 100); // -> <timeoutId>
// > 'called'
```

没問題。

```js
setTimeout('{a: 1}', 100); // -> <timeoutId>
// > 'called'
```

這個也沒問題。

```js
setTimeout({a: 1}, 100); // -> <timeoutId>
// > 'Uncaught SyntaxError: Unexpected identifier               setTimeout (async) (anonymous) @ VM__:1'
// 未捕獲的語法錯誤：非預期的標識符
```

拋出了一個 **SyntaxError**（語法錯誤）。

這種錯誤很容易發生，尤其是當你有個函數返回一個對象，但是你忘了將其傳進函數，直接就在這裡調用了！不過，如果 `content-policy` 設置為 `self` 會怎麼樣呢？

```js
setTimeout(123, 100); // -> <timeoutId>
// > console.error("[Report Only] Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'report-sample' 'self' ")
// [僅報告] 拒絕將字符串當作JavaScript求值，因為內容安全策略（CSP，Content Security Policy）指令被設置為 "script-src 'report-sample' 'self'"，在該指令模式下不允許 'unsafe-eval' 的腳本源。
```

終端會拒絕執行！

### 💡 說明：

`WindowOrWorkerGlobalScope.setTimeout()` 的第一個參數可以是代碼（`code`），代碼會被傳遞到 `eval` 函數，這是不好的。 `eval` 會把所有輸入強制轉換為字符串，然後進行求值，那麼對象會變成 `'[object Object]'`；嗯，你也看到了，這裡確實有一個非法標識符 `'Unexpected identifier'`。

- [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) on MDN (don't use this)
- [WindowOrWorkerGlobalScope.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) on MDN
- [內容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
- W3C 上的 [計時器](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html)

## 點點運算符

現在嘗試把一個數字轉換到字符串：

```js
27.toString() // > Uncaught SyntaxError: Invalid or unexpected token
// 未捕獲的語法錯誤：非法或非預期的詞元（token）
```

如果我們再加上一個點呢？

```js
27..toString(); // -> '27'
```

那為什麼第一個例子錯了呢？

### 💡 說明：

這是文法的限制。

`.` 運算符存在歧義，它既可以當屬性訪問符，也可以是小數點，這取決於它在代碼中的位置。

規範中定義了 `.` 運算符僅在特定的位置使用時會被當作小數點，這個定義寫在 ECMAScript 的數字字面量語法一節中。

所以，當你想要在數字後加屬性訪問器的點號時，應當加上括號，或再加上一個點，以使該表達式合法。

```js
(27).toString(); // -> '27'
// or
27..toString(); // -> '27'
```

- [JavaScript 中 toString 的用法](https://stackoverflow.com/questions/6853865/usage-of-tostring-in-javascript/6853910#6853910) on StackOverflow
- [為什麼 10..toString() 可行，而 10.toString() 卻不行？ ](https://stackoverflow.com/questions/13149282/why-does-10-tostring-work-but-10-tostring-does-not/13149301#13149301)

## 再 new 一次

這僅僅是一個用於娛樂的例子。

```js
class Foo extends Function {
  constructor(val) {
    super();
    this.prototype.val = val;
  }
}

new new Foo(":D")().val; // -> ':D'
```

### 💡 說明：

JavaScript 與其他面向對象語言不同，它的構造函數僅是一個比較特殊的函數。雖然 class 語法糖讓你可以創建一個字面上的類，但實例化後它就變成了函數，因此它可以再次實例化。

雖然我沒有測試過，但我覺得最後的那個表達式應該是這樣分析的：

```js
new new Foo(":D")().val(new newFooInstance()).val;
veryNewFooInstance.val;
// -> ':D'
```

再補充一下，運行 `new Function('return "bar";')` 必然會創建一個內容為 `return "bar";` 的函數對象。而`Foo`類的構造函數中的 `super()` 調用的是 `Function` 的構造函數，所以自然而然我們可以在它上面添加更多的操作。

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
delete foo.val; // 移除這個實例的“val”屬性，讓它退回（defer back）到他的原型的“val”屬性
foo.val; // -> ':D'
```

- [擴展 Function 的類：再 new 一次](https://github.com/denysdovhan/wtfjs/issues/78)

## 你應該用上分號

下面這個應該是標準的 JavaScript……吧？不，它炸了！

```js
class SomeClass {
  ["array"] = []
  ["string"] = "str"
}

new SomeClass().array; // -> 'str'
```

woc……？

### 💡 說明：

嗯，你沒猜錯，這又是自動分號插入的功勞。

上面這個例子實際上會被轉換為：

```js
class SomeClass {
  ["array"] = ([]["string"] = "str");
}
```

看到了吧，`str` 這個字符串被賦值到屬性 `array` 上。

- Ryan Cavanaugh 發布的 [關於這個例子的原創推特](https://twitter.com/SeaRyanC/status/1148726605222535168)
- [TC39 會議中關於它的討論](https://github.com/tc39/notes/blob/master/meetings/2017-09/sept-26.md)

## 用空格分割（split）字符串

你試過用空格分割字符串嗎？

```js
"".split(""); // -> []
// 但是……
"".split(" "); // -> [""]
```

### 💡 說明：

這是預期行為。它會在輸入的字符串中遍歷，一旦發現分隔符，就在此處分割。但若你傳入的是空字符串，它找不到分隔符，因此返回該字符串。

規範引用如下：

> 它會從左向右搜索字符串，並根據 `separator`（分隔符）決定子字符串的分割位置；分割位置的字符僅用於分割，不會包含在返回的數組中。

- [**22.1.3.21** String.prototype.split](https://tc39.es/ecma262/#sec-string.prototype.split)
- Ryan Cavanaugh 發布的 [關於這個例子的原創推特](https://twitter.com/SeaRyanC/status/1331656278104440833)
- Nabil Tharwat 發布的 [包含解釋的推特](https://twitter.com/kl13nt/status/1331742810932916227?s=20)

## 對字符串 stringify

這會導致一個缺陷，我曾經修了好幾天：

```js
JSON.stringify("production") === "production"; // -> false
```

### 💡 說明：

先看看 `JSON.stringify` 的返回值：

```js
JSON.stringify("production"); // -> '"production"'
```

原来是被“字串化”了，所以這也難怪：

```js
'"production"' === "production"; // -> false
```

- [ECMA-404 JSON 數據內部變動標準](https://www.json.org/json-en.html)

## 對數字和 `true` 的非嚴格相等比較

```js
1 == true; // -> true
// 但是……
Boolean(1.1); // -> true
1.1 == true; // -> false
```

### 💡 說明：

根據規範：

> 比較 x == y 時，當 x 和 y 都有值，會返回 true 或 false。比較過程如下所述：
>
> 4. 若 `Type(x)` 是數字且 `Type(y)` 是字符串，則會返回 `x == ! ToNumber(y)` 的結果。

所以比較過程是這樣的：

```js
1 == true;
1 == Number(true);
1 == 1; // -> true
// 但是……
1.1 == true;
1.1 == Number(true);
1.1 == 1; // -> false
```

- [**7.2.15** 抽象相等比較](https://262.ecma-international.org/11.0/index.html#sec-abstract-equality-comparison)

# 其他資源

- [wtfjs.com](http://wtfjs.com/) — 一些非常特別的不規範與不一致的集合，以及對於 web 編程語言來說非常痛苦的時光。
- [Wat](https://www.destroyallsoftware.com/talks/wat) — CodeMash 2012 中 Gary Bernhardt 的演講
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons 在 Forward 2 的演講，描述了“瘋狂的 JavaScript”。他希望幫助你寫出更乾淨、更優雅、更易讀的代碼，鼓勵人們為開源社區做出貢獻。
- [Zeros in JavaScript](http://zero.milosz.ca/) — 針對 JavaScript 中的 `==`、`===`、`+` 和 `*` 的真值表。

# 🤝 捐贈支持

你好！這個項目是我在空閒時間做的，作為我的主要工作的補充。我希望你在閱讀這篇文章時保持愉快的心情。請考慮支持我 🙏。

每一次捐贈對我來說意義重大。你的捐贈是對我的工作的肯定：我的工作有價值。

**🙏 感謝您的支持！ 🙏**

| 服务             |                     链接                     |                                                                    动作                                                                    |
| ---------------- | :------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| **Patreon**      |        [Become a patron][patreon-url]        | <a href="https://patreon.com/denysdovhan"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="120px"></a> |
| **BuyMeACoffee** |     [Buy me a cup of ☕️ or 🥤][bmc-url]     |    <a href="https://buymeacoffee.com/denysdovhan"><img src="https://cdn.buymeacoffee.com/buttons/default-black.png" width="120px"></a>     |
| **Bitcoin**      |     `1EJsKs6rPsqa7QLoVLpe3wgcdL9Q8WmDxE`     |      <img src="https://user-images.githubusercontent.com/3459374/107130426-0ae4f800-68d6-11eb-9b86-15bf33467615.png" width="120px"/>       |
| **Ethereum**     | `0x6aF39C917359897ae6969Ad682C14110afe1a0a1` |      <img src="https://user-images.githubusercontent.com/3459374/107130370-55b24000-68d5-11eb-93f5-075355c7fcd4.png" width="120px"/>       |

> **⚠️ 提示：** 我现居乌克兰，乌克兰的银行账户没办法绑定 PayPal 或 Stripe 之类的账户。所以我没法开启 Github Sponsors、OpenCollective 和其他依赖于这些服务的捐赠渠道。对不起，目前您只能通过这些方式支持我。

# 🎓 許可證

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
