# What the f\*ck JavaScript?

[![WTFPL 2.0][license-image]][license-url]
[![NPM version][npm-image]][npm-url]

> Une liste d'exemples JavaScript drôles et délicats

Le JavaScript est un langage formidable! Il possède une syntaxe simple, un grand écosystème et, le plus important de tout, une immense communauté.

En même temps, nous savons tous que le JavaScript est un langage assez amusant comprenant des aspects plus complexes que d'autres. Certains d'entre eux peuvent rapidement faire de notre travail quotidien un enfer, tout comme d'autres peuvent nous faire rire aux éclats.

L'idée originale de WTFJS appartient à [Brian Leroux](https://twitter.com/brianleroux). Cette liste est fortement inspirée par son discours [**“WTFJS”** at dotJS 2012](https://www.youtube.com/watch?v=et8xNAc2ic8):

[![dotJS 2012 - Brian Leroux - WTFJS](https://img.youtube.com/vi/et8xNAc2ic8/0.jpg)](https://www.youtube.com/watch?v=et8xNAc2ic8)

# Le Manuscript sous forme de paquet Node

Vous pouvez installer ce manuel en utilisant `npm`. Pour cela, il suffit d'exécuter :

```
$ npm install -g wtfjs
```

Vous devriez pouvoir ensuite utiliser `wtfjs` en ligne de commande. Cela ouvrira le manuel dans votre terminal. Sinon, vous pouvez continuer à lire ici tout simplement.

La source du _package_ est disponible ici: <https://github.com/denysdovhan/wtfjs>

# Traductions

Actuellement, il existe des traductions de ** wtfjs ** pour les langues suivantes :

- [中文版](./README-zh-cn.md)
- [Français](./README-fr-fr.md)

[**Demander une autre traduction**][tr-request]

[tr-request]: https://github.com/denysdovhan/wtfjs/issues/new?title=Translation%20Request:%20%5BPlease%20enter%20language%20here%5D&body=I%20am%20able%20to%20translate%20this%20language%20%5Byes/no%5D

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of Contents

- [💪🏻 Motivation](#-motivation)
- [✍🏻 Notation](#-notation)
- [👀 Exemples](#-exemples)
  - [`[]` est égal à `![]`](#-est-%C3%A9gal-%C3%A0-)
  - [`true` n'est pas égal à `![]`, mais pas égal à `[]` aussi](#true-nest-pas-%C3%A9gal-%C3%A0--mais-pas-%C3%A9gal-%C3%A0--aussi)
  - [true est faux](#true-est-faux)
  - [baNaNa](#banana)
  - [`NaN` n'est pas un `NaN`](#nan-nest-pas-un-nan)
  - [C'est un échec](#cest-un-%C3%A9chec)
  - [`[]` est truthy, mais pas `true`](#-est-truthy-mais-pas-true)
  - [`null` est falsy, mais pas `faux`](#null-est-falsy-mais-pas-faux)
  - [`document.all` est un objet, mais il est `undefined`](#documentall-est-un-objet-mais-il-est-undefined)
  - [La valeur minimale est supérieure à zéro](#la-valeur-minimale-est-sup%C3%A9rieure-%C3%A0-z%C3%A9ro)
  - [Fonction n'est pas une fonction](#fonction-nest-pas-une-fonction)
  - [Ajout de tableaux](#ajout-de-tableaux)
  - [Les virgules finales dans un tableau](#les-virgules-finales-dans-un-tableau)
  - [L'égalité des tableaux est un monstre](#l%C3%A9galit%C3%A9-des-tableaux-est-un-monstre)
  - [`undefined` et `Number`](#undefined-et-number)
  - [`parseInt` est un méchant](#parseint-est-un-m%C3%A9chant)
  - [Math avec `true` et `false`](#math-avec-true-et-false)
  - [Les commentaires HTML sont valides en JavaScript](#les-commentaires-html-sont-valides-en-javascript)
  - [`NaN` n'est ~~pas~~ un nombre](#nan-nest-pas-un-nombre)
  - [`[]` et `null` sont des objets](#-et-null-sont-des-objets)
  - [Nombres magiquement croissant](#nombres-magiquement-croissant)
  - [Précision de `0.1 + 0.2`](#pr%C3%A9cision-de-01--02)
  - [Patching de numéros](#patching-de-num%C3%A9ros)
  - [Comparaison de trois nombres](#comparaison-de-trois-nombres)
  - [Math drôle](#math-dr%C3%B4le)
  - [Addition de RegExps](#addition-de-regexps)
  - [Les chaînes ne sont pas des instances de `String`](#les-cha%C3%AEnes-ne-sont-pas-des-instances-de-string)
  - [Appeler des fonctions avec des caractères accent grave](#appeler-des-fonctions-avec-des-caract%C3%A8res-accent-grave)
  - [Call call call](#call-call-call)
  - [Une propriété `constructor`](#une-propri%C3%A9t%C3%A9-constructor)
  - [Object en tant que clé de la propriété d'un objet](#object-en-tant-que-cl%C3%A9-de-la-propri%C3%A9t%C3%A9-dun-objet)
  - [Accéder aux prototypes avec `__proto__`](#acc%C3%A9der-aux-prototypes-avec-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Déstructuration avec des valeurs par défaut](#d%C3%A9structuration-avec-des-valeurs-par-d%C3%A9faut)
  - [Points et propagation](#points-et-propagation)
  - [Étiquettes](#%C3%A9tiquettes)
  - [Étiquettes imbriquées](#%C3%A9tiquettes-imbriqu%C3%A9es)
  - [`Try...catch` insidieux](#trycatch-insidieux)
  - [Est-ce un héritage multiple ?](#est-ce-un-h%C3%A9ritage-multiple-)
  - [Un générateur qui se `yield` lui-même](#un-g%C3%A9n%C3%A9rateur-qui-se-yield-lui-m%C3%AAme)
  - [Une classe de classe](#une-classe-de-classe)
  - [Objets incoercibles](#objets-incoercibles)
  - [Fonctions fléchées complexes](#fonctions-fl%C3%A9ch%C3%A9es-complexes)
  - [Les fonctions fléchées ne peuvent pas être un constructeur](#les-fonctions-fl%C3%A9ch%C3%A9es-ne-peuvent-pas-%C3%AAtre-un-constructeur)
  - [`arguments` et fonctions fléchées](#arguments-et-fonctions-fl%C3%A9ch%C3%A9es)
  - [Retour difficile](#retour-difficile)
  - [Chaînage d'affectations sur un objet](#cha%C3%AEnage-daffectations-sur-un-objet)
  - [Accéder aux propriétés d'un objet avec des tableaux](#acc%C3%A9der-aux-propri%C3%A9t%C3%A9s-dun-objet-avec-des-tableaux)
  - [Opérateurs `null` et relationnels](#op%C3%A9rateurs-null-et-relationnels)
  - [`Number.toFixed()` affiche différents nombres](#numbertofixed-affiche-diff%C3%A9rents-nombres)
  - [`Math.max()` est moins que `Math.min()`](#mathmax-est-moins-que-mathmin)
  - [Comparer `null` à `0`](#comparer-null-%C3%A0-0)
  - [Même redéclaration d'une variable](#m%C3%AAme-red%C3%A9claration-dune-variable)
  - [Comportement par défaut d'`Array.prototype.sort()`](#comportement-par-d%C3%A9faut-darrayprototypesort)
- [📚 Autres ressources](#-autres-ressources)
- [🎓 Licence](#-licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

# 💪🏻 Motivation

> Juste pour le fun
>
> &mdash; _[**“Just for Fun: The Story of an Accidental Revolutionary”**](https://archive.org/details/justforfun00linu), Linus Torvalds_

L'objectif principal de cette liste est de rassembler quelques exemples loufoques et d'expliquer leur fonctionnement, quand c'est possible. 😉 Tout simplement parce qu'il est amusant d'apprendre quelque chose qu'on ne connaissait pas auparavant.

Si vous êtes débutant, vous pouvez aussi utiliser ces notes pour approfondir vos connaissances en JavaScript. J'espère qu'elles vous inciteront à passer plus de temps à lire la spécification.

Si vous êtes un développeur professionnel, vous pouvez considérer ces exemples comme une excellente référence pour toutes les bizarreries et comportements inattendus de notre langage bien-aimé, le JavaScript.

Dans tous les cas, lisez ce qui suit. Vous y trouverez probablement quelque chose de nouveau !

# ✍🏻 Notation

**`// ->`** est utilisé pour afficher le résultat d'une expression. Par exemple :

```js
1 + 1; // -> 2
```

**`// >`** définit le résultat de `console.log` ou tout autre sortie. Par exemple :

```js
console.log("hello, world!"); // > hello, world!
```

**`//`** indique un commentaire utilisé pour donner des explications. Par exemple :

```js
// Assigner une fonction la constant foo
const foo = function() {};
```

# 👀 Exemples

## `[]` est égal à `![]`

Tableau est égal à pas tableau

```js
[] == ![]; // -> true
```

### 💡 Explication :

L'opérateur de comparaison d'égalité faible convertit les deux côtés en nombres pour les comparer. Pour différentes raisons, les deux côtés deviennent le nombre `0`.

Les tableaux sont truthy, donc à droite, on trouve l'opposé d'une valeur truthy, soit `false`, qui est ensuite forcé à `0`. A gauche, puisqu'un tableau vide est forcé à `0` automatiquement, sans devoir être précédemment transformé en booléen, on trouve aussi `0`, malgré le fait qu'un tableau soit truthy.

Voici comment cette expression se simplifie:

```js
+[] == +![];
0 == +false;
0 == 0;
true;
```

Voir aussi [`[]` est truthy, mais pas `true`](#-est-truthy-mais-pas-true).

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `true` n'est pas égal à `![]`, mais pas égal à `[]` aussi

Un tableau n'est pas égal à `true`, tout comme pas tableau. Un tableau est égal à `false`, pas tableau est égal à `false` aussi :

```js
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true
```

### 💡 Explication :

```js
true == []; // -> false
true == ![]; // -> false

// Selon la spécification

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

// Selon la spécification

false == []; // -> true

toNumber(false); // -> 0
toNumber([]); // -> 0

0 == 0; // -> true

false == ![]; // -> false

![]; // -> false

false == false; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## true est faux

```js
!!"false" == !!"true"; // -> true
!!"false" === !!"true"; // -> true
```

### 💡 Explication :

Considérez ceci étape par étape :

```js
// `true` est 'truthy' et est représenté par la valeur 1 (nombre), 'true' sous forme de chaîne est NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' n'est pas une chaîne vide, donc c'est une valeur `truthy`
!!"false"; // -> true
!!"true"; // -> true
```

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## baNaNa

```js
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

Ceci est une blague "old school" en JavaScript, mais remasterisée. Voici l'originale :

```js
"foo" + +"bar"; // -> 'fooNaN'
```

### 💡 Explication :

L'expression est évaluée comme `'foo' + (+'bar')`, ce qui convertit `'bar'` à `NaN`.

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [12.5.6 Unary + Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)

## `NaN` n'est pas un `NaN`

```js
NaN === NaN; // -> false
```

### 💡 Explication :

La spécification définit strictement la logique derrière ce comportement :

> 1. Si `Type(x)` est différent de `Type(y)`, retourne **false**.
> 2. Si `Type(x)` est `Number`, alors
>    1. Si `x` est **NaN**, retourne **false**.
>    2. Si `y` est **NaN**, retourne **false**.
>    3. … … …
>
> &mdash; [**7.2.14** Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)

Sur la base de la définition de `NaN` de l'IEEE :

> Quatre relations mutuellement exclusives sont possibles : inférieur à, égal, supérieur à, et non ordonné. Le dernier cas survient quand au moins un opérande est `NaN`. Tous les `NaN` doivent se comparer de manière non ordonnée avec tout, y compris avec lui-même.
>
> &mdash; [“What is the rationale for all comparisons returning false for IEEE754 NaN values?”](https://stackoverflow.com/questions/1565164/1573715#1573715) sur StackOverflow.

## C'est un échec

Vous ne le croiriez pas, mais …

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
```

### 💡 Explication :

En brisant cette masse de symboles en morceaux, nous remarquons que le schéma suivant se produit souvent :

```js
![] + []; // -> 'false'
![]; // -> false
```

Donc, nous essayons d'ajouter `[]` à `false`, mais en raison d'un certain nombre d'appels de fonctions internes (`binary + Operator` -> `ToPrimitive` -> `[[DefaultValue]]`), nous finissons par convertir l'opérande de droite en chaîne :

```js
![] + [].toString(); // 'false'
```

En considérant une chaîne comme un tableau, nous pouvons accéder à son premier caractère via `[0]` :

```js
"false"[0]; // -> 'f'
```

Le reste est évident, sauf pour le `i`. Le `i` dans `fail` est saisi en générant la chaîne `"falseundefined"` et en saisissant l'éléments sur l'index `[10]`.

## `[]` est truthy, mais pas `true`

Un tableau est une valeur `truthy`, mais n'est pas égal à `true`.

```js
!![]       // -> true
[] == true // -> false
```

### 💡 Explication :

Voici des liens vers les sections correspondantes de la spécification ECMA-262 :

- [**12.5.9** Logical NOT Operator (`!`)](https://www.ecma-international.org/ecma-262/#sec-logical-not-operator)
- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `null` est falsy, mais pas `faux`

Malgré le fait que `null` soit une valeur `falsy`, elle n'est pas égale à `false`.

```js
0 == false; // -> true
"" == false; // -> true
```

### 💡 Explication :

L'explication est la même que pour l'exemple précédent. Voici le lien correspondant :

- [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)

## `document.all` est un objet, mais il est `undefined`

> ⚠️ Ceci fait partie de la Browser API et ne fonctionnera pas dans un environnement Node.js ⚠️

Malgré le fait que `document.all` soit un objet de type tableau et qu'il donne accès aux nœuds DOM de la page, il répond à la fonction `typeof` comme étant `undefined`.

```js
document.all instanceof Object; // -> true
typeof document.all; // -> 'undefined'
```

En même temps, `document.all` n'est pas égal à `undefined`.

```js
document.all === undefined; // -> false
document.all === null; // -> false
```

Mais, parallèlement :

```js
document.all == null; // -> true
```

### 💡 Explication :

> `document.all` était anciennement un moyen d'accéder aux éléments DOM, principalement avec les anciennes versions d'IE. Bien que cela n'ait jamais été une norme, `document.all` était largement utilisé dans "l'ancien code JS". Quand la norme a progressé avec la venue de nouvelles API (par exemple, `document.getElementById`), l'API `document.all` est devenue obsolète et le comité de normes a dû décider ce qu'ils allaient en faire. En raison de sa large utilisation, ils ont décidé de la conserver, mais d'introduire une violation volontaire de la spécification JavaScript.
> La raison pour laquelle `document.all` retourne `false` lors de l'utilisation de l'opérateur d'égalité stricte ([Strict Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison)) avec `undefined` et `true` lors de l'utilisation de l'opérateur d'égalité abstraite ([Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison)) est due à la violation volontaire de la spécification qui le permet explicitement.
>
> &mdash; [“Obsolete features - document.all”](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) sur WhatWG - HTML spec.
> &mdash; [“Chapter 4 - ToBoolean - Falsy values”](https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects) sur YDKJS - Types & Grammar.

## La valeur minimale est supérieure à zéro

`Number.MIN_VALUE` est le plus petit nombre, qui est supérieur à zéro :

```js
Number.MIN_VALUE > 0; // -> true
```

### 💡 Explication :

> `Number.MIN_VALUE` est `5e-324`, c'est-à-dire le plus petit nombre positif pouvant être représenté dans la précision flottante et donc, c'est aussi le plus près que possible de zéro. Il définit la meilleure résolution que vous pouvez atteindre avec des valeurs flottantes.
>
> Maintenant, la plus petite valeur globale est `Number.NEGATIVE_INFINITY`, bien que cette dernière ne soit pas vraiment numérique au sens strict.
>
> &mdash; [“Why is `0` less than `Number.MIN_VALUE` in JavaScript?”](https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript) at StackOverflow

- [**20.1.2.9** Number.MIN_VALUE](https://www.ecma-international.org/ecma-262/#sec-number.min_value)

## Fonction n'est pas une fonction

> ⚠️ Une erreur présente dans la v5.5 (V8) ou inférieure de Node.js (Node.js <=7) ⚠️

Vous êtes tous au courant de l'irritant _undefined is not a function_, mais qu'en est-il de ceci :

```js
// Déclare une classe qui _extends_ `null`
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// >     at … … …
```

### 💡 Explication :

Ceci ne fait pas partie de la spécification. C'est seulement une erreur qui a depuis été corrigé, il ne devrait donc plus y avoir de problème à l'avenir.

## Ajout de tableaux

Et si vous essayiez d'additionner deux tableaux ?

```js
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
```

### 💡 Explication :

C'est la concaténation ! Etape par étape, ça ressemble à ceci :

```js
[1, 2, 3] +
  [4, 5, 6][
    // appelle toString()
    (1, 2, 3)
  ].toString() +
  [4, 5, 6].toString();
// concaténation
"1,2,3" + "4,5,6";
// ->
("1,2,34,5,6");
```

## Les virgules finales dans un tableau

Vous avez créé un tableau avec 4 éléments vides. Malgré tout, vous obtiendrez un tableau avec seulement trois éléments, à cause des virgules finales.

```js
let a = [, , ,];
a.length; // -> 3
a.toString(); // -> ',,'
```

### 💡 Explication :

> Les **virgules finales** (_trailing commas_ en anglais) peuvent être utiles lors de l'ajout de nouveaux éléments, de paramètres ou de propriétés à du code JavaScript. Si vous voulez ajouter une nouvelle propriété, vous pouvez tout simplement ajouter une nouvelle ligne sans modifier la ligne précédente si cette ligne utilise déjà une virgule finale. Cela rend plus clair les différences dans un système de contrôle de version et l'édition de code pourrait être moins difficile.
>
> &mdash; [Virgules finales (trailing commas)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Virgules_finales) sur MDN.

## L'égalité des tableaux est un monstre

En JavaScript, l'égalité des tableaux est un monstre, comme vous pouvez le voir ci-dessous :

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

### 💡 Explication :

Vous devriez regarder très attentivement les exemples ci-dessus ! Ce comportement est décrit dans la section [**7.2.13** Abstract Equality Comparison](https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison) de la spécification.

## `undefined` et `Number`

Si nous ne transmettons aucun argument dans le constructeur `Number`, nous obtiendrons `0`. La valeur `undefined` est attribuée aux arguments formels en l'absence d'arguments, alors vous pouvez vous attendre à ce que `Number` sans argument utilise `undefined` comme valeur de paramètre. Toutefois, quand nous lui passons `undefined` directement, nous obtiendrons `NaN` en retour.

```js
Number(); // -> 0
Number(undefined); // -> NaN
```

### 💡 Explication :

Selon la spécification :

1. Si aucun argument n'a été passé lors de l'appel de la fonction, `n` est `+0`.
2. Sinon, `n` est ? `ToNumber(value)`.
3. Dans le cas d'`undefined`, `ToNumber(undefined)` doit retourner `NaN`.

Voici les sections correspondantes :

- [**20.1.1** The Number Constructor](https://www.ecma-international.org/ecma-262/#sec-number-constructor)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## `parseInt` est un méchant

`parseInt` est célèbre pour ses bizarreries:

```js
parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15
```

**💡 Explication :** Ce résultat est dû au fait que `parseInt` continue d'analyser caractère par caractère la chaîne jusqu'à ce qu'il rencontre un caractère qu'il ne connaît pas. Le `f` dans `'f*ck'` correspond au chiffre hexadécimal `15`.

Analyser `Infinity` comme entier est quelque chose…

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

Soyez prudent avec l'analyse de `null` aussi :

```js
parseInt(null, 24); // -> 23
```

**💡 Explication :**

> `parsetInt` convertit `null` sous forme de chaîne `"null"` et essait de la convertir. Pour les bases comprises entre 0 et 23, `parseInt` ne peut convertir aucun chiffre, donc `parseInt` renvoie `NaN`. Sur 24, `"n"`, la 14ème lettre, est ajoutée au système de numération. Sur 31, `"u"`, la 21ème lettre, est ajoutée et la chaîne entière peut être décodée. Sur 37, il n'y a plus de jeu de valeur numérique valide pouvant être générée, donc, `NaN` est renvoyé.
>
> &mdash; [“parseInt(null, 24) === 23… wait, what?”](https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what) sur StackOverflow.

N'oubliez pas les octaux:

```js
parseInt("06"); // 6
parseInt("08"); // 8 si support ECMAScript 5
parseInt("08"); // 0 si pas support ECMAScript 5
```

**💡 Explication :** Si la chaîne d'entrée commence par 0, la base est égale à 8 (octal) ou à 10 (décimal). La base choisie dépend de l'implémentation. ECMAScript 5 indique que la valeur 10 (décimal) est utilisée, mais tous les navigateurs ne le prennent pas encore en charge. Pour cette raison, spécifiez toujours une base lorsque vous utilisez `parseInt`.

`parseInt` convertit toujours une entrée en chaîne :

```js
parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1
```

Soyez prudent lors d'analyse de valeurs en virgule flottante :

```js
parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 5
```

**💡 Explication :** `parseInt` prend une chaîne de caractère comme argument et retourne un entier sur la base spécifiée. `parseInt` supprime aussi tout ce que suit, incluant le premier non-chiffre de la chaîne transmise en paramètre. `0.000001` est converti en chaîne `"0.000001"`, et `parseInt` retourne `0`. Quand `0.0000001` est converti en chaîne, il est traité comme `"1e-7"` et retourne donc `1`. `1/1999999` est interprété comme étant `5.00000250000125e-7` et retourne `5`.

## Math avec `true` et `false`

Faisons des maths :

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

### 💡 Explication :

Avec le constructeur `Number`, nous pouvons forcer les valeurs aux nombres. Il est assez évident que `true` sera forcé à `1`.

```js
Number(true); // -> 1
```

L'opérateur unaire `+` tente de convertir sa valeur en nombre. Il peut convertir des représentations d'entiers et de nombres flottants sous forme de chaîne, de même que les valeurs `true`, `false` et `null`. S'il ne peut pas analyser une valeur particulière, il sera évalué à `NaN`. Cela signifie que nous pouvons contraindre `true` à `1` plus facilement :

```js
+true; // -> 1
```

Lorsque vous effectuez une addition ou une multiplication, la méthode `ToNumber` est appelée. Selon la spécification, cette méthode retourne :

> Si `argument` est **true**, retourne **1**. Si `argument` est **false**, retourne **+0**.

C'est pourquoi nous pouvons ajouter des valeurs booléennes en tant que nombres réguliers et obtenir des résultats corrects.

Les sections correspondantes :

- [**12.5.6** Unary `+` Operator](https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator)
- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.3** ToNumber(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tonumber)

## Les commentaires HTML sont valides en JavaScript

Vous serez impressionné, mais `<!--` (connu sous le nom de commentaire HTML) est aussi valide comme commentaire en JavaScript.

```js
// commentaire valide
<!-- commentaire valide aussi
```

### 💡 Explication :

Impressionné ? Les commentaires de type HTML étaient à la base destinés à permettre aux navigateurs ne comprenant pas la balise `<script>` de se dégrader avec élégance. Ces navigateurs, par exemple Netscape 1.x, ne sont plus populaires aujourd'hui. Il est donc inutile de mettre des commenaitres HTML dans vos balises `<script>`.

- [**B.1.3** HTML-like Comments](https://www.ecma-international.org/ecma-262/#sec-html-like-comments)

## `NaN` n'est ~~pas~~ un nombre

`typeof` `NaN` est un `'number'` :

```js
typeof NaN; // -> 'number'
```

### 💡 Explication :

Explications sur le fonctionnement des opérateurs `typeof` et `instanceof` :

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)
- [**12.10.4** Runtime Semantics: InstanceofOperator(`O`,`C`)](https://www.ecma-international.org/ecma-262/#sec-instanceofoperator)

## `[]` et `null` sont des objets

```js
typeof []; // -> "object"
typeof null; // -> "object"

// however
null instanceof Object; // false
```

### 💡 Explication :

Le comportement de l'opérateur `typeof` est défini dans la section suivante de la spécification :

- [**12.5.5** The `typeof` Operator](https://www.ecma-international.org/ecma-262/#sec-typeof-operator)

Selon la spécification, l'opérateur `typeof` renvoie une chaîne : [Table 35: `typeof` Operator Results](https://www.ecma-international.org/ecma-262/#table-35). Pour les objets `null`, ordinaires, _standard exotic_ et _non-standard exotic_, qui n'implémentent pas `[[Call]]`, il retourne la chaîne `"object"`.

En revanche, vous pouvez vérifier le type d'un objet en utilisant la méthode `toString`.

```js
Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
```

## Nombres magiquement croissant

```js
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002
```

### 💡 Explication :

Ceci est dû à la norme IEEE 754-2008 concernant l'arithmétique binaire en virgule flottante. À cette échelle, un nombre s'arrondit au nombre pair le plus près. Plus d'infos :

- [**6.1.6** The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)
- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) sur Wikipedia

## Précision de `0.1 + 0.2`

Une blague bien connue. L'ajout de `0.1` et de `0.2` est mortellement précis :

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3; // -> false
```

### 💡 Explication :

La réponse à la question [”Is floating point math broken?”](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) sur StackOverflow:

> Les constantes `0.2` et `0.3` seront également des approximations à leurs vraies valeurs. Il arrive que le `double` le plus proche de `0.2` soit supérieur au nombre rationnel `0.2`, mais que le `double` le plus proche de `0.3` soit inférieur au nombre rationnel `0.3`. La somme de `0.1` et `0.2` finit donc par être supérieure au nombre rationnel `0.3` et donc, en désaccord avec la constante de votre code.

Le problème est tellement connu qu'il y a même un site web appelé [0.30000000000000004.com](http://0.30000000000000004.com/). Il est récurrent pour tous les langages utilisant des mathématiques avec des virgules flottantes, pas seulement JavaScript.

## Patching de numéros

Vous pouvez ajouter vos propres méthodes pour encapsuler des objets comme `Number` ou `String`.

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

### 💡 Explication :

De toute évidence, vous pouvez _extend_ l'objet `Number` comme n'importe quel autre objet en JavaScript, mais ce n'est toutefois pas recommandé si le comportement de la méthode définie ne fait partie de la spécification. Voici donc la liste des propriétés de `Number` :

- [**20.1** Number Objects](https://www.ecma-international.org/ecma-262/#sec-number-objects)

## Comparaison de trois nombres

```js
1 < 2 < 3; // -> true
3 > 2 > 1; // -> false
```

### 💡 Explication :

Pourquoi est-ce que cela fonctionne ainsi ? Et bien le problème se trouve dans la première partie de l'expression. Voici comment cela fonctionne :

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false
```

Nous pouvons résoudre ce problème avec _l'opérateur Supérieur ou égal à (`>=`)_ :

```js
3 > 2 >= 1; // true
```

En savoir plus sur les opérateurs relationnels dans la spécification :

- [**12.10** Relational Operators](https://www.ecma-international.org/ecma-262/#sec-relational-operators)

## Math drôle

Souvent, les résultats d'opérations arithmétiques en JavaScript peuvent être assez inattendus. Considérez ces exemples :

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

### 💡 Explication :

Que se passe-t-il dans les quatre premiers exemples ? Voici un petit tableau pour comprendre les additions en JavaScript :

```
Nombre  + Nombre  -> addition
Booléen + Nombre  -> addition
Booléen + Booléen -> addition
Nombre  + Chaîne -> concaténation
Chaîne  + Booléen -> concaténation
Chaîne  + Chaîne  -> concaténation
```

Qu'en est-il des autres exemples ? Les méthodes `ToPrimitive` et `ToString` sont implicitement appelées pour `[]` et `{}` avant une addition. En lire plus sur le processus d'évalution dans la spécification :

- [**12.8.3** The Addition Operator (`+`)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [**7.1.1** ToPrimitive(`input` [,`PreferredType`])](https://www.ecma-international.org/ecma-262/#sec-toprimitive)
- [**7.1.12** ToString(`argument`)](https://www.ecma-international.org/ecma-262/#sec-tostring)

## Addition de RegExps

Saviez-vous que vous pouviez ajouter des nombres comme dans l'exemple ci-dessous ?

```js
// Remplacement de la méthode toString
RegExp.prototype.toString =
  function() {
    return this.source;
  } /
  7 /
  -/5/; // -> 2
```

### 💡 Explication :

- [**21.2.5.10** get RegExp.prototype.source](https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source)

## Les chaînes ne sont pas des instances de `String`

```js
"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false
```

### 💡 Explication :

Le constructeur `String` retourne une chaîne :

```js
typeof String("str"); // -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true
```

Essayons avec un `new` :

```js
new String("str") == "str"; // -> true
typeof new String("str"); // -> "object"
```

Un objet ? Qu'est-ce que c'est ?

```js
new String("str"); // -> [String: 'str']
```

Plus d'infos sur le constructeur `String` dans la spécification :

- [**21.1.1** The String Constructor](https://www.ecma-international.org/ecma-262/#sec-string-constructor)

## Appeler des fonctions avec des caractères accent grave

Déclarons une fonction qui enregistre tous les paramètres dans la console :

```js
function f(...args) {
  return args;
}
```

Aucun doute, vous savez qu'il est possible d'appeler cette fonction comme ceci :

```js
f(1, 2, 3); // -> [ 1, 2, 3 ]
```

Mais saviez-vous que vous pouvez appeler n'importe quelle fonction avec des caractères accent grave (_backticks_ en anglais) ?

```js
f`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

### 💡 Explication :

Bon, ce n'est pas du tout magique si vous êtes familier des _littéraux de gabarits étiquetés_. Dans l'exemple ci-dessus, la fonction `f` est une étiquette pour littéral de gabarit. Les étiquettes avant un littéral de gabarit vous permettent d'analyser les littéraux de gabarits avec une fonction. Le premier argument d'une fonction étiquetée contient un tableau avec comme valeurs des chaînes. Les arguments restants sont liés aux expressions. Exemple :

```js
function template(strings, ...keys) {
  // fait quelque chose avec `strings` et `keys`…
}
```

Voici la [magic behind](http://mxstbr.blog/2016/11/styled-components-magic-explained/) la célébre bibliothèque appelée [💅 styled-components](https://www.styled-components.com/), qui est populaire dans la communauté React.

Lien vers la spécification :

- [**12.3.7** Tagged Templates](https://www.ecma-international.org/ecma-262/#sec-tagged-templates)

## Call call call

> Trouvé par [@cramforce](http://twitter.com/cramforce)

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]);
```

### 💡 Explication :

Attention, ceci pourrait vous casser la tête ! Essayez de reproduire ce code dans votre tête : nous appliquons la méthode `call` en utilisant la méthode `apply`. Plus d'infos :

- [**19.2.3.3** Function.prototype.call(`thisArg`, ...`args`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.call)
- [**19.2.3.1 ** Function.prototype.apply(`thisArg`, `argArray`)](https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply)

## Une propriété `constructor`

```js
const c = "constructor";
c[c][c]('console.log("WTF?")')(); // > WTF?
```

### 💡 Explication :

Considérez cet exemple étape par étape :

```js
// Déclare une nouvelle constante qui est une chaîne : "constructor"
const c = "constructor";

// `c` est une chaîne
c; // -> 'constructor'

// Pour obtenir le constructeur de la chaîne
c[c]; // -> [Function: String]

// Pour obtenir le constructeur du constructeur
c[c][c]; // -> [Function: Function]

// Appelle la Fonction constructeur et passe
// le corps d'une nouvelle fonction comme argument
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// Et ensuite appelle cette fonction anonyme
// Le résultat est un retour de console avec la chaîne "WTF?"
c[c][c]('console.log("WTF?")')(); // > "WTF?"
```

Un `Object.prototype.constructor` renvoie une référence à la fonction constructeur `Object` qui a créé l'instance de l'objet. Dans le cas des chaînes, il s'agit de `String`, dans le cas des nombres, il s'agit de `Number`, et ainsi de suite.

- [`Object.prototype.constructor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) at MDN
- [**19.1.3.1** Object.prototype.constructor](https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor)

## Object en tant que clé de la propriété d'un objet

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

### 💡 Explication :

Pourquoi est-ce que ça marche ? Ici, nous utilisons un _Computed property name_. Quand vous passez un objet entre ces crochets, l'objet est forcé de devenir une chaîne, alors nous obtenons la clé `[objet Object]` et la valeur `{}`.

Nous pouvons créer des enfers de crochets et de parenthèses comme dans l'exemple ci-dessous :

```js
({ [{}]: { [{}]: {} } }[{}][{}]); // -> {}

// structure:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

En savoir plus sur les objets littéraux ici:

- [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) at MDN
- [**12.2.6** Object Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)

## Accéder aux prototypes avec `__proto__`

Comme nous le savons, les primitives n’ont pas de prototypes. Cependant, si nous essayons d'obtenir une valeur de `__proto__` pour les primitives, nous obtiendrions ceci :

```js
(1).__proto__.__proto__.__proto__; // -> null
```

### 💡 Explication :

Cela se produit car lorsque quelque chose n'a pas de prototype, il sera encapsulé dans un objet à l'aide de la méthode `ToObject`. Donc, étape par étape :

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

Voici plus d'infos sur `__proto__` :

- [**B.2.2.1** Object.prototype.**proto**](https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__)
- [**7.1.13** ToObject(`argument`)](https://www.ecma-international.org/ecma-262/#sec-toobject)

## `` `${{Object}}` ``

Quel est le résultat de l'expression ci-dessous ?

```js
`${{ Object }}`;
```

La réponse est :

```js
// -> '[object Object]'
```

### 💡 Explication :

Nous avons défini un objet avec une propriété `Object` en utilisant une _propriété de notation raccourcie_ :

```js
{
  Object: Object;
}
```

Ensuite, nous avons passé cet objet au litéral de gabarit, ce qui fait que la méthode `toString` appelle donc cet objet. Voilà pourquoi nous obtenons la chaîne `'[object Object]'`.

- [**12.2.9** Template Literals](https://www.ecma-international.org/ecma-262/#sec-template-literals)
- [Initialisateur d'objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Initialisateur_objet) sur MDN.

## Déstructuration avec des valeurs par défaut

Considérez cet exemple :

```js
let x,
  { x: y = 1 } = { x };
y;
```

L'exemple ci-dessus est une bonne question pour un entretien. Quelle est la valeur de `y` ? La réponse est :

```js
// -> 1
```

### 💡 Explication :

```js
let x,
  { x: y = 1 } = { x };
y;
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

Avec l'exemple ci-dessus :

1. On déclare `x` sans valeur, donc sa valeur est `undefined`.
2. Ensuite, nous intégrons la valeur de `x` dans la propriété de l'objet `x`.
3. Ensuite, nous extrayons la valeur de `x` en utilisant la déstructuration pour l'assigner à `y`. Si la valeur n'est pas déinie, nous utiliserons `1` comme valeur par défaut.
4. Retourne la valeur de `y`.

- [Initialisateur d'objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Initialisateur_objet) sur MDN.

## Points et propagation

Des exemples intéressants pourraient être composés avec la propagation de tableaux. Considérez cela :

```js
[...[..."..."]].length; // -> 3
```

### 💡 Explication :

Pourquoi `3` ? Lorsque nous utilisons le _[spread operator](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer)_, la méthode `@@iterator` est appelée et l'itérateur renvoyé est utilisé pour obtenir les valeurs à itérer. L'itérateur par défaut pour une chaîne étend une chaîne en caractères. Après sa propagation, ces caractères sont empaquetés dans un tableau. Ensuite, ce tableau est à nouveau propagé et empaqueté encore une fois dans un tableau.

Une chaîne `'...'` est composée de trois caractères `.`, donc, la longueur du tableau résultant est de `3`.

Maintenant, étape par étape :

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

Évidemment, nous pouvons étendre et encapsuler les éléments d’un tableau autant de fois que nous le souhaitons :

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// etc.
```

## Étiquettes

Peu de programmeurs connaissent les étiquettes en JavaScript. Elles sont plutôt intéressantes :

```js
foo: {
  console.log("first");
  break foo;
  console.log("second");
}

// -> first
// -> undefined
```

### 💡 Explication :

La déclaration étiquetée est utilisée avec les déclarations `break` ou `continue`. Vous pouvez utiliser une étiquette pour identifier une boucle, puis ensuite, utiliser la déclaration `break` ou `continue` pour indiquer si un programme doit interrompre la boucle ou poursuivre son exécution.

Dans l'exemple ci-dessus, nous identifions une étiquette `foo`. Ensuite, `console.log('first');` est exécuté et l'exécution est interrompue.

En savoir plus sur les étiquettes en JavaScript :

- [**13.13** Labelled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Label](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/label) sur MDN.

## Étiquettes imbriquées

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5
```

### 💡 Explication :

Similaire aux exemples précédents, suivez ces liens pour plus d'infos :

- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)
- [**13.13** Labeled Statements](https://tc39.github.io/ecma262/#sec-labelled-statements)
- [Label](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/label) sur MDN.

## `Try...catch` insidieux

Que retournera cette expression ? `2` ou `3` ?

```js
(() => {
  try {
    return 2;
  } finally {
    return 3;
  }
})();
```

La réponse est `3`. Surprenant ?

### 💡 Explication :

- [**13.15** The `try` Statement](https://www.ecma-international.org/ecma-262/#sec-try-statement)

## Est-ce un héritage multiple ?

Regardez l'exemple ci-dessous :

```js
new class F extends (String, Array) {}(); // -> F []
```

Est-ce un héritage multiple ? Non.

### 💡 Explication :

L'élément intéressant est la valeur de la clause `extends` (`(String, Array)`). L'opérateur de groupement retourne toujours son dernier argument, donc `(String, Array)` est en réalité simplement `Array`. Cela signifie que nous venons de créer une classe qui _extends_ `Array`.

- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)
- [**12.16** Comma Operator (`,`)](https://www.ecma-international.org/ecma-262/#sec-comma-operator)

## Un générateur qui se `yield` lui-même

Considérez cet exemple de générateur qui se `yield` lui-même :

```js
(function* f() {
  yield f;
})().next();
// -> { value: [GeneratorFunction: f], done: false }
```

Comme vous pouvez le constater, la valeur renvoyée est un objet dont la `valeur` est égale à `f`. Dans ce cas, nous pouvons faire quelque chose semblable à ça :

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

### 💡 Explication :

Pour comprendre pourquoi cela fonctionne ainsi, lisez ces sections de la spécification :

- [**25** Control Abstraction Objects](https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects)
- [**25.3** Generator Objects](https://www.ecma-international.org/ecma-262/#sec-generator-objects)

## Une classe de classe

Considérez cette syntaxe obfusquée :

```js
typeof new class {
  class() {}
}(); // -> "object"
```

Il semblerait que nous déclarions une classe à l'intérieur d'une classe. Cela devrait être une erreur, cependant, nous obtenons la chaîne `"object"`.

### 💡 Explication :

Depuis ECMAScript 5, les _mots clés_ sont autorisés en tant que _noms de propriétés_. Réfléchissez comment vous le feriez pour cet exemple d'objet simple :

```js
const foo = {
  class: function() {}
};
```

Et les définitions de méthode abrégée standard d'ES6. Aussi, les classes peuvent être anonymes. Donc, si nous supprimons la partie `: function`, nous obtiendrons :

```js
class {
  class() {}
}
```

Le résultat d'une classe par défaut est toujours un objet simple. Et son `typeof` devrait retourner `"object"`.

Plus d'infos ici :

- [**14.3** Method Definitions](https://www.ecma-international.org/ecma-262/#sec-method-definitions)
- [**14.5** Class Definitions](https://www.ecma-international.org/ecma-262/#sec-class-definitions)

## Objets incoercibles

Avec des symboles bien connus, il existe un moyen de se débarrasser de la coercition de type. Examinez l'exemple ci-dessous :

```js
function nonCoercible(val) {
  if (val == null) {
    throw TypeError(
      "inCoercible ne doit pas être appelé avec null ou undefined"
    );
  }

  const res = Object(val);

  res[Symbol.toPrimitive] = () => {
    throw TypeError("Tente de transformer un objet incoercible");
  };

  return res;
}
```

Maintenant, nous pouvons l'utiliser de cette manière :

```js
// objets
const foo = nonCoercible({ foo: "foo" });

foo * 10; // -> TypeError: Tente de transformer un objet incoercible
foo + "evil"; // -> TypeError: Tente de transformer un objet incoercible

// chaînes
const bar = nonCoercible("bar");

bar + "1"; // -> TypeError: Tente de transformer un objet incoercible
bar.toString() + 1; // -> bar1
bar === "bar"; // -> false
bar.toString() === "bar"; // -> true
bar == "bar"; // -> TypeError: Tente de transformer un objet incoercible

// nombres
const baz = nonCoercible(1);

baz == 1; // -> Tente de transformer un objet incoercible
baz === 1; // -> false
baz.valueOf() === 1; // -> true
```

### 💡 Explication :

- [A gist by Sergey Rubanov](https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197)
- [**6.1.5.1** Well-Known Symbols](https://www.ecma-international.org/ecma-262/#sec-well-known-symbols)

## Fonctions fléchées complexes

Considérez l'exemple ci-dessous :

```js
let f = () => 10;
f(); // -> 10
```

D'accord, d'accord, mais qu'en est-il de celui-ci :

```js
let f = () => {};
f(); // -> undefined
```

### 💡 Explication :

Vous pourriez vous attendre à obtenir `{}` au lieu d'`undefined`. C'est dû au fait que les accolades font partie de la syntaxe des fonctions fléchées; `f` renverra donc `undefined`. Il est cependant possible de renvoyer l'objet `{}` directement à partir d'une fonction fléchée en mettant la valeur de retour entre parenthèses :

```js
let f = () => ({});
f(); // -> {}
```

## Les fonctions fléchées ne peuvent pas être un constructeur

Considérez l'exemple ci-dessous :

```js
let f = function() {
  this.a = 1;
};
new f(); // -> { 'a': 1 }
```

Maintenant, essayez de faire la même chose avec une fonction fléchée :

```js
let f = () => {
  this.a = 1;
};
new f(); // -> TypeError: f is not a constructor
```

### 💡 Explication :

Les fonctions fléchées ne peuvent pas être utilisées en tant que constructeurs et produiront une erreur si elles sont utilisées avec `new` parce qu'elles ont un _lexical `this`_ et pas de propriété `prototype`, cela n'aurait donc pas beaucoup de sens.

## `arguments` et fonctions fléchées

Considérez l'exemple ci-dessous :

```js
let f = function() {
  return arguments;
};
f("a"); // -> { '0': 'a' }
```

Maintenant, essayez de faire la même chose avec une fonction fléchée :

```js
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined
```

### 💡 Explication :

Les fonctions fléchées sont une version allégée des fonctions standards dans laquelle l'accent est mis sur la taille et le _lexical `this`_. En même temps, les fonctions fléchées ne fournissent pas de liaison pour l'objet `arguments`. Comme alternative valable, utilisez les paramètres `rest` pour obtenir le même résultat :

```js
let f = (...args) => args;
f("a");
```

- [Fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) sur MDN.

## Retour difficile

La déclaration `return` est compliquée aussi. Considérez ceci :

```js
(function() {
  return;
  {
    b: 10;
  }
})(); // -> undefined
```

### 💡 Explication :

`return` et l'expression renvoyée doivent être sur la même ligne :

```js
(function() {
  return {
    b: 10
  };
})(); // -> { b: 10 }
```

Cela est dû au concept appelé "Insertion Automatique du Point-Virgule", qui insère automatiquement des points-virgules à la fin de la plupart des nouvelles lignes. Dans le premier exemple, un point-virgule est inséré entre `return` et l'objet littéral. La fonction renvoie donc `undefined` et l'objet littéral n'est jamais évalué.

- [**11.9.1** Rules of Automatic Semicolon Insertion](https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion)
- [**13.10** The `return` Statement](https://www.ecma-international.org/ecma-262/#sec-return-statement)

## Chaînage d'affectations sur un objet

```js
var foo = { n: 1 };
var bar = foo;

foo.x = foo = { n: 2 };

foo.x; // -> undefined
foo; // -> {n: 2}
bar; // -> {n: 1, x: {n: 2}}
```

De droite à gauche, `{n: 2}` est affecté à `foo`, et le résultat de cette affectation `{n: 2}` est affecté à `foo.x`. C'est pourquoi `bar` retourne `{n: 1, x: {n: 2}}`, puisque `bar` est une référence à `foo`. Mais pourquoi `foo.x` retourne `undefined`, alors que ce n'est pas le cas pour `bar.x` ?

### 💡 Explication :

`foo` et `bar` font référence au même objet `{n: 1}`, et les _lvalues_ sont résolues avant les assignations. `foo = {n: 2}` crée un nouvel objet, et donc `foo` est mis à jour pour référencer ce nouvel objet. L'astuce ici est `foo` dans `foo.x = …`, car une _lvalue_ a été résolue au préalable et fait toujours référence à l'objet précédent `foo = {n: 1}` et donc le met à jour en ajoutant la valeur `x`.

Après cette chaîne d'assignation, `bar`, quant à lui, fait toujours référence à l'ancien objet `foo`, alors que `foo` fait référence au nouvel objet `{n: 2}`, où `x` n'existe pas.

C'est équivalent à :

```js
var foo = { n: 1 };
var bar = foo;

foo = { n: 2 }; // -> {n: 2}
bar.x = foo; // -> {n: 1, x: {n: 2}}
// `bar.x` pointe sur l'adresse du nouvel objet `foo`
// ce n'est pas équivalent à : `bar.x = {n: 2}`
```

## Accéder aux propriétés d'un objet avec des tableaux

```js
var obj = { property: 1 };
var array = ["property"];

obj[array]; // -> 1
```

Qu'en est-il des tableaux pseudo-multidimensionnels ?

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

### 💡 Explication :

L'opérateur `[]` convertit l'expression passée en utilisant `toString`. Transformer un tableau composé d'un seul élément vers une chaîne est similaire à transformer l'élément du tableau en chaîne :

```js
["property"].toString(); // -> 'property'
```

## Opérateurs `null` et relationnels

```js
null > 0; // false
null == 0; // false

null >= 0; // true
```

### 💡 Explication :

En bref, si `null < 0` est `false`, alors `null >= 0` est `true`. Lisez une explication détaillée [ici](https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274).

## `Number.toFixed()` affiche différents nombres

`Number.toFixed()` peut se comporter étrangement selon le navigateur utilisé. Voir cet exemple :

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

### 💡 Explication :

Alors que votre premier instinct peut être que IE11 a correct et que Firefox et Chrome ont faux, la réalité est que Firefox et Chrome obéissent plus directement aux normes relatives aux nombres (IEEE-754 Floating Point), alors qu'IE11 les désobéit minutieusement dans (ce qui est probablement) un effort de donner des résultats plus clairs.

Vous pouvez voir pourquoi cela se produit avec quelques tests rapides :

```js
// Confirme le résultat curieux d'arrondir `5` vers le bas
(0.7875).toFixed(3); // -> 0.787
// Il semble que ce soit juste `5` lorsque vous développez
//  les limites de la précision de flottement de 64 bits (double précision)
(0.7875).toFixed(14); // -> 0.78750000000000
// Mais que se passe-t-il si vous allez au-delà de la limite ?
(0.7875).toFixed(20); // -> 0.78749999999999997780
```

Les nombres à virgule flottante ne sont pas stockés sous forme de liste de chiffres décimaux en interne, mais par le biais d'une méthodologie plus complexe qui produit de minuscules inexactitudes qui sont généralement arrondies par des appels à `toString` ou des appels similaires, mais qui sont réellement présentes en interne.

Dans ce cas, le `5` sur la fin était en réalité une fraction extrêmement petite, en dessous d'un vrai `5`. Si vous arrondissez à une longueur raisonnable, vous obtenez un `5`… mais ce n'est en réalité pas un `5` en interne.

Ceci étant dit, IE11 rapportera la valeur entrée uniquement avec des zéros ajoutés à la fin, même dans le cas de `toFixed(20)`, car cela semble forcer la valeur arrondie pour réduire les problèmes liées aux limites matérielles.

Voir pour référence `NOTE 2` sur la définition de ECMA-262 pour `toFixed`.

- [**20.1.3.3** Number.prototype.toFixed (`fractionDigits`)](https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed)

## `Math.max()` est moins que `Math.min()`

```js
Math.min(1, 4, 7, 2); // -> 1
Math.max(1, 4, 7, 2); // -> 7
Math.min(); // -> Infinity
Math.max(); // -> -Infinity
Math.min() > Math.max(); // -> true
```

### 💡 Explication :

- [Why is Math.max() less than Math.min()?](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min) par Charlie Harvey.

## Comparer `null` à `0`

Les expressions suivantes semblent introduire une contradiction :

```js
null == 0; // -> false
null > 0; // -> false
null >= 0; // -> true
```

Comment `null` peut-il être ni égal ni supérieur à `0`, si `null >= 0` est en fait `true` ? (Ceci fonctionne de la même manière avec inférieur ou égal à (`<=`).)

### 💡 Explication :

Les méthodes d'évaluation de ces trois expressions sont toutes différentes et sont responsables de la production de ce comportement inattendu.

Premièrement, la comparaison d'égalité abstraite `null == 0`. Normalement, si cet opérateur ne peut pas comparer correctement les valeurs d'un côté comme de l'autre, il convertit les deux en nombres et compare ensuite les nombres. Alors, vous pouvez vous attendre au comportement suivant :

```js
// Ce n'est pas ce qui se passe
(null == 0 + null) == +0;
0 == 0;
true;
```

Cependant, suite à une lecture attentive de la spécification, la transformation du nombre n'a pas lieu sur un côté qui est `null` ou `undefined`. Par conséquent, si vous avez `null` sur un des deux côté du signe égal, l'autre côté doit être `null` ou `undefined` pour que l'expression retourne `true`. Comme ce n'est pas le cas, `false` est renvoyé.

Ensuite, la comparaison relationnelle `null > 0`. L'algorithme ici, contrairement à celui de l'opérateur d'égalité abstraite, _va_ convertir `null` à un nombre. Donc, nous obtenons ce comportement :

```js
null > 0
+null = +0
0 > 0
false
```

Finalement, la comparaison relationnelle `null >= 0`. Vous pourriez soutenir que cette expression devrait être le résultat de `null > 0 || null == 0`; si tel était le cas, les résultats ci-dessus signifieraient que ceci serait aussi `false`. Toutefois, l'opérateur `>=` fonctionne d'une manière très différente, qui est simplement d'utiliser le contraire de l'opérateur `<`. Parce que notre exemple ci-dessus, utilisant l'opérateur supérieur à, s'applique également à l'opérateur inférieur à, cela signifie que cette expression est réellement évaluée de la manière suivante :

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

## Même redéclaration d'une variable

JavaScript autorise la redéclaration de variables :

```js
a;
a;
// Ceci est aussi valide
a, a;
```

Et ça fonctionne aussi en mode `strict` :

```js
var a, a, a;
var a;
var a;
```

### 💡 Explication :

Toutes les définitions fusionnent en une seule définition.

- [**13.3.2** Variable Statement](https://www.ecma-international.org/ecma-262/#sec-variable-statement)

## Comportement par défaut d'`Array.prototype.sort()`

Imaginez que vous ayez besoin de trier un tableau composé de nombres.

```
[ 10, 1, 3 ].sort() // -> [ 1, 10, 3 ]
```

### 💡 Explication :

L'ordre de tri par défaut est construit lors de la transformation des éléments en chaînes, puis en comparant leurs séquences de valeurs unitaires sur le jeu de caractères UTF-16.

- [**22.1.3.25** Array.prototype.sort ( comparefn )](https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort)

### Indice

Passez `comparefn` si vous essayez de trier n'importe quoi d'autre qu'une chaîne.

```
[ 10, 1, 3 ].sort((a, b) => a - b) // -> [ 1, 3, 10 ]
```

# 📚 Autres ressources

- [wtfjs.com](http://wtfjs.com/) — une collection d'irrégularités spéciales très particulières, d'incohérences et de moments terriblement non intuitifs pour le langage du Web.
- [Wat](https://www.destroyallsoftware.com/talks/wat) — Un discours éclair de Gary Bernhardt de CodeMash 2012.
- [What the... JavaScript?](https://www.youtube.com/watch?v=2pL28CcEijU) — Kyle Simpsons parle des tentatives de Forward 2 pour "sortir de l'absurdité" du JavaScript. Il veut vous aider à produire un code plus propre, plus élégant et plus lisible, puis inspirer les gens à contribuer à la communauté open-source.

# 🎓 Licence

[![CC 4.0][license-image]][license-url]

&copy; [Denys Dovhan](http://denysdovhan.com)

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/License-WTFPL%202.0-lightgrey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wtfjs
[npm-image]: https://img.shields.io/npm/v/wtfjs.svg?style=flat-square
