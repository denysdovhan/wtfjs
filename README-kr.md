# 아니 X발? 자바스크립트 이게 뭐야??

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> 재미있고 교묘한 JavaScript 예제

JavaScript는 훌륭한 언어입니다. JavaScript는 구문이 단순하며 큰 생태계를 가지고 있습니다. 가장 중요한 점은 훌륭한 공동체를 가지고 있다는 것입니다.

동시에, 우리 모두는 JavaScript가 까다로운 부분을 가진 꽤 재미있는 언어라는 것을 알고 있습니다. 몇몇 특징은 우리의 일상적인 일을 순식간에 지옥으로 바꾸기도 하고, 우리를 크게 웃게 만들기도 합니다.

WTFJS의 아이디어는 [Brian Leroux](https://twitter.com/brianleroux)에 속해있습니다. 이 목록들은 그의 이야기에서 꽤 영감을 받았습니다. [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# NPM 패키지 메뉴스크립트

이 핸드북은 `npm`를 이용하여 설치할 수 있습니다. 그냥 실행합시다:

```
$ npm install -g wtfjs
```

이제 당신은 커맨드 창에서 'wtfjs'를 실행할 수 있게 되었습니다. 당신이 선택한 '$PAGER'에서 'wtfjs'가 열릴 것 입니다. 아니면 계속 여기서 읽어도 됩니다.

출처는 <https://github.com/denysdovhan/wtfjs> 여기에서 확인 할 수 있습니다.

# 번역

현재, **wtfjs**는 아래와 같은 언어로 번역되었습니다:

- [中文版](./README-zh-cn.md)
- [हिंदी](./README-hi.md)
- [Français](./README-fr-fr.md)
- [Português do Brasil](./README-pt-br.md)
- [Polski](./README-pl-pl.md)
- [Italiano](./README-it-it.md)
- [Russian](https://habr.com/ru/company/mailru/blog/335292/) (on Habr.com)
- [한국어](./README-kr.md)

[**다른 번역 **][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 시작하기에 앞서](#-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EC%97%90-%EC%95%9E%EC%84%9C)
- [✍🏻 표기법](#-%ED%91%9C%EA%B8%B0%EB%B2%95)
- [👀 예제](#-%EC%98%88%EC%A0%9C)
  - [`[]`와 `![]은 같다`](#%EC%99%80-%EC%9D%80-%EA%B0%99%EB%8B%A4)
  - [`true`는 `![]`와 같지 않지만, `[]`와도 같지 않다](#true%EB%8A%94-%EC%99%80-%EA%B0%99%EC%A7%80-%EC%95%8A%EC%A7%80%EB%A7%8C-%EC%99%80%EB%8F%84-%EA%B0%99%EC%A7%80-%EC%95%8A%EB%8B%A4)
  - [true는 false](#true%EB%8A%94-false)
  - [baNaNa](#banana)
  - [`NaN`은 `NaN`이 아니다](#nan%EC%9D%80-nan%EC%9D%B4-%EC%95%84%EB%8B%88%EB%8B%A4)
  - [이것은 실패다](#%EC%9D%B4%EA%B2%83%EC%9D%80-%EC%8B%A4%ED%8C%A8%EB%8B%A4)
  - [`[]`은 truthy 이지만 `true`는 아니다](#%EC%9D%80-truthy-%EC%9D%B4%EC%A7%80%EB%A7%8C-true%EB%8A%94-%EC%95%84%EB%8B%88%EB%8B%A4)
  - [`null`은 falsy 이지만 `false`은 아니다](#null%EC%9D%80-falsy-%EC%9D%B4%EC%A7%80%EB%A7%8C-false%EC%9D%80-%EC%95%84%EB%8B%88%EB%8B%A4)
  - [`document.all`은 객체이지만 `undefined`이다](#documentall%EC%9D%80-%EA%B0%9D%EC%B2%B4%EC%9D%B4%EC%A7%80%EB%A7%8C-undefined%EC%9D%B4%EB%8B%A4)
  - [최소 값은 0 보다 크다](#%EC%B5%9C%EC%86%8C-%EA%B0%92%EC%9D%80-0-%EB%B3%B4%EB%8B%A4-%ED%81%AC%EB%8B%A4)
  - [함수는 함수가 아니다](#%ED%95%A8%EC%88%98%EB%8A%94-%ED%95%A8%EC%88%98%EA%B0%80-%EC%95%84%EB%8B%88%EB%8B%A4)
  - [배열 추가](#%EB%B0%B0%EC%97%B4-%EC%B6%94%EA%B0%80)
  - [배열의 후행 쉼표](#%EB%B0%B0%EC%97%B4%EC%9D%98-%ED%9B%84%ED%96%89-%EC%89%BC%ED%91%9C)
  - [배열 평등은 몬스터](#%EB%B0%B0%EC%97%B4-%ED%8F%89%EB%93%B1%EC%9D%80-%EB%AA%AC%EC%8A%A4%ED%84%B0)
  - [`undefined`과 `Number`](#undefined%EA%B3%BC-number)
  - [`parseInt`은 나쁜 놈이다](#parseint%EC%9D%80-%EB%82%98%EC%81%9C-%EB%86%88%EC%9D%B4%EB%8B%A4)
  - [`true`와 `false`를 이용한 수학](#true%EC%99%80-false%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%88%98%ED%95%99)
  - [HTML 주석은 JavaScript에서도 유효하다](#html-%EC%A3%BC%EC%84%9D%EC%9D%80-javascript%EC%97%90%EC%84%9C%EB%8F%84-%EC%9C%A0%ED%9A%A8%ED%95%98%EB%8B%A4)
  - [`NaN`은 숫자가 아니다](#nan%EC%9D%80-%EC%88%AB%EC%9E%90%EA%B0%80-%EC%95%84%EB%8B%88%EB%8B%A4)
  - [`[]`과 `null`은 객체이다](#%EA%B3%BC-null%EC%9D%80-%EA%B0%9D%EC%B2%B4%EC%9D%B4%EB%8B%A4)
  - [마법처럼 증가하는 숫자](#%EB%A7%88%EB%B2%95%EC%B2%98%EB%9F%BC-%EC%A6%9D%EA%B0%80%ED%95%98%EB%8A%94-%EC%88%AB%EC%9E%90)
  - [정확도 `0.1 + 0.2`](#%EC%A0%95%ED%99%95%EB%8F%84-01--02)
  - [패치 번호](#%ED%8C%A8%EC%B9%98-%EB%B2%88%ED%98%B8)
  - [세 숫자의 비교](#%EC%84%B8-%EC%88%AB%EC%9E%90%EC%9D%98-%EB%B9%84%EA%B5%90)
  - [재미있는 수학](#%EC%9E%AC%EB%AF%B8%EC%9E%88%EB%8A%94-%EC%88%98%ED%95%99)
  - [RegExps 추가](#regexps-%EC%B6%94%EA%B0%80)
  - [문자열은 `String`의 인스턴스가 아니다](#%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%80-string%EC%9D%98-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%EA%B0%80-%EC%95%84%EB%8B%88%EB%8B%A4)
  - [backticks으로 함수 호출](#backticks%EC%9C%BC%EB%A1%9C-%ED%95%A8%EC%88%98-%ED%98%B8%EC%B6%9C)
  - [Call call call](#call-call-call)
  - [`constructor` 속성](#constructor-%EC%86%8D%EC%84%B1)
  - [객체 속성의 키로서의 객체](#%EA%B0%9D%EC%B2%B4-%EC%86%8D%EC%84%B1%EC%9D%98-%ED%82%A4%EB%A1%9C%EC%84%9C%EC%9D%98-%EA%B0%9D%EC%B2%B4)
  - [`__proto__`을 사용한 프로토 타입 접근](#__proto__%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%9C-%ED%94%84%EB%A1%9C%ED%86%A0-%ED%83%80%EC%9E%85-%EC%A0%91%EA%B7%BC)
  - [`` `${{Object}}` ``](#-object-)
  - [디폴트 값으로 구조 해제](#%EB%94%94%ED%8F%B4%ED%8A%B8-%EA%B0%92%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%A1%B0-%ED%95%B4%EC%A0%9C)
  - [Dots와 spreading](#dots%EC%99%80-spreading)
  - [라벨](#%EB%9D%BC%EB%B2%A8)
  - [중첩된 라벨들](#%EC%A4%91%EC%B2%A9%EB%90%9C-%EB%9D%BC%EB%B2%A8%EB%93%A4)
  - [교활한 `try..catch`](#%EA%B5%90%ED%99%9C%ED%95%9C-trycatch)
  - [이것은 다중 상속인가?](#%EC%9D%B4%EA%B2%83%EC%9D%80-%EB%8B%A4%EC%A4%91-%EC%83%81%EC%86%8D%EC%9D%B8%EA%B0%80)
  - [스스로 생성되는 Generator](#%EC%8A%A4%EC%8A%A4%EB%A1%9C-%EC%83%9D%EC%84%B1%EB%90%98%EB%8A%94-generator)
  - [클래스의 클래스](#%ED%81%B4%EB%9E%98%EC%8A%A4%EC%9D%98-%ED%81%B4%EB%9E%98%EC%8A%A4)
  - [강제할 수 없는 객체](#%EA%B0%95%EC%A0%9C%ED%95%A0-%EC%88%98-%EC%97%86%EB%8A%94-%EA%B0%9D%EC%B2%B4)
  - [까다로운 화살표 함수](#%EA%B9%8C%EB%8B%A4%EB%A1%9C%EC%9A%B4-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98)
  - [화살표 함수는 생성자가 될 수 없다](#%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EB%8A%94-%EC%83%9D%EC%84%B1%EC%9E%90%EA%B0%80-%EB%90%A0-%EC%88%98-%EC%97%86%EB%8B%A4)
  - [`arguments`와 화살표 함수](#arguments%EC%99%80-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98)
  - [까다로운 return](#%EA%B9%8C%EB%8B%A4%EB%A1%9C%EC%9A%B4-return)
  - [객체에 할당 연결](#%EA%B0%9D%EC%B2%B4%EC%97%90-%ED%95%A0%EB%8B%B9-%EC%97%B0%EA%B2%B0)
  - [배열을 사용한 객체 속성 접근 s](#%EB%B0%B0%EC%97%B4%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%9C-%EA%B0%9D%EC%B2%B4-%EC%86%8D%EC%84%B1-%EC%A0%91%EA%B7%BC-s)
  - [Null 및 관계 연산자](#null-%EB%B0%8F-%EA%B4%80%EA%B3%84-%EC%97%B0%EC%82%B0%EC%9E%90)
  - [`Number.toFixed()` 다른 숫자 표시](#numbertofixed-%EB%8B%A4%EB%A5%B8-%EC%88%AB%EC%9E%90-%ED%91%9C%EC%8B%9C)
  - [`Math.max()` 이하 `Math.min()`](#mathmax-%EC%9D%B4%ED%95%98-mathmin)
  - [`null`과 `0` 비교](#null%EA%B3%BC-0-%EB%B9%84%EA%B5%90)
  - [동일한 변수 재선언](#%EB%8F%99%EC%9D%BC%ED%95%9C-%EB%B3%80%EC%88%98-%EC%9E%AC%EC%84%A0%EC%96%B8)
  - [디폴트 동작 Array.prototype.sort()](#%EB%94%94%ED%8F%B4%ED%8A%B8-%EB%8F%99%EC%9E%91-arrayprototypesort)
  - [resolve()은 Promise instance를 반환하지 않는다](#resolve%EC%9D%80-promise-instance%EB%A5%BC-%EB%B0%98%ED%99%98%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94%EB%8B%A4)
- [📚 기타 resources](#-%EA%B8%B0%ED%83%80-resources)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 시작하기에 앞서

> &mdash; _[**“Just for Fun: 우연한 혁명가의 이야기”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

이 목록의 주요 목표는 가능한 JavaScript의 몇 가지의 엄청난 예제들을 모으고, 작동 방식을 설명하는 것 입니다. 이전에 우리가 몰랐던 것들을 배우는 것이 재미있기 때문입니다.

당신이 초보자라면, 이 노트를 사용하여 JavaScript에 대해 자세히 알아볼 수 있을 것입니다. 이 노트의 설명을 읽는 것에 더 많은 시간을 할애할 수 있기를 바랍니다.

당신이 전문 개발자라면, 우리가 사랑하는 JavaScript의 모든 기이한 점과 예상치 못한 것들에 대한 예시에 훌륭한 참조로 간주할 수 있습니다.

어쨌든, 이것을 읽읍시다. 당신은 아마 새로운 것들을 찾을 수 있을 것입니다.

# ✍🏻 표기법

**`// ->`** 식의 결과를 표시하는 데 사용됩니다. 예를 들면:

```js
1 + 1; // -> 2
```

**`// >`** `console.log` 또는 다른 출력의 결과를 의미합니다. 예를 들면:

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** 설명에 사용되는 주석입니다. 예를 들면:

```js
// Assigning a function to foo constant
const foo = function() {};
```

# 👀 예제

## `[]`와 `![]은 같다`

배열은 배열이 아닙니다:

```js
[] == ![]; // -> true
```

### 💡 설명:

추상 항등 연산자는 양쪽을 숫자로 변환하여 비교하고, 서로 다른 이유로 양 쪽의 숫자는 `0`이 됩니다. 배열은 truthy 하므로, 오른쪽의 값은 `0`을 강요하는 truthy value의 반대 값 즉, `false`입니다. 그러나 왼쪽은 빈 배열은 먼저 boolean이 되지 않고 숫자로 강제 변환되고 빈 배열은 truthy 임에도 불구하고 `0`으로 강요됩니다.

이 표현식이 어떻게 단순화 되는지는 아래와 같습니다:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

참조 [`[]`은 truthy 이지만 `true`은 아니다](#%EC%9D%80-truthy-%EC%9D%B4%EC%A7%80%EB%A7%8C-true%EB%8A%94-%EC%95%84%EB%8B%88%EB%8B%A4).

- [**12.5.9** 논리 연산자 NOT (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 추상 평등](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true`는 `![]`와 같지 않지만, `[]`와도 같지 않다

배열은 `true`와 같지 않지만 배열이 아닌것도 `true`와 같지 않습니다;
배열은 `false`와 같지만 배열이 아닌것도 `false`와 같습니다:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 설명:

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

- [**7.2.13** 추상 평등 비교](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true는 false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 설명:

다음 단계를 고려합시다:

```js
// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** 추상 평등 비교](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

이것은 JavaScript에서 구식 농담이지만 재해석 되었습니다. 원본은 다음과 같습니다:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 설명:

식은 `'foo' + (+'bar')`으로 평가되고 숫자가 아닌 `'bar'` 형태로 변환됩니다.

- [**12.8.3** 덧셈 연산자 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 단항 + 연산자](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN`은 `NaN`이 아니다

```js
NaN === NaN; // -> false
```

### 💡 설명:

아래의 사항들로 동작의 논리를 엄격하게 정의합니다:

> 1. 만약 `Type(x)`와 `Type(y)`가 다르면 **false**를 반환합니다.
> 2. 만약 `Type(x)`이 숫자이고
>    1. `x`가 **NaN**이면 **false**를 반환합니다.
>    2. `y`가 **NaN**이면 **false**를 반환합니다.
>    3. … … …
>
> &mdash; [**7.2.14** 염격한 평등 비교](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

IEEE에서 정의한 `NaN`:

> 4 개의 상호 배타적인 관계 : 보다 작음, 같음, 보다 큼, 순서 없음. 마지막의 경우 하나 이상의 피연산자가 NaN일 때 발생합니다. 모든 NaN은 자신을 포함한 모든 것과 순서 없이 비교해야 합니다.
>
> &mdash; [“IEEE754 NaN 값에 false를 반환하는 것의 근거는 무엇입니까?”](https://stackoverflow.com/questions/1565164/1573715#1573715) StackOverflow에서

## 이것은 실패다

당신은 믿지 않을지도 모르지만 …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 설명:

기호를 하나하나 나누면 아래와 같은 패턴이 자주 발생하는 것을 알 수 있습니다:

```js
![] + []; // -> 'false'
![]; // -> false
```

그래서 `[]`를 `false`으로 바꾸는 시도를 해봅니다. 하지만 많은 내부 함수 호출(`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`)때문에 오른쪽 피 연산 문자열로 변환하게 됩니다:

```js
![] + [].toString(); // 'false'
```

문자열을 배열로 생각하면 `[0]`을 통해 첫 번째 문자에 접근할 수 있습니다:

```js
"false"[0]; // -> 'f'
```

나머지는 분명하지만 `i`는 꽤 까다롭습니다. `fail` 속 `i`는 'falseundefined'라는 문자열을 생성하고 `['10']` 인덱스를 사용하여 요소를 잡습니다.

## `[]`은 truthy 이지만 `true`는 아니다

배열은 truthy 한 값이지만 `true`와 같지는 않다.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 설명:

다음은 ECMA-262 명세된 것의 세션에 대한 링크입니다:

- [**12.5.9** 논리 NOT 연산자 (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** 추상 평등 비교](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null`은 falsy 이지만 `false`은 아니다

`null`은 falsy 값이라는 사실에도 불구하고 `false`는 아닙니다.

```js
!!null; // -> false
null == false; // -> false
```

동시에 `0` 또는 `''`와 같은 falsy 값은 `false`와 동일합니다.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 설명:

설명은 이전 예제와 동일합니다. 다음은 해당 링크입니다:

- [**7.2.13** 추상 평등 비교](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all`은 객체이지만 `undefined`이다

> ⚠️ 이 파트는 브라우저 API 의 일부이며 Node.js 환경에서는 작동하지 않습니다.⚠️

`document.all`은 배열과 같은 클래스이고 페이지의 DOM 노드에 대한 엑세스를 제공한다는 사실에도 불구하고 `typeof`함수의 `undefined`으로 반응합니다.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

동시에 `document.all`은 `undefined`와 동일하지 않습니다.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

하지만 동시에:

```js
document.all == null; // -> true
```

### 💡 설명:

> 특히 이전 버전의 IE에서 `document.all`은 DOM 요소에 접근하는 방법을 사용했습니다. 이것은 표준이 된 적은 없지만 이전 JavaScript 코드에서 사용되었습니다. 새로운 APIs(`document.getElementById`와 같은)에서 표준이 진행되었을 때 이 API 호출은 쓸모 없게 되었고 표준 위원회는 이를 어떻게 처리할지 결정해야 했습니다. 광범위하게 사용되기 때문에 그들은 API를 유지하기로 결정했지만 JavaScript 명세된 것을 고의로 위반했습니다.
> 이것이 `undefined`의 상황에서 [엄격한 평등 비교](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)을 사용했을 때 `false`를 응답하고 [추상 평등 비교](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)을 사용할 때 `true`로 응답하는 이유는 명시적으로 허용하는 명세된 것의 의도적인 위반 때문입니다.
>
> &mdash; [“오래된 특징 - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) WhatWG의 HTML 명세된 것
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) YDKJS의 Types & Grammar

## 최소 값은 0 보다 크다

`Number.MIN_VALUE`은 0 보다 큰 가장 작은 숫자입니다:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 설명:

> `Number.MIN_VALUE`은 `5e-324`입니다. 즉, 부동 소수점 정밀도 내에서 표현할 수 있는 가장 작은 양수입니다. 이 말은 0 에 도달할 수 있는 가장 가까운 값이라는 의미 입니다. 이것은 소수가 제공할 수 있는 최상의 값이라고 정의할 수 있습니다.
>
> 비록 엄격하게 실제로 숫자는 아니지만 전체적으로 가장 작은 값은 `Number.NEGATIVE_INFINITY`이라고 할 수 있습니다.
>
> &mdash; [“자바 스크립트에서 왜 `0`은 `Number.MIN_VALUE`보다 작습니까?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) StackOverflow에서

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## 함수는 함수가 아니다

> ⚠️ V8 v5.5 또는 그 이하의 버전에서는 버그가 있을 수 있습니다.(Node.js <=7) ⚠️

이것을 _undefined is not a function_ 모두가 알고 있지만 이건 어떨까요?

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 설명:

이것은 명세된 것의 일부가 아닙니다. 현재 수정된 버그 일 뿐이므로 향후 아무 문제 없을 것입니다.

## 배열 추가

두 개의 배열을 추가하려면 어떻게 해야 할까요?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 설명:

연결이 발생합니다.차근차근 다음을 봅시다:

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

## 배열의 후행 쉼표

4 개의 빈 배열을 만듭니다. 그럼에도 불구하고 후행 쉼표로 인해 세가지 , 요소가 있는 배열을 얻게 됩니다:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 설명:

> **후행 쉼표** ("마지막 쉼표"라고도 함)는 JavaScript 에 새로운 요소, 매개 변수 또는 속성을 추가할 때 유용하게 사용할 수 있습니다. 만약 새 속성을 추가하려는 상황에서 이미 후행 쉼표를 사용하고 있는 경우 이전 마지막 줄을 수정하지 않고 새 줄을 추가할 수 있습니다. 이렇게 하면 버전 관리가 더 깔끔 해지고 코드 편집이 덜 번거로울 수 있습니다.
>
> &mdash; [후행 쉼표](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) MDN에서

## 배열 평등은 몬스터

배열 평등은 아래에서 볼 수 있듯 JavaScript에서는 몬스터입니다:

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

### 💡 설명:

아래의 예제를 주의 깊게 살펴 보아야 합니다! 이 동작은 [**7.2.13** 추상 동등 비교](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)에 설명되어 있습니다.

## `undefined`과 `Number`

`Number`생성자에 인수를 전달하지 않으면 `0` 값을 얻게 됩니다. 실제 인수가 없는 경우 `undefined`값이 형식 인수에 할당되기 때문에 인수가 없는 `Number`는 매개 변수 값으로 `undefined`를 사용합니다. 그러나 `undefined`를 통과하면 `NaN`을 얻을 수 있습니다.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 설명:

명세된 것에 따르면:

1. 함수의 호출로 인수가 전달되지 않은 경우 `n`은 `+0`이 됩니다.
2. 또는 let `n` be ? `ToNumber(value)`.
3. `undefined`의 경우 `ToNumber(undefined)`는 `NaN`으로 반환해야 합니다.

다음은 해당 부분입니다:

- [**20.1.1** 숫자 생성자](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt`은 나쁜 놈이다

`parseInt`은 특이한 점으로 유명합니다:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 설명:** 이는 `parseInt`알 수 없는 문자에 도달할 때까지 문자별로 계속 구문 분석을 하기 때문에 발생합니다. `'f*ck'`에서 `f`는 16 진수로 `15`입니다.

`Infinity`정수로 파싱하는 것은…

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

`null`을 파싱하는 것에도 주의합시다:

```js
parseInt(null, 24); // -> 23
```

**💡 설명:**

> `null`을 문자열 `"null"`로 변환하려고 합니다. 0 부터 23 까지의 기수에 대해서 변환할 수 있는 숫자가 없으므로 NaN을 반환합니다. 24 에, `"n"`, 14 번째 문자가 숫자 체계에 추가됩니다. 31에, `"u"`, 21 번째 문자가 추가되고 전체 문자열을 디코딩 할 수 있게 되었습니다. 37에서 더 이상 생성할 수 있는 유효 숫자 집합이 없으며 `NaN`이 반환됩니다.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) StackOverflow에서

8 진수에 대해서 잊지맙시다:

```js
parseInt("06"); // 6
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5
```

**💡 설명:** 입력 문자열이 "0"으로 시작하는 경우, 기수는 8 (octal) 또는 10 (decimal)입니다. 정확히는 어떤 기수가 선택되는가는 구현에 따라 다릅니다. ECMAScript 5는 10 (decimal)진수를 사용하도록 지정하지만 모든 브라우저가 이것을 지원하지는 않습니다. 그러므로 `parseInt`을 사용할 때는 항상 기수를 지정합시다.

`parseInt`항상 입력을 문자열로 변환:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

부동 소수점값을 파싱하는 동안 주의하세요.

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 설명:** `ParseInt`은 문자열 인수를 취하고 지정된 기수의 정수를 반환합니다. 또한 `ParseInt`은 문자열 매개 변수에서 첫 번째가 아닌 숫자를 포함하여 모든 것을 제거합니다. `0.000001`은 문자열 "0.000001"`로 바뀌고`parseInt`은`0`으로 반환됩니다.`0.0000001`이 문자열로 변환되면`"1e-7"`로 되므로`parseInt`은`1`을 반환합니다.`1/1999999`은`5.00000250000125e-7`로 해석되고`parseInt`은`5`을 리턴합니다.

## `true`와 `false`를 이용한 수학

몇 가지 수학을 해봅시다:

```js
true -
  true +
  // -> 2
  (true + true) * (true + true) -
  true; // -> 3
```

흠… 🤔

### 💡 설명:

`Number`생성자를 사용하여 값을 숫자로 강제 변환할 수 있습니다. `true`가 `1`로 강제되는 것은 분명합니다:

```js
Number(true); // -> 1
```

단항 더하기 연산자는 값을 숫자로 변환하려고 합니다. 이것은 정수와 소수의 문자열 표현일 뿐아니라 비문자열인 `true`, `false`와 `null`값도 변환할 수 있습니다. 특정 값을 파싱할 수 없는 경우 `NaN`으로 평가됩니다. 그것은 더 쉽게 `true`를 `1`로 강제할 수 있음을 의미합니다:

```js
+true; // -> 1
```

덧셈 또는 곱셈을 수행할 때 `ToNumber`메서드가 호출됩니다. 명세된 것에 따르면 아래의 메서드를 반환합니다:

> 만약 `argument`이 **true**이면 **1**이 반환됩니다. 만약`argument`이 **false**이면 **+0**이 반환됩니다.

이 때문에 boolean 값을 일반 숫자로 추가하고 올바른 결과를 얻을 수 있습니다.

해당 부분:

- [**12.5.6** 단항 `+` 연산자](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** 더하기 연산자(`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## HTML 주석은 JavaScript에서도 유효하다

이것이 `<!--` (HTML 주석으로 알려진) JavaScript에서도 주석으로 사용될 수 있다는 것이 깊은 인상을 남깁니다.

```js
// valid comment
<!-- valid comment too
```

### 💡 설명:

인상 깊었나요? 이는 HTML 과 유사한 주석 `<script>` 태그를 이해하지 못하는 브라우저가 정상적으로 저하되도록 하기 위한 것 입니다. Netscape 1.x과 같은 브라우저는 더 이상 인기가 없습니다. 따라서 더 이상 스크립트 태그에 HTML 주석을 넣을 필요가 없습니다.

Node.js는 V8 엔진을 기반으로 하기때문에 Node.js 런타임에서도 HTML 과 유사한 주석을 지원합니다. 또한 그것은 명시된 것의 일부입니다:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN`은 숫자가 아니다

`NaN`의 타입은 `'number'`이다:

```js
typeof NaN; // -> 'number'
```

### 💡 설명:

`typeof`와 `instanceof`운영의 작동 방식에 대한 설명:

- [**12.5.5** `typeof` 운영](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** 런타임 의미론: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]`과 `null`은 객체이다

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false
```

### 💡 설명:

`typeof`연산자의 동작은 명시된 섹션에서 정의됩니다:

- [**12.5.5** `typeof` 운영자](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

명시된 것에 의하면 `typeof`연산자는 [Table 35: `typeof` 연산자 결과](https://www.ecma-international.org/ecma-262/#table-35)에 따라 문자열을 반환합니다. `[[Call]]`을 구현하지 않는 `null`, 일반, 표준 이국 및 비표준 이국 객체의 경우 문자열 `"object"`을 반환합니다.

그러나 `toString` 메서드를 사용하여 개체의 유형을 확인할 수 있습니다.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## 마법처럼 증가하는 숫자

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 설명:

이는 이진 부동 소수점 산술에 대한 IEEE 754-2008 표준으로 인해 발생합니다. 이 척도에서는 가장 가까운 짝수로 반올림됩니다. 더 읽어보기:

- [**6.1.6** 숫자 유형](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## 정확도 `0.1 + 0.2`

잘 알려진 농담. `0.1`과 `0.2`의 추가는 is 매우 정확합니다:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 설명:

[”부동 소수점 수학이 깨졌습니까?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken)에 대한 대답 StackOverflow에서:

> 프로그램에서 상수 `0.2`와 `0.3`은 실제 값에 대한 근사치가 됩니다. `0.2`에 가장 가까운 `double`이 유리수 `0.2`보다 크지만 `0.3`에 가장 가까운 `double`이 유리수 `0.3`보다 작습니다. `0.1`과 `0.2`의 합은 유리수 `0.3`보다 커지기 때문에 코드의 상수와 일치하지 않습니다.

이 문제는 [0.30000000000000004.com](http://0.30000000000000004.com/)이라고 불리는 웹사이트에도 있을 정도로 잘 알려져 있습니다. JavaScript 뿐만 아니라 부동 소수점 수학을 사용하는 모든 언어에서 발생합니다.

## 패치 번호

`Number` 또는 `String`과 같은 객체에 자신의 방법을 추가할 수 있습니다.

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

### 💡 설명:

분명히, `Number`객체를 JavaScript에서 다른 객체처럼 확장할 수 있습니다. 그러나, 정의된 메서드의 동작이 명시된 것의 일부가 아닌 경우 권장되지 않습니다. `Number`의 속성 목록은 다음과 같습니다:

- [**20.1** 숫자 객체](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## 세 숫자의 비교

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 설명:

왜 이렇게 작동할까요? 음, 문제는 표현의 첫 부분에 있습니다. 어떻게 작동하는지 봅시다:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

우리는 이것을 크거나 같음 연산자(`>=`)로 이 문제를 해결할 수 있습니다:

```js
3 > 2 >= 1; // true
```

명시된 것을 읽으면서 관계 연산자에 대해 자세히 알아봅시다:

- [**12.10** 관계 연산자](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## 재미있는 수학

종종 JavaScript에서 산술 연산 결과는 예상치 못한 결과일 수 있습니다. 아래의 예들을 고려합시다:

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

### 💡 설명:

처음 4 가지 예시에서 무슨 일이 일어나고 있나요? JavaScript에서 덧셈을 이해하기 위한 작은 표 입니다:

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

다른 예들을 추가하면 어떨까요? `ToPrimitive`과 `ToString` 메서드는 덧셈을 하기 전 `[]`과 `{}`을 암시적으로 요구합니다. 아래의 명시를 통해 평가 프로세스에 대해 자세히 알아봅시다:

- [**12.8.3** 더하기 연산자 (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

특히, `{} + []` 여기에 예외가 있습니다. `[] + {}`는 괄호가 없으면 코드 블록으로 해석한 다음 단항 +로 해석되어 `[]`숫자로 변환하기 때문입니다. 다음을 따릅니다:

```js
{
  // a code block here
}
+[]; // -> 0
```

`[] + {}`와 동일한 출력을 얻으려면 괄호로 묶으면 가능합니다.

```js
({} + []); // -> [object Object]
```

## RegExps 추가

아래와 같은 숫자를 추가할 수 있다는 것을 알고 있었나요?

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 설명:

- [**21.2.5.10** RegExp.prototype.source 얻기](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## 문자열은 `String`의 인스턴스가 아니다

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 설명:

`String` 생성자는 문자열을 반환합니다:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

`new`로 다음을 시도해 봅시다:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

객체? 그게 뭔가요?

```js
new String("str"); // -> [String: 'str']
```

문자열 생성자에 대한 추가 정보가 명시된 것:

- [**21.1.1** 문자열 생성자](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## backticks으로 함수 호출

모든 매개 변수를 콘솔에 기록하는 함수를 선언해 보겠습니다:

```js
function f(...args) {
  return args;
}
```

의심할 여지없이 함수를 다음과 같이 호출할 수 있습니다:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

그러나 backticks를 사용하여 모든 함수를 호출할 수 있다는 것을 알고있나요?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 설명:

음, 당신이 _Tagged template literals_ 에 친숙하다면 이것이 놀랍지는 않을 겁니다. 위의 예에서 `f`함수는 템플릿 리터럴에 대한 태그입니다. 템플릿 리터럴앞의 태그를 사용하면 함수로 템플릿 리터럴을 파싱할 수 있습니다. 태그 함수의 첫 번째 인수는 문자열 값의 배열을 포함합니다. 나머지 인수는 표현식과 관련이 있습니다. 예:

```js
function template(strings, ...keys) {
  // do something with strings and keys…
}
```

이 [magic behind](http://mxstbr.blog/2016/11/styled-components-magic-explained/)는 [💅 styled-components](https://www.styled-components.com/)라 불리는 React community에서 인기있는 유명한 도서관에 있습니다.

명세서를 링크합니다:

- [**12.3.7** 태그된 템플릿](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> [@cramforce](http://twitter.com/cramforce)에 의해 발견됨.

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 설명:

당신의 마음을 아프게 할 수 있으니 주의하세요! 이 코드를 머릿속에 재현해봅시다. `apply`메소드를 사용하여 `call`을 적용하고 있습니다. 더 읽어보기:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## `constructor` 속성

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 설명:

이 예제를 차근차근 살펴봅시다:

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

`Object.prototype.constructor`는 인스턴스 객체를 생성한 `Object` 생성자 함수에 대한 참조를 반환합니다. 문자열의 경우 `String`, 숫자의 경우 `Number`를 의미합니다.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## 객체 속성의 키로서의 객체

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 설명:

왜 그렇게 작동할까요? 여기에서 _Computed property name_ 을 사용합니다. 이러한 대괄호 사이에 객체를 전달하면 객체를 문자열로 강제 변환하기 때문에 속성 키 `'[object Object]'`와 `{}`값을 얻습니다.

다음과 같이 "대괄호 지옥"을 만들 수 있습니다:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

여기에서 객체 리터럴에 대해 자세히 알아보세요:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## `__proto__`을 사용한 프로토 타입 접근

아시다시피 primitives 에는 prototypes 이 없습니다. 그러나, `__proto__` primitives 에 대한 값을 얻으려고 한다면 다음과 같이 할 수 있습니다:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 설명:

이것은 프로토타입이 없는 무언가가 `ToObject` 메소드를 사용하여 래퍼 객체로 래핑되기 때문에 발생합니다. 차근차근 살펴봅시다:

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

`__proto__`에 대한 자세한 정보는 아래와 같습니다:

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

아래 식의 결과는 무엇일까요?

```js
`${{ Object }}`;
```

답은:

```js
// -> '[object Object]'
```

### 💡 설명:

_Shorthand property notation_ 을 `Object` 사용하여 속성이 있는 객체를 정의했습니다:

```js
{
  Object: Object;
}
```

그 다음 객체를 템플릿 리터럴에 전달 했으므로 `toString`메서드가 해당 객체를 호출합니다. 이것이 문자열 `'[object Object]'`을 얻는 이유입니다.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## 디폴트 값으로 구조 해제

이 예시를 고려하세요:

```js
let x,
  { x: y = 1 } = { x };
y;
```

위의 예시는 다음과 같은 질문을 위한 훌륭한 일입니다. `y`의 값은 무엇인가요? 그 답은:

```js
// -> 1
```

### 💡 설명:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

위의 예에서:

1. 값을 지정하지 않고 `x`를 선언하므로 이는 `undefined`입니다.
2. 그 다음 `x`값을 객체 속성 `x`로 압축합니다.
3. 그 다음 구조화를 사용하여 `x`값을 추출하고 `y`에 할당합니다. 값이 정의되어 있지않으면 `1`을 기본값으로 사용합니다.
4. `y`의 값을 반환합니다.

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Dots와 spreading

배열의 확산으로 흥미로운 예를 구성할 수 있습니다. 이를 고려하세요:

```js
[...[..."..."]].length; // -> 3
```

### 💡 설명:

왜 `3`일까요? [spread operator](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer)을 사용할 때 `@@iterator`메소드가 호출되고 반환된 Iterator는 반복할 값을 얻는데 사용됩니다. 문자열의 기본 Iterator는 문자열을 문자로 확산합니다. 확산 후 이러한 문자를 배열로 압축합니다. 그런 다음 이 배열을 다시 확산하고 배열로 다시 압축합니다.

문자열 `'...'`은 세 개의`.`로 구성되며 문자열의 길이는 `3`입니다.

이제 차근차근 살펴봅시다:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

분명하게 우리는 원하는 양의 배열 요소를 펼치고 래핑할 수 있습니다:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## 라벨

JavaScript에서 라벨에 대해 아는 프로그래머는 많지 않습니다. 라벨들은 꽤 재미있습니다:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 설명:

라벨 되어있는 문장들은 `break` 또는 `continue`문과 함께 사용됩니다. 라벨을 사용하여 루프를 식별할 수 있고 `break` 또는 `continue`문을 사용해 프로그램이 루프를 중단해야 하는지 또는 실행을 계속해야 하는지에 대한 여부를 알 수 있습니다.
위의 예를 보면 `foo`라는 라벨을 볼 수 있습니다. 그 뒤로 `console.log('first');`을 실행한 후 실행을 중단합니다.

JavaScript의 라벨에 대해 더 읽을거리:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 중첩된 라벨들

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 설명:

이전의 예와 유사합니다. 다음 링크를 따르세요:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## 교활한 `try..catch`

이 표현은 무엇을 반환할까요? `2`? 아니면 `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

정답은 `3`입니다. 놀랐나요?

### 💡 설명:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## 이것은 다중 상속인가?

아래의 예를 살펴보세요:

```js
new class F extends (String, Array) {}(); // -> F []
```

다중 상속인 것 같습니까? 아닙니다.

### 💡 설명:

흥미로운 부분은 `extends` 절 (`(String, Array)`)의 값입니다. 그룹화 연산자는 항상 마지막 인수를 반환하기 때문에 `(String, Array)`은 사실 `Array`입니다. 그 말은 이제 막 `Array`를 확장하는 클래스를 만들었다는 이야기입니다.

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## 스스로 생성되는 Generator

스스로 생성되는 Generator의 예를 살펴봅시다:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

보이는 것처럼 리턴된 값은 이것의 `value`와 `f`가 같은 객체입니다. 이러한 경우 아래와 같은 일을 해볼 수 있습니다:

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

### 💡 설명:

이러한 일들이 작동하는 이유를 이해하려면 다음 명세서를 읽으십시오:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## 클래스의 클래스

아래의 읽기 애매한 구문을 생각해봅시다:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

마치 클래스 내부에 클래스를 선언하는 것 같습니다. 오류여야 하지만 문자열 `'object'`을 얻었습니다.

### 💡 설명:

ECMAScript 5 시대부터 _keywords_ 는 _property names_ 으로 허용됩니다. 따라서 아래와 같은 간단한 객체 예제로 생각합시다:

```js
const foo = {
  class: function() {}
};
```

그리고 ES6에서 축약 메소드 정의를 표준화하였습니다. 또한 클래스는 익명이 될 수 있습니다. 그래서 우리가 `: function`부분을 지우면 아래와 같은 결과 값을 얻을 것 입니다:

```js
class {
  class() {}
}
```

디폴트 클래스의 결과 값은 항상 단순한 객체입니다. 그리고 이것의 타입은 `'object'`이어야 합니다.

더 읽을거리:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## 강제할 수 없는 객체

잘 알려진 기호를 사용하면 유형 강제를 제거할 수 있습니다. 아래를 보세요:

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

이제 우리는 아래와 같이 사용할 수 있습니다:

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

### 💡 설명:

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## 까다로운 화살표 함수

아래의 예를 고려하세요 w:

```js
let f = () => 10;
f(); // -> 10
```

좋아요, 하지만 이건 어떨까요?:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 설명:

`undefined` 대신 `{}`을 기대할 수도 있습니다. 이것({}) 또한 화살표 함수의 구문 중 하나이기 때문에 `f`는 undefined 으로 리턴될 것입니다. 하지만 리턴 값을 괄호로 묶어서 화살표 함수에 직접 `{}` 객체를 리턴할 수는 있습니다.

```js
let f = () => ({});
f(); // -> {}
```

## 화살표 함수는 생성자가 될 수 없다

아래의 예를 생각해봅시다:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> f { 'a': 1 }
```

이제, 화살표 함수를 이용하여 동일하게 시도해봅시다:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 설명:

화살표 함수는 생성자로 사용할 수 없으며 new 와 함께 사용하면 오류가 발생합니다. 왜냐하면 렉시컬 범위의 `this`가 있고 `prototype`이 없기 때문에 그래서 말이 안될 것 입니다.

## `arguments`와 화살표 함수

아래의 예를 생각해봅시다 w:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

이제, 화살표 함수를 이용하여 동일하게 시도해봅시다 n:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 설명:

화살표 함수는 짧고 렉시컬 범위의 `this`에 초점을 둔 기존 함수의 경량화된 버전입니다. 동시에 화살표 함수는 `arguments`객체에 대한 바인딩을 제공하지 않습니다. 유효한 대안으로 `rest parameters`을 사용하여 같은 결과를 얻을 수 있습니다:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## 까다로운 return

`return` 구문 또한 까다롭습니다. 이것을 생각해봅시다:

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

### 💡 설명:

`return`과 반환된 표현식은 같은 줄에 있어야 합니다:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

이는 대부분 줄 바꿈 뒤에 세미콜론을 자동으로 삽입하는 자동 세미콜론 삽입이라는 개념 때문입니다. 첫번째 예시에서 `return`문과 객체 리터럴 사이에 세미콜론이 삽입되어 있으므로 함수는 `undefined`를 반환하고 객체 리터럴은 평가되지 않습니다.

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## 객체에 할당 연결

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

오른쪽에서 왼쪽으로, `{n: 2}`이 foo에 할당되고, 이 할당의 결과`{n: 2}`는 foo.x 에 할당되어 있고, bar는 foo를 할당하고 있기 때문에 bar는 `{n: 1, x: {n: 2}}`입니다. 그런데 bar.x가 아닌 반면에 foo.x는 왜 정의되지 않은 것일까요?

### 💡 설명:

Foo와 bar는 같은 객체 `{n: 1}`를 참조하고 있고 lvalues는 할당되기 전에 결정됩니다. `foo = {n: 2}`은 새로운 객체를 생성하고 있으므로 foo는 새로운 객체를 참조하도록 업데이트됩니다. 트릭은 `foo.x = ...`의 foo 에 있습니다. lvalue 값은 사전에 확인되었고 여전히 이전 `foo = {n:1}` 객체를 참조하고 x 값을 추가하여 업데이트합니다. 체인 할당 후에도 bar는 여전히 이전의 foo 객체를 참조하지만 foo는 x가 존재하지 않는 새로운 `{n: 2}`객체를 참조합니다.

다음과 동일합니다:

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x point to the address of the new foo object
// it's not equivalent to: bar.x = {n: 2}
```

## 배열을 사용한 객체 속성 접근 s

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

다차원 배열의 수도코드는 무엇입니까?

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

### 💡 설명:

대괄호 연산자 `[]`는 `toString`을 사용하여 전달된 식을 변환합니다. 단일 요소 배열을 문자열으로 변환하는 것은 포함된 요소를 문자열로 변환하는 것과 유사합니다:

```js
["property"].toString(); // -> 'property'
```

## Null 및 관계 연산자

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 설명:

긴 얘기를 짧게 하자면, 만약 `null`이 `0` 보다 작으면 `false`이고 `null >= 0`은 `true`입니다. 여기에서 이에 대한 자세한 설명을 읽으십시오 [여기](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

## `Number.toFixed()` 다른 숫자 표시

`Number.toFixed()`는 다른 브라우저에서 약간 이상하게 작동할 수 있습니다. 아래 예를 확인하세요:

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

### 💡 설명:

본능적으로 IE11은 올바르고 Firefox/Chrome이 잘못되었다고 생각할 수 있지만 사실은 Firefox/Chrome이 더 직접적으로 숫자의 표준(IEEE-754 Floating Point)을 준수하고 있는 반면 IE11는 더 명확한 결과를 제공하기 위한 노력으로 그것들을 미세하게 거역하고 있습니다.

몇 가지 간단한 테스트를 통해 이 문제가 발생하는 이유를 확인할 수 있습니다:

```js
// Confirm the odd result of rounding a 5 down
(0.7875).toFixed(3); // -> 0.787
// It looks like it's just a 5 when you expand to the
// limits of 64-bit (double-precision) float accuracy
(0.7875).toFixed(14); // -> 0.78750000000000
// But what if you go beyond the limit?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

부동 소수점 번호는 내부적으로 10진수 리스트로 저장되는 것이 아니라 대게 toString과 유사한 호출에 의해 반올림되지만 실제로 내부적으로는 매우 복잡한 방법론을 통해 저장됩니다.

이 경우 끝에 있는 "5"는 실제로 진짜 5 보다 매우 작은 부분입니다.합리적인 길이로 반올림하면 5...으로 렌더링되지만 실제로는 내부적으로 5는 아닙니다.

그러나 IE11은 하드웨어 한계에서 문제를 줄이기 위해 값을 강제로 반올림하는 것처럼 보이기 때문에 toFixed(20)의 사례에서도 끝에 0만 추가한 값을 입력 보고 할 것입니다.

`toFixed`에 대한 ECMA-262 정의의 `NOTE 2`를 참고하세요.

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` 이하 `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 설명:

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## `null`과 `0` 비교

다음 표현들은 모순을 의미한것 같습니다:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

만약 `null >= 0`이 실제로 `true`이면 어떻게 `null`이 `0`과 같지도 않고 크지도 않을까요? (이는 보다 적은 경우에도 동일하게 작동합니다.)

### 💡 설명:

이 세가지 식이 평가되는 방식은 모두 다르며 예기치 않은 동작들을 생성합니다.

첫째, 추상 평등 비교 `null == 0`입니다. 일반적으로 이 연산자가 양쪽 값을 제대로 비교할 수없으면 둘 다 숫자로 변환한 후 숫자를 비교합니다. 그러면 다음 동작을 예상할 수 있습니다:

```js
// This is not what happens
(null == 0 + null) == +0;
0 == 0;
true;
```

그러나 spec을 자세히 읽어보면 숫자 변환은 `null`이나 `undefined`의 한 면에서는 일어나지 않습니다. 그러므로 등호 한쪽에 `null`이 있으면 다른 한쪽에 `null` 또는 `undefined`가 있어야 `true`를 리턴합니다. 이 경우 그렇지 않기 때문에`false`을 리턴합니다.

다음은 관계 비교 `null > 0`입나다. 여기서 알고리즘은 추상 평등 연산자와 달리 `null`을 숫자로 변환합니다. 따라서 다음과 같은 동작이 발생합니다:

```js
null > 0 + null = +0;
0 > 0;
false;
```

마지막으로 관계 비교 `null >= 0`입니다. 이 표현이 `null > 0 || null == 0`의 결과라고 주장할 수 있는데, 만약 그렇다면, 위의 결과는 이 역시 `false`라는 것을 의미할 것입니다. 그러나 사실 `>=`연산자는 매우 다른 방식으로 작동하는데, 이는 기본적으로 `<`연산자와 반대되는 방식입니다. 위보다 큰 연산자를 사용한 예도 연산자보다 작기 때문에 이 식은 실제로 다음과 같이 평가됩니다.

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

## 동일한 변수 재선언

JavaScript에서는 변수를 다시 선언할 수 있습니다:

```js
a;
a;
// This is also valid
a, a;
```

strict 모드에서도 작동합니다:

```js
var a, a, a;
var a;
var a;
```

### 💡 설명:

모든 정의가 하나의 정의로 병합됩니다.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## 디폴트 동작 Array.prototype.sort()

숫자 배열을 정렬해야 한다고 상상해보세요.

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 설명:

기본 정렬 순서는 요소들을 문자열로 변환한 후 UTF-16 코드 단위 값의 시퀀스를 비교할 때 작성됩니다.

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### 힌트

문자열 이외의 정렬을 시도하면 `comparefn`을 통과시키세요.

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

## resolve()은 Promise instance를 반환하지 않는다

```javascript
const theObject = {
  a: 7
};
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Promise instance object

thePromise.then(value => {
  console.log(value === theObject); // -> true
  console.log(value); // -> { a: 7 }
});
```

`value`는 `thePromise` 정확하게 말하면 `theObject`에서 해결되는 것 입니다.

`resolve`함수에 또 다른 `Promise`를 넣는 것은 어떨까요?

```javascript
const theObject = new Promise((resolve, reject) => {
  resolve(7);
}); // -> Promise instance object
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Promise instance object

thePromise.then(value => {
  console.log(value === theObject); // -> false
  console.log(value); // -> 7
});
```

### 💡 설명:

> 이 함수는 promise 같은 객체의 중첩된 레이어(예시: 무언가로 해결되는 promise으로 해결되는 promise)를 단일 레이어로 평탄화합니다.

&ndash; [Promise.resolve() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

명세서는 [ECMAScript 25.6.1.3.2 Promise Resolve Functions](https://tc39.es/ecma262/#sec-promise-resolve-functions)입니다. 하지만 그것은 인간 친화적이지 않습니다.

# 📚 기타 resources

- [wtfjs.com](http://wtfjs.com/) — a collection of those very special irregularities, inconsistencies and just plain painfully unintuitive moments for the language of the web.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — A lightning talk by Gary Bernhardt from CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons talk for Forward 2 attempts to “pull out the crazy” from JavaScript. He wants to help you produce cleaner, more elegant, more readable code, then inspire people to contribute to the open source community.

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
