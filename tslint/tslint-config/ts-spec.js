module.exports = {
  "rules": {
    "adjacent-overload-signatures": true,

    // Disable @ts-ignore
    // "ban-ts-ignore": true

    // Disable specific types
    // "ban-types": [true, ["Object", "Use {} instead."], ["String"]]

    // Control class attribute access
    // "member-access": [true, "no-public"],

    // Class attributes are sorted, easier to read
    "member-ordering": [
      true,
      {
        "order": [
          "public-static-field",
          "public-instance-field",
          "public-constructor",
          "private-static-field",
          "private-instance-field",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ],
        "alphabetize": true
      }
    ],
    // Cannot have any type
    // "no-any": true

    // Empty interfaces are not allowed
    "no-empty-interface": true,

    // Modules that are not exported but have an impact on the entire project cannot be imported
    // "no-import-side-effect": true

    // serverId: number = 10 Basic types that can be inferred by type do not need to be explicitly declared
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],

    // module MyModule {} In this case, use namespace instead of module
    "no-internal-module": true,

    // Only numbers can be used
    // "no-magic-numbers": [true, 1,2,3]

    // Cannot use namespace or module
    // "no-namespace": true

    // Cannot use non-null variable assertion xxxx!
    // "no-non-null-assertion" :true

    // Cannot assign values   to parameters
    // "no-parameter-reassignment": true

    // Not allowed /// <reference path=> imports
    // "no-reference": ture

    // Type declarations that do not change the representation type are not allowed
    // "no-unnecessary-type-assertion": true

    // require() is not allowed
    // "no-var-requires": true;

    // Anonymous functions only allow arrow functions allow-named-functions
    "only-arrow-functions": [
      true,
      "allow-named-functions"
    ],

    // If the sequence number has no other use for the loop, use for of
    "prefer-for-of": true,

    // The function specified by async needs to return a Promise object
    "promise-function-async": [
      true,
      "check-function-declaration", // Function declaration
      "check-function-expression", // function expression
      "check-arrow-function", // Arrow function
      "check-method-declaration" // class method declaration
    ],

    // Need the corresponding type to display the declaration definition
    "typedef": [
      true,
      "call-signature", // Check function return type
      "arrow-call-signature", // Check the return type of the arrow function
      "parameter", // Check the parameter type of non-arrow function
      "arrow-parameter", // Check the parameter type of the arrow function
      "property-declaration", //Check class property declaration
      "variable-declaration", // Check local variable declaration
      "member-variable-declaration", //Check member variable declaration
      "object-destructuring", // Check object destructuring assignment declaration
      // "array-destructuring", //Check array destructuring assignment declaration
    ],

    // If the rewritten functions can be merged into one, then alarm
    "unified-signatures": true,
  },
}