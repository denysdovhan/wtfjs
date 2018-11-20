# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> Una lista de divertidos y complejos ejemplos de código JavaScript

JavaScript es un lenguaje genial. Tiene una sintaxis simple, un gran ecosistema y lo que es mas importante, una genial comunidad.

Sabemos que Javascript es un lenguaje divertido pero que, al mismo tempo, tiene partes complejas. Mientras algunas de ellas pueden, de repente, convertir nuestro trabajo diario en un infierno, otras nos hacen partirnos de risa.

La idea original de WTFJS pertenece a [Brian Leroux](https://twitter.com/brianleroux). Esta lista está fuertemente inspirada en su charla [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node Packaged Manuscript

Puedes instalar este manual usando `npm`. Simplemente ejecuta:

```
$ npm install -g wtfjs
```

Ahora tienes que ser capaz de ejecutar `wtfjs` en tu línea de comandos. Esto abrirá el manual en tu `$PAGER` seleccionado. Por otra parte, también puedes continuar leyéndola aquí mismo.

El código está disponible aquí: <https://github.com/denysdovhan/wtfjs>

# Traducciones

Actualmente, están disponibles las siguientes traducciones de **wtfjs**:

- [中文版](./README-zh-cn.md)
- [Español](./README-es-ES.md)

[**Pedir otra traducción**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 Motivación](#-motivaci%C3%B3n)
- [✍🏻 Notación](#-notaci%C3%B3n)
- [📄 Notas de traducción](#-notas-de-traducci%C3%B3n)
- [👀 Ejemplos](#-ejemplos)
  - [`[]` es igual a `![]`](#-es-igual-a-)
  - [`true` no es igual a `![]`, pero tampoco igual a `[]`](#true-no-es-igual-a--pero-tampoco-igual-a-)
  - [true es false](#true-es-false)
  - [baNaNa](#banana)
  - [`NaN` no es un `NaN`](#nan-no-es-un-nan)
  - [Es un fail](#es-un-fail)
  - [`[]` is truthy pero no `true`](#-is-truthy-pero-no-true)
  - [`null` es falsy, pero no `false`](#null-es-falsy-pero-no-false)
  - [`document.all` es un objeto, pero es undefined](#documentall-es-un-objeto-pero-es-undefined)
  - [Valor mínimo (Minimal) es más grande que cero](#valor-m%C3%ADnimo-minimal-es-m%C3%A1s-grande-que-cero)
  - [function no es una function](#function-no-es-una-function)
  - [Sumando arrays](#sumando-arrays)
  - [Comas finales en los array](#comas-finales-en-los-array)
  - [La igualdad de Array es un montruo](#la-igualdad-de-array-es-un-montruo)
  - [`undefined` y `Number`](#undefined-y-number)
  - [`parseInt` es un tipo malo](#parseint-es-un-tipo-malo)
  - [Matemáticas con `true` y `false`](#matem%C3%A1ticas-con-true-y-false)
  - [Los comentarios HTML son válidos en Javascript](#los-comentarios-html-son-v%C3%A1lidos-en-javascript)
  - [`NaN` es ~~not~~ a number](#nan-es-not-a-number)
  - [`[]` y `null` son objetos](#-y-null-son-objetos)
  - [Incrementando números magicamente](#incrementando-n%C3%BAmeros-magicamente)
  - [Precision of `0.1 + 0.2`](#precision-of-01--02)
  - [Parcheando números](#parcheando-n%C3%BAmeros)
  - [Comparación de tres números](#comparaci%C3%B3n-de-tres-n%C3%BAmeros)
  - [Matemáticas divertidas](#matem%C3%A1ticas-divertidas)
  - [Suma de RegExps](#suma-de-regexps)
  - [Los Strings no son instancias de `String`](#los-strings-no-son-instancias-de-string)
  - [Llamando funciones con comillas de ejecución (backticks)](#llamando-funciones-con-comillas-de-ejecuci%C3%B3n-backticks)
  - [Call call call](#call-call-call)
  - [Una propiedad `constructor`](#una-propiedad-constructor)
  - [Object como key de una propiedad de un object](#object-como-key-de-una-propiedad-de-un-object)
  - [Accediendo a prototipos con `__proto__`](#accediendo-a-prototipos-con-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Desestructuración con valores por defecto.](#desestructuraci%C3%B3n-con-valores-por-defecto)
  - [Puntos y propagación](#puntos-y-propagaci%C3%B3n)
  - [Labels (etiquetas)](#labels-etiquetas)
  - [Etiquetas anidadas](#etiquetas-anidadas)
  - [`try..catch` malicioso](#trycatch-malicioso)
  - [¿Esto es herencia múltiple?](#%C2%BFesto-es-herencia-m%C3%BAltiple)
  - [Un generador que se produce a si mismo](#un-generador-que-se-produce-a-si-mismo)
  - [Una clase de clase](#una-clase-de-clase)
  - [Objetos no coercibles](#objetos-no-coercibles)
  - [Funciones de flecha complejas](#funciones-de-flecha-complejas)
  - [Las funciones flecha no pueden ser un constructor](#las-funciones-flecha-no-pueden-ser-un-constructor)
  - [`arguments` y las funciones de flecha](#arguments-y-las-funciones-de-flecha)
  - [return complejo](#return-complejo)
  - [Accediendo a propiedades de objetos con arrays](#accediendo-a-propiedades-de-objetos-con-arrays)
  - [Null y los Operadores Relacionales](#null-y-los-operadores-relacionales)
  - [`Number.toFixed()` muestra distintos números](#numbertofixed-muestra-distintos-n%C3%BAmeros)
  - [`Math.max()` es menor que `Math.min()`](#mathmax-es-menor-que-mathmin)
  - [Comparando `null` a `0`](#comparando-null-a-0)
  - [Misma redeclaración de variables](#misma-redeclaraci%C3%B3n-de-variables)
- [📚 Otros recursos](#-otros-recursos)
- [🎓 Licencia](#-licencia)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 💪🏻 Motivación

> Solo por diversión
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

El principal objetivo de esta lista es recoger algunos ejemplos locos y explicar como funcionan, si es que eso es posible. Solo porque es divertido aprender cosas que no sabiamos antes.

Si eres un principiante, puedes usar estos apuntes para entrar mas profundo en JavaScript. Espero que esatas notas te motiven a pasar mas tiempo leyendo la especificación.

Si eres un programador profesional, puedes considerar estos ejemplos como una buena referencia para todas las peculiaridades y comportamientos inesperados de nuestro querido JavaScript.

En cualquier caso, tan solo lee esto. Probablemente descubrirás algo nuevo.

# ✍🏻 Notación

**`// ->`** es usado para mostrar el resultado de una expresión. Por ejemplo:

```js
1 + 1; // -> 2
```

**`// >`** significa el resultado de `console.log` o alguna otra salida. Por ejemplo:

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** es solo un comentario usado para aclaraciones. Ejemplo:

```js
// Asignando una función a la constante foo
const foo = function() {};
```

# 📄 Notas de traducción

\*\* Los términos [`truthy`](https://developer.mozilla.org/es/docs/Glossary/Truthy) y [`falsy`](https://developer.mozilla.org/es/docs/Glossary/Falsy) no se traducirán al no encontrar en español equivalencia válida.

\*\* El término `coerced` se traducirá por coercido, que aunque la traducción mas usada sea coaccionado, coercido se parece mas al termino original.

# 👀 Ejemplos

## `[]` es igual a `![]`

Array es igual a no array:

```js
[] == ![]; // -> true
```

### 💡 Explicación:

El operador de igualdad abstracto convierte los dos lados a numeros para poder compararlos, y ambos lados se convierten en el numero `0` por distintas razones. Los Arrays son truthy, así que en la derecha, lo contrario a un valor truthy es `false`, que es coercido a `0`. A la izquierda, sin embargo, un array vacío es coercido a un numero sin ser primero boolean, y los arrays vacios se coercen a `0`, a pesar de ser truthy.

Así es como esta expresión se simplifica:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

Ver también [`[]` es truthy, pero no `true`](#-es-truthy-pero-no-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` no es igual a `![]`, pero tampoco igual a `[]`

Array no es igual a `true`, pero tampoco no array es igual a `true`;
Array es igual a `false`, no Array es también igual a `false`:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 Explicación:

```js
true == []; // -> false
true == ![]; // -> false

// Según la especificación

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

// Según la especificación

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> false

![]; // -> false

false == false; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true es false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 Explicación:

Considera este paso-a-paso:

```js
// true es 'truthy' y representado por el valor 1 (number), 'true' en formato string es NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' no es un string vacío, por lo que es un valor truthy
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a";
```

Esta es una broma old-school de Javascript pero remasterizada. Aquí esta la original:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 Explicación:

La expresión es evaluada como `'foo' + (+'bar')`, lo que convierte `'bar'` en un not a number (NaN).

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` no es un `NaN`

```js
NaN === NaN; // -> false
```

### 💡 Explicación:

La especificación define estrictamente la logica detras de este comportamiento:

> 1. Si `Type(x)` es diferente de `Type(y)`, return **false**.
> 2. Si `Type(x)` es Number:
>    1. Si `x` es **NaN**, return **false**.
>    2. Si `y` es **NaN**, return **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

A continuación la definición de `NaN` de la IEEE:

> Four mutually exclusive relations are possible: less than, equal, greater than, and unordered. The last case arises when at least one operand is NaN. Every NaN shall compare unordered with everything, including itself.
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) at StackOverflow

## Es un fail

Parece increíble pero …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 Explicación:

Descomponiendo esta amalgama de simbolos en bloques, nos damos cuenta que el siguiente patrón ocurre a menudo:

```js
![] + []; // -> 'false'
![]; // -> false
```

So we try adding `[]` to `false`. But due to a number of internal function calls (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) we end up converting the right operand to a string:

```js
![] + [].toString(); // 'false'
```

Pensando en un string como un array, podemos acceder a su primer caracter via `[0]`:

```js
"false"[0]; // -> 'f'
```

El resto es obvio, aunque la `i` es mas difícil. La `i` de `fail` se obtiene de la generació del string `'falseundefined'` y cogiendola del elemento con el índice `['10']`

## `[]` is truthy pero no `true`

Un array es un valor value, sin embargo, no es igual a `true`.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 Explicación:

Aquí hay los links a la sección correspondiente de la especificación ECMA-262:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` es falsy, pero no `false`

A pesar que `null` es un valor falsy, no es igual a `false`.

```js
!!null; // -> false
null == false; // -> false
```

Al mismo tiempo, otros varlores falsy, como `0` o `''` son igual a `false`.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 Explicación:

La explicación es la misma que en el ejemplo anterior. Aquí está el link:

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` es un objeto, pero es undefined

> ⚠️ Esto es parte de la API del navegador por lo tanto no funciona en un entorno Node.js ⚠️

A pesar que `document.all`  es un objecto tipo array y que da acceso a los nodos del DOM de la página, responde a la función `typeof` con `undefined`.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

Al mismo tiempo, `document.all` no es igual a `undefined`.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

Pero al mismo tiempo:

```js
document.all == null; // -> true
```

### 💡 Explicación:

> `document.all` solía ser una vía para acceder a los elementos del DOM, sobretodo con antiguas versiones de IE.  Si bien nunca ha sido un estándar, se usó ampliamente en código JS antiguo. Mientras el estandar avanzó con nuevas APIs (como `document.getElementById`) esta llamada API quedaba obsoleta y obsolete y el comité del estándar tenía que decidir que hacer con ella. Debido a su amplio uso, decidieron mantener la API pero introducir una violación intencionada de la especificación de JavaScript.
> La razón por la que responde a `false` cuando usa la [Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) con `undefined` y `true` cuando usa la [Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) es devido a que la deliverada violación de la especificacion permite hacer esto.
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) at WhatWG - HTML spec
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) at YDKJS - Types & Grammar

## Valor mínimo (Minimal) es más grande que cero

`Number.MIN_VALUE` es el valor más pequeño, que es mayor que cero

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Explicación:

> `Number.MIN_VALUE` es `5e-324`, es decir, el número positivo más pequeño que se puede representar con precisión flotante (float), es decir, el valor más cerca de cero al que se puede llegar. Define la mejor resolución que un float puede dar.
>
> Ahora el valor más pequeño en general es `Number.NEGATIVE_INFINITY` Aunque no es realmente numérico en sentido estricto.
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## function no es una function

> ⚠️ Hay un bug en V8 v5.5 o versiones inferiores (Node.js <=7) ⚠️

Todos conocemos el molesto _undefined is not a function_, pero que pasa con este?

```js
// Se declara una clase que extiende a null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 Explicación:

Esto no es una parte de la especificación. Es solo un error que ahora ha sido solventado, por lo que no debería haver problemas con él en el futuro.

## Sumando arrays

Que passa si se prueba a somar dos arrays?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Explicación:

Pasa la concatenación. Paso a paso:

```js
[1, 2, 3] +
  [4, 5, 6][
    // llama a toString()
    (1, 2, 3)
  ].toString() +
  [4, 5, 6].toString();
// concatenación
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

## Comas finales en los array

Creas un array con 4 elementos vacios. A pesar de todo, obtendras un array con tres elementos debido a las comas finales:

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 Explicación:

> **Comas finales** Pueden ser utiles cuando se añaden nuevos elementos, parametros o propiedades en JavaScript. Para añadir una nueva propiedad, simplemente se puede añadir una linia nueva sin modificar la anterior si esta usa una coma final. Esto hace el versionado más limpio y la edición de codigo menos sensible a errores.
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) at MDN

## La igualdad de Array es un montruo

La igualdad de Array es un montruo en JS, como se puede ver a continuación:

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

### 💡 Explicación:

Es importante mirar los ejemplos anteriores muy detalladamente! El comportamiento es explicado en la sección [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) de la especificación.

## `undefined` y `Number`

Si no se pasan argumentos al constructor de `Number`, se obtiene un `0`. El valor `undefined` es asignado como argumento por defecto cuando no hay argumentos, por lo tanto se podría esperar que `Number` sin argumento, use `undefined` como valor de su parametro. Sin embargo, si se pasa `undefined`, lo que se obtiene es `NaN`.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Explicación:

Según la especificación:

1. Si no hay argumentos pasados en la invocación de la función, `n` será `+0`.
2. Si no, `n` será ? `ToNumber(value)`.
3. En el caso de `undefined`, `ToNumber(undefined)` devolverá `NaN`.

Aquí está la sección correspondiente:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` es un tipo malo

`parseInt` es famoso por sus peculiaridades:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

### 💡 Explicación:

Esto sucede porque `parseInt` continua convirtiendo carácter a carácter hasta que encuentra uno que no conoce. La `f` en `'f*ck'` es el dígito hexadecimal `15`.

Convirtiendo `Infinito` a integer…

```js
//
parseInt("Infinito", 10); // -> NaN
// ...
parseInt("Infinito", 18); // -> NaN...
parseInt("Infinito", 19); // -> 18
// ...
parseInt("Infinito", 23); // -> 18...
parseInt("Infinito", 24); // -> 151176378
// ...
parseInt("Infinito", 29); // -> 385849803
parseInt("Infinito", 30); // -> 13693557269
// ...
parseInt("Infinito", 34); // -> 28872273981
parseInt("Infinito", 35); // -> 1201203301724
parseInt("Infinito", 36); // -> 1461559270678...
parseInt("Infinito", 37); // -> NaN
```

Cuidado al convertir `null`:

```js
parseInt(null, 24); // -> 23
```

### 💡 Explicación:

> Se está convirtiendo `null` al string `"null"` y provando de convertirlo. Para las bases de 0 a 23, no hay numericos que pueda convertir, por lo que retorna NaN. En el 24, `"n"`, la 14.ª letra, es añadida al sistema numerico. En el 31, `"u"`, la 21.ª letra,  es añadida y el string entero puede ser decodificado. En la 37 ya no hay ningún numerico válido que pueda ser generado y se devuelve `NaN`.
>
> &mdash; [“parseInt(null, 24) === 23… espera, que?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) at StackOverflow

No hay que olvidarnos de los octales:

```js
parseInt("06"); // 6
parseInt("08"); // 8 si soporta ECMAScript 5
parseInt("08"); // 0 si no soporta ECMAScript 5
```

**💡 Explicación:** Si el string de entrada empieza por "0", la base es ocho (octal) o 10 (decimal). La base que se selecciona se decide dependiendo de la implementación. ECMAScript 5 especifica que se usa la 10 (decimal), pero no todos los navegadores los soportan aún. Por esta razón siempre hay que especificar una base cuando se usa `parseInt`.

`parseInt` siempre convierte el valor entrado a string:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

Cuidado cuando se convierten valores de punto flotante

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 Explicación:** `ParseInt` coge un argumento de tipo string argument y retorna un integer con la base especificada. `ParseInt` también elimina cualquier cosa a partir del primer dígito no numerico del parámetro tipo string. `0.000001` es convertido a string `"0.000001"` y `parseInt` retorna `0`. Cuando `0.0000001` se convierte a string es tratado como `"1e-7"` y por lo tanto `parseInt` retorna `1`. `1/1999999` es interpretado como `5.00000250000125e-7` y `parseInt` retorna `5`.

## Matemáticas con `true` y `false`

Vamos a hacer un poco de matemáticas:

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

### 💡 Explicación:

Se pueden coercer valores a numeros con el constructor de `Number`. Es bastante obvio que `true` será coercido a `1`:

```js
Number(true); // -> 1
```

El operador unario de suma intenta converitr su valor en number. Puede convertir las representaciones en string de integers y floats, también las no numéricas como `true`, `false`, y `null`. Si no puede con un valor en concret, lo evalua como `NaN`. Esto significa que se coerce `true` a `1` facilmente:

```js
+true; // -> 1
```

Cuando se está ejecutando una acción de suma o multiplicación, el método `ToNumber` es invocado. Según la especificación, este método retorna:

> Si el `argument` es **true**, retorna **1**. Si el `argument` es **false**, retorna **+0**.

Por eso es que podemos sumar valores boolean como números y obtener resultados correctos.

Corresponding sections:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## Los comentarios HTML son válidos en Javascript

Aunque sea sorprendente, `<!--` (comentarios de HTML) es un comentario válido también en Javascript.

```js
// valid comment
<!-- valid comment too
```

### 💡 Explicación:

¿Impresionado? Los comentarios tipo HTML se usaban para los navegadores que no entendían el tag `<script>`. Estos navegadores, como Netscape 1.x ya no son muy populares. Por lo tanto, ya no hay razón para poner comentarios de tipo HTML en JavaScript.

Desde que Node.js está basado en el motor V8, los comentarios tipo HTML HTML-like siguen soportados en tiempo de ejecución. Además, son una parte de la especificación:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` es ~~not~~ a number

Type of `NaN` es un `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 Explicación:

La explicación de como `typeof` y `instanceof` funcionan:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` y `null` son objetos

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// sin embargo
null instanceof Object; // false
```

### 💡 Explicación:

El comportamiento del operador `typeof` esta definido en su sección de la especificación:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

Según la especificación, el operador `typeof` retorna un string según la tabla [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). Para `null`, objetos corrientes, exóticos estandar y exóticos no estandar, que no implementen `[[Call]]`, retorna el string `"object"`.

Sin embargo, se puede comprobar el tipo de un objeto usando el método `toString`.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Incrementando números magicamente

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 Explicación:

Esto es causado por el estandar IEEE 754-2008 para la aritmetica de binarios de puntos flotantes (Binary Floating-Point Arithmetic). En esta escala, se redondea al número par más cercano. Leer mas:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

## Precision of `0.1 + 0.2`

A well-known joke. An addition of `0.1` and `0.2` is deadly precise:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 Explicación:

La respuesta para la pregunta en StackOverflow: ¿Están las matemáticas de punto flotante rotas? [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken):

> Las constantes `0.2` y `0.3` en sus programas serán aproximaciones a sus valores verdaderos. Pasa que el `double` mas cercano a `0.2` es más grande que el número racional `0.2`  pero el `double` más cercano a `0.3` es más pequeño que el numero racional `0.3`. La suma de `0.1` y `0.2` termina siendo más grande que el número racional `0.3` y por lo tanto, distinta a la constante del código.

El problema es tan sabido que incluso hay una web llamada [0.30000000000000004.com](http://0.30000000000000004.com/). Esto sucede en todos los lenguajes que usen matemáticas de punto flotantes, no solo en JavaScript.

## Parcheando números

Se pueden añadir métodos propios en el contendor de objetos tipo `Number` o `String`.

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

### 💡 Explicación:

Obviamente, se puede extender el objeto `Number` como cualquier otro objeto en JavaScript. Sin embargo, no se recomienda si el comportamiento del metodo definido no es parte de la especificación. Aqí hay una lista de las propiedades de `Number`:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparación de tres números

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Explicación:

¿Porque esto no funciona así? Bueno,el problema está en la primera parte de la expresión. Aquí está su funcionamiento:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

Esto se puede solucionar con el operador _Greater than or equal (`>=`)_:

```js
3 > 2 >= 1; // true
```

Leer mas sobre los operadores relacionales en la especificación:

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Matemáticas divertidas

Los operadores aritméticos en Javascript suelen parecer que funcionan de forma inesperada. Algunos ejemplos:

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

### 💡 Explicación:

¿Que está pasando en los primeros cuatro ejemplos? A continuación una pequeña tabla para entender la suma en JavaScript:

```
Number  + Number  -> suma
Boolean + Number  -> suma
Boolean + Boolean -> suma
Number  + String  -> concatenación
String  + Boolean -> concatenación
String  + String  -> concatenación
```

¿Que pasa con los otros ejemplos? Los métodos `ToPrimitive` y `ToString` son llamados implicitamente para `[]` y `{}` antes de la suma. Mas información sobre el proceso de evaluación en la especificación:

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## Suma de RegExps

¿Sabías que se puede sumar números así?

```js
// Sobreescribiendo un método toString
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 Explicación:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Los Strings no son instancias de `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Explicación:

El constructor de `String` retorna un string:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Probemos con un `new`:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

¿Objeto? ¿Que es esto?

```js
new String("str"); // -> [String: 'str']
```

Mas información sobre el constructor de String en la especificación:

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Llamando funciones con comillas de ejecución (backticks)

Vamos a declarar una función que imprime por consola todos los parametros recibidos:

```js
function f(...args) {
  return args;
}
```

No hay ninguna duda que sabemos llamar la función de esta forma:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

Pero sabemos que podemos llamar la función con comillas de ejecución?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Explicación:

Bueno, esto no es mágico del todo si estamos familiarizados con _Tagged template literals_. En el ejemplo, la función `f` es una etiqueta para la plantilla literal. Las etiquetas antes del literal de la plantilla permiten analizar los literales de la plantilla con una función. El primer argumento de una función de etiqueta contiene una matriz de valores string. Los argumentos restantes están relacionados con las expresiones. Ejemplo:

```js
function template(strings, ...keys) {
  // hacer algo con los string y las keys
}
```

Esta es la [magia detrás](http://mxstbr.blog/2016/11/styled-components-magic-explained/) de la famosa librería llamada [💅 styled-components](https://www.styled-components.com/), que es muy popular en la comunidad React.

Link a la especificación:

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> Encontrado por [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 Explicación:

Cuidado, vas a flipar con esto! Prueba de reproducir este código en tu cabeza: se esta ejecutando el metodo `call` usando el metodo `apply`. Mas información:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## Una propiedad `constructor`

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Explicación:

Este ejemplo paso a paso:

```js
// Se declara una nueva constante que es un string 'constructor'
const c = "constructor";

// c es un string
c; // -> 'constructor'

// Obteniendo un constructor de string
c[c]; // -> [Function: String]

// Obteniendo un constructor de constructor
c[c][c]; // -> [Function: Function]

// Llama la función constructora y passa
// el cuerpo de la nueva función como argumento
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// Y luego llama la función anónima
// El resultado escribe en la consola un string 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?
```

Un `Object.prototype.constructor` devuelve una referencia a la función constructora del `Object` que crea la instancia del objeto. En el caso de los strings es `String`, en caso de ser un numerico es `Number` y así.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## Object como key de una propiedad de un object

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 Explicación:

¿Por qué funciona esto? Se está usando un _Nombre de propiedad computada_. Cuando se pasa un objeto entre corchetes, se coerce a string, por lo que la key queda  `'[object Object]'` y el valor `{}`.

Se pueden hacer "caos de corchetes" como este:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// estructura:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

Más información sobre objetos literales aquí:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## Accediendo a prototipos con `__proto__`

Como se save, lo tipos primitivos no tienen prototipo. Sin embargo, si se trata de obtener el valor de `__proto__` para primitivos, se obtendra lo siguiente:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 Explicación:

Esto sucede porque cuando algo que no tiene prototipo se envuelve en un objeto contenedor usando el método `ToObject`. Paso a paso:

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

Más información sobre `__proto__`:

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

¿Cual és el resultado de la expresión anterior?

```js
`${{ Object }}`;
```

La respuesta es:

```js
// -> '[object Object]'
```

### 💡 Explicación:

Se define un objeto con una propiedad `Object` usando la _Notació de propiedad abreviada_ (Shorthand property notation):

```js
{
  Object: Object;
}
```

Luego hemos pasado el objetoa  la plantilla literal, por lo que el método `toString` es llamado para el objeto. Es por eso que se obtiene el string `'[object Object]'`.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Desestructuración con valores por defecto.

Por ejemplo:

```js
let x,
  { x: y = 1 } = { x };
y;
```

El ejemplo anterior es una buena tarea para una entrevista. ¿Cual es el valor de `y`? La respuesta es:

```js
// -> 1
```

### 💡 Explicación:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

Con el ejemplo anterior:

1. Se declara `x` sin valor, por lo que es `undefined`.
2. A continuación se empaqueta el valor de `x` en la propiedade `x` del objeto.
3. A continuación se extrae el valor de  `x` usando deconsctrucción y se quiere asignar a `y`. Si el valor no está definido, se va a usar `1` como valor por defecto.
4. Se retorna el valor de `y`.

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Puntos y propagación

Se pueden generar ejemplos interesantes con la propagación de arrays. Como el siguiente:

```js
[...[..."..."]].length; // -> 3
```

### 💡 Explicación:

¿Por qué `3`? Cuando se usa el operador de propagación ([spread operator](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer)), el método `@@iterator` es llamado, y el iterador devuleto es usado para obtener los valores donde se va a iterar. El iterador por defecto para los string propaga un string en carácteres. Después de la propagación, se empaquetan los carácteres en un array. Seguidamente se propaga otra vez el array y se empaqueta otra vez en un array.

Un string `'...'` está formado por tres `.` carácteres, por lo tanto, la longitud del resultado del array es `3`.

Aro, paso a paso:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Por supuesto, se puede propagar y empaquetar los elementos de un array las veces que sea necesario:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// etcétera …
```

## Labels (etiquetas)

No muchos programadores conocen los labels en JavaScript. Son algo interesantes:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 Explicación:

Las declaraciones etiquetadas son unsadas conjuntamente con `break` o `continue`. Se puede usar una etiqueta para identificar un bucle, y después usar el `break` o el `continue` para indicar al programa cuendo parar o continuar la ejecución.

En el ejemplo anterior, se identifica una etiqueta `foo`. A continuación el `console.log('first');` se ejecuta y después se interrumpe la ejecución.

Mas información de las etiquetas en JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## Etiquetas anidadas

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Explicación:

Similar al ejemplo anterior, más información:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) at MDN

## `try..catch` malicioso

¿Que retorna esta expresión? ¿`2` o `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

La respuesta es `3`. ¿Sorprendido?

### 💡 Explicación:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## ¿Esto es herencia múltiple?

Veamos el siguiente ejemplo:

```js
new class F extends (String, Array) {}(); // -> F []
```

¿Esto es herencia múltiple? No.

### 💡 Explicación:

La parte interesante es el valor del `extends`: (`(String, Array)`). El operador de grup siempre devuelve el último argumento, por lo tanto `(String, Array)` es realmente solo `Array`. Esto significa que se ha creado una clase que extiende de `Array`.

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## Un generador que se produce a si mismo

Veamos este ejemplo de un generador que se produce a si mismo:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

Como se puede ver, el valor devuelto es un objeto con su `value` igual a `f`. En este caso, se puede hacer algo como lo siguiente:

```js
(function* f() {
  yield f;
})()
  .next()
  .value()
  .next()(
    // -> { value: [GeneratorFunction: f], done: false }

    // y otra vez
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

    // y otra vez
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

// etcétera
// …
```

### 💡 Explicación:

Para entender como funciona esto, leer las siguientes secciones de la especificación:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## Una clase de clase

Veamos este juego de sintaxis ofuscada:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

Parece que se está declarando una clase dentro de una clase. Debería ser un error, no obstante, se obtiene el string `'object'`.

### 💡 Explicación:

Desde la época de ECMAScript 5 , _keywords_ son permitidas como _nombres de propiedad_. Veamos el siguiente ejemplo de objeto simple:

```js
const foo = {
  class: function() {}
};
```

Y ES6 estandarizó las definiciones de métodos abreviadas. También, las clases pueden ser anónimas. Por lo que si se saca la parte de `: function`, se obtiene solamente:

```js
class {
  class() {}
}
```

El resultado de una clase, por defecto, es siempre un objeto simple. Y typeof deve retornar `'object'`.

Mas información:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Objetos no coercibles

Con los conocidos symbols, hay una manera de deshacerse de la coerción. Veamos:

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

Ahora se puede usar así:

```js
// objects
const foo = nonCoercible({ foo: "foo" });

foo * 10; // -> TypeError: Probando de coercer un objeto no coercible
foo + "evil"; // -> TypeError: Probando de coercer un objeto no coercible

// strings
const bar = nonCoercible("bar");

bar + "1"; // -> TypeError: Probando de coercer un objeto no coercible
bar.toString() + 1; // -> bar1
bar === "bar"; // -> false
bar.toString() === "bar"; // -> true
bar == "bar"; // -> TypeError: Probando de coercer un objeto no coercible

// numbers
const baz = nonCoercible(1);

baz == 1; // -> TypeError: Probando de coercer un objeto no coercible
baz === 1; // -> false
baz.valueOf() === 1; // -> true
```

### 💡 Explicación:

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## Funciones de flecha complejas

Veamos el siguiente ejemplo:

```js
let f = () => 10;
f(); // -> 10
```

Okay, vale, pero que hay de esto:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 Explicación:

Se podría esperar `{}` en canvio se obtiene `undefined`. Esto es devido a que las llaves son parte de la sintaxis de las funciones de flecha, por eso `f` devuelve undefined. Se puede retornar un objeto `{}` directamente en una función de flecha, se deve encerrar las llaves entre paréntesis.

```js
let f = () => ({});
f(); // -> {}
```

## Las funciones flecha no pueden ser un constructor

Veamos el siguiente ejemplo:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

Ahora, lo mismo pero con funcion de flecha:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Explicación:

Las funciones de flecha no pueden ser usadas como constructores y lanzaran un error si se usan con `new`. Al tner un `this` léxico, y no tener una propiedad `prototype`, hacerlo no tendría mucho sentido.

## `arguments` y las funciones de flecha

Veamos el siguiente ejemplo:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

Ahora lo mismo con una función flecha:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 Explicación:

Las funciones flecha son las versiones ligeras de las funciones normales y están centradas en ser cortas y en el `this` léxico. Al mismo tiempo, las funciones flecha no proveen binding para el objeto `arguments`. Como alternativa se puede usar el `resto de parametros` para conseguir el mismo resultado:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) at MDN.

## return complejo

La declaración `return` también es compleja. Veamos lo siguiente:

```js
(function() {
  return
  {
    b: 10;
  }
})(); // -> undefined
```

### 💡 Explicación:

`return` y la expresión de retorno deven estar en la misma línea:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

Esto es devido al concepto llamado Inserción automática de punto y coma, que inserta automaticamente punto y coma al final de cada nueva línea. En el primer ejemplo, va a haver un punto y coma insertado entre el `return` y el objeto, por lo que la función devolverá `undefined`  y el objeto nunca será evaluado.

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## Accediendo a propiedades de objetos con arrays

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

¿Que pasa con los arrays pseudo-multidimensionales?

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

### 💡 Explicación:

El operador `[]` convierte la expresión dada usando `toString`. Convertir un array con un elemento a string es similar a convertir el elemento contenido a string:

```js
["property"].toString(); // -> 'property'
```

## Null y los Operadores Relacionales

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 Explicación:

Si `null` es menor que  `0` es igual a `false`, `null >= 0` es igual a `true`. Leer la explicación en profundidad para esto [aquí](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

## `Number.toFixed()` muestra distintos números

`Number.toFixed()` puede comportarse un poco distindo en diferentes navegadores. Veamos el siguiente ejemplo:

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

### 💡 Explicación:

Aunque a primera impresión puede parecer que IE11 hace lo correcto y Firefox/Chrome están equivocados, la realidad es que Firefox/Chrome están cumpliendo directamente los estandares (IEEE-754 Floating Point) para los número, mientras que IE11 is desobedeciéndolos (aunque probablemente séa para conseguir unos resultados más claros).

Veamos como ocurre con algun test rápido:

```js
// Confirmar el resultado impar de redondear un 5 hacia abajo.
(0.7875).toFixed(3); // -> 0.787
// Parece que solo es un 5 cuando se expande a los límites
// de precisión de los float de 64-bit (double-precision) float accuracy
(0.7875).toFixed(14); // -> 0.78750000000000
// ¿Pero y si se va mas allá de los límites?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

Los números de punto flotante no se almacenan como una lista de dígitos decimales internamente, sino a través de una metodología más complicada que produce pequeñas imprecisiones que generalmente se redondean con toString y llamadas similares, pero en realidad están presentes internamente.

En este caso, ese "5" al final fue en realidad una fracción extremadamente pequeña por debajo de un verdadero 5. Redondearlo a una longitud razonable lo convertirá en un 5 ... pero en realidad no es un 5 internamente.

IE11, sin embargo, informará el valor ingresado con solo ceros agregados al final incluso en el caso toFixed (20), ya que parece estar redondeando el valor a la fuerza para reducir los problemas de los límites de hardware.

Ver como referéncia `NOTE 2` en la definición de ECMA-262 para `toFixed`.

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` es menor que `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 Explicación:

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## Comparando `null` a `0`

Las siguientes expresiones parecen caer en contradicciones:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

¿Como puede `null` no ser ni igual ni mayor que `0`, si `null >= 0` es realmente `true`? (Esto también sucede de la misma forma con menor o igual.)

### 💡 Explicación:

La manera con que estas tres expresiones son evaluadas es diferente y es la responsable de producir este comportamiento inesperado.

Primero, la comparación de igualdad abstracta `null == 0`. Normalmente, si este operador no puede comparar correctamente los valores en cualquiera de los lados, convierte ambos en números y los compara. Entonces, se podría esperar el siguiente comportamiento:

```js
// Esto no es lo que sucede
(null == 0 + null) == +0;
0 == 0;
true;
```

Sin embargo, según la especificación, la conversión de números en realidad no ocurre en un lado que es `nulo` o `no definido`. Por lo tanto, si tiene `null` en un lado del signo igual, el otro lado debe ser `null` o `undefined` para que la expresión devuelva` true`. Como este no es el caso, se devuelve `false`.

Ahora la comparación relacional `null > 0`. El algoritmo aquí, a diferencia del operador de igualdad abstracta, se convertirá `null` a un número. Por lo tanto, tenemos este comportamiento:

```js
null > 0
+null = +0
0 > 0
false
```

Finalmente, la comparación relacional `null >= 0`. Se podría argumentar que esta expresión debería ser el resultado de `null > 0 || null == 0`; si este fuera el caso, entonces los resultados anteriores significarían que esto también sería `false`. Sin embargo, el operador `>=` de hecho funciona de una manera muy diferente, que es básicamente tomar el opuesto al operador `<`. Debido a que nuestro ejemplo con el operador mayor que el anterior también es válido para el operador menor que, eso significa que esta expresión en realidad se evalúa así:

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

## Misma redeclaración de variables

JS permite redeclarar variables:

```js
a;
a;
// This is also valid
a, a;
```

También funciona en el modo estricto:

```js
var a, a, a;
var a;
var a;
```

### 💡 Explicación:

Todas las definiciones estan mezcladas en una.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

# 📚 Otros recursos

- [wtfjs.com](http://wtfjs.com/) — un listado de irregularidades muy especiales, inconsitencias y momentos dolorosamente poco intuitivos en programación web.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — Una buena charla de Gary Bernhardt en CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons habla para Forward 2 sobre intentos de Javascript de "sacar la locura". El quiere ayudar a producir código mas limpio, elegante, legible... También quiere inspirar a la gente a contribuir a la comunidad open source.

# 🎓 Licencia

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

Traducción: [Carles Hervera](http://www.carleshervera.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
