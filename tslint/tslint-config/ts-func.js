module.exports = {
  "rules": {
    // await will not work on functions that do not return promises
    "await-promise": true,
    // not allowed, operator(a, b) returns a
    "ban-comma-operator": true,

    // Disable the use of specific functions or global methods
    // "ban": [
    //   true,
    //   "eval",
    //   {"name": "$", "message": "please don't"},
    //   ["describe", "only"],
    //   {"name": ["it", "only"], "message": "don't focus tests"},
    //   {
    //     "name": ["chai", "assert", "equal"],
    //     "message": "Use 'strictEqual' instead."
    //   },
    //   {"name": ["*", "forEach"], "message": "Use a regular for loop instead."},
    //   {"name": ["*", "_id", "toString"], "message": "Use 'toHexString' instead."}
    // ]

    // Enforce the use of curly braces in if/for/do/while statements
    // "curly": true

    // Force the use of if in for in
    // "forin": true,

    // Disable the use of Function constructor
    // function-constructor

    // Disable the import of specific libraries
    // import-blacklist : [true, 'lodash']

    // label can only be used in do/for/while/switch expressions.
    // label-position

    // Disable the use of arguments.callee
    "no-arg": true,

    // Disable bitwise operations
    // "no-bitwise": true

    // Do not use assignment statements in do-while, for, if, while and ternary operators
    "no-conditional-assignment": true,

    // The following console methods are prohibited
    "no-console": [true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],

    // Disable the use of String, Number, and Boolean constructors
    "no-construct": true,

    // Disable the use of debugger
    "no-debugger": true,
    // Do not use duplicate super()
    "no-duplicate-super": true,
    //Disable repeated cases in switch
    "no-duplicate-switch-case": true,
    // Duplicate variable declarations are not allowed within a block. Only works when declared as var
    "no-duplicate-variable": true,

    /**
     * Do not use delete to delete dynamic keys, such as
     * has a='b'
     * var c = {b: 3}
     * delete c[a] is not allowed
     */
    "no-dynamic-delete": true,
    // Block is not allowed to be empty, but catch function can be empty
    "no-empty": [true, "allow-empty-catch", "allow-empty-functions"],
    "no-eval": true, // do not allow eval()
    // It is not allowed to create a promise in a function but not handle it
    // "no-floating-promises": true

    // You cannot use for in to traverse an array
    // "no-for-in-array": true

    // Only dependencies listed in packagejson can be used
    "no-implicit-dependencies": true,

    /**
     * class Foo<T> {
          bar(item: T): void {
              console.log('typeof T: ', typeof item)
          }
        }
        const foo2 = new Foo() // will be wrong
     */
    "no-inferred-empty-object-type": true,

    // Using ${ in a non-template string will result in an error
    // "no-invalid-template-strings": true

    // Do not use this outside of the class
    "no-invalid-this": true,

    // It is forbidden to directly define the constructor new function
    // "no-misused-new": true,

    // Cannot use null, use undefined instead
    "no-null-keyword": true,

    // Cannot use null|undefined to declare
    // "no-null-undefined-union": true

    // It is forbidden to use as xxx in type declaration except as any, as unknown
    // "no-object-literal-type-assertion": true

    // Disable the use of global names, prefer specific projects
    // no-restricted-globals

    //Cannot use return await
    "no-return-await": true,

    /**
     * const a = 'no shadow';
        function print() {
            const a = 'shadow'; // TSLint will complain here.
            console.log(a);
        }
        print(); // logs 'shadow'.
     */
    "no-shadowed-variable": true,

    // Explicit declaration of discrete arrays is prohibited
    "no-sparse-arrays": true,
    // Disallow unnecessary object attribute key values     to be strings object['a'] This will be rewritten as object.a
    "no-string-literal": true,

    // You can't throw a string directly
    // "no-string-throw": true,

    // Specific submodules in dependent packages cannot be introduced
    // "no-submodule-imports": true

    // Disable switch case without return statement
    "no-switch-case-fall-through": true,
    // Disable the same expression comparison 'a' === 'a'
    "no-tautology-expression": true,
    // It is forbidden to assign properties to this except for self and destructuring assignment
    "no-this-assignment":
      [
        true,
        {
          "allowed-names": ["^self$"],
          "allow-destructuring": true
        }
      ],

    /**
     * Class methods will not automatically bind methods to the class, for example
     * class a{
     *  public b(){
     *    console.log(this);
     *  }
     * }
     *
     * new a().b() // window or global
     *
     * So you must bind this
     * class a{
     *  public b : () => {
     *    console.log(this)
     *  }
     * }
     *
     * ignore-static means no static requirements
     * */
    "no-unbound-method": [true, "ignore-static"],

    // Unnecessary custom classes are not allowed
    // "no-unnecessary-class": true

    // TODO not allowed? ?
    // "no-unsafe-any": true

    // Do not allow return, continue, break and throws in finally blocks
    "no-unsafe-finally": true,

    // Statements that do not assign values   or call functions are not allowed, but quick null value checks are allowed, such as a && a(), object creation new a()
    "no-unused-expression": [ true, 'allow-fast-null-checks', 'allow-new'],

    // Unused imports, variables, functions and private member functions are not allowed
    // "no-unused-variable": true

    // Mainly to limit the location where var appears
    // "no-use-before-declare": true

    // Cannot use var
    "no-var-keyword": true,

    // Explicitly write void when a declaration is required
    // no-void-expression: true,

    // const a = b && c && 'good' is better than if if if
    // "prefer-conditional-expression": true

    // Use {...xxx} instead of Object.assign
    "prefer-object-spread": true,

    // parseInt needs to indicate the decimal system when calling
    "radix": true,

    // When adding, it must be a string or a number at the same time
    // "restrict-plus-operands": true,

    // This cannot be used in static methods
    // "static-this": true,

    // Types that appear in the constraint expression
    // "strict-boolean-expressions": true

    // Warn about expressions that always return true or false
    // strict-type-predicates

    // switch must have a default
    "switch-default": true,

    // Use === !== instead of == !=, except for null checks
    "triple-equals": [true, "allow-null-check"],

    // typeof ensures that the compared strings are always correct
    "typeof-compare": true,

    // It is forbidden to write constructors that do not perform any operations
    "unnecessary-constructor": true,

    // Prohibit reassignment of the default value of this type
    // "use-default-type-parameter": true,

    // Use the isNaN() function to check for NaN instead of comparing directly
    "use-isnan": true,
  }
}