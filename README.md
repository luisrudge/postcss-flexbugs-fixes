# PostCSS Flexbugs Fixes [![Build Status][ci-img]][ci]
[PostCSS] plugin This project tries to fix all of [flexbug's](https://github.com/philipwalton/flexbugs) issues.

## bug [4](https://github.com/philipwalton/flexbugs/blob/master/README.md#4-flex-shorthand-declarations-with-unitless-flex-basis-values-are-ignored)
### Input

```css
.foo {
    flex: 1 1 0;
}
```

### Output

```css
.foo {
  flex: 1 1 0%;
}
```

## bug [6](https://github.com/philipwalton/flexbugs/blob/master/README.md#6-the-default-flex-value-has-changed)
### Input

```css
.foo {
    flex: 1;
}
```

### Output

```css
.foo {
  flex: 1 1 0%;
}
```

## bug [7](https://github.com/philipwalton/flexbugs#7-flex-basis-doesnt-account-for-box-sizingborder-box)
### Input

```css
div {
  box-sizing: border-box;
  flex: 0 0 100%;
}
```

### Output

```css
div {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 100%;
}
```

## bug [8.1.a](https://github.com/philipwalton/flexbugs/blob/master/README.md#8-flex-basis-doesnt-support-calc)
### Input

```css
.foo {
    flex: 1 1 calc(1px);
}
```

### Output

```css
.foo {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: calc(1px);
}
```

## Usage

```js
postcss([require('postcss-flexbugs-fixes')]);
```

See [PostCSS] docs for examples for your environment.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/luisrudge/postcss-flexbugs-fixes.svg
[ci]: https://travis-ci.org/luisrudge/postcss-flexbugs-fixes
