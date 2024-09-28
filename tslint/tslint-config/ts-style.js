module.exports = {
  "rules": {
    // Use 'T[]' or 'Array' for arrays, and T[] is mandatory for arrays of basic types
    "array-type": [
      true,
      "array-simple"
    ],

    // () => { return x; } to () => x.
    "arrow-return-shorthand": true,

    // 2-bit operation, variable on the left
    //"binary-expression-operand-order": true,

    // PascalCased type names have the first letter of the word capitalized
    "class-name": true,

    // comment must start with a space
    "comment-format": [true, "check-space"],

    // Limit the types of comments
    // "comment-type": true

    // Force the use of JSDoc
    // completed-docs

    // Force utf8 encoding
    // "encoding": true

    // Mandatory file header comment
    // file-header

    // Force filenames to be hyphenated
    "file-name-casing": [true, "kebab-case"],

    // Forced use of +=1 -=1
    // increment-decrement

    // Force Interface to start with I
    // interface-name

    // Interface declaration is better than type declaration
    // interface-over-type-literal

    // Requires strict matching of the object and name declared in the import statement
    // "match-default-export-name": true

    //Continuous bars need to be wrapped
    // "newline-per-chained-call": true,

    // Replace <Type> with as
    // no-angle-bracket-type-assertion

    // if( x ===true)
    "no-boolean-literal-compare": true,

    // Constructor parameters are not allowed
    // "no-parameter-properties": true

    // Duplicate jsdoc is not allowed
    // no-redundant-jsdoc

    // Meaningless function calls such as x => f(x) are not allowed
    "no-unnecessary-callback-wrapper": true,

    // Initial value is not allowed to be undefined
    "no-unnecessary-initializer": true,

    // No meaningless namespaces allowed
    // "no-unnecessary-qualifier": true,

    // Force continuous string attributes not to be expressed as strings
    "object-literal-key-quotes": true,

    // Force ES6 object abbreviation
    "object-literal-shorthand": true,

    // Make sure } is on the same line as { catch else finally, whitespace
    "one-line": [true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-finally",
      "check-whitespace"
    ],

    // Only one variable can be declared at a time, multiple variables can be declared in a loop
    "one-variable-per-declaration": [
      true,
      "ignore-for-loop"
    ],

    // import {} are sorted in alphabetical order
    // "ordered-imports": true

    // This is not used in the type method, so it needs to be written outside as an additional function
    "prefer-function-over-method": true,

    // prefer foo(): void over foo: () => void in interfaces and types.
    // prefer-method-signature

    // switch > if
    // prefer-switch

    // Template strings are better
    // "prefer-template": true

    // while is better
    // prefer-while

    // return; is better than return undefined
    "return-undefined": true,

    // xxx () {} defines the space requirements before the brackets in the following methods
    "space-before-function-paren": [
      true,
      {
        "anonymous": false,
        "named": false,
        "asyncArrow": true,
        "method": false,
        "constructor": false
      }
    ],

    // No spaces are allowed between brackets
    "space-within-parens": [true, 0],
    // switch statement must end with break
    "switch-final-break": true,
    // Types must be separated by ;
    // "type-literal-delimiter": true

    // No need to bind
    // "unnecessary-bind": true,

    // If the if statement ends with a break, continue, return, or throw statement, then the else statement is not needed.
    // "unnecessary-else": true

    // Variable names cannot use any, Number, number, String, string, Boolean, boolean, Undefined, undefined
    "variable-name": [
      true,
      "ban-keywords"
    ],
  }
}