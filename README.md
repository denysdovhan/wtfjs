# What the f*ck JavaScript?

JavaScript is awesome language. It has simple syntax, large ecosystem and, what is the most important, great community.

At the same time, all we know that JavaScript is kinda funny language with tricky parts. Some of them can easily turn our every day job into hell, some of them can make us laugh our loud.

The main goal of this list is to collect some crazy examples and **<бажано>** explain how they work.

## Table of contents

- foo
- bar

## Motivation

### `[]` is truly, but not `true`

Arary is truly value, however it's not equal `true`.

```js
> !![]
true    // which means array is truly
> [] == true
false   // but array not equals `true`
```

**Explanation:** TODO

### `null` is falsy, but not `false`

Despite the fact that `null` is falsy value, it's not equal `false`.

```js
> !!null
false
> null == false
false
```

**Explanation:** TODO

### `undefined` and `Number`

If we don't pass any argument into a `Number` constructor we'll get `0`. `undefined` is a value that is assigned to formal arguments which there are no actual argumenst, so you might expect that `Number` without arguments takes `undefined` as value of its parameter. However, when we pass `undefined`, we will get `NaN`.

```js
> Number()
0
> Number(undefined)
NaN
```

**Explanation:** TODO

### Math with `true` and `false`

We can coerce values to numbers with `Number` constructor. It's quite obvious that `true` will be coerced to `1`:

```js
> Number(true)
1
```

The unary plus operator attempts to convert its value into a number. It can convert string representations of integers and floats, as well as the non-string values `true`, `false`, and `null`. If it cannot parse a particular value, it will evaluate to `NaN`. That means we can coerce `true` to `1` easier:

```js
> +true // we can coerce
1
```

Hmmm… 🤔 Then probably we can do some math with `true`:

```js
> true + true
2
> (true + true) * (true + true) - true
3
```

**Explanation:** TODO