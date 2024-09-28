# Kubevue JavaScript Style

## Table of Contents
- [Blank](#blank)
- [Block](#blocks)
- [Semicolon and Comma](#Semicolon and comma)
- [String](#string)
- [Objects and Properties](#Objects and properties)
- [Operator](#operator)
- [Conditions](#Conditions)
- [Variables and Scope](#Variables and Scope)
- [Name](#Name)
- [Type](#type)
- [Number](#number)
- [Functions and Arrow Functions](#Functions and Arrow Functions)
- [Classes and Constructors](#Classes and Constructors)
- [Regular Expression](#Regular Expression)
- [Low-level Error](#Low-level error)
- [Comments](#Comments)
- [Production Environment](#Production Environment)

> Description:
> - Tone: Mandatory > Required == ! Prohibited > Try > Recommended == ! Not recommended;
> - 🔧 indicates that ESLint can automatically fix it.

## Blank
#### Requires 4 spaces for indentation, no tabs allowed. 🔧
[indent](https://eslint.org/docs/rules/indent),
[no-tabs](https://eslint.org/docs/rules/no-tabs),
[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

``` javascript
// ✗ bad
function () {
  console.log('Hello');
}

// ✗ bad
function () {
——console.log('Hello');
}

// ✓ good
function () {
    console.log('Hello');
}
```

#### Force the use of Unix line breaks `\n`, and disallow the use of Windows line breaks `\r\n`. 🔧
[linebreak-style](https://eslint.org/docs/rules/linebreak-style)

#### Disable the use of Unicode Byte Order Mark (BOM). 🔧
[unicode-bom](https://eslint.org/docs/rules/unicode-bom)

#### Requires that there is only one blank line at the end of the file. 🔧
[eol-last](https://eslint.org/docs/rules/eol-last)

``` javascript
// ✗ bad
(function (global) {
    // ...stuff...
})(this);
```

``` javascript
// ✗ bad
(function (global) {
    // ...stuff...
})(this);↵
↵
```

``` javascript
// ✓ good
(function (global) {
    // ...stuff...
})(this);↵
```

#### Multiple consecutive blank lines are prohibited. 🔧
[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)

``` javascript
// ✗ bad
const value = 'Hello';


console.log(value);
```

``` javascript
// ✓ good
const value = 'Hello';

console.log(value);
```

#### Disallow empty lines at the inner edges of blocks. 🔧
[padded-blocks](https://eslint.org/docs/rules/padded-blocks)

``` javascript
// ✗ bad
function bar() {

    console.log(foo);

}

// ✓ good
function bar() {
    console.log(foo);
}
```

#### Requires a blank line after the run command. 🔧
[lines-around-directive](https://eslint.org/docs/rules/lines-around-directive)

``` javascript
// ✗ bad
'use strict';
let foo;
```

``` javascript
// ✓ good
'use strict';

let foo;
```

#### Disable trailing spaces at the end of lines. 🔧
[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)

#### Multiple consecutive spaces are prohibited. 🔧
[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)

``` javascript
// ✗ bad
let a =  1;
if(foo   === 'bar') {}
a <<  b
let arr = [1,  2];
a ?  b: c;

// ✓ good
let a = 1;
if(foo === 'bar') {}
a << b
let arr = [1, 2];
a ? b: c;
```

#### There must be no space before semicolons, commas, and colons, and there must be a space after them. 🔧
[semi-spacing](https://eslint.org/docs/rules/semi-spacing),
[comma-spacing](https://eslint.org/docs/rules/comma-spacing),
[key-spacing](https://eslint.org/docs/rules/key-spacing),
[switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)

``` javascript
// ✗ bad
const arr = [1,2,3,4];
const obj = { id:1,name:'Alice' };
foo(a,b,c);
for (let i = 0;i < 10;i++);
switch (num) {
    case 0 :break;
    default :foo();
}

// ✓ good
const arr = [1, 2];
const obj = { id: 1, name: 'Alice' };
foo(a, b, c);
for (let i = 0; i < 10; i++);
switch (num) {
    case 0: break;
    default: foo();
}
```

#### Disallow spaces between dots (attributes, rest parameters, spread operators) and words. 🔧
[no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property),
[rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)

``` javascript
// ✗ bad
foo. bar. baz();
fn(... args);
[... arr, 4, 5, 6];

// ✓ good
foo.bar.baz();
fn(...args);
[...arr, 4, 5, 6];
```

#### Require no spaces around unary operators, and one space around equal signs, binary operators, and arrow symbols. 🔧
[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops),
[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops),
[arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)

``` javascript
// ✗ bad
i ++;
let x=-y*5;
let message='Hello, '+name+'!';
const func=(x)=>{};

// ✓ good
i++;
let x = -y * 5;
let message = 'Hello, ' + name + '!';
const func = (x) => {};
```

#### Do not add spaces inside parentheses (expressions, functions) and brackets (arrays, properties), and require one space inside braces (objects, single-line code blocks). 🔧
[space-in-parens](https://eslint.org/docs/rules/space-in-parens),
[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing),
[computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing),
[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing),
[block-spacing](https://eslint.org/docs/rules/block-spacing)

``` javascript
// ✗ bad
const num = 3 * ( 2 + 5 );
function hello( name ) {
    console.log( 'Hi,', name );
}
if ( test ) {
    thing();
}

// ✓ good
const num = 3 * (2 + 5);
function hello(name) {
    console.log('Hi,', name);
}
if (test) {
    thing();
}

// ✗ bad
const arr = [ 1, 2, 3 ];
const [ x, y ] = z;
obj[ key ] = 'test';
user[ 'name' ] = 'John';

// ✓ good
const arr = [1, 2, 3];
const [x, y] = z;
obj[key] = 'test';
user['name'] = 'John';

// ✗ bad
const obj = {id: 1, name: 'Alice'};
const {x, y} = z;
function foo() {return true;}
if (foo) { bar = 0;}

// ✓ good
const obj = { id: 1, name: 'Alice' };
const { x, y } = z;
function foo() { return true; }
if (foo) { bar = 0; }

// ✗ bad
product.attr({price: 10.6, tags: ['food', 'sweet']});
product.attr( { price: 10.6, tags: [ 'food', 'sweet' ] } );

// ✓ good
product.attr({ price: 10.6, tags: ['food', 'sweet'] });
```

#### Require a space before the curly brace. 🔧
[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)

``` javascript
// ✗ bad
function test(){
    console.log('test');
}

// ✓ good
function test() {
    console.log('test');
}

// ✗ bad
dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog',
});

// ✓ good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

#### Require a space between keywords and parentheses, and disallow spaces between function names and parameter lists. 🔧
[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing),
[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing),
[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)

> It's best to be consistent, so you don't need to worry about adding/removing spaces when adding/removing function names.

``` javascript
// ✗ bad
if(isJedi) {
    fight ();
} else {
    chat ();
}

// ✓ good
if (isJedi) {
    fight();
} else {
    chat();
}

// ✗ bad
function fight () {
    console.log ('Swooosh!');
}
run(function() {
    console.log ('Swooosh!');
});

// ✓ good
function fight() {
    console.log('Swooosh!');
}
run(function () {
    console.log('Swooosh!');
});
```

#### Empty block statements or empty functions are prohibited unless a comment is added.
[no-empty](https://eslint.org/docs/rules/no-empty),
[no-empty-function](https://eslint.org/docs/rules/no-empty-function)

``` javascript
// ✗ bad
if (cond) {
}
while (cond) { }

// ✓ good
if (cond) {
    // ALL
}
while (cond) { /* TODO */ }

// ✗ bad
function foo() {}
const foo = function () {};
const foo = () => {};

// ✓ good
function foo() { /* noop */ }
const foo = function () { /* noop */ };
const foo = () => { /* noop */ };
```

## Piece
#### Require brace style: `1tbs` (one true brace style) format, single-line mode is allowed. 🔧
[brace-style](https://eslint.org/docs/rules/brace-style)

``` javascript
// ✗ bad
function foo()
{
    return true;
}

if (foo) {
    bar();
}
else {
    base();
}

try
{
    somethingRisky();
} catch(e)
{
    handleError();
}

// ✓ good
function foo() {
    return true;
}

if (foo) {
    bar();
} else {
    base();
}

try {
    somethingRisky();
} catch(e) {
    handleError();
}

function func() { return true; }
if (foo) { bar(); }
```

#### Requires to follow the curly brace convention: `multi-or-nest` method, use curly braces for multiple lines, and omit curly braces for single line. 🔧
[curly](https://eslint.org/docs/rules/curly)

``` javascript
// ✗ bad
if (!obj)
    obj = {
        id: 1,
        name: 'alice',
    };

while (cond)
    if (cond2)
        doSomething();
    else
        doSomethingElse();
if (foo) {
    foo++;
}

while (cond) {
    doSomething();
}

for (let i = 0; i < count; i++) {
    doSomething();
}

// ✓ good
if (!obj) {
    obj = {
        id: 1,
        name: 'alice',
    };
}

while (cond) {
    if (cond2)
        doSomething();
    else
        doSomethingElse();
}

if (foo)
    foo++;

while (cond)
    doSomething();

for (let i = 0; i < count; i++)
    doSomething();
```

#### Requires single-line statements to wrap. 🔧
[nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)

``` javascript
// ✗ bad
if (foo) return;
while (cond) doSomething();
for (let i = 0; i < count; i++) doSomething();

// ✓ good
if (foo)
    return;

while (cond)
    doSomething();

for (let i = 0; i < count; i++)
    doSomething();
```

## Semicolon and Comma
#### Mandatory semicolons, and only at the end of the line, no extra semicolons allowed. 🔧
[semi](https://eslint.org/docs/rules/semi),
[semi-style](https://eslint.org/docs/rules/semi-style),
[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi),
[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)

``` javascript
// ✗ bad
(function () {
    const name = 'Skywalker'
    ;[1, 2, 3].forEach(bar)
    return name;;
})()

// ✓ good
(function () {
    const name = 'Skywalker';
    [1, 2, 3].forEach(bar);
    return name;
})();
```

#### Do not use leading commas. 🔧
[comma-style](https://eslint.org/docs/rules/comma-style)

``` javascript
// ✗ bad
const story = [
    once
  , upon
  , aTime
];

// ✓ good
const story = [
    once,
    upon,
    aTime,
];
```

#### The comma operator is prohibited.
[no-sequences](https://eslint.org/docs/rules/no-sequences)

``` javascript
// ✗ bad
foo = doSomething(), val;
if (doSomething(), !!test);
while (val = foo(), val < 42);

// ✓ good
doSomething();
foo = val;
if (!!test);
while ((val = foo()) < 42);
```

#### Require trailing commas for multiple lines, disallow trailing commas for single lines. 🔧
[comma-dangle](https://eslint.org/docs/rules/comma-dangle)

> This will make git diffs more concise and make the editor's up and down shortcuts more convenient. Don't worry about IE8 reporting an error, compilers such as Babel will automatically remove trailing commas.
> ``` javascript
> // ✗ bad - git diff without trailing comma
> const hero = {
>      firstName: 'Florence',
> -    lastName: 'Nightingale'
> +    lastName: 'Nightingale',
> +    inventorOf: ['coxcomb chart', 'modern nursing']
> };
>
> // ✓ good - git diff with trailing comma
> const hero = {
>      firstName: 'Florence',
>      lastName: 'Nightingale',
> +    inventorOf: ['coxcomb chart', 'modern nursing'],
> };
> ```

``` javascript
// ✗ bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};
const heroes = [
  'Batman',
  'Superman'
];

// ✓ good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};
const heroes = [
  'Batman',
  'Superman',
];

// ✗ bad
const hero = { firstName, lastName, };
const arr = [1, 2, 3, ];

// ✓ good
const hero = { firstName, lastName };
const arr = [1, 2, 3];
```

## String
#### Strings must be wrapped in single quotes. Backticks are used when interpolation or line breaks are required, and double quotes are used when internal single quotes need to be escaped. 🔧
[quotes](https://eslint.org/docs/rules/quotes)

``` javascript
// ✗ bad
const hello = "Hello, Bob!";
const element = `<div class="box"></div>`;
const message = 'I don\'t like quotes.';

// ✓ good
const hello = 'Hello, Bob!';
const element = `<div class="${className}"></div>`;
const message = "I don't like quotes.";
```

#### Prohibit unnecessary character concatenation.
[no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)

``` javascript
// ✗ bad
const a = 'some' + 'string';
const a = '1' + '0';

// ✓ good
const c = 'somestring';
const a = '10';
```

#### Disallow unnecessary escape characters.
[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

``` javascript
// ✗ bad
const foo = '\"This\" \i\s \'quoted\'';

// ✓ good
const foo = '"This" is \'quoted\'';
const foo = `"This" is 'quoted'`;
```

#### Multi-line strings are prohibited.
[no-multi-str](https://eslint.org/docs/rules/no-multi-str)

``` javascript
// ✗ bad
const message = 'Hello \
                 world';
// ✓ good
const message = `Hello
                world`;
```

#### Try to use template strings, and do not add spaces around the curly braces of template strings. 🔧
[prefer-template](https://eslint.org/docs/rules/prefer-template),
[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)

``` javascript
// ✗ bad
return 'How are you, ' + name + '?';
return ['How are you, ', name, '?'].join();
return `How are you, ${ name }?`;

// ✓ good
return `How are you, ${name}?`;
```

## Objects and Properties
#### Requires the dot operator and attribute to be on the same line. 🔧
[dot-location](https://eslint.org/docs/rules/dot-location)

``` javascript
// ✗ bad
$('#items').
    find('.selected').
    highlight().
    end().
    find('.open').
    updateCount();

// ✓ good
$('#items')
    .find('.selected')
    .highlight()
    .end()
    .find('.open')
    .updateCount();
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// ✗ bad
const p = promise.
    then(function() {
        // code
    }).
    catch(function() {
        // code
    });

// ✓ good
const p = promise.then(function() {
    // code
}).catch(function() {
    // code
});
```

#### Requires that periods be used whenever possible, and keywords not be avoided. 🔧
[dot-notation](https://eslint.org/docs/rules/dot-notation)

``` javascript
// ✗ bad
const result = luke['jedi'];

// ✓ good
const result = luke.jedi;
const result = luke.class;
const result = luke[key];
```

#### Disallow unnecessary computed properties. 🔧
[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)

``` javascript
// ✗ bad
const user = { ['name']: 'John Doe' };
// ✓ good
const user = { name: 'John Doe' };
```

#### Requires the use of object property shorthand syntax. 🔧
[object-shorthand](https://eslint.org/docs/rules/object-shorthand)

``` javascript
// ✗ bad
const atom = {
    value: value,
    add: function (value) {
        return atom.value + value;
    },
};

// ✓ good
const atom = {
    value,
    add(value) {
        return atom.value + value;
    },
};
```

#### Requires that only required attribute names in the object be quoted. 🔧
[quote-props](https://eslint.org/docs/rules/quote-props)

``` javascript
// ✗ bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// ✓ good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```

## Operator
#### Enforce the use of `===` and `==`, and prohibit the use of `==` and `!=`.
[eqeqeq](https://eslint.org/docs/rules/eqeqeq)

> This rule aims to eliminate non-type-safe equality operators. For example, the following statements are considered `true`:
> - `[] == false`
> - `[] == ![]`
> - `3 == "03"`

``` javascript
// ✗ bad
if (a == b)
if (foo == true)
if (bananas != 1)
if (value == undefined)
if (typeof foo == 'undefined')
if ('hello' != 'world')
if (0 == 0)
if (true == true)
if (foo == null)

// ✓ good
if (a === b)
if (foo === true)
if (bananas !== 1)
if (value === undefined)
if (typeof foo === 'undefined')
if ('hello' !== 'world')
if (0 === 0)
if (true === true)
if (foo === null)
```

#### Disallow Yoda conditions unless used in a scope. 🔧
[yoda](https://eslint.org/docs/rules/yoda)

``` javascript
// ✗ bad
if ('red' === color)
if (true == flag)
if (-1 < str.indexOf(substr))

// ✓ good
if (color === 'red')
if (flag)
if (0 <= x && x < 1)
```

#### Requires a newline character to precede the operator.
[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)

``` javascript
// ✗ bad
let fullHeight = borderTop +
                 innerHeight +
                 borderBottom;
if (someCodition ||
    otherCondition) {
        // ...
}

// ✓ good
let fullHeight = borderTop
               + innerHeight
               + borderBottom;
if (someCodition
    || otherCondition) {
       // ...
}
```

## Condition
#### Disallow constant expressions in conditions.
[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)

``` javascript
// ✗ bad
if (true) { /* ... */ }
while (x = -1) { /* ... */ }
let result = 0 ? a : b;

// ✓ good
if (x === 0) { /* ... */ }
while (x) { /* ... */ }
let result = x !== 0 ? a : b;
```

#### Disallow assignment operators in conditions unless they are surrounded by parentheses.
[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)

``` javascript
// ✗ bad
if (count = 0) { /* code */ }
while (node = node.parentNode) { /* code */ }

// ✓ good
if (count === 0) { /* code */ }
while ((node = node.parentNode)) { /* code */ }
```

#### Disallow unnecessary boolean type conversions.
[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)

``` javascript
// ✗ bad
let result = !!x ? a : b;
if (!!obj) {
    // ...
}
while (Boolean(obj)) {
    // ...
}

// ✓ good
let result = x ? a : b;
if (obj) {
    // ...
}
while (obj) {
    // ...
}
```

#### Disallow unnecessary ternary expressions.
[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)

``` javascript
// ✗ bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
const bazz = num > 1 ? true: false;

// ✓ good
const foo = a || b;
const bar = !!c;
const baz = !c;
const bazz = num > 1;
```

#### Disallow multi-line and nested ternary expressions.
[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary),
[multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)

> will make the code difficult to understand, please use `if` statement.

``` javascript
// ✗ bad
let location = env.development
  ? 'localhost'
  : 'www.api.com';

// ✓ good
let location = env.development ? 'localhost' : 'www.api.com';

// ✗ bad
let thing = foo ? bar : base === small ? quxx : forearm;

// ✓ good
let thing;
if (foo)
    thing = bar;
else
    thing = baz === qux ? quxx : foobar;
```

#### Try not to use negated expressions.
[no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)

``` javascript
// ✗ bad
if (!condition)
    doSomething();
else
    doSomethingElse();

if (a !== b)
    doSomething();
else
    doSomethingElse();

// ✓ good
if (condition)
    doSomething();
else
    doSomethingElse();

if (a === b)
    doSomething();
else
    doSomethingElse();
```

#### Disallow unsafe negation expressions. 🔧
[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)

``` javascript
// ✗ bad
if (!key in obj) { /* code */ }
if (!obj instanceof Person) { /* code */ }

// ✓ good
if (!(key in obj)) { /* code */ }
if (!(obj instanceof Person)) { /* code */ }
if (('' + !key) in object) {/* code */ }
```

## Variables and Scope
#### It is required to use `const` first when declaring variables, and use `let` when changing. It is forbidden to use `var` or not declare variables.
[no-undef](https://eslint.org/docs/rules/no-undef),
[prefer-const](https://eslint.org/docs/rules/prefer-const),
[no-var](https://eslint.org/docs/rules/no-var)

``` javascript
// ✗ bad
hero = new Hero();
var hero = new Hero();

// ✓ good
const hero = new Hero();
```

#### It is forbidden to declare multiple variables with one `const` or `let`. `const` should be placed before `let`.
[one-var](https://eslint.org/docs/rules/one-var)

``` javascript
// ✗ bad
const bar = true,
    num = 20,
    items = getItems();
let index = 0,
    silent = false,
    hero = new Hero();

// ✗ bad
const bar = true;
let silent = false;
let index = 0;
const number = 20;
const items = getItems();
let hero = new Hero();

// ✓ good
const bar = true;
const number = 20;
const items = getItems();
let index = 0;
let silent = false;
let hero = new Hero();
```

#### Do not initialize variables to `undefined`. 🔧
[no-undef-init](https://eslint.org/docs/rules/no-undef-init)

``` javascript
// ✗ bad
let bar = undefined;

// ✓ good
let bar;
const baz = undefined;
```

#### It is forbidden to assign values   to `const` and it is forbidden to declare it repeatedly.
[no-const-assign](https://eslint.org/docs/rules/no-const-assign),
[no-redeclare](https://eslint.org/docs/rules/no-redeclare)

``` javascript
// ✗ bad
const score = 100;
score = 125;
let name = 'John';
let name = 'Jane';

// ✓ good
let score = 100;
score = 125;
let name = 'John';
name = 'Jane';
```

#### Disable variable deletion.
[no-delete-var](https://eslint.org/docs/rules/no-delete-var)

> `delete` is only used to delete properties.

``` javascript
// ✗ bad
let x;
delete x;

// ✓ good
delete obj.x;
```

#### Do not use before definition.
[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)

``` javascript
// ✗ bad
alert(a);
const a = 10;

f();
function f() {}

function g() {
    return b;
}
const b = 1;

// ✓ good
const a = 10;
alert(a);

function f() {}
f(1);

const b = 1;
function g() {
    return b;
}
```

#### Try to use already declared variables.
[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

``` javascript
// ✗ bad
function func() {
    let result = something();
}
```

## Naming
#### Require variables, objects, and functions to use lower camelCase.
[camelcase](https://eslint.org/docs/rules/camelcase)

``` javascript
// ✗ bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// ✓ good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

#### Require constructors and classes to use upper camelCase.
[new-cap](https://eslint.org/docs/rules/new-cap)

``` javascript
// ✗ bad
function user(options) {
    this.name = options.name;
}
const bad = new user({
    name: 'nope',
});

// ✓ good
class User {
    constructor(options) {
        this.name = options.name;
    }
}
const good = new User({
    name: 'yup',
});
```

#### Requires that each letter in the first abbreviation word have the same case.

> Naming is for readability, not for mechanical adherence to an algorithm.

``` javascript
// ✗ bad
import SmsContainer from './containers/SmsContainer';

// ✗ bad
const HttpRequests = [
  // ...
];

// ✓ good
import SMSContainer from './containers/SMSContainer';

// ✓ good
const HTTPRequests = [
  // ...
];
```


## Type
#### It is forbidden to use the new operator for `String`, `Number`, `Boolean`, `Symbol`, `Array`, `Object`, and `Function`.
[no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers),
[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol),
[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor),
[no-new-object](https://eslint.org/docs/rules/no-new-object),
[no-new-func](https://eslint.org/docs/rules/no-new-func)

``` javascript
// ✗ bad
const str = new String('Hello world');
const num = new Number(33);
const bool = new Boolean(false);
const sym = new Symbol('sym');
const arr = new Array();
const obj = new Object();
const func = new Function('a', 'b', 'return a + b');

// ✓ good
const str = String(value);
const num = Number(value);
const bool = Boolean(value);
const sym = Symbol('sym');
const arr = [];
const obj = {};
const func = (a, b) => a + b;
```

#### Parentheses are required when calling a no-argument constructor.
[new-parens](https://eslint.org/docs/rules/new-parens)

``` javascript
// ✗ bad
const date = new Date
const dog = new Animal;

// ✓ good
const date = new Date();
const dog = new Animal();
```

#### Force `typeof` expressions to be compared to valid strings.
[valid-typeof](https://eslint.org/docs/rules/valid-typeof)

``` javascript
// ✗ bad
typeof x === 'strnig';
typeof x === 'undefimed';
typeof x === 'nunber';
typeof x === 'fucntion';

// ✓ good
typeof x === 'string';
typeof x === 'undefined';
typeof x === type;
typeof x === typeof y;
```

#### Try to use shorter symbols to achieve type conversion.
[no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)

``` javascript
// ✗ bad
let b = Boolean(foo);
let b = foo.indexOf('.') !== -1;
let n = Number(foo);
let s = String(foo);
foo = String(foo);

// ✓ good
let b = !!foo;
let b = ~foo.indexOf('.');
let n = +foo;
let s = '' + foo;
foo += '';
```

#### Requires `Symbol` to have a description.
[symbol-description](https://eslint.org/docs/rules/symbol-description)

``` javascript
// ✗ bad
const foo = Symbol();

// ✓ good
const foo = Symbol('a symbol');
```

## number
#### Requires writing of complete floating point decimals.
[no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)

``` javascript
// ✗ bad
let num = .5;
let num = 2.;
let num = -.7;

// ✓ good
let num = 0.5;
let num = 2.0;
let num = -0.7;
```

#### Requires calling `isNaN()` to check for `NaN`.
[use-isnan](https://eslint.org/docs/rules/use-isnan)

``` javascript
// ✗ bad
if (num === NaN) { /* ... */ }

// ✓ good
if (isNaN(num)) { /* ... */ }
```

#### Disable comparison with `-0` unless using `Object.is`.
[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)

``` javascript
// ✗ bad
if (x === -0) { /* ... */ }
// ✓ good
if (x === 0) { /* ... */ }
if (Object.is(x, -0)) { /* ... */ }
```

## Functions and Arrow Functions
#### Requires a function expression, not a function declaration.
[func-style](https://eslint.org/docs/rules/func-style),
[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations),
[no-func-assign](https://eslint.org/docs/rules/no-func-assign)

> A function declaration can easily be hoisted to the top of the current scope, which means that the statement that calls it can be placed before the function declaration.

``` javascript
// ✗ bad
function foo() {
  // ...
}

// ✓ good
const foo = function () {
    // ...
}
const foo = () => { /* ... */ }
```

#### Disallow unnecessary `return`.
[no-useless-return](https://eslint.org/docs/rules/no-useless-return)

``` javascript
// ✗ bad
function foo() { return; }
function foo() {
    doSomething();
    return;
}

// ✓ good
function foo() { return 5; }
function foo() {
    return doSomething();
}
```

#### Requires the use of an immediate internal function (IIFE). 🔧
[wrap-iife](https://eslint.org/docs/rules/wrap-iife)

``` javascript
// ✗ bad
function () {
    console.log('Hello');
}();
(function () {
    console.log('Hello');
}());

// ✓ good
(function () {
    console.log('Hello');
})();
```

#### Disable `arguments`, use `...` instead.
[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)

``` javascript
// ✗ bad
function joinAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}

// ✓ good
function joinAll(...args) {
    return args.join('');
}
```

#### Requires the use of the spread operator instead of `.apply()`. 🔧
[prefer-spread](https://eslint.org/docs/rules/prefer-spread)

``` javascript
// ✗ bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// ✓ good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// ✗ bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// ✓ good
new Date(...[2016, 8, 5]);
```

#### Disable unnecessary `.call()` and `.apply()`.
[no-useless-call](https://eslint.org/docs/rules/no-useless-call)

``` javascript
// ✗ bad
// These are same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);
// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);

// ✓ good
foo(1, 2, 3);
obj.foo(1, 2, 3):
```

#### Try to use default value parameter syntax instead of manually setting default values. And try to put default value parameters at the end.
``` javascript
// ✗ bad
function handle(options) {
    options = options || {};
    // ...
}

// ✓ good
function handle(options = {}) {
    // ...
}

// ✗ bad
function handle(options = {}, name) {
    // ...
}

// ✓ good
function handle(name, options = {}) {
    // ...
}
```

#### Do not use `caller` or `callee`.
[no-caller](https://eslint.org/docs/rules/no-caller)

> `arguments.caller` and `arguments.callee`, which are deprecated in newer versions of JavaScript and disabled in ECMAScript 5 strict mode.

``` javascript
// ✗ bad
function factorial(n) {
    return ! ( n > 1 ) ? 1 : arguments.call(n - 1) *n;
}

// ✓ good
function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}
```

#### It is required to use arrow functions as much as possible.
[prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)

``` javascript
// ✗ bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
});

// ✓ good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
```

#### Requires parentheses around arrow function parameters.
[arrow-parens](https://eslint.org/docs/rules/arrow-parens)

``` javascript
// ✗ bad
[1, 2, 3].map(number => `A string containing the ${number}.`);

// ✓ good
[1, 2, 3].map((number) => `A string containing the ${number}.`);
```

#### It is required to use the abbreviated form of arrow function as much as possible.
[arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)

``` javascript
// ✗ bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// ✓ good
[1, 2, 3].map(number => `A string containing the ${number}.`);
```

#### Disable unnecessary function binding.
[no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)

``` javascript
// ✗ bad
const x = function () {
    foo();
}.bind(bar);
const x = (() => {
    foo();
}).bind(bar);
const x = (() => {
    this.foo();
}).bind(bar);
const x = function () {
    (function () {
        this.foo();
    }());
}.bind(bar);
const x = function () {
    function foo() {
        this.bar();
    }
}.bind(baz);

// ✓ good
const x = function () {
    this.foo();
}.bind(bar);
const x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

#### If you want to refer to `this`, you are required to use the word `self`.
[consistent-this](https://eslint.org/docs/rules/consistent-this)

``` javascript
// ✗ bad
function foo() {
    const that = this;
    return function () {
        console.log(that);
    };
}

// ✓ good
function foo() {
    const self = this;
    return function () {
        console.log(self);
    };
}

// ✓ best
function foo() {
    return () => console.log(self);
}
```

#### Requires a `return` statement in array method callback functions.
[array-callback-return](https://eslint.org/docs/rules/array-callback-return)

> This rule finds callback functions of the following methods and then checks for the use of return statements.
> - `Array.from`
> - `Array.prototype.every`
> - `Array.prototype.filter`
> - `Array.prototype.find`
> - `Array.prototype.findIndex`
> - `Array.prototype.map`
> - `Array.prototype.reduce`
> - `Array.prototype.reduceRight`
> - `Array.prototype.some`
> - `Array.prototype.sort`

``` javascript
// ✓ good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});

// ✓ good
[1, 2, 3].map((x) => x + 1);

// ✗ bad
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
});

// ✓ good
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
    return flatten;
});

// ✗ bad
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird')
        return author === 'Harper Lee';
    else
        return false;
});

// ✓ good
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird')
        return author === 'Harper Lee';
    return false;
});
```

#### Requires a `return` statement in the `getter` function.
[getter-return](https://eslint.org/docs/rules/getter-return)

``` javascript
// ✗ bad
let student = {
    get name() {
        // no returns.
    }
};

class Student {
    get age() {
        // no returns.
    }
}

// ✓ good
let student = {
    get name() {
        return 'nicholas';
    }
};

class Student {
    get age() {
        return 18;
    }
}
```

## Classes and Constructors
#### It is required to use `class` as much as possible and avoid manual operation of `prototype`.
``` javascript
// ✗ bad
function Queue(contents = []) {
    this.queue = [...contents];
}
Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
};

// ✓ good
class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}
```

#### Requires the use of `extends` for inheritance.
``` javascript
// ✗ bad
const inherits = require('inherits');
function PeekableQueue(contents) {
    Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
    return this.queue[0];
};

// ✓ good
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}
```

#### Do not add unnecessary constructors in `class`.
[no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)

``` javascript
// ✗ bad
class Jedi {
    constructor() {}

    getName() {
        return this.name;
    }
}

// ✗ bad
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
    }
}

// ✓ good
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
        this.name = 'Rey';
    }
}
```

#### Require a `super()` call in the constructor, and prohibit the use of `this` before calling `super()`.
[constructor-super](https://eslint.org/docs/rules/constructor-super),
[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)

``` javascript
// ✗ bad
class Dog extends Animal {
    constructor () {
        this.legs = 4;
    }
}

// ✗ bad
class Dog extends Animal {
    constructor () {
        this.legs = 4;
        super();
    }
}

// ✓ good
class Dog extends Animal {
    constructor () {
        super();
        this.legs = 4;
    }
}
```

## Regular Expression
#### Try not to have multiple spaces in regular expression literals.
[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)

``` javascript
// ✗ bad
const reg = /abc   def/;

// ✓ good
const reg = /abc {3}def/;
```

#### Illegal regular expressions are prohibited.
[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)

``` javascript
// ✗ bad
RegExp('[a-z');

// ✓ good
RegExp('[a-z]');
```

#### Disallow empty character sets in regular expressions.
[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)

``` javascript
// ✗ bad
/^abc[]/.test('abcdefg');

// ✓ good
/^abc[a-z]/.test('abcdefg');
```

#### Disallow control characters in regular expressions.
[no-control-regex](https://eslint.org/docs/rules/no-control-regex)

``` javascript
// ✗ bad
const pattern = /\x1f/;

// ✓ good
const pattern = /\x20/;
```

## Low-Level Error
#### Self-assignment or comparison is prohibited.
[no-self-assign](https://eslint.org/docs/rules/no-self-assign),
[no-self-compare](https://eslint.org/docs/rules/no-self-compare)

``` javascript
// ✗ bad
foo = foo;
[a, b] = [a, b];

// ✗ bad
let x = 10;
if (x === x)
    x = 20;
```

#### It is forbidden to assign values   to native objects and keywords.
[no-global-assign](https://eslint.org/docs/rules/no-global-assign),
[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)

``` javascript
// ✗ bad
Object = null;
undefined = 1;
window = {};
function NaN() {}
try {} catch(eval) {}
```

#### Assignment to classes is prohibited.
[no-class-assign](https://eslint.org/docs/rules/no-class-assign)

``` javascript
// ✗ bad
class Dog {}
Dog = 'Fido';
```

#### Disable calling global objects as functions.
[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)

``` javascript
// ✗ bad
let math = Math();
const json = JSON();
```

#### Duplicate function parameters, object properties, class member methods, case labels, and imports are prohibited.
[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args),
[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys),
[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members),
[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case),
[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

``` javascript
// ✗ bad
function foo(a, b, a) {
    console.log(a, b);
}

// ✗ bad
const obj = {
    name: 'alice',
    name: 'bob',
    'name': 'carol',
};

// ✗ bad
class Dog {
    bark () {}
    bark () {}
}

// ✗ bad
switch (id) {
    case 1:
    // ...
    case 1:
}

// ✗ bad
import { myFunc1 } from 'module';
import { myFunc2 } from 'module';
```

#### Disallow unused expressions.
[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)

``` javascript
// ✗ bad
0
if(0) 0
{0}
f(0), {}
(function anIncompleteIIFE () {});
a && b
a ? b : 0

// ✓ good
a = 0
new C()
delete a.b
void a
a && b()
a ? b() : c()
```

#### Prevent the `for` loop counter from accumulating in the wrong direction.
[for-direction](https://eslint.org/docs/rules/for-direction)

``` javascript
// ✗ bad
for (let i = 0; i < 10; i--);
for (let i = 10; i >= 0; i++);

// ✓ good
for (let i = 0; i < 10; i++);
```

## Other
#### Disable the use of `eval` and `eval`-like methods.
[eval](https://eslint.org/docs/rules/eval),
[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval),
[no-script-url](https://eslint.org/docs/rules/no-script-url)

``` javascript
// ✗ bad
let value = eval('obj.' + key);
setTimeout('alert("Hi!");', 100);
setInterval('alert("Hi!");', 100);
execScript('alert("Hi!")');
location.href = 'javascript:void(0)';

// ✓ good
let value = obj[key];
setTimeout(function() {
    alert('Hi!');
}, 100);
setInterval(function() {
    alert('Hi!');
}, 100);
alert('Hi!');
```

#### Do not use `void`, `with`, `label`, `__iterator__`, `__proto__`
[no-void](https://eslint.org/docs/rules/no-void),
[no-with](https://eslint.org/docs/rules/no-with),
[no-labels](https://eslint.org/docs/rules/no-labels),
[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels),
[no-extra-label](https://eslint.org/docs/rules/no-extra-label),
[no-label-var](https://eslint.org/docs/rules/no-label-var),
[no-iterator](https://eslint.org/docs/rules/no-iterator),
[no-proto]

#### Exceptions must be thrown using `Error`.
[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

``` javascript
// ✗ bad
throw 'error';
throw 0;
throw undefined;
throw null;

// ✓ good
throw new Error();
throw new Error('error');
const e = new Error('error');
throw e;
```

#### Disallow empty destructuring patterns.
[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)

``` javascript
// ✗ bad
const {} = foo;
const [] = foo;
const {a: {}} = foo;
const {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}

// ✓ good
const {a = {}} = foo;
const {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}
```

## Notes
#### Require multi-line comments to use `/** ... */`.

``` javascript
// ✗ bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
    // ...
    return element;
}

// ✓ good
/**
 * make() returns a new element
 * based on the passed-in tag name

 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
    // ...
    return element;
}
```

#### Single-line comments are required to use `//`, and single-line comments are placed above the code as much as possible. A blank line is required before a single-line comment unless it is the first line in a block.
``` javascript
// ✗ bad
const active = true;  // is current tab

// ✓ good
// is current tab
const active = true;

// ✗ bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// ✓ good
function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// ✓ good
function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}
```

#### Requires a space between the comment symbol and the content. 🔧
[spaced-comment](https://eslint.org/docs/rules/spaced-comment)

``` javascript
// ✗ bad
//is current tab
const active = true;

// ✓ good
// is current tab
const active = true;

// ✗ bad
/**
*make() returns a new element
*based on the passed-in tag name
*/
function make(tag) {

    // ...

    return element;
}

// ✓ good
/**
* make() returns a new element
* based on the passed-in tag name
*/
function make(tag) {

    // ...

    return element;
}
```

#### It is required to use `FIXME` to mark a problem and `TODO` to mark a plan.
``` javascript
// ✓ good
class Calculator extends Abacus {
    constructor() {
        super();

        // FIXME: shouldn't use a global here
        total = 0;
    }
}

class Calculator extends Abacus {
    constructor() {
        super();

        // TODO: total should be configurable by an options param
        this.total = 0;
    }
}
```

## Production Environment
#### It is not recommended to use `alert`, `confirm`, and `prompt`.
[no-alert](https://eslint.org/docs/rules/no-alert)

``` javascript
// ✗ bad
alert('message');
confirm('Are you sure?');
```

#### In the production environment, `console.log` and `debugger` are prohibited, while `console.info`, `console.warn` and `console.error` are allowed.
[no-console](https://eslint.org/docs/rules/no-console),
[no-debugger](https://eslint.org/docs/rules/no-debugger)

``` javascript
// ✗ bad
console.log('code info.');
debugger;

// ✓ good
console.info('Running in development mode.');
console.warn('This method is deprecated.');
console.error('Circular dependencies!')
```

## References

- [Airbnb JavaScript Style Guild](http://airbnb.io/javascript/)
- [JavaScript Standard Style](https://github.com/feross/standard/blob/master/RULES.md)

<!-- ## ALL
    #### 3.2
    #### 3.7
    #### 3.8
    #### 5.*
    #### 6.2
    #### 7.3
    #### 7.12
    #### 7.13
    #### 7.15
    #### 10.*
    #### 11.*
    #### 13.4
    #### 15.5
    #### 21.*
    #### 18.7
    #### 22.4
    #### 22.6
    #### 23.*
    #### 24.*
    #### 25.* -->
<!--
    'prefer-numeric-literals': [2],
    'no-useless-rename': [2],
    'no-await-in-loop': [2],
    'no-control-regex': [2],
    'no-ex-assign': [2],
    'no-new-require': [2],
    'no-invalid-regexp': [2],
    'no-irregular-whitespace': [2],
    'no-sparse-arrays': [1],
    'no-unexpected-multiline': [2],
    'no-unreachable': [2],
    'no-unsafe-finally': [2],
    'block-scoped-var': [2],
    'no-case-declarations': [2],
    'no-div-regex': [2],
    'no-eq-null': [2],
    'no-octal-escape': [2],
    'no-octal': [2],
    'no-return-await': [2],
    'no-unmodified-loop-condition': [1],
    'radix': [2, 'as-needed'],
    'require-await': [2],
    'no-catch-shadow': [2],
    'func-name-matching': [2],
    'template-tag-spacing': [2, 'always'],
-->