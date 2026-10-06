# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> Una raccolta di snippet ingannevoli e divertenti scritti in JavaScript

JavaScript è un ottimo linguaggio. Ha una sintassi semplice, un grande ecosistema e, quello che conta veramente, una community fantastica.

Allo stesso tempo, sappiamo che JavaScript è un linguaggio abbastanza strano con delle parti cervellotiche. Alcune di queste possono rendere il nostro lavoro un inferno, alcune invece possono farci ridere a crepapelle.

L'idea per WTFJS è di [Brian Leroux](https://twitter.com/brianleroux). Questo elenco è largamente ispirato al suo talk [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node Packaged Manuscript

Puoi installare questo manuale con `npm`. Lancia semplicemente:

```
$ npm install -g wtfjs
```

Ora dovresti essere in grado di eseguire `wtfjs` dalla riga di comando. Altrimenti puoi continuare tranquillamente a leggerlo qui.

Il codice sorgente lo puoi trovare qui: <https://github.com/denysdovhan/wtfjs>

# Traduzioni

Attualmente **wtfjs** è disponibile nelle seguenti lingue:

- [中文版](./README-zh-cn.md)
- [Français](./README-fr-fr.md)
- [Português do Brasil](./README-pt-br.md)
- [Polski](./README-pl-pl.md)
- [Italiano](./README-it-it.md)

[**Richiedi un'altra traduzione**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 Motivazione](#-motivazione)
- [✍🏻 Notazione](#-notazione)
- [👀 Esempi](#-esempi)
  - [`[]` è uguale a `![]`](#-%C3%A8-uguale-a-)
  - [`true` è diverso da `![]`, ma anche diverso da `[]`](#true-%C3%A8-diverso-da--ma-anche-diverso-da-)
  - [true è false](#true-%C3%A8-false)
  - [baNaNa](#banana)
  - [`NaN` non è `NaN`](#nan-non-%C3%A8-nan)
  - [È un fail](#%C3%A8-un-fail)
  - [`[]` è truthy, ma non `true`](#-%C3%A8-truthy-ma-non-true)
  - [`null` è falsy, ma non `false`](#null-%C3%A8-falsy-ma-non-false)
  - [`document.all` è un object, ma è undefined](#documentall-%C3%A8-un-object-ma-%C3%A8-undefined)
  - [Il numero più piccolo rappresentabile è maggiore di zero](#il-numero-pi%C3%B9-piccolo-rappresentabile-%C3%A8-maggiore-di-zero)
  - [function non è una function](#function-non-%C3%A8-una-function)
  - [Sommare array](#sommare-array)
  - ["Trailing commas" in un array](#trailing-commas-in-un-array)
  - [L'operatore di uguaglianza sugli array è un mostro](#loperatore-di-uguaglianza-sugli-array-%C3%A8-un-mostro)
  - [`undefined` e `Number`](#undefined-e-number)
  - [`parseInt` è bast\*\*do](#parseint-%C3%A8-bast%5C%5Cdo)
  - [Math con `true` e `false`](#math-con-true-e-false)
  - [I commenti HTML sono validi anche in JavaScript](#i-commenti-html-sono-validi-anche-in-javascript)
  - [`NaN` è ~~not~~ a number](#nan-%C3%A8-not-a-number)
  - [`[]` e `null` sono objects](#-e-null-sono-objects)
  - [Incrementare numeri magicamente](#incrementare-numeri-magicamente)
  - [La precisione di `0.1 + 0.2`](#la-precisione-di-01--02)
  - [Patchare numeri](#patchare-numeri)
  - [Confrontare tre numeri](#confrontare-tre-numeri)
  - [Matematica spassosa](#matematica-spassosa)
  - [Somma di RegExps](#somma-di-regexps)
  - [Le stringhe non sono istanze di `String`](#le-stringhe-non-sono-istanze-di-string)
  - [Richiamare funzioni con le backticks](#richiamare-funzioni-con-le-backticks)
  - [Call call call](#call-call-call)
  - [Una proprietà chiamata `constructor`](#una-propriet%C3%A0-chiamata-constructor)
  - [Un Object usato come key nelle property di un oggetto](#un-object-usato-come-key-nelle-property-di-un-oggetto)
  - [Accedere ai prototypes con `__proto__`](#accedere-ai-prototypes-con-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Destructuring con valori di default](#destructuring-con-valori-di-default)
  - [Puntini e lo spreading](#puntini-e-lo-spreading)
  - [Labels](#labels)
  - [Labels annidate](#labels-annidate)
  - [Un `try..catch` insidioso](#un-trycatch-insidioso)
  - [Si tratta di ereditarietà multipla?](#si-tratta-di-ereditariet%C3%A0-multipla)
  - [Un generator che produce se stesso](#un-generator-che-produce-se-stesso)
  - [Una classe di tipo class](#una-classe-di-tipo-class)
  - [Oggetti non-coercible](#oggetti-non-coercible)
  - [Arrow functions strambe](#arrow-functions-strambe)
  - [Arrow functions non possono essere un costruttore](#arrow-functions-non-possono-essere-un-costruttore)
  - [`arguments` e arrow functions](#arguments-e-arrow-functions)
  - [Uno strano return](#uno-strano-return)
  - [Concatenare assegnamenti su un object](#concatenare-assegnamenti-su-un-object)
  - [Accedere alle properties di un object con gli array](#accedere-alle-properties-di-un-object-con-gli-array)
  - [Null e gli operatori relazionali](#null-e-gli-operatori-relazionali)
  - [`Number.toFixed()` mostra numeri diversi](#numbertofixed-mostra-numeri-diversi)
  - [`Math.max()` più piccolo di `Math.min()`](#mathmax-pi%C3%B9-piccolo-di-mathmin)
  - [Confrontare `null` con `0`](#confrontare-null-con-0)
  - [Alcune ridichiarazioni di variabili](#alcune-ridichiarazioni-di-variabili)
  - [Comportamento di default di Array.prototype.sort()](#comportamento-di-default-di-arrayprototypesort)
  - [resolve() non restituisce un'istanza di Promise](#resolve-non-restituisce-unistanza-di-promise)
- [📚 Other resources](#-other-resources)
- [🎓 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 Motivazione

> Just for fun
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

Lo scopo principale di questo elenco è quello di raccogliere alcuni esempi strambi e mostrarne il loro funzionamento, se possibile. Semplicemente per il fatto che è divertente imparare qualcosa che non sapevamo prima.

Se sei un principiante puoi utilizzare questi appunti per approfondire JavaScript. Spero che questi appunti ti motivino a leggerne le specifiche.

Se sei uno sviluppatore senior, considera questi esempi come un'ottimo punto di riferimento per tutte quelle stranezze e stramberie del tuo amato JavaScript.

Ad ogni modo, leggilo. Probabilmente imparerai qualcosa di nuovo.

# ✍🏻 Notazione

**`// ->`** viene utilizzato per indicare il risultato di un'espressione. Ad esempio:

```js
1 + 1; // -> 2
```

**`// >`** significa il risultato di `console.log` o di un altro output. Ad esempio:

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** è semplicemente un commento utilizzato per le spiegazioni. Esempio:

```js
// Assegnare una funzione ad una costante
const foo = function() {};
```

# 👀 Esempi

## `[]` è uguale a `![]`

Array è uguale a not array:

```js
[] == ![]; // -> true
```

### 💡 Spiegazione:

L'opratore di abstract equality converte entrambi gli operandi prima di confrontarli, e diventano entrambi `0` per ragioni differenti. Gli Array sono truthy, quindi sulla destra, l'opposto di un valore truthy è `false`, che viene quindi forzato a diventare uno `0`. Sul lato sinistro però l'array vuoto viene forzato a diventare un numero senza prima essere convertito in un valore booleano, e gli array vuoti vengono forzati a `0` a prescindere che siano truthy.

Qui possiamo vedere come viene semplificata l'espressione:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

Vedi anche [`[]` è truthy, ma non `true`](#-is-truthy-but-not-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` è diverso da `![]`, ma anche diverso da `[]`

Array è diverso da `true`, ma anche not Array è diverso da `true`;
Array è uguale a `false`, ma anche not Array è uguale a `false`:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 Spiegazione:

```js
true == []; // -> false
true == ![]; // -> false

// Secondo le specifiche

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

// Secondo le specifiche

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> true

![]; // -> false

false == false; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true è false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 Spiegazione:

Considera questo, step-by-step:

```js
// true è 'truthy' e rappresentato dal valore 1 (number), 'true' in formato stringa è NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' non è la stringa vuota, quindi è un valore truthy
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

Questo è un giochino old-school in JavaScript, rivisitato. L'originale è questo:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 Spiegazione:

L'espressione viene valutata come `'foo' + (+'bar')`, che converte `'bar'` in "not a number".

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` non è `NaN`

```js
NaN === NaN; // -> false
```

### 💡 Spiegazione:

Le specifiche definiscono rigorosamente la logica dietro a questo comportamento:

> 1. Se `Type(x)` è diverso da `Type(y)`, return **false**.
> 2. Se `Type(x)` è Number, allora
>    1. Se `x` è **NaN**, return **false**.
>    2. Se `y` è **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

Seguendo la definizione di `NaN` da quella dell'IEEE:

> Sono possibili quattro relazioni mutuamente esclusive: less than, equal, greater than, e unordered. L'ultimo caso si presenta quando almeno un operando è NaN. Tutt i NaN se comparati risulteranno unordered, inclusa la comparazione con se stesso.
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## È un fail

Non crederai ai tuoi occhi, ma...

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 Spiegazione:

Rompendo quell'ammasso di simboli in pezzettini, possiamo notare che il seguente pattern si ripete spesso:

```js
![] + []; // -> 'false'
![]; // -> false
```

Quindi proviamo a sommare `[]` a `false`. Ma a causa di una serie di chiamate interne (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) otteniamo la conversione dell'operando a destra in una stringa:

```js
![] + [].toString(); // 'false'
```

Se pensiamo ad una stringa come un Array, possiamo accedere al suo primo elemento con `[0]`:

```js
"false"[0]; // -> 'f'
```

Il resto è ovvio, ma la `i` è complicata. La `i` in `fail` viene ottenuta generando la stringa `'falseundefined'` e prendendo l'elemento all'indice `['10']`

## `[]` è truthy, ma non `true`

Un array è un valore truthy, ma non è uguale a `true`.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 Spiegazione:

Ecco i link alle sezioni corrispondenti della specifica ECMA-262:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` è falsy, ma non `false`

Nonostante il fatto che `null` sia un valore falsy, non è uguale a `false`.

```js
!!null; // -> false
null == false; // -> false
```

Allo stesso modo, altri valori falsy, come `0` o `''` sono uguali a `false`.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 Spiegazione:

La spiegazione è la stessa dell'esempio precedente. Ecco il link corrispondente:

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` è un object, ma è undefined

> ⚠️ Questo fa parte delle Browser API e non funziona su Node.js ⚠️

Nonostante il fatto che `document.all` sia un oggetto array-like e permette l'accesso al DOM della pagina, risponde alla funzione `typeof` con `undefined`.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

Allo stesso modo, `document.all` è diverso da `undefined`.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

Ma contemporaneamente:

```js
document.all == null; // -> true
```

### 💡 Spiegazione:

> `document.all` veniva utilizzato per accedere agli elementi del DOM, nelle vecchie versioni di IE. Nonostante non sia mai diventato uno standard, veniva ampiamente utilizzato in codice JS non proprio recentissimo. Quando vennero rilasciate le nuove APIs (come `document.getElementById`) questa API divenne obsoleta e il comitato dello standard dovette decidere cosa farne. A causa del suo uso spropositato l'API venne mantenuta ma venne introdotta una violazione intenzionale nelle speficiche di JavaScript.
> Il motivo per il quale risponde a `false` quando si utilizza l'operatore di [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) con `undefined`, mentre `true` quando si utilizza l'operatore di [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) è a causa della violazione intenzionale inserita nella specifica che la permette in modo esplicito.

> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) at YDKJS - Types & Grammar

## Il numero più piccolo rappresentabile è maggiore di zero

`Number.MIN_VALUE` è il numero più piccolo rappresentabile, che è maggiore di zero:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Spiegazione:

> `Number.MIN_VALUE` è `5e-324`, ovvero il più piccolo numero positivo che può essere rappresentato con precisione float, cioè quello che si può ottenere il più vicino possibile allo zero. Definisce la migliore risoluzione che un tipo di dato float può fornire.
>
> Il numero più piccolo in assoluto è `Number.NEGATIVE_INFINITY` nonostante non sia effettivamente un tipo numerico.
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## function non è una function

> ⚠️ Un bug presente in V8 v5.5 o inferiore (Node.js <=7) ⚠️

Tutti conoscerete la noiosa _undefined is not a function_, ma questa?

```js
// Dichiara una classe che estende null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 Spiegazione:

Questo non è parte delle specifiche. È semplicemente un bug che ora è stato risolto, quindi non dovrebbero esserci problemi con questo in futuro.

## Sommare array

E se provassimo a sommare due array?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Spiegazione:

Viene svolta la concatenazione. il procedimento step-by-step è il seguente:

```js
[1, 2, 3] + [4, 5, 6];
// chiama toString()
[1, 2, 3].toString() + [4, 5, 6].toString();
// concatenazione
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

## "Trailing commas" in un array

Creiamo un array con 4 elementi vuoti. Nonostante ciò, si ottiene un array con 3 elementi, a causa delle "trailing commas":

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 Spiegazione:

> **Trailing commas** (anche chiamate "final commas") sono utili quando si aggiungono nuovi elementi, parametri o proprietà in codice JavaScript. Se si vuole aggiungere una nuova proprietà si può semplicemente aggiungere una nuova riga senza modificare quella precedente, se quella linea presenta già una virgola alla fine. Questo rende i diffs dei sistemi di version-control più puliti e modificare il codice è leggermente meno problematico.
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) at MDN

## L'operatore di uguaglianza sugli array è un mostro

L'operatore di uguaglianza sugli array in JS è un mostro, come possiamo osservare sotto:

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

### 💡 Spiegazione:

Guarda attentamente gli esempi precedenti! Il comportamento viene spiegato nella sezione [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) delle specifiche.

## `undefined` e `Number`

Se non passiamo argomenti al costruttore di `Number`, otteniamo `0`. Il valore `undefined` viene assegnato di default quando non viene passato alcun valore, quindi possiamo aspettarci che `Number` senza parametri prenda `undefined` come valore del suo parametro. Invece quando inseriamo `undefined`, otteniamo `NaN`.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Spiegazione:

In base alle specifiche:

1. Se non viene passato alcun parametro durante l'invocazione della funzione, `n` viene valorizzato a `+0`.
2. Altrimenti, `n` sarà il risultato di `ToNumber(value)`.
3. Nel caso di `undefined`, `ToNumber(undefined)` deve restituire `NaN`.

Qui la sezione corrispondente:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` è bast\*\*do

`parseInt` è famoso per le sue stranezze:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 Spiegazione:** Questo avviene perché `parseInt` continuerà a svolgere il parsing carattere per carattere fino a che non trova un carattere che non riconosce. La `f` in `'f*ck'` è la rappresentazione esadecimale di `15`.

Svolgere il parsing di `Infinity` a integer è qualcosa di...

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

Attenzione anche quando si svolge il parsing di `null`:

```js
parseInt(null, 24); // -> 23
```

**💡 Spiegazione:**

> Si sta convertendo `null` alla stringa `"null"` e provando poi a convertirla a sua volta. Per le radici da 0 a 23, non ci sono numerali per svolgere la conversione, quindi viene restituito NaN. A 24, `"n"`, la 14-esima lettera, viene aggiunta al sistema di numerazione. A 31, `"u"`, la 21-esima lettera, viene aggiunta e l'intera stringa può essere decodificata. A 37 non c'è più un valido insieme di numerazione che si può generare quindi viene restituito `NaN`.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

Non dimentichiamoci del sistema di numerazione ottale:

```js
parseInt("06"); // 6
parseInt("08"); // 8 se  è presente il supporto a ECMAScript 5
parseInt("08"); // 0 se assente il supporto a ECMAScript 5
```

**💡 Spiegazione:** Se la stringa in input inizia con "0", la radice è 8 (octal) o 10 (decimal). Quale radice viene scelta dipende dall'implementazione. ECMAScript 5 specifica l'utilizzo di 10 (decimal), Ma non è ancora supportata da tutti i browser. Per questo motivo è sempre meglio specificare una radice quando si utilizza `parseInt`.

`parseInt` converte sempre l'input in stringa:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

Attenzione quando si svolge il parsin di valori in virgola mobile:

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 Spiegazione:** `ParseInt` prende una stringa come argomento e restituisce un intero in base alla radice specificata. `ParseInt` inoltre elimina tutto ciò che viene dopo e incluso il primo carattere non numerico nella stringa passata come parametro. `0.000001` Viene convertito nella stringa `"0.000001"` e `parseInt` restituisce `0`. Quando `0.0000001` viene convertito in stringa viene interpretato come `"1e-7"` e quindi `parseInt` restituisce `1`. `1/1999999` viene interpretato come `5.00000250000125e-7` e `parseInt` restituisce `5`.

## Math con `true` e `false`

Facciamo un po' di calcoli:

```js
true -
  true +
  // -> 2
  (true + true) *
    (true + true) -
  true; // -> 3
```

Hmmm... 🤔

### 💡 Spiegazione:

Possiamo forzare dei valori a numeri utilizzando il costruttore di `Number`. È abbastanza ovvio che `true` venga forzato a `1`:

```js
Number(true); // -> 1
```

L'operatore unario `+` prova a convertire il suo valore in un numero. Può convertire la rappresentazione testuale di interie e float, così come i valori non testuali `true`, `false`, e `null`. Se non riesce a svolgere il parsing di un particolare valore, restuituirà `NaN`. Questo significa che possiamo forzare facilmente `true` a `1`:

```js
+true; // -> 1
```

Quando svolgiamo addizioni o moltiplicazioni, viene invocato il metodo `ToNumber`. In base alla specifica questo metodo restituisce:

> Se `parametro` è **true**, restituisci **1**. Se `parametro` è **false**, restituisci **+0**.

È questo il motivo per il quale possiamo sommare valori booleani e ottenere risultati corretti.

Sezioni corrispondenti:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## I commenti HTML sono validi anche in JavaScript

Non ci crederai, ma `<!--` (ovvero un commento in HTML) è un commento valido in JavaScript.

```js
// commento valido
<!-- anche questo
```

### 💡 Spiegazione:

Stupito? Commenti HTML-like sono stati pensati per permettere ai browser che non capivano il tag `<script>` di degradare in modo soft. Questi browser, ad esempio Netscape 1.x non sono più diffusi. Quindi non c'è proprio più alcun motivo per inserire commenti HTML nei tag `script`

Dato che Node.js è basato sull'engine V8, i commenti HTML-like sono supportati anche dal runtime di the Node.js. Inoltre sono parte delle specifiche:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` è ~~not~~ a number

Il tipo di `NaN` è `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 Spiegazione:

Spiegazione di come funzionano gli operatori `typeof` e `instanceof`:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` e `null` sono objects

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// però
null instanceof Object; // false
```

### 💡 Spiegazione:

Il comportamento dell'operatore `typeof` è definito nella seguente sezione delle specifiche:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

Secondo le specifiche, l'operatore `typeof` restituisce una stringa in base alla [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). Per `null`, gli oggetti ordinari, esotici standard e non standard che non implementano `[[Call]]`, restituisce la stringa `"object"`.

Comunque si può anche controllare il tipo di un oggetto utilizzando il metodo `toString`.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Incrementare numeri magicamente

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 Spiegazione:

Questo è causato dallo standard IEEE 754-2008 per l'aritmetica binaria dei numeri in virgola mobile. A questa grandezze numeriche, arrotonda al numero pari più vicino. Leggi di più qui:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## La precisione di `0.1 + 0.2`

Un giochino ben noto. La somma di `0.1` e `0.2` è completamente sbagliata:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 Spiegazione:

La risposta alla domanda [”La matematica in virgola mobile è completamente rotta? ”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) su StackOverflow:

> Le costanti `0.2` e `0.3` nel programma saranno approssimazioni del loro vero valore. Il valore `double` più vicino a `0.2` è più grande del numero razionale `0.2` ma il `double` più vicino a `0.3` è più piccolo del numero razionale `0.3`. La somma di `0.1` e `0.2` risulta essere più grande del numero razionale `0.3` e quindi risultando diverso dalla costante presente nel codice.

Questo problema è talmente noto che esiste anche il sito web [0.30000000000000004.com](http://0.30000000000000004.com/). Capita in tutti i linguaggi di programmazione che svolgono calcoli in virgola mobile, non solo JavaScript.

## Patchare numeri

Possiamo aggiungere metodi nostri agli oggetti wrapper come `Number` o `String`.

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

### 💡 Spiegazione:

Ovviamente possiamo estendere l'oggetto `Number` così come ogni altro oggetto in JavaScript. Non è comunque una pratica consigliata se il metodo definito non è parte delle specifiche. Ecco la lista delle proprietà dell'oggetto `Number`:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Confrontare tre numeri

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Spiegazione:

Perché funziona in questo modo? Beh, il problema è nella prima parte dell'espressione. Ecco come funziona:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

Possiamo correggerlo con l'operatore _Greater than or equal (`>=`)_:

```js
3 > 2 >= 1; // true
```

Leggi più a riguardo degli operatori relazionali nelle specifiche:

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Matematica spassosa

Spesso il risultato delle operazioni aritmetiche in JavaScript risulta essere abbastanza strano. Consideriamo questi esempi:

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

### 💡 Spiegazione:

Cosa succede nei primi quattro esempi? Ecco una piccola tabella per comprendere la somma in JavaScript:

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

E per quanto riguarda gli altri esempi? I metodi `ToPrimitive` e `ToString` vengono chiamati implicitamente per `[]` e `{}` prima della somma. Leggi di più riguardo a questo processo nelle specifiche:

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

In particolare l'eccezione è in `{} + []`. Il motivo per cui differisce da `[] + {}` è che, senza parentesi, viene interpretato come un blocco di codice seguito dall'operatore unario +, convertendo `[]` in un numero. Come viene spiegato di seguito:

```js
{
  // qui un blocco di codice
}
+[]; // -> 0
```

Per ottenere lo stesso risultato di `[] + {}` possiamo racchiuderlo tra parentesi.

```js
({} + []); // -> [object Object]
```

## Somma di RegExps

Sapevi che si possono sommare numero in questo modo?

```js
// Patch a toString method
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 Spiegazione:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Le stringhe non sono istanze di `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Spiegazione:

Il costruttore di `String` restituisce una stringa:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Proviamo con `new`:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

Object? eh?

```js
new String("str"); // -> [String: 'str']
```

Più informazioni sul costruttore di String nelle specifiche:

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Richiamare funzioni con le backticks

Dichiariamo una funzione che logga tutti i parametri nella console:

```js
function f(...args) {
  return args;
}
```

Senza dubbio, saprai che possiamo richiamarla nel modo seguente:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

Ma sapevi di poter chiamare qualsiasi funzione con le backticks?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Spiegazione:

Beh, questa non è per niente magia se hai familiarità con i _Tagged template literals_. Nell'esempio precedente, la funzione f `f` è un tag per i template literal. I tag prima dei template literals permettono di svolgere il parsing dei template con una funzione. Il primo parametro di una "funzione tag" contiene un array di stringhe. I parametri restanti sono relativi alle espressioni. Ad esempio:

```js
function template(strings, ...keys) {
  // fai qualcosa con strings and keys…
}
```

Questa è la [magia dietro](http://mxstbr.blog/2016/11/styled-components-magic-explained/) famosa libreria chiamata [💅 styled-components](https://www.styled-components.com/), molto popolare tra la community di React.

Link alle specifiche:

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> Trovato da [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 Spiegazione:

Attenzione, ti può mettere in crisi il cervello! Prova ad eseguire questo codice a mente: stiamo applicando il metodo `call` usando il metodo `apply`.
Leggi di più:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## Una proprietà chiamata `constructor`

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Spiegazione:

Consideriamo questo esempio passo passo:

```js
// Dichiariamo una costante che è la stringa 'constructor'
const c = "constructor";

// c è una stringa
c; // -> 'constructor'

// Otteniamo il costruttore di string
c[c]; // -> [Function: String]

// Otteniamo il costruttore di constructor
c[c][c]; // -> [Function: Function]

// chiamiamo la funzione costruttore e gli passiamo
// il corpo di una nuova funzione come parametro
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// Chiamiamo la funzione anonima risultante
// Il risultato è loggare sulla console la stringa 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?
```

`Object.prototype.constructor` restituisce un riferimento al costruttore di `Object` che ha creato l'oggetto. Con le stringhe è `String`, nel caso dei numeri è `Number` e così via.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## Un Object usato come key nelle property di un oggetto

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 Spiegazione:

Perché funziona così? Qui stiamo utilizzando le _Computed property name_. Quando passiamo un oggetto tra parentesi quadre, forza la conversione di quell'oggetto a stringa, quindi otteniamo la proprietà `'[object Object]'` e il valore `{}`.

Possiamo realizzare un "brackets hell" in questo modo:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

Leggi di più a riguardo degli object literals qui:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## Accedere ai prototypes con `__proto__`

Come sappiamo, i tipi primitivi non hanno prototipi. Però, se proviamo ad ottenere il valore di `__proto__` per i tipi primitivi, otteniamo questo:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 Spiegazione:

Questo accade perché quando qualcosa non ha un prototype, verrà inserito in un oggetto wrapper con un metodo `ToObject`. Quindi, passo passo:

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

Qui più informazioni riguardo a `__proto__`:

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

Quale è il risultato dell'espressione qui sotto?

```js
`${{ Object }}`;
```

La risposta è:

```js
// -> '[object Object]'
```

### 💡 Spiegazione:

Abbiamo definito un oggetto con una proprietà `Object` usando la _Shorthand property notation_:

```js
{
  Object: Object;
}
```

Quindi abbiamo passato questo oggetto al template literal, seguirà la chiamata al metodo `toString` per quell'oggetto. Ecco perché otteniamo la stringa `'[object Object]'`.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Destructuring con valori di default

Considera l'esempio seguente:

```js
let x,
  { x: y = 1 } = { x };
y;
```

L'esempio precedente è un ottima domanda per un colloquio di lavoro. Quale è il valore di `y`? La risposta è:

```js
// -> 1
```

### 💡 Spiegazione:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

Con l'esempio precedente:

1. Dichiariamo `x` senza alcun valore, quindi risulta `undefined`.
2. Quindi inseriamo il valore di `x` all'interno della proprietà `x` dell'oggetto.
3. Quindi estraiamo il valore di `x` usando il destructuring e lo assegniamo a `y`. Se il valore non è definito, allora utilizziamo `1` come valore di default.
4. Restituiamo il valore di `y`.

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) su MDN

## Puntini e lo spreading

Si possono realizzare esempi interessanti utilizzando l'operatore di spreading e gli array. Considera questo:

```js
[...[..."..."]].length; // -> 3
```

### 💡 Spiegazione:

Perché `3`? Quando utilizziamo [l'operatore di spread](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), viene chiamato il metodo `@@iterator`, e l'iteratore che viene restituito viene utilizzato per ottenere i valori sui quali iterare. L'iteratore di default per le stringhe separa la stringa in caratteri. Dopo lo spreading, vengono inseriti questi valori in un array. Quindi viene svolto nuovamente lo spread sull'array e il risultato viene nuovamente inserito al suo interno.

La stringa `'...'` è composta da tre caratteri `.`, quindi la dimensione dell'array risultante è `3`.

Ora, passo passo:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Chiaramente, possiamo svolgere questo procedimento di spread e wrap quante volte vogliamo:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// and so on …
```

## Labels

Sono in pochi i programmatori che sono a conoscenza delle Labels in JavaScript. Sono abbastanza interessanti:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 Spiegazione:

L'istruzione etichettata viene utilizzata con le istruzioni di `break` o `continue`. Possiamo usare un'etichetta per identificare costrutto iterativo, e usare le istruzioni `break` o `continue` per indicare se il programma deve interrompere l'iterazione o continuarla.

Nell'esempio precedente, identifichiamo l'etichetta `foo`. Dopo che `console.log('first');` viene eseguita l'esecuzione viene fermata.

Approfondisci le etichette in JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) su MDN

## Labels annidate

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Spiegazione:

Simile agli esempi precedenti, clicca sui seguenti link:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) su MDN

## Un `try..catch` insidioso

Cosa restituisce questa espressione? `2` o `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

La risposta è `3`. Sorpreso?

### 💡 Spiegazione:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Si tratta di ereditarietà multipla?

Dai uno sguardo all'esempio sottostante:

```js
new class F extends (String, Array) {}(); // -> F []
```

Si tratta di ereditarietà multipla? Negativo.

### 💡 Spiegazione:

La parte interessante è il valore della clausola (`(String, Array)`) di `extends`. L'operatore di grouping restituisce sempre il suo ultimo parametro, quindi `(String, Array)` è semplicemente `Array`. Questo significa che abbiamo creato una classe che estende `Array`.

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## Un generator che produce se stesso

Guarda questo esempio di generator che produce se stesso:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

Come possiamo notare, il valore restituito è un oggetto con `value` uguale a `f`. In quel caso, possiamo fare una cosa del genere:

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

// and così via
// …
```

### 💡 Spiegazione:

Per capirne il suo funzionamento, leggi queste sezioni delle specifiche:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## Una classe di tipo class

Considera questa sintassi offuscata in gioco:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

Sembra la dichiarazione di una classe all'interno di un'altra classe. Dovrebbe essere un errore, invece otteniamo `'object'`.

### 💡 Spiegazione:

Da ECMAScript 5, possiamo usare le _keywords_ come _property names_. Quindi immaginalo come nel seguente esempio:

```js
const foo = {
  class: function() {}
};
```

ES6 ha standardizzato la definizione compatta per i metodi. Inoltre, le classi possono essere anonime. Quindi se togliamo la parte con `: function`, otteniamo:

```js
class {
  class() {}
}
```

Il risultato di una default class è sempre un oggetto semplice. E il tuo typeof dovrebbe restituire `'object'`.

Leggi di più qui:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Oggetti non-coercible

Con i ben noti, esiste un modo per evitare la type-coercion. Guarda un po':

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

Adesso possiamo utilizzarla in questo modo:

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

### 💡 Spiegazione:

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## Arrow functions strambe

Considera l'esempio sottostante:

```js
let f = () => 10;
f(); // -> 10
```

Okay, va bene, ma guarda questo:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 Spiegazione:

Potresti aspettarti `{}` anzichè `undefined`. Questo è perché le parentesi graffe fanno parte della sintassi per le arrow functions, quindi `f` restituirà undefined. È comunque possibile restituire l'oggetto `{}` direttamente da una arrow function, racchiudendo il valore di ritorno tra parentesi.

```js
let f = () => ({});
f(); // -> {}
```

## Arrow functions non possono essere un costruttore

Considera l'esempio sottostante:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> f { 'a': 1 }
```

Ora, prova a fare la stessa cosa con una arrow function:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Spiegazione:

Le arrow function non possono essere utilizzate come costruttore e lanceranno un errore se usate con `new`. Dato che hanno un `this` lessicale, e non hanno la proprietà `prototype`, non avrebbe molto senso.

## `arguments` e arrow functions

Considera l'esempio sottostante:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

Ora, prova a fare la stessa cosa con una arrow function:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 Spiegazione:

Le arrow functions sono una versione alleggerita delle funzioni tradizionali con un focus sull'essere concise e con un `this` lessicale. Allo stesso tempo le arrow function non forniscono un binding per l'oggetto `arguments`. Un'alternativa valida per ottenere lo stesso risultato è utilizzare i `rest parameters`:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## Uno strano return

anche l'istruzione `return` può essere complicata. Considera questo:

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

### 💡 Spiegazione:

`return` e l'espressione da restituire devono essere sulla stessa linea:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

Questo a causa di un concetto chiamato Automatic Semicolon Insertion, che inserisce automagicamente punti e virgola dopo la maggior parte degli a capo. Nel primo esempio, c'è un punto e virgola inserito tra l'istruzione `return` e l'oggetto, quindi la funzione restituisce `undefined` e l'oggetto non viene mai valutato.

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## Concatenare assegnamenti su un object

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

Da destra a sinistra, `{n: 2}` viene assegnato a foo, e il risultato di questo assegnamento `{n: 2}` viene assegnato a foo.x, ecco perché bar è `{n: 1, x: {n: 2}}` in quanto bar è un riferimento a foo. Ma perché foo.x è undefined mentre bar.x non lo è?

### 💡 Spiegazione:

Foo e bar referenziano lo stesso oggetto `{n: 1}`, e gli lvalues vengono risolti prima dell'assegnamento. `foo = {n: 2}` sta creando un nuovo oggetto, quindi foo viene aggiornato per referenziare il nuovo oggetto. Il trick qui è in `foo.x = ...` in quanto il lvalue è stato risolto precedentemente e referenzia ancora il vecchio oggetto `foo = {n: 1}` e lo aggiorna inserendo il valore x. Dopo questa catena di assegnamenti, bar continua a referenziare il vecchio oggetto foo, ma foo referenzia il nuovo oggetto `{n: 2}`, dove x non esiste.

È equivalente a:

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x point to the address of the new foo object
// it's not equivalent to: bar.x = {n: 2}
```

## Accedere alle properties di un object con gli array

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

E per quanto concerne gli array pseudo-multidimensionali?

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

### 💡 Spiegazione:

L'operatore parentesi quadre `[]` converte l'espressione usando il metodo `toString`. Convertire un array di un solo elemento in una stringa è come convertire l'elemento contenuto nell'array in stringa.

```js
["property"].toString(); // -> 'property'
```

## Null e gli operatori relazionali

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 Spiegazione:

Per farla breve, se `null` che è minore di `0` è `false`, allora `null >= 0` è `true`. Leggi la spiegazione approfondita per questo [qui](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

## `Number.toFixed()` mostra numeri diversi

`Number.toFixed()` può comportarsi in modo bizzarro in certi browser. Guarda l'esempio seguente:

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

### 💡 Spiegazione:

L'istinto potrebbe farci pensare che IE11 sia corretto e Firefox/Chrome sbaglino, la realtà è che Firefox/Chrome stanno rispettando gli standard per i numeri in virgola mobile (IEEE-754 Floating Point), mentre IE11 sta evitando di rispettarli (quello che probabilmente è) uno sforzo per restituire dei risultati più chiari.

Possiamo vedere perché questo accade con un semplice test:

```js
// Confermare lo strano risultato dell'arrotondamento per difetto di 5
(0.7875).toFixed(3); // -> 0.787
// Sembra essere 5 quando si estende il
// limite a 64-bit (double-precision) di precisione
(0.7875).toFixed(14); // -> 0.78750000000000
// Ma se si supera il limite?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

I numeri floating point non sono memorizzati come una sequenza di cifre decimali, ma attraverso un metodo più elaborato che produce delle piccole inacuratezze the solitamente vengono eliminate dalle chiamate a toString o simili, ma queste imprecisioni rimangono comunque presenti internamente.

In questo caso, il "5" alla fine era un numero infinitesimamente più piccolo del vero 5. Arrotondandolo ad una precisione ragionevole verrà mostrato come 5... ma internamente non è un 5.

IE11, invece, mostrerà il valore dato in input con degli zeri in coda, anche nel caso di toFixed(20), in quanto sembra forzare l'arrotondamento del valore per evitare problematiche causate dai limiti hardware.

Guarda il riferimento a `NOTE 2` sulla definizione per `toFixed` nelle specifiche ECMA-262.

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` più piccolo di `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 Spiegazione:

- [Perché Math.max() è più piccolo di Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## Confrontare `null` con `0`

La seguente espressione sembra introdurre una contraddizione:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

Come può `null` non essere uguale a, o maggiore di `0`, se `null >= 0` è effettivamente `true`? (Funziona anche con "inferiore a" nello stesso modo.)

### 💡 Spiegazione:

Il modo in cui queste tre espressioni vengono valutate sono tutti diversi ed è per questo che viene prodotto questo comportamento un po' inaspettato.

Per prima cosa analizziamo il comportamento dell'operatore di abstract equality comparison, `null == 0`.
Solitamente, se l'operatore non riesce a confrontare i suoi operanti in modo opportuno, li converte in numeri e compara questi ultimo. Quindi ci si può aspettare il seguente comportamento:

```js
// This is not what happens
(null == 0 + null) == +0;
0 == 0;
true;
```

Invece, secondo una lettura attenta delle specifiche, la conversione a numero non avviene per l'operando che ha valore `null` o `undefined`. Quindi, se abbiamo `null` da un lato del simbolo uguale, l'altro lato deve essere `null` o `undefined` per fare in modo che venga restituito `true`. Dato che non è questo il caso, verrà restituito `false`.

Ora analizziamo l'operatore di comparazione `null > 0`. Qui l'algoritmo, a differenza dell'operatore di abstract equality, _convertirà_ `null` in un numero. Quindi il comportamento sarà il seguente:

```js
null > 0
+null = +0
0 > 0
false
```

Infine, analizziamo l'operatore relazionale `null >= 0`. Si può obiettare che questa espressione dovrebbe essere il risultato di `null > 0 || null == 0`; se fosse così, allora il risultato dell'espressione dovrebbe essere `false`. Invece l'operatore `>=` funziona in un modo completamente diverso, dove praticamente prende l'opposto dell'operatore `<`. Dato che l'esempio con l'operatore "maggiore di" produce lo stesso valore dell'operatore "minore di", l'espressione verrà valutata nel modo seguente:

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

## Alcune ridichiarazioni di variabili

JS permette la ridichiarazione di variabili:

```js
a;
a;
// È valida anche questa
a, a;
```

Funziona anche in modalità strict:

```js
var a, a, a;
var a;
var a;
```

### 💡 Spiegazione:

Tutte le definizione sono state unite in una sola.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Comportamento di default di Array.prototype.sort()

Supponiamo di voler ordinare un array di numeri.

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 Spiegazione:

L'ordinamento di default viene realizzato convertendo gli elementi in stringhe, quindi confrontando i loro valore in UTF-16.

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### Suggerimento

Passa una `comparefn` se vuoi ordinare qualcosa che non è una stringa.

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

## resolve() non restituisce un'istanza di Promise

```javascript
const theObject = {
  a: 7
};
const thePromise = new Promise((resolve, reject) => {
  resolve(theObject);
}); // -> Instance object di Promise

thePromise.then(value => {
  console.log(value === theObject); // -> true
  console.log(value); // -> { a: 7 }
});
```

Il `value` che viene risolto da `thePromise` è esattamente `theObject`.

E se inserissimo un'altra `Promise` all'interno della funzione `resolve`?

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

### 💡 Spiegazione:

> Questa funzione appiattisce livelli annidati di oggetti promise-like (ad esempio una promise che risolve a una promise che risolve a qualcosa) in un singolo livello.

&ndash; [Promise.resolve() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

La specifica è [ECMAScript 25.6.1.3.2 Promise Resolve Functions](https://tc39.es/ecma262/#sec-promise-resolve-functions). But it is not quite human-friendly.

# 📚 Other resources

- [wtfjs.com](http://wtfjs.com/) — una raccolta di irregolarità e stranezze davvero speciali con un pizzico di momenti dolorosamente controintuitivi per il linguaggio del web.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — A lightning talk by Gary Bernhardt from CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Il talk di Kyle Simpsons alla Forward 2 che prova a "estrarre le stramberie” da JavaScript. Il suo desiderio è aiutare a scrivere un codice più pulito, elegante e leggibile, ispirare le persone a contribuire alla community open source.

# 🎓 License

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
