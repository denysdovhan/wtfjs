# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> Uma lista de exemplos engraçados e truques com JavaScript

JavaScript é uma excelente linguagem. Ela tem uma sintaxe simples, um ecossistema grande e, o mais importante, uma grande comunidade.

Ao mesmo tempo, todos nós sabemos que o JavaScript é uma linguagem engraçada com várias partes complicadas. Algumas delas porem rapidamente transformar seu trabalho em um inferno, e outras podem nos fazer gargalhar.

A ideia original para o WTFJS é do [Brian Leroux](https://twitter.com/brianleroux). Essa lista é inspirada por sua talk [**“WTFJS”** no dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Node Packaged Manuscript

Você pode instalar esse manual usando o `npm`. É só rodar o comando:

```
$ npm install -g wtfjs
```

Você poderá rodar `wtfjs` na sua linha de comando. Esse comando vai abrir o manual na sua `$PAGER` selecionada ou você pode continuar lendo aqui mesmo.

O código-fonte está disponível aqui <https://github.com/denysdovhan/wtfjs>.

# Traduções

Atualmente, temos essas traduções disponíveis de **wtfjs**:

- [English (original)](./README.md)
- [中文版](./README-zh-cn.md)
- [Português do Brasil](./README-pt-br.md)

[**Solicite outra tradução**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Table of Contents

- [💪🏻 Motivação](#-motiva%C3%A7%C3%A3o)
- [✍🏻 Notação](#-nota%C3%A7%C3%A3o)
- [👀 Exemplos](#-exemplos)
  - [`[]` é igual a `![]`](#-%C3%A9-igual-a-)
  - [`true` não é igual a `![]`, nem igual a `[]` também](#true-n%C3%A3o-%C3%A9-igual-a--nem-igual-a--tamb%C3%A9m)
  - [true é false](#true-%C3%A9-false)
  - [baNaNa](#banana)
  - [`NaN` não é um `NaN`](#nan-n%C3%A3o-%C3%A9-um-nan)
  - [É uma falha](#%C3%A9-uma-falha)
  - [`[]` é verdadeiro, mas não `true`](#-%C3%A9-verdadeiro-mas-n%C3%A3o-true)
  - [`null` é falso, mas não `false`](#null-%C3%A9-falso-mas-n%C3%A3o-false)
  - [`document.all` é um objeto (object), mas é indefinido (undefined)](#documentall-%C3%A9-um-objeto-object-mas-%C3%A9-indefinido-undefined)
  - [Valor mínimo é maior que zero](#valor-m%C3%ADnimo-%C3%A9-maior-que-zero)
  - [function não é uma function](#function-n%C3%A3o-%C3%A9-uma-function)
  - [Somando arrays](#somando-arrays)
  - [Vírgulas finais em arrays](#v%C3%ADrgulas-finais-em-arrays)
  - [Igualdade entre arrays é um monstro](#igualdade-entre-arrays-%C3%A9-um-monstro)
  - [`undefined` e `Number`](#undefined-e-number)
  - [`parseInt` é um vilão](#parseint-%C3%A9-um-vil%C3%A3o)
  - [Matemática com `true` e `false`](#matem%C3%A1tica-com-true-e-false)
  - [Comentários HTML são válidos no JavaScript](#coment%C3%A1rios-html-s%C3%A3o-v%C3%A1lidos-no-javascript)
  - [`NaN` ~~não~~ é um número](#nan-n%C3%A3o-%C3%A9-um-n%C3%BAmero)
  - [`[]` e `null` são objetos](#-e-null-s%C3%A3o-objetos)
  - [Aumentando números magicamente](#aumentando-n%C3%BAmeros-magicamente)
  - [Precisão de `0.1 + 0.2`](#precis%C3%A3o-de-01--02)
  - [Patching numbers](#patching-numbers)
  - [Comparação de três números](#compara%C3%A7%C3%A3o-de-tr%C3%AAs-n%C3%BAmeros)
  - [Matemática engraçada](#matem%C3%A1tica-engra%C3%A7ada)
  - [Soma de RegExps](#soma-de-regexps)
  - [Strings não são instâncias `String`](#strings-n%C3%A3o-s%C3%A3o-inst%C3%A2ncias-string)
  - [Chamando funções com backticks](#chamando-fun%C3%A7%C3%B5es-com-backticks)
  - [Call call call](#call-call-call)
  - [Uma propriedade `constructor`](#uma-propriedade-constructor)
  - [Objeto como uma chave de uma propriedade de objeto](#objeto-como-uma-chave-de-uma-propriedade-de-objeto)
  - [Acessando protótipos com `__proto__`](#acessando-prot%C3%B3tipos-com-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Desestruturação com valores padrão](#desestrutura%C3%A7%C3%A3o-com-valores-padr%C3%A3o)
  - [Pontos e dispersão](#pontos-e-dispers%C3%A3o)
  - [Rótulos](#r%C3%B3tulos)
  - [Rótulos aninhados](#r%C3%B3tulos-aninhados)
  - [`try..catch` traidor](#trycatch-traidor)
  - [Isto é herança múltipla?](#isto-%C3%A9-heran%C3%A7a-m%C3%BAltipla)
  - [Um gerador que produz a si mesmo](#um-gerador-que-produz-a-si-mesmo)
  - [Uma classe de classe](#uma-classe-de-classe)
  - [Objetos não coercíveis](#objetos-n%C3%A3o-coerc%C3%ADveis)
  - [Arrow functions traiçoeiras](#arrow-functions-trai%C3%A7oeiras)
  - [Arrow functions não podem ser construtores](#arrow-functions-n%C3%A3o-podem-ser-construtores)
  - [`arguments` e arrow functions](#arguments-e-arrow-functions)
  - [Retorno traiçoeiro](#retorno-trai%C3%A7oeiro)
  - [Encadeamento atribuições em um objeto](#encadeamento-atribui%C3%A7%C3%B5es-em-um-objeto)
  - [Acessando propriedades de objetos usando arrays](#acessando-propriedades-de-objetos-usando-arrays)
  - [Null e Operadores Relacionais](#null-e-operadores-relacionais)
  - [`Number.toFixed()` mostra números diferentes](#numbertofixed-mostra-n%C3%BAmeros-diferentes)
  - [`Math.max()` menor que `Math.min()`](#mathmax-menor-que-mathmin)
  - [Comparando `null` com `0`](#comparando-null-com-0)
  - [Redeclaração da mesma variável](#redeclara%C3%A7%C3%A3o-da-mesma-vari%C3%A1vel)
  - [Comportamento padrão Array.prototype.sort()](#comportamento-padr%C3%A3o-arrayprototypesort)
- [📚 Outros recursos](#-outros-recursos)
- [🎓 Licença](#-licen%C3%A7a)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 💪🏻 Motivação

> Just for fun
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://en.wikipedia.org/wiki/Just_for_Fun), Linus Torvalds_

O objetivo dessa lista era coletar alguns exemplos malucos e explicar como eles funcionam, se possível. Apenas porque é legal aprender algo que nós não conhecemos.

Se você é um iniciante, você poderá utilizar esses pontos para se aprofundar no JavaScript. Eu espero que esses pontos te motivem em gastar um pouco mais de tempo lendo as especificações.

Se você já é um desenvolvedor profissional, você pode considerar esses exemplos como uma excelente referência para todos as peculiaridades e pontos inesperados do nosso amado JavaScript.

Em todo caso, leia. Você provavelmemte irá aprender algo novo.

# ✍🏻 Notação

**`// ->`** é utilizado para mostrar o resultado de uma expressão. Por exemplo:

```js
1 + 1; // -> 2
```

**`// >`** significa o resultado de `console.log` ou qualquer outra saída. Por exemplo:

```js
console.log("hello, world!"); // -> hello, world!
```

**`//`** são apenas comentários para as explicações. Exemplo:

```js
// Atribuindo uma função para a constante foo
const foo = function() {};
```

# 👀 Exemplos

## `[]` é igual a `![]`

Array é igual a not array:

```js
[] == ![]; // -> true
```

### 💡 Explicação:

O operador abstrato de igualdade converte os dois lados em números para compará-los, e os dois lados se tornam `0` por razões diferentes. Arrays são verdadeiros (truthy), então na direita, o oposto de um valor verdadeiro é `false`, o que é coagido para `0`. Na esquerda, todavia, um array vazio é coagido para um número sem se tornar um booleano (boolean) primeiro, e arrays vazios sempre forçados para `0`, apesar de serem verdadeiros.

Aqui está uma simplificação dessa expressão:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

Veja também [`[]` is truthy, but not `true`](#-is-truthy-but-not-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` não é igual a `![]`, nem igual a `[]` também

Array não é igual a `true`, mas not Array também não é igual a `true`'
Array é igual a `false`, not Array é igual a `false` também:

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 Explicação:

```js
true == []; // -> false
true == ![]; // -> false

// De acordo com a especificação

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

// De acordo com a especificação

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> true

![]; // -> false

false == false; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true é false

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 Explicação:

Considere esse passo-a-passo:

```js
// true é 'truthy' e representado pelo valor 1 (number), 'true' como string é NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' não é uma string vazia, então ele é um valor verdadeiro (truthy)
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

Essa é uma piada antiga no JavaScript, mas remasterizada. Aqui está a forma original:

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 Explicação:

A expressão é avaliada como `'foo' + (+'bar')`, o que converte `bar` para um "não número" (NaN - Not a Number).

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` não é um `NaN`

```js
NaN === NaN; // -> false
```

### 💡 Explicação:

A especificação define estritamente a lógica por trás desse comportamento:

> 1. Se `Type(x)` é diferente de `Type(y)`, retorne **false**.
> 2. Se `Type(x)` é um Number, então
>    1. Se `x` é um **NaN**, retorne **false**.
>    2. Se `y` é um **NaN**, retorne **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

Seguindo a definição de `NaN` do IEEE:

> Quatro relações de exclusões mútuas são possíveis: menor que (less than), igual (equal), maior que (greater than), e não ordenado (unordered). O último caso surge quando, pelo menos, um operador é um NaN. Todo NaN deve comprarar não ordenado (unordered) com tudo, incluindo a si mesmo.
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) no StackOverflow

## É uma falha

Você não vai acreditar, mas ...

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 Explicação:

Quando nós quebramos esses símbolos em pedaços, percebemos que o esse padrão se repete com frequência:

```js
![] + []; // -> 'false'
![]; // -> false
```

Então nós tentamos adicionar `[]` para `false`. Mas devido a um número interno de chamadas de função (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`) nós acabamos convertendo o operador da direita para uma string:

```js
![] + [].toString(); // 'false'
```

Pensando em uma string como um array nós conseguimos acessar seu primeiro caractere usando `[0]`:

```js
"false"[0]; // -> 'f'
```

O resto é óbvio, mas o `i` é ardiloso. O `i` em `fail` é pego através da geração da string `'falseundefined'` e pegando o element no índice `['10']`

## `[]` é verdadeiro, mas não `true`

Um array é um valor verdadeiro (truthy), porém, não é igual a `true`.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 Explicação:

Aqui estão links das seções correspondentes especificação do ECMA-262:

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` é falso, mas não `false`

Apesar do fato que `null` é um valor falso (falsy), ele não é igual a `false`.

```js
!!null; // -> false
null == false; // -> false
```

Ao mesmo tempo, outro valor falso (falsy), como `0` ou `''` são iguais a `false`.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 Explicação:

A explicação é a mesma dos exemplos anteriores. Aqui está o link correspondente:

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` é um objeto (object), mas é indefinido (undefined)

> ⚠️ Esta é a parte da API Browser e não irá funcionar em um ambiente com Node.js - apenas em navegadores ⚠️

Apesar de document.all`ser um objeto parecido com um array, ele dá acesso aos nós do DOM na página, e responde como`undefined`na função`typeof`.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

Ao mesmo tempo, `document.all` não é igual a `undefined`.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

Mas ao mesmo tempo:

```js
document.all == null; // -> true
```

### 💡 Explicação:

> `document.all` é usado como uma maneira de acessar todos os elementos do DOM, em particular com versões legadas do IE. Mesmo nunca tendo se tornado um padrão, foi amplamente usado nas eras antigas do JS. Quando o padrão progrediu com novas APIs (como `document.getElementById`) essa API (document.all) se tornou obsoleta e o comitê padrão teve que decidir o que fazer com ela. Por conta do amplo uso eles decidiram deixar a API mas introduziram uma violação intencional da especificação do JavaScript.
> A razão que ele retorna como `false` quando usamos o [Comparador Estrito de Igualdade](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison) com `undefined` e `true` quando usamos o [Comparador Abstrado de Igualdade](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) é devido a essa violação intencional que explicitamente permite isso.
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) em WhatWG - HTML spec
>
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) em YDKJS - Types & Grammar

## Valor mínimo é maior que zero

`Number.MIN_VALUE` é o menor número, que ainda é maior que zero:

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Explicação:

> `Number.MIN_VALUE` é igual a `5e-324`, ou seja, o menor número positivo que pode ser representado com precisão float; ou seja, o mais próximo possível de zero. Isso define a melhor resolução que pontos flutuantes (floats) podem fornecer.
>
> Agora, o menor valor geral é `Number.NEGATIVE_INFINITY`, embora ele não seja realmente numérico em um senso estrito.
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) no StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## function não é uma function

> ⚠️ Um bug presenta na V8 v5.5 or anterior (Node.js <=7) ⚠️

Todos vocês conhecem a chatice de _undefined is not a function_, mas e quanto a isso?

```js
// Declare uma classe que extende de null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 Explicação:

Isto não é parte da especificação. É apenas um bug que já foi arrumado, então isso não deverá ser um problema no futuro.

## Somando arrays

E se você tentar somar dois arrays?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Explicação:

A concatenação ocorre. Passo-a-passo, ela ocorre mais ou menos assim:

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

## Vírgulas finais em arrays

Você criou um array com 4 elementos vazios. Apesar disso, você terá um array com três elementos, por conta das vírgulas finais (trailing commas):

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 Explicação:

> **Trailing commas** (também chamadas de "final commas", ou em português, "vírgulas finais") são úteis quando você adiciona novos elementos, parâmetros ou propriedades em um código JS. Caso se você quer adicionar uma nova propriedade, você pode simplesmente adicionar uma nova linha sem modificar a anterior se ela já utiliza uma trailling comma. Isso faz com que os _diffs_ no versionamento de código sejam mais limpos, e também a edição do código menos problemática.
>
> &mdash; [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) no MDN

## Igualdade entre arrays é um monstro

Igualdade de arrays é um monstro no JS, como você pode ver abaixo:

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

### 💡 Explicação:

Você deve observar bem cautelosamente os exemplos acima! O comportamento é descrito na seção [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) da especificação.

## `undefined` e `Number`

Se nós não passarmos nenhum argumento em um construtor `Number`, nós teremos `0` como retorno. O valor `undefined` é atribuído em argumentos formais quando não não existem argumentos, então você deve esperar que `Number` sem argumentos receba `undefined` como um valor dos seus parâmetros. Todavia, quando passamos `undefined`, o retorno será `NaN`.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Explicação:

De acordo com a especificação:

1. Se nenhum argumento for passado na chamada da função, `n` será `+0`.
2. Se não, `n` será ? `ToNumber(value)`.
3. Em caso de `undefined`, `ToNumber(undefined)` deve retornar `NaN`.

Aqui está a seção correspondente:

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` é um vilão

`parseInt` é famoso por suas peculiaridades:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 Explicação:**

Isso acontece porque `parseInt` vai continuar parseando caractere por caractere até que ele atinja um caractere desconhecido. O `f` em `f*ck` é o dígito hexadecimal `15`.

Se você parsear `Infinity` para um inteiro…

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

Tenha cuidado quando parsear um `null` também:

```js
parseInt(null, 24); // -> 23
```

**💡 Explicação:**

> Ele converte `null` para uma string `"null"` e tenta fazer o parse. Para raízes de 0 a 23, não existem numerais que ele possa converter, então ele retorna NaN. Em 24, `"n"`, a 14ª letra, é adicionada ao sistema numérico. Em 31, `"u"`, a 21ª letra, é adicionada e a string inteira poderá ser decodificada. Em 37 onde não existe mais nenhum numeral válido definido que poderá ser gerado, o retorno é `NaN`.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) no StackOverflow

Não se esqueça dos octals:

```js
parseInt("06"); // 6
parseInt("08"); // 8 se suporta ECMAScript 5
parseInt("08"); // 0 se não suporta ECMAScript 5
```

**💡 Explicação:**

Se uma string de entrada começa com "0", a raiz é oito (octal) ou 10 (decimal). A raiz que é escolhida dependerá da implementação. O ECMAScript 5 define que a 10 (decimal) é utilizada, mas nem todos os navegadores suportam isso ainda. Por essa razão sempre deixe explícito qual será a raiz utilizada quando você usar o `parseInt`.

`parseInt` sempre converte a entrada para string:

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

Tenha cuidado quando tentar fazer o parse de valores _floating ponts_ (pontos flutuantes)

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 Explicação:**

`ParseInt` recebe uma string como argumento e retorna um inteiro da raiz específica. `ParseInt` também remove tudo depois e incluindo o primeiro _non-digit_ (não dígito) no parâmetro como string. `0.000001` é convertido para a string `"0.000001"` e o `parseInt` retorna `0`. Quando `0.0000001` é convertido para uma string ele é tratado como `"1e-7"` e, portanto, `parseInt` retorna `1`. `1/1999999` é interpretado como `5.00000250000125e-7` e o `parseInt` retorna `5`.

## Matemática com `true` e `false`

Vamos fazer algumas contas:

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

### 💡 Explicação:

Podemos forçar valores números com o construtor `Number`. É bem óbvio que `true` será forçado para `1`:

```js
Number(true); // -> 1
```

O operador unário _soma_ (i++) tenta converter o valor para um número. Ele pode converter representações de inteiros e flutuantes em strings, bem como os valores que não são stings, como `true`, `false` e `null`. Se ele não conseguir parsear um valor particular, então será avaliado como `NaN`. Isso significa que nós podemos forçar `true` para `1` facilmente:

```js
+true; // -> 1
```

Quando você realiza uma adição ou uma multiplicacão, o método `ToNumber` é invocado.
De acordo com a especificação, esse método retorna:

> Se `argument` é **true**, o retorno será **1**. Se `argumento` é `false`, o retorno será **0**.

Por isso podemos adicionar valores booleanos (boolean) como números regulares e obtermos os resultados corretos.

Seções correspondentes:

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## Comentários HTML são válidos no JavaScript

Você ficará impressionado, mas `<!--` (sintaxe de comentários do HTML) são comentários válidos no JavaScript.

```js
// comentário válido
<!-- comentário válido também
```

### 💡 Explicação:

Impressionado? Comentários HTML se destinavam a permitir que navegadores que não interpretavam a tag `<script>` fossem degradados normalmente. Esses browsers, e.x. Netscape 1.x, não são mais populares. Portanto, não precisamos mais colocar comentários HTML em suas tags script.

Como o Node.js é baseado na V8, comentários HTML são suportados pela runtime do Node.js também. Além disso, eles fazem parte da especificação:

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` ~~não~~ é um número

O tipo `NaN` é um `'number'`:

```js
typeof NaN; // -> 'number'
```

### 💡 Explicação:

Explicações de como os operadores `typeof` e `instanceof` funcionam:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` e `null` são objetos

```js
typeof []; // -> 'object'
typeof null; // -> 'object'

// contudo
null instanceof Object; // false
```

### 💡 Explicação:

O comportamento do operador `typeof` é definido nessa seção da especificação:

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

De acordo com a especificação, o operador `typeof` retorna uma string de acordo com a [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). Para `null`, objetos exóticos comuns e exóticos não padronizados, que não implementam `[[Call]]`, o retorno será a string `"object"`.

Todavia, você poderá verificar o tipo de um objeto usando o método `toString`.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Aumentando números magicamente

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 Explicação:

Isso é causado pelo padrão IEEE 754-2008 para _Binary Floating-Point Arithmetic_ (Aritmética de binários de ponto flutuante). Nessa escala, ele arredonda para o número par mais próximo. Leia mais:

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) na Wikipedia

## Precisão de `0.1 + 0.2`

Uma piada bastante conhecida. Uma adição de `0.1` e `0.2` é mortalmente precisa:

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 Explicação:

A responsta para a pergunta [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) no StackOverflow:

> As constantes `0.2` and `0.3` no seu programa serão também aproximações dos seus valores verdadeiros. Isso ocorre quando o `double` mais próximo de `0.2` é maior que o número racional `0.2`, mas o `double` mais próximo de `0.3` é menor que o número racional `0.3`. A soma de `0.1` e `0.2` acaba sendo maior que o número racional `0.3`, e, portanto, discorda da constante em seu código.

Esse problema é tão conhecido que existe um website chamado [0.30000000000000004.com](http://0.30000000000000004.com/). Isso ocorre em todas as linguagens que utilizam _floating-point math_ (matemática de ponto flutuante), não apenas no JavaScript.

## Patching numbers

Você pode adicionar seus próprios métodos em objetos como `Number` ou `String`.

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

### 💡 Explicação:

Obviamente você pode extender o objeto `Number` como qualquer outro no JavaScript, contudo, não é recomendado se o comportamento do método definido não for parte da especificação. Aqui está a lista de propriedades do `Number`:

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparação de três números

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Explicação:

Por que isso funciona assim? Bem, o problema está na primeira parte da expressão. Aqui está como isso funciona:

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

Nós podemos resolver isso com o operador _Maior ou igual que (`>=`)_;

```js
3 > 2 >= 1; // true
```

Leia mais sobre os operadores Relacionais na especificação:

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Matemática engraçada

Geralmente os resultados de operações aritméticas em JavaScript podem ser inespererados. Considere esses exemplos:

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

### 💡 Explicação:

O que está acontecendo com os primeiros quatro exemplos? Aqui está uma tabela para entender a soma no JavaScript:

```
Number  + Number  -> adição
Boolean + Number  -> adição
Boolean + Boolean -> adição
Number  + String  -> concatenação
String  + Boolean -> concatenação
String  + String  -> concatenação
```

E quanto aos outros exempos? Os métodos `ToPrimitive` e `ToString` estão sendo chamados implicitamente por `[]` e `{}` antes da adição. Leia mais sobre o processo de evaluação na especificação:

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## Soma de RegExps

Você sabia que você pode somar números dessa forma?

```js
// Adicione um método toString
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 Explicação:

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Strings não são instâncias `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Explicação:

O construtor `String` retorna uma string:

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Vamos tentar com um `new`:

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'
```

Objeto? O que é isso?

```js
new String("str"); // -> [String: 'str']
```

Mais informações sobre o construtor String na especificação:

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Chamando funções com backticks

Vamos declarar uma função que irá logar todos os parâmetros no console:

```js
function f(...args) {
  return args;
}
```

Sem dúvida, você sabe que uma função pode ser chamada assim:

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

Mas você sabia que você pode chamar qualquer função usando _backticks_ (crases)?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Explicação:

Bom, isso não é uma mágica se você está familiarizado com _Tagged template literals_. No exemplo acima, a função `f` é uma tag para template literal. Tags antes do template literal permitem que você faça o parse do template literals com uma função. O primeiro argumento de uma função tag contém um array de valores em string. O restante dos argumentos são relacionados às expressões. Exemplo:

```js
function template(strings, ...keys) {
  // faça algo com as strings e as chaves...
}
```

Esta é a [mágica por trás](http://mxstbr.blog/2016/11/styled-components-magic-explained/) de uma lib famosa, chamada [💅 styled-components](https://www.styled-components.com/) - que é bem conhecida na comunidade React.

Link para a especificação:

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> Achado por [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 Explicação:

Atenção, isso vai explodir sua mente! Tente reproduzir esse código na sua cabeça: estamos aplicando o método `call` usando o método `apply`. Leia mais:

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## Uma propriedade `constructor`

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Explicação:

Vamos considerar esse exemplo passo-a-passo:

```js
// Declare uma nova constante, com um valor 'constructor' em string
const c = "constructor";

// c é uma string
c; // -> 'constructor'

// Recuperando o construtor da string
c[c]; // -> [Function: String]

// Recuperando o construtor do construtor
c[c][c]; // -> [Function: Function]

// Chame a função e passe o corpo
// de uma nova função como argumento
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// E então chame essa função anônima
// O Resultado será um log no console com a string 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?
```

Um `Object.prototype.constructor` retorna a referência da função construtora `Object` que criou a instância do objeto. Em casos com strings ele é `String`, em casos com números ele é um `Number`, e assim por diante.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) no MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## Objeto como uma chave de uma propriedade de objeto

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 Explicação:

Por que isso funciona assim? Aqui estamos usando uma _Computed property name_. Quando você passa um objeto dentro desses colchetes (`{ }`), ele força o objeto para uma string, e então temos a chave `'[object Object]'` com o valor `{}`.

Nós podemos fazer o _"brackets hell"_ dessa forma:

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// estrutura:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

Leia mais sobre _object literals_ aqui:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) no MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## Acessando protótipos com `__proto__`

Como nós sabemos, os primitivos não tem protótipos. Contudo, se nós tentarmos recuperar o valor de um `__proto__` para primitivos, teremos o seguinte retorno:

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 Explicação:

Isso acontece porque quando algo não possui um protótipo, ele será envolvido em um objeto usando o método `ToObject`. Então, seguindo essa linha:

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

Aqui temos mais informações sobre `__proto__`:

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

Qual é o resultado da expressão abaixo?

```js
`${{ Object }}`;
```

A resposta é:

```js
// -> '[object Object]'
```

### 💡 Explicação:

Nós definimos um objeto com a propriedade `Object` usando a _Shorthand property notation_ (notação curta de propriedade).

```js
{
  Object: Object;
}
```

Então nós passamos esse objeto para o template literal, e o método `toString` chama por aquele objeto. Por isso temos a string `'[object Object]'`.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN

## Desestruturação com valores padrão

Considere o exemplo:

```js
let x,
  { x: y = 1 } = { x };
y;
```

O exemplo acima é uma excelente tarefa para uma entrevista. Qual é o valor de `y`? A resposta é:

```js
// -> 1
```

### 💡 Explicação:

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

Com o exemplo acima:

1. Nós declaramos `x` sem nenhum valor, então ele é `undefined`.
2. Então nós empacotamos o valor de `x` dentro da propriedade `x` do objeto.
3. Depois nós extraímos o valor de `x` usando a desestruturação e queremos atribuí-lo para `y`. Se o valor não for definido, então usaremos `1` como default.
4. Retornarmos o valor de `y`.

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) no MDN

## Pontos e dispersão

Exemplos interessantes podem ser compostos com _spreading_ (dispersão) de arrays. Considere o seguinte:

```js
[...[..."..."]].length; // -> 3
```

### 💡 Explicação:

Por que `3`? Quando utilizamos o [spread operator](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), o método `@@iterator` é chamado, e o iterator retornado é utilizado para obter os valores para ser iterado. O iterador padrão para string dispersa uma string em caracteres. Depois de dispersar, nós empacotamos esses valores dentro de um array. E então dispersamos esse array novamente e empacotamos de volta em um array.

Uma string de `'...'` consistem em três caracteres de `.`, então o tamanho do array resultante será `3`.

Agora, detalhadamente:

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Obviamente, nós podemos dispersar e envolver elementos de um array quantas vezes quisermos:

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// e assim vai ...
```

## Rótulos

Poucos programadores conhecem sobre rótulos no JavaScript, e eles são interessantes:

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// > first
// -> undefined
```

### 💡 Explicação:

A sentença rotulada é utilizada com os comandos `break` ou `continue`. Você pode utilizar um rótulo para identificar um laço de repetição, e então usar os comandos `break` ou `continue` para indicar quando um programa deverá interromper ou continuar a execução de um loop.

No exemplo acima, nós identificamos o rótulo `foo`. Depois disso, é executado o that `console.log('first');` e depois interrompemos a execução.

Leia mais sobre rótulos no JavaScript:

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) no MDN

## Rótulos aninhados

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Explicação:

Parecido com os exemplos anteriores, acesse esses links:

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) no MDN

## `try..catch` traidor

O que a seguinte expressão irá retornar? `2` ou `3`?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

A resposta é `3`. Surpreso?

### 💡 Explicação:

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Isto é herança múltipla?

Observe o exemplo abaixo:

```js
new class F extends (String, Array) {}(); // -> F []
```

Isto é uma herança múltipla? Não.

### 💡 Explicação:

A parte interessante é o valor da cláusula `extends` (`(String, Array)`). O operador de agrupamento sempre retorna seu último argmento, então `(String, Array)` é somente `Array`.
Isso significa que nós criamos uma classe que extende um `Array`.

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## Um gerador que produz a si mesmo

Considere o exemplo de um gerador que produz a si mesmo:

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

Como você pode ver, o valor retornado é um objeto com seu `value` igual a `f`. Nesse caso, nós podemos fazer algo assim:

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

// e assim por diante
// ...
```

### 💡 Explicação:

Para entender porque isso funciona assim, leia essas seções da especificação:

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## Uma classe de classe

Considere essa sintaxe ofuscada:

```js
typeof new class {
  class() {}
}(); // -> 'object'
```

Parece que estamos declarando uma classe dentro de outra. Isso deveria ser um erro, contudo, nós obtemos uma string com `'object'`.

### 💡 Explicação:

Desde o ECMAScript 5, _palavras reservadas_ são permitidas como _nomes de propriedades_. Pense nisso como esse exemplo simples de objeto:

```js
const foo = {
  class: function() {}
};
```

O ES6 padronizou o atalho para definição de métodos. Também, classes podem ser anônimas. Então, se removermos a parte `: function`, teremos o seguinte resultado:

```js
class {
  class() {}
}
```

O resultado de uma classe padrão será sempre um objeto simples. E o seu tipo deverá ser `'object'`.

Leia mais aqui:

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Objetos não coercíveis

Com símbolos bem conhecidos, aqui está uma maneira de se livrar da coerção de tipo. Dê uma olhada:

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

Agora podemos usar isso dessa forma:

```js
// objetos
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

// números
const baz = nonCoercible(1);

baz == 1; // -> TypeError: Trying to coerce non-coercible object
baz === 1; // -> false
baz.valueOf() === 1; // -> true
```

### 💡 Explicação:

- [Um gist de Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## Arrow functions traiçoeiras

Considere o exemplo abaixo:

```js
let f = () => 10;
f(); // -> 10
```

Tá bom, legal, mas e agora isso:

```js
let f = () => {};
f(); // -> undefined
```

### 💡 Explicação:

Você provavelmente espera `{}` ao invés de `undefined`. Isso se dá porque os colchetes (`{}`) são parte da sintaxe das arrow functions, então `f` retornará indefinido. Contudo é possível retornar o objeto `{}` diretamente da arrow function, fechando seu valor dentro das chaves (parênteses).

```js
let f = () => ({});
f(); // -> {}
```

## Arrow functions não podem ser construtores

Considere o exemplo abaixo:

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

Agora, tente fazer o mesmo com uma arrow function:

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Explicação:

Arrow functions não podem ser utilizadas como construtores e irão devolver um erro quando utilizadas com `new`. Porque elas possuem seu `this` léxico, e elas não possuem uma propriedade `prototype`, então isso não faria sentido.

## `arguments` e arrow functions

Considere o exemplo abaixo:

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

Agora tente o mesmo com uma arrow function:

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 Explicação:

Arrow functions são uma versão mais leve das funções regulares, com um foco em serem curtas e com o `this` léxico. Ao mesmo, arrow functions não fornecem uma ligacão para o objeto `argumentos`. Como uma alternativa, utilize os `rest parameters` para ter o mesmo resultado:

```js
let f = (...args) => args;
f("a");
```

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) no MDN.

## Retorno traiçoeiro

A sentença `return` também é traiçoeira. Considere o seguinte:

```js
(function() {
  return;
  {
    b: 10;
  }
})(); // -> undefined
```

### 💡 Explicação:

`return` e a expressão retornada precisam estar na mesma linha:

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

Isso se dá por causa do conceito chamado _Automatic Semicolon Insertion_ (Inserção Automática de Ponto e vírgula), que magicamente insere o ponto e vírgula (`;`) após a maioria das novas linhas. No primeiro exemplo, existe um ponto e vírgula entre a sentença `return` e o objeto, então a função retorna `undefined` e o objeto nunca é avaliado.

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## Encadeamento atribuições em um objeto

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

Da direita para a esquerda, `{n: 2}` é atribuído para `foo`, e o resultado dessa atribuição `{n: 2}` é atribuído para `foo.x`, e por isso `bar` é `{n: 1, x: {n: 2}}`, pois `bar` é uma referência a `foo`. Mas por que `foo.x` é indefinido enquanto `bar.x` não?

### 💡 Explicação:

Foo e bar referenciam o mesmo objeto `{n: 1}`, e l-values são resolvidos antes das atribuições. `foo = {n: 2}` está criando um novo objeto, e então foo é atualizado para referenciar esse novo objeto. O truque aqui é que foo em `foo.x = ...` como um l-value foi resolvido antes e continua referenciando o objeto antigo `foo = {n: 1}` e o atualiza adicionando o valor de x. Depois desse encadeamento, bar continua referenciando o objeto antigo foo, mas foo referencia o novo objeto `{n: 2}`, onde x não existe.

É equivalente a:

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// bar.x aponta para o novo objeto foo
// e não é equivalente a: bar.x = {n: 2}
```

## Acessando propriedades de objetos usando arrays

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

E quanto aos arrays pseudo-multidimensionais>

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

### 💡 Explicação:

O operator de colchete `[]` converte a expressão passada usando `toString`. A conversão de um array de um elemento em uma string é semelhante à conversão de um elemento contido em uma string:

```js
["property"].toString(); // -> 'property'
```

## Null e Operadores Relacionais

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 Explicação:

Em resumo, se `null` é menos que `0` e `false`, então `null >= 0` é `true`. Leia a explicação mais detalhada disso [aqui](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

## `Number.toFixed()` mostra números diferentes

`Number.toFixed()` pode ter um comportamento estranho em navegadores diferentes. Veja esse exemplo:

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

### 💡 Explicação:

Enquanto seu primeiro instinto é achar que o IE11 está correto e Firefox/Chrome estão errados, a realidade é que Firefox/Chrome são mais obedientes em padrões de números (IEEE-754 Floating Point), enquanto o IE11 é desobediente na tentativa de dar resultados mais claros.

Você pode ver isso acontecendo com alguns testes rápidos:

```js
// Confirme o resultado ímpar do arredondamento de 5 para baixo
(0.7875).toFixed(3); // -> 0.787
// Parece que é apenas 5 quando você expande para os
// limites da precisão de flutuação de 64 bits (precisão dupla)
(0.7875).toFixed(14); // -> 0.78750000000000
// Mas e se formos além do limite?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

Números de ponto flutuante não são salvos internamente como uma lista de dígitos decimais, mas com uma metodologia um pouco mais complicada que produz pequenas imprecisões que são usualmente arredondadas por `toString` ou chamadas similares, mas estão presentes internamente.

Nese caso, aquele "5" no final era atualmente uma fração extremamente pequena abaixo de um 5 verdadeiro. Arredondá-lo a qualquer comprimento razoável o tornará um 5... mas na verdade não é um 5 internamente.

O IE11, no entanto, relatará a entrada de valor apenas com zeros anexados ao final, mesmo no caso toFixed(20), pois parece estar arredondando à força o valor para reduzir os problemas dos limites de hardware.

Veja por referência `NOTE 2` na definição do `toFixed` no ECMA-262.

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` menor que `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 Explicação:

- [Por que Math.max() é menor que Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) by Charlie Harvey

## Comparando `null` com `0`

As seguintes expressões parecem introduzir uma contradição:

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

Como `null` não pode ser igual nem maior que`0`, se `null> = 0` é realmente `true`? (Isso também funciona com menor que da mesma maneira.)

### 💡 Explicação:

O jeito que essas três expressões são avaliadas são diferentes e são responsáveis por produzirem esse comportamento inesperado.

Primeiro, a comparação abstrata de igualdade `null == 0`. Normalmente, se o operador não pode comparar os valores dos dois lados, ele converte ambos em números e compara os números. Então, você poderá esperar o seguinte comportamento:

```js
// Isso não é o que acontece
(null == 0 + null) == +0;
0 == 0;
true;
```

Contudo, de acordo com a leitura da especificação, a conversão de números não pode acontecer em um lado que é `null` ou `undefined`. Portanto, se você tem `null` em um lado do sinal de igual, o outro lado precisa ser `null` ou `undefined` para que essa expressão retorne `true`. Como não é esse o caso, o retorno é `false`.

Depois, a comparação relacional `null > 0`. Aqui o algoritmo, diferentemente do operador abstrato de comparação, _irá_ converter `null` em um número. Portanto, temos o seguinte comportamento:

```js
null > 0
+null = +0
0 > 0
false
```

Finalmente, a comparação relacional `null >= 0`. Você pode argumentar que essa expressão deveria ser o resultado de `null > 0 || null == 0`; se fosse esse o caso, então os resultados acima deveriam mostrar que isso também seria `false`. Todavia, o operador `>=` funciona de uma maneira diferente, onde basicamente ele se comporta de maneira oposta ao operador `<`. Como nosso exemplo acima com o operador _maior que_ também é válido para o operador _menor que_, isso significa que essa expressão é realmente avaliada da seguinte forma:

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

## Redeclaração da mesma variável

JS nos permite declarar variáveis das seguintes formas:

```js
a;
a;
// This is also valid
a, a;
```

Funciona também no modo estrito:

```js
var a, a, a;
var a;
var a;
```

### 💡 Explicação:

Todas as definições são combinadas em uma definição.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Comportamento padrão Array.prototype.sort()

Imagine que você precisa ordenar um array de números.

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 Explicação:

A ordem padrão de ordenacão é feita na conversão dos elementos em texto, e depois comparando suas sequências de valores de unidades de código em UFT-16.

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### Dica

Passe `comparefn` se você tentar ordenar algo que não seja string.

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

# 📚 Outros recursos

- [wtfjs.com](http://wtfjs.com/) — uma coleção dessas várias irregularidades especiais, inconsistências e momentos dolorosos para cada linguagem da web.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — Uma excelente palestra de Gary Bernhardt no CodeMash 2012
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — uma talk de Kyle Simpson para o Forward 2, que tenta “pull out the crazy” do JavaScript. Ele te ajuda a produzir código limpo, elegante, legível e inspirar a contribuir com a comunidade open source.

# 🎓 Licença

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
