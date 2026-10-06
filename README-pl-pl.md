# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> Lista zabawnych i podchwytliwych przykładów JavaScript

JavaScript to świetny język. Ma prostą składnię, duży ekosystem i, co najważniejsze, wspaniałą społeczność.

Jednocześnie wszyscy wiemy, że JavaScript jest dość zabawnym językiem z podchwytliwymi częściami. Niektóre z nich mogą szybko zamienić naszą codzienną pracę w piekło, a niektóre mogą rozśmieszyć nas na głos.

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
# Table of Contents

- [💪🏻 Motywacja](#-motywacja)
- [✍🏻 Notacja](#-notacja)
- [👀 Przykłady](#-przyk%C5%82ady)
  - [`[]` jest równe `![]`](#-jest-r%C3%B3wne-)
  - [`true` nie jest równe `![]`, ale też nie równe `[]`](#true-nie-jest-r%C3%B3wne--ale-te%C5%BC-nie-r%C3%B3wne-)
  - [prawda to fałsz](#prawda-to-fa%C5%82sz)
  - [baNaNa](#banana)
  - [`NaN` nie jest `NaN`](#nan-nie-jest-nan)
  - [To jest fail](#to-jest-fail)
  - [`[]` jest prawdziwe, ale nie `true`](#-jest-prawdziwe-ale-nie-true)
  - [`null` jest fałszywe, ale nie `false`](#null-jest-fa%C5%82szywe-ale-nie-false)
  - [`document.all` jest obiektem, ale jest undefined](#documentall-jest-obiektem-ale-jest-undefined)
  - [Minimalna wartość jest większa od zera](#minimalna-warto%C5%9B%C4%87-jest-wi%C4%99ksza-od-zera)
  - [funkcja nie jest funkcją](#funkcja-nie-jest-funkcj%C4%85)
  - [Dodawanie tablic](#dodawanie-tablic)
  - [Trailing commas in array](#trailing-commas-in-array)
  - [Równość tablic to potwór](#r%C3%B3wno%C5%9B%C4%87-tablic-to-potw%C3%B3r)
  - [`undefined` oraz `Number`](#undefined-oraz-number)
  - [`parseInt` jest złym gościem](#parseint-jest-z%C5%82ym-go%C5%9Bciem)
  - [Matematyka z `true` i `false`](#matematyka-z-true-i-false)
  - [Komentarze HTML są obowiązujące w JavaScript](#komentarze-html-s%C4%85-obowi%C4%85zuj%C4%85ce-w-javascript)
  - [`NaN` is ~~not~~ a number](#nan-is-not-a-number)
  - [`[]` i `null` są obiektami](#-i-null-s%C4%85-obiektami)
  - [Magicznie rosnące liczby](#magicznie-rosn%C4%85ce-liczby)
  - [Precyzja `0.1 + 0.2`](#precyzja-01--02)
  - [Patching numbers](#patching-numbers)
  - [Porównanie trzech liczb](#por%C3%B3wnanie-trzech-liczb)
  - [Zabawna matematyka](#zabawna-matematyka)
  - [Dodanie RegExps](#dodanie-regexps)
  - [Stringi nie są instancjami `String`](#stringi-nie-s%C4%85-instancjami-string)
  - [Wywoływanie funkcji za pomocą backticksa](#wywo%C5%82ywanie-funkcji-za-pomoc%C4%85-backticksa)
  - [Call call call](#call-call-call)
  - [Właściwość `constructor`](#w%C5%82a%C5%9Bciwo%C5%9B%C4%87-constructor)
  - [Obiekt jako klucz właściwości obiektu](#obiekt-jako-klucz-w%C5%82a%C5%9Bciwo%C5%9Bci-obiektu)
  - [Dostęp do prototypów za pomocą `__proto__`](#dost%C4%99p-do-prototyp%C3%B3w-za-pomoc%C4%85-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Destrukturyzacja z wartościami domyślnymi](#destrukturyzacja-z-warto%C5%9Bciami-domy%C5%9Blnymi)
  - [Dots and spreading](#dots-and-spreading)
  - [Etykiety](#etykiety)
  - [Zagnieżdżone etykiety](#zagnie%C5%BCd%C5%BCone-etykiety)
  - [Podstępny `try..catch`](#podst%C4%99pny-trycatch)
  - [Czy to wielokrotne dziedziczenie?](#czy-to-wielokrotne-dziedziczenie)
  - [A generator which yields itself](#a-generator-which-yields-itself)
  - [Klasa klasy](#klasa-klasy)
  - [Non-coercible objects](#non-coercible-objects)
  - [Podstępne funkcje strzałkowe](#podst%C4%99pne-funkcje-strza%C5%82kowe)
  - [Funkcje strzałkowe nie mogą być konstruktorami](#funkcje-strza%C5%82kowe-nie-mog%C4%85-by%C4%87-konstruktorami)
  - [`arguments` i funkcje strzałkowe](#arguments-i-funkcje-strza%C5%82kowe)
  - [Podstępny return](#podst%C4%99pny-return)
  - [Chaining assignments on object](#chaining-assignments-on-object)
  - [Dostęp do właściwości obiektu za pomocą tablic](#dost%C4%99p-do-w%C5%82a%C5%9Bciwo%C5%9Bci-obiektu-za-pomoc%C4%85-tablic)
  - [Null and Relational Operators](#null-and-relational-operators)
  - [`Number.toFixed()` display different numbers](#numbertofixed-display-different-numbers)
  - [`Math.max()` mniej niż `Math.min()`](#mathmax-mniej-ni%C5%BC-mathmin)
  - [Comparing `null` to `0`](#comparing-null-to-0)
  - [Redeklaracja tej samej zmiennej](#redeklaracja-tej-samej-zmiennej)
  - [Domyślne zachowanie Array.prototype.sort()](#domy%C5%9Blne-zachowanie-arrayprototypesort)
- [📚 Inne materiały](#-inne-materia%C5%82y)
- [🎓 Licencja](#-licencja)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 Motywacja

> Dla zabawy
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

Głównym celem tej listy jest zebranie szalonych przykładów i wyjaśnienie, w jaki sposób działają, jeśli to możliwe. Tylko dlatego, że fajnie jest nauczyć się czegoś, czego wcześniej nie znaliśmy.

Jeśli jesteś początkujący, możesz skorzystać z tych notatek, aby głębiej zagłębić się w JavaScript. Mam nadzieję, że te notatki zmotywują cię do spędzenia więcej czasu na czytaniu specyfikacji.

Jeśli jesteś profesjonalnym programistą, możesz rozważyć te przykłady, jako świetne źródło informacji o wszystkich dziwactwach i nieoczekiwanych krawędziach naszego ukochanego JavaScript.

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

## `[]` jest równe `![]`

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

Zobacz też [`[]` jest prawdziwe, ale nie `true`](##-jest-prawdziwe-ale-nie-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` nie jest równe `![]`, ale też nie równe `[]`

Tablica nie jest równa `true`, ale zanegowana tablica też nie jest równa `true`;
Tablica jest równa `false`, zanegowana tablica również jest równa `false`:

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

To stary żart w JavaScript, ale odnowiony. Oto oryginał:

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

> `document.all` kiedyś był sposobem na dostęp do elementów DOM, w szczególności w starszych wersjach IE. Chociaż nigdy nie był standardem, był szeroko stosowany w starszym kodzie JS. Kiedy standard rozwijał się z nowymi interfejsami API (takimi jak `document.getElementById`), to wywołanie interfejsu API stało się przestarzałe i komitet standardowy musiał zdecydować, co z nim zrobić. Ze względu na szerokie zastosowanie postanowili zachować interfejs API, ale wprowadzili umyślne naruszenie specyfikacji JavaScript.
> Powód, dla którego reaguje na `false` podczas korzystania ze [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) z `undefined` gdy `true` podczas korzystania z [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) wynika z umyślnego naruszenia specyfikacji, która wyraźnie na to pozwala.
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) na WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) na YDKJS - Types & Grammar

## Minimalna wartość jest większa od zera

`Number.MIN_VALUE` jest najmniejszą liczbą, która jest większa od zera:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Wytłumaczenie:

> `Number.MIN_VALUE` jest `5e-324`, np. najmniejsza liczba dodatnia, która może być reprezentowana z precyzją zmiennoprzecinkową, tj. jest tak blisko, jak można dojść do zera. Określa najlepszą rozdzielczość, jaką mogą zaoferować floaty.
>
> Teraz ogólna najmniejsza wartość to `Number.NEGATIVE_INFINITY` chociaż nie jest to tak naprawdę liczbowe w ścisłym tego słowa znaczeniu.
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) na StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## funkcja nie jest funkcją

> ⚠️ Bug obecny w wersji V8 5.5 lub nowszej (Node.js <=7) ⚠️

Wszyscy wiecie o irytującym _niezdefiniowany nie jest funkcją_, ale co z tym?

```js
// Declare a class which extends null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 Wytłumaczenie:

To nie jest część specyfikacji. To tylko błąd, który został już naprawiony, więc nie powinno być z tym problemu w przyszłości.

## Dodawanie tablic

Co jeśli spróbujesz dodać dwie tablice?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Wytłumaczenie:

Zachodzi konkatenacja. Krok po kroku wygląda to tak:

```js
[1, 2, 3] + [4, 5, 6];
// call toString()
[1, 2, 3].toString() + [4, 5, 6].toString();
// concatenation
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

## Trailing commas in array

Utworzyłeś tablicę z 4 pustymi elementami. Mimo wszystko otrzymasz tablicę z trzema elementami ze względu na końcowe przecinki:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 Wytłumaczenie:

> **Trailing commas** (czasami nazywane "final commas") może być przydatne podczas dodawania nowych elementów, parametrów lub właściwości do kodu JavaScript. Jeśli chcesz dodać nową właściwość, możesz po prostu dodać nową linię bez modyfikowania poprzedniej poprzedniej linii, jeśli linia ta już używa przecinka końcowego. To sprawia, że różnice w kontroli wersji są czystsze, a edycja kodu może być mniej kłopotliwa.
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) na MDN

## Równość tablic to potwór

Równość tablic jest potworem w JS, jak widać poniżej:

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

Powinieneś uważnie obserwować powyższe przykłady! Zachowanie opisano w rozdziale [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) specyfikacji.

## `undefined` oraz `Number`

Jeśli nie przekażemy żadnych argumentów do konstruktura `Number`, otrzymamy `0`. Wartość `undefined` jest przypisana do formalnych argumentów, gdy nie ma rzeczywistych argumentów, więc możesz się spodziewać, że `Number` bez argumentów dostanie `undefined` jako wartość jego parametru. Jednak kiedy przekażemy `undefined`, dostaniemy `NaN`.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Wytłumaczenie:

Zgodnie ze specyfikacją:

1. Jeśli do wywołania tej funkcji nie zostaną przekazane żadne argumenty, pozwól `n` być `+0`.
2. Inaczej, pozwól `n` być ? `ToNumber(value)`.
3. W przypadku `undefined`, `ToNumber(undefined)` powinno zwrócić `NaN`.

Oto odpowiednia sekcja:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` jest złym gościem

`parseInt` słynie ze swoich dziwactw:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 Wytłumaczenie:** Dzieje się tak, ponieważ `parseInt` będzie kontynuować analizowanie znak po znaku, dopóki nie trafi na postać, której nie zna. `f` w `'f*ck'` jest cyfrą szesnastkową `15`.

Parsowanie `Infinity` do integer jest czymś…

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

Uważaj na parsowanie `null` także:

```js
parseInt(null, 24); // -> 23
```

**💡 Wytłumaczenie:**

> Konwertuje `null` na string `"null"` i próbuje to przekonwertować. W przypadku podstaw od 0 do 23 nie ma cyfr, które mógłby przekonwertować, więc zwraca NaN. Na 24, `"n"`, 14ta litera, jest dodawana do systemu liczbowego. Na 31, `"u"`, 21sza litera, jest dodawana, a cały ciąg można dekodować. Na 37 nie ma już żadnego poprawnego zestawu liczb, który można by wygenerować i `NaN` jest zwrócony.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) na StackOverflow

Nie zapomnij o ósemkach:

```js
parseInt("06"); // 6
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5
```

**💡 Wytłumaczenie:** Jeśli ciąg wejściowy zaczyna się od "0", podstawa to osiem (ósemka) lub 10 (dziesiętnie). To, która podstawa jest wybrana, zależy od implementacji. ECMAScript 5 określa, że używana jest liczba 10 (dziesiętna), ale nie wszystkie przeglądarki obsługują to jeszcze. Z tego powodu zawsze określaj podstawę podczas używania `parseInt`.

`parseInt` zawsze konwertuj dane wejściowe na ciąg:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

Zachowaj ostrożność podczas analizowania wartości zmiennoprzecinkowych

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 Wytłumaczenie:** `ParseInt` pobiera argument ciągu i zwraca liczbę całkowitą określonej podstawy. `ParseInt` usuwa również wszystko po pierwszej wartości cyfrowej i włącznie z nią w parametrze ciągu. `0.000001` jest konwertowany na ciąg znaków `"0.000001"` i `parseInt` zwraca `0`. Gdy `0.0000001` jest konwertowany na ciąg, który jest traktowany jako `"1e-7"` i stąd `parseInt` zwraca `1`. `1/1999999` jest interpretowane jako `5.00000250000125e-7` i `parseInt` zwraca `5`.

## Matematyka z `true` i `false`

Zróbmy trochę matematyki:

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

Możemy narzucić wartości do liczb za pomocą konstruktora `Number`. To całkiem oczywiste że `true` będzie zmienione na `1`:

```js
Number(true); // -> 1
```

Jednoargumentowy operator plus próbuje przeliczyć swoją wartość na liczbę. Może konwertować reprezentacje ciągu liczb całkowitych i liczb zmiennoprzecinkowych, a także wartości nie łańcuchowe `true`, `false`, i `null`. Jeśli nie może przeanalizować określonej wartości, oceni to jako `NaN`. To oznacza, że możemy narzucić `true` na `1` łatwiej:

```js
+true; // -> 1
```

Podczas dodawania lub mnożenia, metoda `ToNumber` jest przywoływana. Zgodnie ze specyfikacją ta metoda zwraca:

> Jeśli `argument` jest **true**, zwraca **1**. Jeśli `argument` jest **false**, zwraca **+0**.

Dlatego możemy dodawać wartości logiczne jako liczby regularne i uzyskiwać prawidłowe wyniki.

Odpowiednie sekcje:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## Komentarze HTML są obowiązujące w JavaScript

Będziesz pod wrażeniem, ale `<!--` (który jest znany jako komentarz HTML) jest poprawnym komentarzem w JavaScript.

```js
// valid comment
<!-- valid comment too
```

### 💡 Wytłumaczenie:

Pod wrażeniem? Komentarze w formacie HTML miały umożliwić przeglądarkom, które nie rozumieją tagu `<script>` degradować z wdziękiem. Te przeglądarki, np. Netscape 1.x nie są już popularne. Dlatego naprawdę nie ma sensu umieszczać komentarzy HTML w tagach skryptu.

Ponieważ Node.js jest oparty na silniku V8, komentarze podobne do HTML są obsługiwane również przez środowisko uruchomieniowe Node.js. Ponadto są częścią specyfikacji:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` is ~~not~~ a number

Typ `NaN` jest `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 Wytłumaczenie:

Wytłumaczenia jak operatory `typeof` i `instanceof` działają:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` i `null` są obiektami

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false
```

### 💡 Wytłumaczenie:

Zachowanie operatora `typeof` jest zdefiniowane w tej sekcji specyfikacji:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

Zgodnie ze specyfikacją, operator `typeof` zwraca ciąg zgodnie z [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). For `null`, ordinary, standard exotic and non-standard exotic objects, which do not implement `[[Call]]`, it returns the string `"object"`.

Możesz jednak sprawdzić typ obiektu, używając metody `toString`.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Magicznie rosnące liczby

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 Wytłumaczenie:

Jest to spowodowane standardem IEEE 754-2008 dla binarnej arytmetyki zmiennoprzecinkowej. W tej skali zaokrągla się do najbliższej liczby parzystej. Czytaj więcej:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## Precyzja `0.1 + 0.2`

Dobrze znany żart. An addition of `0.1` and `0.2` is deadly precise:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 Wytłumaczenie:

Odpowiedź na pytanie [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) ze StackOverflow:

> Stałe `0.2` i `0.3` w twoim programie będzie również przybliżenie ich prawdziwych wartości. Zdarza się, że najbliższa `double` do `0.2` jest większa niż liczba wymierna `0.2`, ale najbliższa `double` do `0.3` jest mniejsza niż liczba wymierna `0.3`. Suma `0.1` i `0.2` kończy się na wartości większej od liczby wymiernej `0.3`, a zatem nie zgadza się ze stałą w kodzie.

Ten problem jest tak znany, że istnieje nawet strona internetowa o nazwie [0.30000000000000004.com](http://0.30000000000000004.com/). Występuje w każdym języku wykorzystującym matematykę zmiennoprzecinkową, nie tylko JavaScript.

## Patching numbers

Możesz dodać własne metody do wrapowania obiektów takich jak `Number` lub `String`.

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

Oczywiście możesz rozszerzyć obiekt `Number` jak każdy inny obiekt w JavaScript. Jednak nie jest zalecane, jeśli zachowanie zdefiniowanej metody nie jest częścią specyfikacji. Oto lista właściwości `Number`:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Porównanie trzech liczb

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Wytłumaczenie:

Dlaczego to działa w ten sposób? Problem tkwi w pierwszej części wyrażenia. Oto jak to działa:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

Możemy to naprawić za pomocą _Operatora większy lub równy (`>=`)_:

```js
3 > 2 >= 1; // true
```

Przeczytaj więcej o operatorach relacyjnych w specyfikacji:

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Zabawna matematyka

Często wyniki operacji arytmetycznych w JavaScript mogą być dość nieoczekiwane. Rozważ te przykłady:

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

Co dzieje się w pierwszych czterech przykładach? Oto mała tabelka, aby zrozumieć dodawanie w JavaScript:

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

Co z innymi przykładami? Metody `ToPrimitive` i `ToString` są domyślnie wywoływane dla `[]` i `{}` przed dodaniem. Przeczytaj więcej o procesie oceny w specyfikacji:

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

Szczególnie, `{} + []` tutaj jest wyjątek. Powód, dla którego się różni z `[] + {}` polega na tym, że bez nawiasów interpretuje się go jako blok kodu, a następnie jako jedność +, konwertując `[]` na liczbę. Wygląda następująco:

```js
{
  // a code block here
}
+[]; // -> 0
```

Aby uzyskać ten sam wynik jak `[] + {}` możemy owrapować to w nawias.

```js
({} + []); // -> [object Object]
```

## Dodanie RegExps

Czy wiesz, że możesz dodawać takie liczby?

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

## Stringi nie są instancjami `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Wytłumaczenie:

Konstruktor `String` zwraca string:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Spróbujmy z `new`:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

Obiekt? Co to jest?

```js
new String("str"); // -> [String: 'str']
```

Więcej informacji o konstruktorze String w specyfikacji:

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Wywoływanie funkcji za pomocą backticksa

Zadeklarujmy funkcję, która rejestruje wszystkie parametry w konsoli:

```js
function f(...args) {
  return args;
}
```

Bez wątpienia wiesz, że możesz wywołać tę funkcję w następujący sposób:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

Ale czy wiesz, że możesz wywołać dowolną funkcję za pomocą backticksa?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Wytłumaczenie:

Cóż, to wcale nie jest magia, jeśli jesteś obeznany z _Tagged template literals_. W powyższym przykładzie, funkcja `f` jest znacznikiem literału szablonu. Tagi przed literałem szablonu umożliwiają analizowanie literałów szablonu za pomocą funkcji. Pierwszy argument funkcji znacznika zawiera tablicę wartości ciągów. Pozostałe argumenty są powiązane z wyrażeniami. Przykład:

```js
function template(strings, ...keys) {
  // do something with strings and keys…
}
```

To jest [magia z tyłu](http://mxstbr.blog/2016/11/styled-components-magic-explained/) słynnej biblioteki o nazwie [💅 styled-components](https://www.styled-components.com/), która jest popularna w społeczności React.

Link do specyfikacji:

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> Znalezione przez [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 Wytłumaczenie:

Uwaga, może to popsuć ci umysł! Spróbuj odtworzyć ten kod w swojej głowie: stosujemy metodę `call` za pomocą metody`apply`. Czytaj więcej:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## Właściwość `constructor`

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Wytłumaczenie:

Rozważmy ten przykład krok po kroku:

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

`Object.prototype.constructor` zwraca referencję do funkcji konstruktora `Object` który utworzył obiekt instancji. W przypadku łańcuchów jest to `String`, w przypadku liczb jest to `Number` i tak dalej.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) na MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## Obiekt jako klucz właściwości obiektu

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 Wytłumaczenie:

Dlaczego to działa? Tutaj używamy _Computed property name_. Gdy przekazujesz obiekt między tymi nawiasami, wymusza on obiekt na ciąg, więc otrzymujemy klucz właściwości `'[object Object]'` i wartość `{}`.

Możemy zrobić "brackets hell" jak tutaj:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

Przeczytaj więcej na temat literałów obiektowych tutaj:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) na MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## Dostęp do prototypów za pomocą `__proto__`

Jak wiemy, prymitywy nie mają prototypów. Jeśli jednak spróbujemy uzyskać wartość `__proto__` dla prymitywów otrzymalibyśmy to:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 Wytłumaczenie:

Dzieje się tak, ponieważ gdy coś nie ma prototypu, zostanie ono zawinięte w obiekt wrappera za pomocą metody `ToObject`. Więc krok po kroku:

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

Oto więcej informacji na temat `__proto__`:

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

Jaki jest wynik poniższego wyrażenia?

```js
`${{ Object }}`;
```

Odpowiedź to:

```js
// -> '[object Object]'
```

### 💡 Wytłumaczenie:

Zdefiniowaliśmy obiekt z właściwością `Object` używając _Shorthand property notation_:

```js
{
  Object: Object;
}
```

Następnie przekazaliśmy ten obiekt do literału szablonu, więc metoda `toString` wywołuje ten obiekt. Właśnie dlatego otrzymujemy string `'[object Object]'`.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Destrukturyzacja z wartościami domyślnymi

Rozważ ten przykład:

```js
let x,
  { x: y = 1 } = { x };
y;
```

Powyższy przykład to świetne zadanie na rozmowę kwalifikacyjną. Jaka jest wartość `y`? Odpowiedź to:

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

W powyższym przykładzie:

1. Deklarujemy `x` z brakiem wartości, więc jest `undefined`.
2. Wtedy pakujemy wartość `x` we własność obiektu `x`.
3. Następnie wyodrębniamy wartość `x` używając destrukturyzacji i chcemy to przypisać do `y`. Jeśli wartość nie zostanie zdefiniowana, wówczas użyjemy „`1` jako wartości domyślnej.
4. Zwróć wartość `y` .

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Dots and spreading

Ciekawe przykłady można skomponować z rozmieszczaniem tablic. Rozważ to:

```js
[...[..."..."]].length; // -> 3
```

### 💡 Wytłumaczenie:

Czemu `3`? Kiedy korzystamy ze [spread operatora](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), metoda `@@iterator` jest wywołana, a zwrócony iterator służy do uzyskania wartości do iteracji. Domyślny iterator łańcucha rozdziela łańcuch na znaki. Po rozłożeniu pakujemy te znaki do tablicy. Następnie rozkładamy tę tablicę ponownie i pakujemy z powrotem do tablicy.

String `'...'` składa się z trzech znaków `.`, więc długość wynikowej tablicy wynosi `3`.

Teraz krok po kroku:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Oczywiście możemy rozkładać i wrapować elementy tablicy tyle razy, ile chcemy:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## Etykiety

Niewielu programistów wie o etykietach w JavaScript. Są dość interesujące:

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

Instrukcja z etykietą jest używana z instrukcją `break` lub `continue`. Możesz użyć etykiety do zidentyfikowania pętli, a następnie użyć instrukcji `break` lub `continue`, aby wskazać, czy program powinien przerwać pętlę, czy kontynuować jej wykonywanie.

W powyższym przykładzie identyfikujemy etykietę `foo`. Po tym `console.log ('first');` wykonuje, a następnie przerywamy wykonywanie.

Przeczytaj więcej o etykietach w JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Zagnieżdżone etykiety

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Wytłumaczenie:

Podobnie jak w poprzednich przykładach, skorzystaj z poniższych linków:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Podstępny `try..catch`

Co zwróci to wyrażenie?? `2` czy `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

Odpowiedź to `3`. Zaskoczony?

### 💡 Wytłumaczenie:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Czy to wielokrotne dziedziczenie?

Spójrz na poniższy przykład:

```js
new class F extends (String, Array) {}(); // -> F []
```

Czy to wielokrotne dziedziczenie? Nie.

### 💡 Wytłumaczenie:

Interesującą częścią jest wartość klauzuli `extends` (`(String, Array)`). Operator grupowania zawsze zwraca ostatni argument, więc `(String, Array)` jest właściwie po prostu `Array`. Oznacza to, że właśnie stworzyliśmy klasę, która rozszerza `Array`.

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

Jak widać, zwrócona wartość jest obiektem wraz z nią `value` równa do `f`. W takim przypadku możemy zrobić coś takiego:

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

Aby zrozumieć, dlaczego to działa w ten sposób, przeczytaj następujące sekcje specyfikacji:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## Klasa klasy

Rozważ tę zaciemnioną składnię:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

Wygląda na to, że deklarujemy klasę wewnątrz klasy. Powinien być jednak błąd, ale otrzymujemy ciąg `'object'`.

### 💡 Wytłumaczenie:

Od ery ECMAScript 5 _słowa kluczowe_ są dozwolone jako _nazwy własności_. Pomyśl o tym jako o tym prostym przykładzie obiektu:

```js
const foo = {
  class: function() {}
};
```

I znormalizowane skróty definicji metod ES6. Ponadto klasy mogą być anonimowe. Więc jeśli opuścimy część `:function`, otrzymamy:

```js
class {
  class() {}
}
```

Wynik domyślnej klasy jest zawsze prostym obiektem. I jego typ powinien zwrócić `'object'`.

Przeczytaj więcej tutaj:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Non-coercible objects

Dzięki dobrze znanym symbolom można pozbyć się typu coercion. Spójrz:

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

Teraz możemy użyć tego w następujący sposób:

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

## Podstępne funkcje strzałkowe

Rozważ poniższy przykład:

```js
let f = () => 10;
f(); // -> 10
```

Okej, w porządku, ale co z tym:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 Wytłumaczenie:

Możesz oczekiwać `{}` zamiast `undefined`. Wynika to z faktu, że nawiasy klamrowe są częścią składni funkcji strzałkowych, więc `f` zwróci niezdefiniowane. Możliwe jest jednak zwrócenie obiektu `{}` bezpośrednio z funkcji strzałkowej, poprzez umieszczenie wartości zwracanej w nawiasach.

```js
let f = () => ({});
f(); // -> {}
```

## Funkcje strzałkowe nie mogą być konstruktorami

Rozważ poniższy przykład:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

Teraz spróbuj zrobić to samo z funkcją strzałkową:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Wytłumaczenie:

Funkcje strzałkowe nie mogą być używane jako konstruktory i będą zgłaszać błąd, gdy będą używane z nowym. Ponieważ ma leksykalne `this` i nie ma właściwości `prototype`, więc nie miałoby to większego sensu.

## `arguments` i funkcje strzałkowe

Rozważ poniższy przykład:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

Teraz spróbuj zrobić to samo z funkcją strzałkową:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 Wytłumaczenie:

Funkcje strzałkowe to lekka wersja zwykłych funkcji z naciskiem na bycie krótkim i leksykalnym `this`. Jednocześnie funkcje strzałkowe nie zapewniają wiązania dla obiektu `arguments`. Jako prawidłową alternatywę użyj `rest parameters`, aby osiągnąć ten sam wynik:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) na MDN.

## Podstępny return

Wyrażenie `return` jest również podstępne. Rozważ to:

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

`return` i zwrócone wyrażenie musi znajdować się w tym samym wierszu:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

Wynika to z koncepcji o nazwie Automatyczne wstawianie średników, która automatycznie wstawia średniki po większości nowych linii. W pierwszym przykładzie między wyrażeniem `return` a literałem obiektu wstawiono średnik, więc funkcja zwraca `undefined`, a literał obiektu nigdy nie jest oceniany.

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

Z prawej do lewej, `{n: 2}` jest przypisany do foo, a wynik tego przypisania `{n: 2}` jest do foo.x, i dlatego bar jest `{n: 1, x: {n: 2}}` jako bar jest referencją do foo. Ale czemu foo.x jest undefined podczas gdy bar.x nie jest ?

### 💡 Wytłumaczenie:

Foo and bar references the same object `{n: 1}`, and lvalues are resolved before assignations. `foo = {n: 2}` is creating a new object, and so foo is updated to reference that new object. The trick here is foo in `foo.x = ...` as a lvalue was resolved beforehand and still reference the old `foo = {n: 1}` object and update it by adding the x value. After that chain assignments, bar still reference the old foo object, but foo reference the new `{n: 2}` object, where x is not existing.

Jest to równoważne z:

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x point to the address of the new foo object
// it's not equivalent to: bar.x = {n: 2}
```

## Dostęp do właściwości obiektu za pomocą tablic

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

Co z tablicami pseudo-wielowymiarowymi?

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

Operator nawiasów klamrowych `[]` konwertuje przekazane wyrażenie za pomocą `toString`. Konwersja tablicy jednoelementowej na ciąg znaków jest zbliżona do konwersji zawartego elementu na ciąg znaków:

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

`Number.toFixed()` może zachowywać się trochę dziwnie w różnych przeglądarkach. Sprawdź ten przykład:

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

Podczas gdy twoim pierwszym instynktem może być to, że IE11 jest poprawny, a Firefox / Chrome są w błędzie, w rzeczywistości Firefox / Chrome bardziej bezpośrednio przestrzegają standardów liczbowych (zmiennoprzecinkowy IEEE-754), podczas gdy IE11 nieznacznie ich nie przestrzega (prawdopodobnie), aby dać wyraźniejsze wyniki.

Możesz zobaczyć, dlaczego tak się dzieje po kilku szybkich testach:

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

## `Math.max()` mniej niż `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 Wytłumaczenie:

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) od Charlie Harvey

## Comparing `null` to `0`

Następujące wyrażenia wydają się wprowadzać w sprzeczność:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

Jak `null` nie może być ani równy ani większy od `0`, jeśli `null>=0' jest w rzeczywistości`true`? (Działa to również z mniej niż w ten sam sposób.)

### 💡 Wytłumaczenie:

Sposób oceny tych trzech wyrażeń jest różny i jest odpowiedzialny za wywołanie tego nieoczekiwanego zachowania.

Po pierwsze, abstrakcyjne porównanie równości `null == 0`. Zwykle, jeśli ten operator nie może poprawnie porównać wartości po obu stronach, konwertuje obie liczby na liczby i porównuje liczby. Następnie możesz spodziewać się następującego zachowania:

```js
// This is not what happens
(null == 0 + null) == +0;
0 == 0;
true;
```

Jednak, zgodnie z dokładnym odczytaniem specyfikacji, konwersja liczb tak naprawdę nie zachodzi po stronie, która jest `null` lub `undefined`. Dlatego jeśli po jednej stronie znaku równości występuje `null`, druga strona musi być `null` lub `undefined`, aby wyrażenie mogło zwrócić `true`. Ponieważ tak nie jest, zwracane jest `false`.

Następnie relacyjne porównanie `null> 0`. Algorytm tutaj, w przeciwieństwie do abstrakcyjnego operatora równości, _przekonwertuje_ `null` na liczbę. Dlatego otrzymujemy takie zachowanie:

```js
null > 0
+null = +0
0 > 0
false
```

Wreszcie relacyjne porównanie `null >= 0`. Można argumentować, że to wyrażenie powinno być wynikiem `null> 0 || null == 0`; gdyby tak było, powyższe wyniki oznaczałyby, że byłoby to również `false`. Jednak operator `> =` w rzeczywistości działa w zupełnie inny sposób, co w zasadzie ma przeciwne działanie niż operator `<`. Ponieważ nasz przykład z operatorem większym niż powyżej odnosi się również do operatora mniejszego niż, oznacza to, że to wyrażenie jest w rzeczywistości oceniane tak:

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

## Redeklaracja tej samej zmiennej

JS pozwala na ponowne zdefiniowanie zmiennych:

```js
a;
a;
// This is also valid
a, a;
```

Działa również w trybie ścisłym:

```js
var a, a, a;
var a;
var a;
```

### 💡 Wytłumaczenie:

Wszystkie definicje są scalone w jedną definicję.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Domyślne zachowanie Array.prototype.sort()

Wyobraź sobie, że musisz posortować tablicę liczb.

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 Wytłumaczenie:

Domyślna kolejność sortowania opiera się na konwersji elementów na ciągi, a następnie porównaniu ich sekwencji wartości jednostek kodu UTF-16.

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
