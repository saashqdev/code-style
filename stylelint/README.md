# CSS Code Style

## Configuration

Install [stylelint](https://github.com/stylelint/stylelint)

``` shell
npm install --save-dev stylelint stylelint-config-kubevue
```

Then create the .stylelintrc file:

``` json
{
  "extends": "stylelint-config-kubevue"
}
```

## Editor Configuration

### VSCode

Use the plugin [vscode-stylelint](https://github.com/shinnn/vscode-stylelint)

``` json
    /* stylelint configuration */
    "stylelint.enable": true,
    "css.validate": false,
    "scss.validate": false,
```

## Table of Contents
- [Blank](#blank)
- [Uppercase](#uppercase)
- [Semicolon](#semicolon)
- [Quote Marks](#quote marks)
- [Selector](#Selector)
- [Properties](#Properties)
- [Value](#value)
- [Comments](#Comments)
- [Low-Level Error](#Low-level error)

> Description:
> - Tone: Mandatory > Required == ! Prohibited > Try > Recommended == ! Not recommended;
> - 🔧 indicates that StyleLint can use auto-fix.

### Blank
#### Require 4 spaces for indentation, no tabs allowed 🔧
[indentation](https://stylelint.io/user-guide/rules/indentation)

``` css
/* ✗ bad */
a {
color:white;
  display: none;
}

/* ✓ good */
a {
    color: white;
}
```
#### Disable empty files
[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)

``` css
/* ✗ bad */
\t\t

/* ✓ good */
a {}
```

<!-- TODO: There is no way to limit it to one blank line, and it does not work -->
#### Requires that there is only one blank line at the end of the file🔧
[no-missing-end-of-source-newline](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline)

#### Multiple consecutive blank lines are prohibited🔧
[max-empty-lines](https://stylelint.io/user-guide/rules/max-empty-lines)
```css
/* ✗ bad */
a {


    color: pink;
}

/* ✓ good */
a {
    color: pink;
}
```

#### No blank lines allowed
[custom-property-empty-line-before](https://stylelint.io/user-guide/rules/custom-property-empty-line-before),
[function-max-empty-lines](https://stylelint.io/user-guide/rules/function-max-empty-lines),
[value-list-max-empty-lines](https://stylelint.io/user-guide/rules/value-list-max-empty-lines),
[declaration-empty-line-before](https://stylelint.io/user-guide/rules/declaration-empty-line-before) 🔧, TODO: rule not enabled
[rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before),
[at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)🔧
```css
/* ✗ bad */
a {} @media {}

/* ✓ good */
a {}
```
#### Disable trailing spaces
[no-eol-whitespace](https://stylelint.io/user-guide/rules/no-eol-whitespace)

#### Requires no space before semicolons, commas, and colons, and a space after them. @rule Start a new line after a semicolon
<!-- [declaration-block-semicolon-newline-after](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after), -->
[declaration-block-semicolon-newline-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before),
[declaration-block-semicolon-space-after](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after),
[declaration-block-semicolon-space-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before) 🔧,
[at-rule-semicolon-newline-after](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after)🔧,
[at-rule-semicolon-space-before](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before),
[selector-list-comma-newline-after](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after),
[selector-list-comma-newline-before](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before),
[selector-list-comma-space-after](https://stylelint.io/user-guide/rules/selector-list-comma-space-after),
[selector-list-comma-space-before](https://stylelint.io/user-guide/rules/selector-list-comma-space-before)🔧,
[value-list-comma-newline-after](https://stylelint.io/user-guide/rules/value-list-comma-newline-after),
[value-list-comma-newline-before](https://stylelint.io/user-guide/rules/value-list-comma-newline-before),
[value-list-comma-space-after](https://stylelint.io/user-guide/rules/value-list-comma-space-after),
[value-list-comma-space-before](https://stylelint.io/user-guide/rules/value-list-comma-space-before),
[function-comma-newline-after](https://stylelint.io/user-guide/rules/function-comma-newline-after),
[function-comma-newline-before](https://stylelint.io/user-guide/rules/function-comma-newline-before),
[function-comma-space-after](https://stylelint.io/user-guide/rules/function-comma-space-after),
[function-comma-space-before](https://stylelint.io/user-guide/rules/function-comma-space-before),
[media-query-list-comma-newline-after](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after),
[media-query-list-comma-newline-before](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before),
[declaration-colon-newline-after](https://stylelint.io/user-guide/rules/declaration-colon-newline-after),
[media-query-list-comma-space-after](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after),
[media-query-list-comma-space-before](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before),
[declaration-colon-newline-after](https://stylelint.io/user-guide/rules/declaration-colon-newline-after),
[declaration-colon-space-after](https://stylelint.io/user-guide/rules/declaration-colon-space-after),
[declaration-colon-space-before](https://stylelint.io/user-guide/rules/declaration-colon-space-before),
[media-feature-colon-space-after](https://stylelint.io/user-guide/rules/media-feature-colon-space-after),
[media-feature-colon-space-before](https://stylelint.io/user-guide/rules/media-feature-colon-space-before)
```css
/* ✗ bad */
a ,b
,
span {
    transform: translate(1
,1)
  ;top: 0;left: 0;
  color :pink
}
@media (max-width :600px) {}
@import url("x.css") ; a {}

/* ✓ good */
a, b, span {
    transform: translate(1,1);
    top: 0;
    left: 0;
    color: pink;
}
@media (max-width: 600px) {}
@import url("x.css");
a {}

```

#### Do not add spaces inside parentheses (pseudo-class selectors, functions, media queries) and brackets (attribute selectors). Add one space inside the curly braces (blocks) and one space between the brackets.
[selector-attribute-brackets-space-inside](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside),
[selector-pseudo-class-parentheses-space-inside](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside),
[function-parentheses-space-inside](https://stylelint.io/user-guide/rules/function-parentheses-space-inside),
[media-feature-parentheses-space-inside](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside),
[function-whitespace-after](https://stylelint.io/user-guide/rules/function-whitespace-after)

``` css
/* ✗ bad */
input:not( [ type= "submit"] ) {}
[ target ] {}
@media ( max-width:600px) {}

/* ✓ good */
input:not([type="submit"]) {}
[target] {}
@media (max-width: 600px) {}

```

#### Requires blocks to be on separate lines. There cannot be blank lines before the curly braces. There must be spaces.

[block-closing-brace-empty-line-before](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before),
[block-closing-brace-newline-after](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after),
<!-- [block-closing-brace-newline-before](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before), -->
<!-- [block-closing-brace-space-after](https://stylelint.io/user-guide/rules/block-closing-brace-space-after), -->
[block-closing-brace-space-before](https://stylelint.io/user-guide/rules/block-closing-brace-space-before),
[block-opening-brace-newline-after](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after),
[block-opening-brace-newline-before](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before),
[block-opening-brace-space-after](https://stylelint.io/user-guide/rules/block-opening-brace-space-after),
[block-opening-brace-space-before](https://stylelint.io/user-guide/rules/block-opening-brace-space-before)🔧

``` css
/* ✗ bad */
a{color: pink;
    top: 0;
}b
{color: pink;}

/* ✓ good */
a {
    color: pink;
    top: 0;
}
b { color: pink; }
```

#### Empty blocks are not allowed
[block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty)

``` css
/* ✓ bad */
a { }

/* ✓ good */
a { color: pink; }
```

#### No spaces around attribute operators, but spaces around other operators such as calculation functions and media queries
[selector-attribute-operator-space-after](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after),
[selector-attribute-operator-space-before](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before),
[media-feature-range-operator-space-after](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after),
[media-feature-range-operator-space-before](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before),
[function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator)

``` css
/* ✗ bad */
[ target ="_blank"] {}
a { top: calc(1px+2px); }
@media (width >=600px) {}
/* ✓ good */
[target="_blank"] {}
a { top: calc(1px + 2px); }
@media (width >= 600px) {}
```

#### Requires spaces between selectors, but no extra spaces
[selector-combinator-space-after](https://stylelint.io/user-guide/rules/selector-combinator-space-after)🔧,
[selector-combinator-space-before](https://stylelint.io/user-guide/rules/selector-combinator-space-before)🔧,
[selector-descendant-combinator-no-non-space](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space)

``` css
/* ✗ bad */
a +b { color: pink; }
a>b { color: pink; }
.foo  .bar {}

/* ✓ good */
a + b { color: pink; }
a> b { color: pink; }
.foo .bar {}
```

#### Requires a space before `!` and no space after it
[declaration-bang-space-after](https://stylelint.io/user-guide/rules/declaration-bang-space-after),
[declaration-bang-space-before](https://stylelint.io/user-guide/rules/declaration-bang-space-before),

## Upper and Lower Case
#### Requires @ rules, selector tags, pseudo-classes, pseudo-elements, attributes, key values, units, function names, color values, and media queries to be lowercase
[at-rule-name-case](https://stylelint.io/user-guide/rules/at-rule-name-case)🔧,
[selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case),
[selector-pseudo-element-case](https://stylelint.io/user-guide/rules/selector-pseudo-element-case),
[selector-pseudo-class-case](https://stylelint.io/user-guide/rules/selector-pseudo-class-case),
[property-case](https://stylelint.io/user-guide/rules/property-case),
[value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case),
[unit-case](https://stylelint.io/user-guide/rules/unit-case),
[function-name-case](https://stylelint.io/user-guide/rules/function-name-case),
[color-hex-case](https://stylelint.io/user-guide/rules/color-hex-case),
[media-feature-name-case](https://stylelint.io/user-guide/rules/media-feature-name-case)

``` css
/* ✗ bad */
@Charset 'UTF-8';

A {
    Display: BLOCK;
    Width: 1PX;
    height: Calc(5% - 10em);
    color: #DEF;
}

A:HOVER {}
LI::BEFORE {}
:ROOT {}

@media (MIN-WIDTH: 700px) {}
```

``` css
/* ✓ good */
@charset 'utf-8';

a {
    display: block;
    width: 1px;
    height: calc(5% - 10em);
    color: #def;
}

a:hover {}
li::before {}
:root {}

@media (min-width: 700px) and (orientation: landscape) {}
```

## Semicolon
#### Block ends with a semicolon. No extra semicolons allowed.
[declaration-block-trailing-semicolon](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon)🔧,
[no-extra-semicolons](https://stylelint.io/user-guide/rules/no-extra-semicolons)

``` css
/* ✗ bad */
.case { font-size: 16px; color: red }
@import "x.css";;

/* ✓ good */
.case { font-size: 16px; color: red; }
@import "x.css";

```

## Quotes
####Use double quotes uniformly
[string-quotes](https://stylelint.io/user-guide/rules/string-quotes)

#### Require that the value in the attribute selector must be quoted
[selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)

``` css
/* ✗ bad */
[title=flower] {}

/* ✓ good */
[target="_blank"] {}
```

#### The URL must be enclosed in quotation marks
[function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)

#### Quotes are required when the font is multiple words
[font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes)
``` css
/* ✗ bad */
a { font-family: Times New Roman, Times, serif; }

/* ✓ good */
a { font-family: 'Times New Roman', Times, serif; }
```

## Selectors
#### Require pseudo-elements to use two colons
[selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)🔧

``` css
/* ✗ bad */
a:before { color: pink; }

/* ✓ good */
a::before { color: pink; }
```
#### Requires no downgrade features between rules
[no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity)
``` css
/* ✗ bad */
#wrapper a { color: pink; }
a { color: gray; }

/* ✓ good */
a { color: gray; }
#wrapper a { color: pink; }
```

## Properties
#### Define up to 2 attributes per line
[declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations)

``` css
/* ✗ bad */
a { color: pink; top: 3px; background: url('./test.png'); }

/* ✓ good */
a { color: pink; top: 3px; }
a {
    color: pink;
    top: 3px;
    background: url('./test.png');
}
```

#### Try to keep properties short
[declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties),
[shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)🔧

``` css
/* ✗ bad */
a {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
a { margin: 1px 1px; }

/* ✓ good */
a {
    padding: 1px 2px 3px 4px;
}
a {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
}
a { margin: 1px; }
```
#### Prevent shorthand properties from overwriting expanded properties
[declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides)

``` css
/* ✗ bad */
a {
    padding-left: 10px;
    padding: 20px;
}

/* ✓ good */
a {
    padding: 20px;
    padding-left: 10px;
}
```

## Value
#### Leading 0 is required, trailing 0 is prohibited
[number-leading-zero](https://stylelint.io/user-guide/rules/number-leading-zero),
[number-no-trailing-zeros](https://stylelint.io/user-guide/rules/number-no-trailing-zeros)

#### is a 0 number without a unit
[length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)

<!-- TODD: Why 6? -->
#### The number can be kept up to 6 decimal places
[number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision)
```css
/* ✓ bad */
a { top: 3.2450908px; }

/* ✓ good */
a { top: 3.245px; }

```
#### Use names for colors when possible, and use abbreviated hexadecimals when possible
[color-named](https://stylelint.io/user-guide/rules/color-named),
[color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)
```css
/* ✗ bad */
a { color: #000; }
a {color: #ffffffaa;}

/* ✓ good */
a { color: black; }
a { color: #fffa; }
```
#### Directional property values   in `linear-gradient()` must conform to standard syntax
[function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)

``` css
/* ✗ bad */
.foo { background: linear-gradient(top,white,black); }
.foo { background: linear-gradient(45,white,black); }
.foo { background: linear-gradient(to top top,white,black); }

/* ✓ good */
.foo { background: linear-gradient(to top,white,black); }
.foo { background: linear-gradient(45deg,white,black); }
.foo { background: linear-gradient(1.57rad,white,black); }
```

## Notes
#### requires that comments must have content, and there must be a space or blank line between the symbol and the content
[comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)
[comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty)

``` css
/* ✗ bad */
/**/
/*

 */
/*comment*/

/* ✓ good */
/* comment */
/*
 * Multi-line Comment
**/

```

#### Disable double slash comments
[no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments)

``` css
/* ✗ bad */
a {
    // color: pink;
}

/* ✓ good */
a {
    /* color: pink; */
}
```


## Low-Level Error
#### Disallow duplicate attributes, selectors, @import, font names
[declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties),
[no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors),
[no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules),
[font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names)

``` css
/* ✗ bad */
a {
    color: pink;
    color: orange;
    font-family: 'Times', Times, serif;
}
p {
    font-size: 16px;
    font-weight: 400;
    font-size: 1rem;
}
@import 'a.css';
@import 'a.css';

/* ✓ good */
a {
    color: pink;
    font-family: Times, serif;
}
p {
    font-size: 16px;
    font-size: 1rem;
    font-weight: 400;
}
@import 'a.css';
```

#### Prohibit unknown @ rules, selector tags, pseudo-classes, pseudo-elements, attributes, units, color values, media queries, animations
[at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown),
[selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown),
[selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown),
[selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown),
[property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown),
[unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown),
[color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex),
[media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown),
[no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations)

``` css
/* ✗ bad */
@unknow {}
@media screen and (unknown) {}

a:unknown {
    colr: blue;
    background: #y3;
    width: 10pixels;
}
a::element {}
tag {}
a {
    width: 10pixels;
}
a {
    color: #00;
}
a { animation-name: fancy-slide; }

```

``` css
/* ✓ good */
@charset "utf-8";
@media (min-width: 700px) {}

a:hover {
    color: blue;
    background: white;
    width: 10px;
}
a::before {}
input {}
a {
    width: 10px;
}
a {
    color: #00;
}
a { animation-name: fancy-slide; }
@keyframes fancy-slide {}
```

#### Disable string wrapping
[string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline)

``` css
/* ✗ bad */
a {
    content: "first
    second";
}

/* ✓ good */
a {
    content: "first\\nsecond";
}
```

#### Requires that a common word be added at the end of the font
[font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword)
``` css
/* ✗ bad */
a {
    font-family: Helvetica, Arial, Verdana, Tahoma;
}
/* ✓ good */
a {
    font-family: Helvetica, Arial, Verdana, Tahoma, serif;
}
```

#### Do not add important in keyframe
[keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important)
```css
/* ✗ bad */
@keyframes important1 {
    from {
        margin-top: 50px;
    }
    to {
        margin-top: 100px !important;
    }
}
/* ✓ good */
@keyframes important1 {
    from {
        margin-top: 50px;
    }
    to {
        margin-top: 100px;
    }
}
```
## References

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

<!-- TODO: Why comment out
'at-rule-name-space-after': ['always-single-line'],
#### There must be a space after the same media query

[at-rule-name-space-after](https://stylelint.io/user-guide/rules/at-rule-name-space-after)

``` css
/* ✗ bad */
@charset"UTF-8";

/* ✓ good */
@charset "UTF-8";

```
-->