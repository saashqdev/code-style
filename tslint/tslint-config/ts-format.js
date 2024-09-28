module.exports = {
  "rules": {
    // Indent alignment
    "align": [
      true,
      "statements",
      "parameters",
      "arguments",
      "elements",
      "members"
    ],

    // Single-parameter arrow functions do not require parentheses
    "arrow-parens": [
      true, "ban-single-arg-parens"
    ],

    // The file ends with a newline character
    "eofline": true,

    // Spaces are required between import keywords
    // "import-spacing": true

    // 4 spaces indented
    "indent": [true, "spaces", 4],

    // For jsdoc
    // "jsdoc-format": true

    // Line break with \n
    "linebreak-style": [true, "LF"],
    // A line can contain up to 140 characters
    "max-line-length": [true, 140],
    // return to a new line
    // "newline-before-return": true,

    // New requires parentheses
    "new-parens": true,

    // Do not allow consecutive spaces
    "no-consecutive-blank-lines": [
      true,
      1
    ],

    // Do not allow unusual whitespace characters
    "no-irregular-whitespace": true,
    // No trailing spaces
    "no-trailing-whitespace": true,
    // .2 => 0.2
    "number-literal-format": true,

    // Force the use of single quotes. Double quotes can be used within single quotes.
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],

    // Each line ends with ;
    "semicolon": [true, "always"],
    // Each line must end with,
    "trailing-comma": [true, {
      "singleline": "never",
      "multiline": "always"
    }],

    // Space between type definitions
    "typedef-whitespace": [true, {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    }],

    // Space
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type",
      "check-type-operator",
      "check-rest-spread"
    ]
  }
}