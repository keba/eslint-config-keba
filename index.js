// http://eslint.org/docs/rules/

// Rules in ESLint are grouped by category to help you understand their purpose.

// No rules are enabled by default. The `"extends": "eslint:recommended"` property in a configuration file enables rules that report common problems, which have `[recommended]` added to their comments below

// The `--fix` option on the command line automatically fixes problems (currently mostly whitespace) reported by rules which have `[fixable]` added to their comments below

module.exports = {
    parser: 'babel-eslint',
    rules: {
        // Possible Errors
        // These rules relate to possible syntax or logic errors in JavaScript code
        'for-direction': [
            // enforce "for" loop update clause moving the counter in the right direction
            'error'
        ],
        'getter-return': [
            // enforces that a return statement is present in property getters
            'error',
            {
                allowImplicit: false
            }
        ],
        'no-await-in-loop': [
            // disallow `await` inside of loops
            'off'
        ],
        'no-compare-neg-zero': [
            // disallow comparing against -0
            'error'
        ],
        'no-cond-assign': [
            // disallow assignment operators in conditional expressions [recommended, fixable]
            'error',
            'except-parens'
        ],
        'no-console': [
            // disallow use of `console` [recommended]
            'warn'
        ],
        'no-constant-condition': [
            // disallow use of constant expressions in conditions [recommended]
            'error'
        ],
        'no-control-regex': [
            // disallow control characters in regular expressions [recommended]
            'error'
        ],
        'no-debugger': [
            // disallow use of `debugger` [recommended]
            'error'
        ],
        'no-dupe-args': [
            // disallow duplicate arguments in `function` definitions [recommended]
            'error'
        ],
        'no-dupe-keys': [
            // disallow duplicate keys when creating object literals [recommended]
            'error'
        ],
        'no-duplicate-case': [
            // disallow a duplicate case labels [recommended]
            'error'
        ],
        'no-empty': [
            // disallow empty block statements [recommended]
            'error'
        ],
        'no-empty-character-class': [
            // disallow disallow the use of empty character classes in regular expressions [recommended]
            'error'
        ],
        'no-ex-assign': [
            // disallow reassigning exceptions in `catch` clauses [recommended]
            'error'
        ],
        'no-extra-boolean-cast': [
            // disallow unnecessary boolean casts [recommended]
            'error'
        ],
        'no-extra-parens': [
            // disallow unnecessary parentheses
            'error',
            'all'
        ],
        'no-extra-semi': [
            // disallow unnecessary semicolons [recommended, fixable]
            'error'
        ],
        'no-func-assign': [
            // disallow reassigning `function` declarations [recommended]
            'error'
        ],
        'no-inner-declarations': [
            // disallow `function` or `var` declarations in nested blocks [recommended]
            'error',
            'functions'
        ],
        'no-invalid-regexp': [
            // disallow invalid regular expression strings in `RegExp` constructors [recommended]
            'error'
        ],
        'no-irregular-whitespace': [
            // disallow irregular whitespace outside of strings and comments [recommended]
            'error'
        ],
        'no-obj-calls': [
            // disallow calling global object properties as functions [recommended]
            'error'
        ],
        'no-prototype-builtins': [
            // Disallow use of `Object.prototypes` builtins directly
            'error'
        ],
        'no-regex-spaces': [
            // disallow multiple spaces in a regular expression literal [recommended]
            'error'
        ],
        'no-sparse-arrays': [
            // disallow sparse arrays [recommended]
            'error'
        ],
        'no-template-curly-in-string': [
            // disallow template literal placeholder syntax in regular strings
            'error'
        ],
        'no-unexpected-multiline': [
            // disallow confusing multi-line expressions [recommended]
            'error'
        ],
        'no-unreachable': [
            // disallow unreachable code after `return`, `throw`, `continue`, and `break` statement [recommended]
            'error'
        ],
        'no-unsafe-finally': [
            // disallow control flow statements in finally blocks
            'error'
        ],
        'no-unsafe-negation': [
            // disallow negating the left operand of relational operators [recommended], [fixable]
            'error'
        ],
        'use-isnan': [
            // require calls to `isNaN()` when checking for `NaN`
            'error'
        ],
        'valid-typeof': [
            // enforce comparing `typeof` expressions against valid strings [recommended]
            'error'
        ],

        // Best Practices
        // These rules relate to better ways of doing things to help you avoid problems
        'accessor-pairs': [
            // Enforces getter and setter pairs in objects
            'error',
            {
                getWithoutSet: true,
                setWithoutGet: true
            }
        ],
        'array-callback-return': [
            // enforce `return` statements in callbacks of array methods
            'error',
            {
                allowImplicit: false
            }
        ],
        'block-scoped-var': [
            // enforce the use of variables within the scope they are defined
            'error'
        ],
        'class-methods-use-this': [
            // enforce that class methods utilize `this`
            'error',
            {
                exceptMethods: []
            }
        ],
        complexity: [
            // enforce a maximum cyclomatic complexity allowed in a program
            'off',
            10
        ],
        'consistent-return': [
            // require `return` statements to either always or never specify values
            'off'
        ],
        curly: [
            // enforce consistent brace style for all control statements
            'error',
            'all'
        ],
        'default-case': [
            // require `default` case in `switch` statements
            'error'
        ],
        'dot-location': [
            // enforce consistent newlines before and after dots
            'error',
            'property'
        ],
        'dot-notation': [
            // enforce dot notation whenever possible
            'error',
            {
                allowKeywords: true,
                allowPattern: '^[a-z]+(_[a-z]+)+$'
            }
        ],
        eqeqeq: [
            // require the use of `===` and `!==`
            'error',
            'smart'
        ],
        'guard-for-in': [
            // require `for-in` loops to include an `if` statement
            'error'
        ],
        'max-classes-per-file': [
            // enforce a maximum number of classes per file
            'error',
            1
        ],
        'no-alert': [
            // disallow the use of `alert`, `confirm`, and `prompt`
            'error'
        ],
        'no-caller': [
            // disallow the use of `arguments.caller` or `arguments.callee`
            'error'
        ],
        'no-case-declarations': [
            // disallow lexical declarations in case clauses [recommended]
            'error'
        ],
        'no-div-regex': [
            // disallow division operators explicitly at beginning of regular expression
            'error'
        ],
        'no-else-return': [
            // disallow `else` blocks after `return` in `if` statements
            'error'
        ],
        'no-empty-function': [
            // disallow empty functions
            'error',
            {
                allow: []
            }
        ],
        'no-empty-pattern': [
            // disallow empty destructuring patterns [recommended]
            'error'
        ],
        'no-eq-null': [
            // disallow `null` comparisons without type-checking operators
            'error'
        ],
        'no-eval': [
            // disallow the use of `eval()`
            'error',
            {
                allowIndirect: false
            }
        ],
        'no-extend-native': [
            // disallow extending native types
            'error',
            {
                exceptions: []
            }
        ],
        'no-extra-bind': [
            // disallow unnecessary calls to `.bind()`
            'error'
        ],
        'no-extra-label': [
            // disallow unnecessary labels
            'error'
        ],
        'no-fallthrough': [
            // disallow fallthrough of `case` statements [recommended]
            'error'
        ],
        'no-floating-decimal': [
            // disallow use of leading or trailing decimal points in numeric literals
            'error'
        ],
        'no-global-assign': [
            // disallow assignment to native objects or read-only global variables
            'error',
            {
                exceptions: []
            }
        ],
        'no-implicit-coercion': [
            // disallow shorthand type conversions
            'error',
            {
                'boolean': true,
                number: true,
                string: true,
                allow: []
            }
        ],
        'no-implicit-globals': [
            // disallow `var` and named `functions` in the global scope
            'error'
        ],
        'no-implied-eval': [
            // disallow use of `eval()`-like methods
            'error'
        ],
        'no-invalid-this': [
            // disallow `this` keywords outside of classes or class-like objects
            'error'
        ],
        'no-iterator': [
            // disallow usage of `__iterator__` property
            'error'
        ],
        'no-labels': [
            // disallow labeled statements
            'error',
            {
                allowLoop: false,
                allowSwitch: false
            }
        ],
        'no-lone-blocks': [
            // disallow unnecessary nested blocks
            'error'
        ],
        'no-loop-func': [
            // disallow `function` declarations and expressions inside loop statements
            'off'
        ],
        'no-magic-numbers': [
            // disallow magic numbers
            'off',
            {
                ignore: [],
                ignoreArrayIndexes: false,
                enforceConst: false,
                detectObjects: false
            }
        ],
        'no-multi-spaces': [
            // disallow multiple spaces [fixable]
            'error',
            {
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: false,
                    ImportDeclaration: false
                }
            }
        ],
        'no-multi-str': [
            // disallow multi-line strings
            'error'
        ],
        'no-new': [
            // disallow `new` operators outside of assignments or comparisons
            'error'
        ],
        'no-new-func': [
            // disallow `new` operators with the `Function` object
            'error'
        ],
        'no-new-wrappers': [
            // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
            'error'
        ],
        'no-octal': [
            // disallow octal literals [recommended]
            'error'
        ],
        'no-octal-escape': [
            // disallow octal escape sequences in string literals`
            'error'
        ],
        'no-param-reassign': [
            // disallow reassigning `function` parameters
            'off',
            {
                props: false
            }
        ],
        'no-proto': [
            // disallow usage of `__proto__` property
            'error'
        ],
        'no-redeclare': [
            // disallow `var` redeclaration [recommended]
            'error',
            {
                builtinGlobals: true
            }
        ],
        'no-restricted-properties': [
            // disallow certain object properties
            'error',
            {
                object: 'disallowedObjectName',
                property: 'disallowedPropertyName',
                message: 'do not use disallowedObjectName.disallowedPropertyName'
            }
        ],
        'no-return-assign': [
            // disallow assignment operators in `return` statements
            'error',
            'always'
        ],
        'no-return-await': [
            // disallows unnecessary `return await`
            'off'
        ],
        'no-script-url': [
            // disallow `javascript:` urls
            'error'
        ],
        'no-self-assign': [
            // disallow assignments where both sides are exactly the same [recommended]
            'error'
        ],
        'no-self-compare': [
            // disallow comparisons where both sides are exactly the same
            'error'
        ],
        'no-sequences': [
            // disallow comma operators
            'error'
        ],
        'no-throw-literal': [
            // disallow throwing literals as exceptions
            'error'
        ],
        'no-unmodified-loop-condition': [
            // disallow unmodified loop conditions
            'error'
        ],
        'no-unused-expressions': [
            // disallow unused expressions
            'error',
            {
                allowShortCircuit: false,
                allowTernary: false
            }
        ],
        'no-unused-labels': [
            // disallow unused labels [recommended]
            'error'
        ],
        'no-useless-call': [
            // disallow unnecessary calls to `.call()` and `.apply()`
            'error'
        ],
        'no-useless-concat': [
            // disallow unnecessary concatenation of literals or template literals
            'error'
        ],
        'no-useless-escape': [
            // disallow unnecessary escape characters
            'error'
        ],
        'no-useless-return': [
            // disallow redundant return statements
            'error'
        ],
        'no-void': [
            // disallow void operators
            'error'
        ],
        'no-warning-comments': [
            // disallow specified warning terms in comments
            'warn',
            {
                terms: ['todo'],
                location: 'anywhere'
            }
        ],
        'no-with': [
            // disallow `with` statements
            'error'
        ],
        'prefer-promise-reject-errors': [
            // require using Error objects as Promise rejection reasons
            'error',
            {
                allowEmptyReject: false
            }
        ],
        radix: [
            // enforce the consistent use of the radix argument when using `parseInt()`
            'error',
            'as-needed'
        ],
        'require-await': [
            // disallow async functions which have no `await`
            'error'
        ],
        'vars-on-top': [
            // requires `var` declarations to be placed at the top of their containing scope
            'off'
        ],
        'wrap-iife': [
            // require parentheses around immediate `function` invocations
            'error',
            'any'
        ],
        yoda: [
            // require or disallow "Yoda" conditions
            'error',
            'never',
            {
                exceptRange: true,
                onlyEquality: false
            }
        ],

        // Strict Mode
        // These rules relate to strict mode directives
        strict: [
            // require or disallow strict mode directives
            'error',
            'safe'
        ],

        // Variables
        // These rules relate to variable declarations
        'init-declarations': [
            // enforce or disallow initializations in `var` declarations
            'error',
            'always'
        ],
        'no-delete-var': [
            // disallow deleting variables [recommended]
            'error'
        ],
        'no-label-var': [
            // disallow labels that share a name with a variable
            'error'
        ],
        'no-restricted-globals': [
            // disallow specified global variables
            'error',
            'alphabetSoup'
        ],
        'no-shadow': [
            // disallow `var` declarations from shadowing variables in the outer scope
            'error',
            {
                builtinGlobals: true,
                hoist: 'all',
                allow: []
            }
        ],
        'no-shadow-restricted-names': [
            // disallow identifiers from shadowing restricted names
            'error'
        ],
        'no-undef': [
            // disallow use of undeclared variables unless mentioned in `/*global */` comments
            'error'
        ],
        'no-undef-init': [
            // disallow initializing variables to `undefined`
            'error'
        ],
        'no-undefined': [
            // disallow use of `undefined` as an identifier
            'error'
        ],
        'no-unused-vars': [
            // disallow unused variables [recommended]
            'error',
            {
                vars: 'all',
                args: 'after-used'
            }
        ],
        'no-use-before-define': [
            // disallow use of variables before they are defined
            'error',
            {
                functions: false,
                classes: true
            }
        ],

        // Node.js and CommonJS
        // These rules relate to code running in Node.js, or in browsers with CommonJS
        'callback-return': [
            // require `return` statements after callbacks
            'error',
            [
                'callback',
                'cb',
                'next'
            ]
        ],
        'global-require': [
            // require `require()` to be placed at top-level module scope
            'error'
        ],
        'handle-callback-err': [
            // require error handling in callbacks
            'error',
            '^.*(e|E)rror$'
        ],
        'no-buffer-constructor': [
            // disallow use of the Buffer() constructor
            'error'
        ],
        'no-mixed-requires': [
            // disallow `require` calls to be mixed with regular `var` declarations
            'error',
            {
                grouping: true,
                allowCall: false
            }
        ],
        'no-new-require': [
            // disallow `new` operators with calls to `require`
            'error'
        ],
        'no-path-concat': [
            // disallow string concatenation with `__dirname` and `__filename`
            'error'
        ],
        'no-process-env': [
            // disallow the use of `process.env`
            'error'
        ],
        'no-process-exit': [
            // disallow the use of `process.exit()`
            'error'
        ],
        'no-restricted-modules': [
            // disallow specified modules when loaded by `require`
            'error',
            ''
        ],
        'no-sync': [
            // disallow synchronous methods
            'error'
        ],

        // Stylistic Issues
        // These rules relate to style guidelines, and are therefore quite subjective
        'array-bracket-newline': [
            // enforce line breaks after opening and before closing array brackets
            'error',
            {
                multiline: true,
                minItems: null
            }
        ],
        'array-bracket-spacing': [
            // enforce consistent spacing inside array brackets [fixable]
            'error',
            'never',
            {
                singleValue: false,
                objectsInArrays: false,
                arraysInArrays: false
            }
        ],
        'array-element-newline': [
            // enforce line breaks after each array element
            'error',
            'consistent'
        ],
        'block-spacing': [
            // enforce consistent spacing inside single-line blocks [fixable]
            'error',
            'always'
        ],
        'brace-style': [
            // enforce consistent brace style for blocks
            'error',
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        camelcase: [
            // enforce camelcase naming convention
            'error',
            {
                properties: 'never',
                ignoreDestructuring: false,
                allow: []
            }
        ],
        'capitalized-comments': [
            // enforce or disallow capitalization of the first letter of a comment
            'off',
            'never',
            {
                ignorePattern: '',
                ignoreInLineComments: false
            }
        ],
        'comma-dangle': [
            // require or disallow trailing commas
            'error',
            'never'
        ],
        'comma-spacing': [
            // enforce consistent spacing before and after comma [fixable]
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [
            // enforce consistent comma style
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    ObjectExpression: false,
                    VariableDeclaration: false
                }
            }
        ],
        'computed-property-spacing': [
            // enforce consistent spacing inside computed properties brackets [fixable]
            'error',
            'never'
        ],
        'consistent-this': [
            // enforces consistent naming when capturing the current execution context
            'error',
            'that'
        ],
        'eol-last': [
            // enforce at least one newline at the end of files [fixable]
            'error'
        ],
        'func-call-spacing': [
            // require or disallow spacing between function identifiers and their invocations
            'error',
            'never'
        ],
        'func-name-matching': [
            // require function names to match the name of the variable or property to which they are assigned
            'off'
        ],
        'func-names': [
            // require or disallow named function expressions
            'off'
        ],
        'func-style': [
            // enforce the consistent use of either `function` declarations or expressions
            'error',
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'function-paren-newline': [
            // enforce consistent line breaks inside function parentheses
            'off',
            {
                minItems: 8
            }
        ],
        'id-blacklist': [
            // blacklist specified identifiers
            'error',
            'err'
        ],
        'id-length': [
            // enforce minimum and maximum identifier lengths
            'error',
            {
                min: 3,
                max: 60,
                properties: 'always',
                exceptions: [
                    '_',
                    'co',
                    'el',
                    'fs',
                    'h',
                    'id',
                    'pg',
                    's3',
                    'to',
                    'x',
                    'y'
                ]
            }
        ],
        'id-match': [
            // require identifiers to match the provided regular expression
            'error',
            '^((([$A-Za-z]+)([A-Za-z0-9_-]+)*([A-Za-z0-9]))|[hxy_])$',
            {
                properties: false
            }
        ],
        'implicit-arrow-linebreak': [
            // enforce the location of arrow function bodies
            'error',
            'beside'
        ],
        indent: [
            // enforce consistent indentation [fixable]
            'off',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: {
                    'var': 1,
                    let: 1,
                    'const': 1
                },
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                },
                CallExpression: {
                    arguments: 1
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: []
            }
        ],
        'jsx-quotes': [
            // enforce the consistent use of either double or single quotes in JSX attributes [fixable]
            'error',
            'prefer-double'
        ],
        'key-spacing': [
            // enforce consistent spacing between keys and values in object literal properties [fixable]
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        'keyword-spacing': [
            // enforce consistent spacing before and after keywords [fixable]
            'error',
            {
                before: true,
                after: true
            }
        ],
        'line-comment-position': [
            // enforce position of line comments
            'off'
        ],
        'linebreak-style': [
            // enforce consistent linebreak style [fixable]
            'error',
            'unix'
        ],
        'lines-around-comment': [
            // require empty lines around comments
            'off',
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: false,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: false,
                allowObjectStart: true,
                allowObjectEnd: false,
                allowArrayStart: true,
                allowArrayEnd: false
            }
        ],
        'lines-between-class-members': [
            // require or disallow an empty line between class members
            'error',
            'always',
            {
                exceptAfterSingleLine: false
            }
        ],
        'max-depth': [
            // enforce a maximum depth that blocks can be nested
            'warn',
            10
        ],
        'max-len': [
            // enforce a maximum line length
            'error',
            220,
            4,
            {
                ignoreComments: false,
                ignoreTrailingComments: false,
                ignoreUrls: true,
                ignorePattern: '.*(SELECT .* FROM )|(INSERT INTO )|(UPDATE .* SET ).*'
            }
        ],
        'max-lines': [
            // enforce a maximum file length
            'error',
            3000
        ],
        'max-lines-per-function': [
            // enforce a maximum number of lines of code in a function
            'error',
            {
                max: 200,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true
            }
        ],
        'max-nested-callbacks': [
            // specify the maximum depth callbacks can be nested
            'error',
            7
        ],
        'max-params': [
            // enforce a maximum number of parameters in `function` definitions
            'off',
            5
        ],
        'max-statements': [
            // enforce a maximum number of statements allowed in `function` blocks
            'off',
            10,
            {
                ignoreTopLevelFunctions: true
            }
        ],
        'max-statements-per-line': [
            // enforce a maximum number of statements allowed per line
            'error',
            {
                max: 1
            }
        ],
        'multiline-comment-style': [
            // enforce a particular style for multiline comments
            'off'
        ],
        'multiline-ternary': [
            // enforce newlines between operands of ternary expressions
            'error',
            'always-multiline'
        ],
        'new-cap': [
            // require constructor `function` names to begin with a capital letter
            'error',
            {
                newIsCap: true,
                capIsNew: true,
                newIsCapExceptions: [],
                capIsNewExceptions: [
                    'Array',
                    'Boolean',
                    'Date',
                    'Error',
                    'Function',
                    'Number',
                    'Object',
                    'RegExp',
                    'String',
                    'Symbol'
                ],
                properties: true
            }
        ],
        'new-parens': [
            // require parentheses when invoking a constructor with no arguments
            'error'
        ],
        'newline-per-chained-call': [
            // require a newline after each call in a method chain
            'error',
            {
                ignoreChainWithDepth: 2
            }
        ],
        'no-array-constructor': [
            // disallow `Array` constructors
            'error'
        ],
        'no-async-promise-executor': [
            // disallow using an async function as a Promise executor
            'error'
        ],
        'no-bitwise': [
            // disallow bitwise operators
            'error',
            {
                allow: [],
                int32Hint: false
            }
        ],
        'no-continue': [
            // disallow `continue` statements
            'error'
        ],
        'no-inline-comments': [
            // disallow inline comments after code
            'error'
        ],
        'no-lonely-if': [
            // disallow `if` as the only statement in  `else` blocks
            'error'
        ],
        'no-misleading-character-class': [
            // disallow characters which are made with multiple code points in character class syntax
            'error'
        ],
        'no-mixed-operators': [
            // disallow mixes of different operators
            'error',
            {
                groups: [
                    [
                        '+',
                        '-',
                        '*',
                        '/',
                        '%',
                        '**'
                    ],
                    [
                        '&',
                        '|',
                        '^',
                        '~',
                        '<<',
                        '>>',
                        '>>>'
                    ],
                    [
                        '==',
                        '!=',
                        '===',
                        '!==',
                        '>',
                        '>=',
                        '<',
                        '<='
                    ],
                    [
                        '&&',
                        '||'
                    ],
                    [
                        'in',
                        'instanceof'
                    ]
                ],
                allowSamePrecedence: true
            }
        ],
        'no-mixed-spaces-and-tabs': [
            // disallow mixed spaces and tabs for indentation [recommended]
            'error'
        ],
        'no-multi-assign': [
            // disallow use of chained assignment expressions
            'error'
        ],
        'no-multiple-empty-lines': [
            // disallow multiple empty lines
            'error',
            {
                max: 1,
                maxEOF: 1,
                maxBOF: 0
            }
        ],
        'no-negated-condition': [
            // disallow negated conditions
            'error'
        ],
        'no-nested-ternary': [
            // disallow nested ternary expressions
            'error'
        ],
        'no-new-object': [
            // disallow `Object` constructors
            'error'
        ],
        'no-plusplus': [
            // disallow the unary operators, `++` and `--`
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-restricted-syntax': [
            // disallow specified syntax
            'off',
            'FunctionExpression',
            'WithStatement'
        ],
        'no-tabs': [
            // disallow all tabs
            'error',
            {
                allowIndentationTabs: false
            }
        ],
        'no-ternary': [
            // disallow ternary operators
            'off'
        ],
        'no-trailing-spaces': [
            // disallow trailing whitespace at the end of lines [fixable]
            'error',
            {
                skipBlankLines: false
            }
        ],
        'no-underscore-dangle': [
            // disallow dangling underscores in identifiers
            'error',
            {
                allow: [],
                allowAfterThis: false
            }
        ],
        'no-unneeded-ternary': [
            // disallow ternary operators when simpler alternatives exist
            'error',
            {
                defaultAssignment: true
            }
        ],
        'no-whitespace-before-property': [
            // disallow whitespace before properties
            'error'
        ],
        'nonblock-statement-body-position': [
            // enforce the location of single-line statements
            'off'
        ],
        'object-curly-newline': [
            // enforce consistent line breaks inside braces
            'error',
            {
                consistent: true
            }
        ],
        'object-curly-spacing': [
            // enforce consistent spacing inside braces [fixable]
            'error',
            'never',
            {
                objectsInObjects: false,
                arraysInObjects: false
            }
        ],
        'object-property-newline': [
            // enforce placing object properties on separate lines
            'error',
            {
                allowMultiplePropertiesPerLine: true
            }
        ],
        'one-var': [
            // enforce variables to be declared either together or separately in functions
            'error',
            {
                'var': 'never',
                let: 'never',
                'const': 'never',
                separateRequires: true
            }
        ],
        'one-var-declaration-per-line': [
            // require or disallow newlines around variable declarations
            'error',
            'always'
        ],
        'operator-assignment': [
            // require or disallow assignment operator shorthand where possible
            'error',
            'never'
        ],
        'operator-linebreak': [
            // enforce consistent linebreak style for operators
            'error',
            'before'
        ],
        'padded-blocks': [
            // require or disallow padding within blocks [fixable]
            'error',
            'never'
        ],
        'padding-line-between-statements': [
            // require or disallow padding lines between statements
            'off'
        ],
        'prefer-object-spread': [
            // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread
            'error'
        ],
        'quote-props': [
            // require quotes around object literal property names
            'error',
            'as-needed',
            {
                keywords: true,
                unnecessary: true,
                numbers: false
            }
        ],
        quotes: [
            // enforce the consistent use of either backticks, double, or single quotes [fixable]
            'error',
            'single',
            'avoid-escape'
        ],
        'require-atomic-updates': [
            // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
            'error'
        ],
        'require-unicode-regexp': [
            // enforce the use of `u` flag on RegExp
            'error'
        ],
        semi: [
            // require or disallow use of semicolons instead of ASI [fixable]
            'error',
            'always',
            {
                omitLastInOneLineBlock: false
            }
        ],
        'semi-spacing': [
            // enforce consistent spacing before and after semicolons [fixable]
            'error',
            {
                before: false,
                after: true
            }
        ],
        'semi-style': [
            // enforce location of semicolons
            'error',
            'last'
        ],
        'sort-keys': [
            // require object keys to be sorted
            'off'
        ],
        'sort-vars': [
            // require variables within the same declaration block to be sorted
            'off'
        ],
        'space-before-blocks': [
            // enforce consistent space before blocks [fixable]
            'error',
            {
                functions: 'always',
                keywords: 'always',
                classes: 'always'
            }
        ],
        'space-before-function-paren': [
            // enforce consistent spacing before `function` definition opening parenthesis [fixable]
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [
            // enforce consistent spacing inside parentheses [fixable]
            'error',
            'never',
            {
                exceptions: []
            }
        ],
        'space-infix-ops': [
            // require spacing around operators [fixable]
            'error',
            {
                int32Hint: false
            }
        ],
        'space-unary-ops': [
            // enforce consistent spacing before or after unary operators [fixable]
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        'spaced-comment': [
            // enforce consistent spacing after the `//` or `/*` in a comment [fixable]
            'warn',
            'always'
        ],
        'switch-colon-spacing': [
            // enforce spacing around colons of switch statements
            'error',
            {
                after: true,
                before: false
            }
        ],
        'template-tag-spacing': [
            // require or disallow spacing between template tags and their literals
            'error',
            'always'
        ],
        'unicode-bom': [
            // require or disallow the Unicode BOM [fixable]
            'error',
            'never'
        ],
        'wrap-regex': [
            // require parenthesis around regex literals
            'error'
        ],

        // ECMAScript 6
        // These rules relate to ES6, also known as ES2015
        'arrow-body-style': [
            // require braces in arrow function bodies
            'error',
            'always'
        ],
        'arrow-parens': [
            // require parentheses around arrow function arguments
            'error',
            'always'
        ],
        'arrow-spacing': [
            // enforce consistent spacing before and after the arrow in arrow functions [fixable]
            'error',
            {
                before: true,
                after: true
            }
        ],
        'constructor-super': [
            // require `super()` calls in constructors [recommended]
            'error'
        ],
        'generator-star-spacing': [
            // enforce consistent spacing around `*` operators in generator functions [fixable]
            'error',
            {
                before: false,
                after: true
            }
        ],
        'no-class-assign': [
            // disallow reassigning class members [recommended]
            'error'
        ],
        'no-confusing-arrow': [
            // disallow arrow functions where they could be confused with comparisons
            'error'
        ],
        'no-const-assign': [
            // disallow reassigning `const` variables [recommended]
            'error'
        ],
        'no-dupe-class-members': [
            // disallow duplicate class members [recommended]
            'error'
        ],
        'no-duplicate-imports': [
            // disallow duplicate module imports
            'error'
        ],
        'no-new-symbol': [
            // disallow `new` operators with the `Symbol` object [recommended]
            'error'
        ],
        'no-restricted-imports': [
            // disallow specified modules when loaded by `import`
            'error',
            'alphabetSoup'
        ],
        'no-this-before-super': [
            // disallow `this`/`super` before calling `super()` in constructors [recommended]
            'error'
        ],
        'no-useless-computed-key': [
            // disallow unnecessary computed property keys in object literals
            'error'
        ],
        'no-useless-constructor': [
            // disallow unnecessary constructor
            'error'
        ],
        'no-useless-rename': [
            // disallow renaming import, export and destructured assignments to the same name
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false
            }
        ],
        'no-var': [
            // require `let` or `const` instead of `var`
            'off'
        ],
        'object-shorthand': [
            // require or disallow method and property shorthand syntax for object literals
            'error',
            'always'
        ],
        'prefer-arrow-callback': [
            // require arrow functions as callbacks
            'off',
            {
                allowNamedFunctions: true,
                allowUnboundThis: false
            }
        ],
        'prefer-const': [
            // require `const` declaration for variables that are never reassigned after declared
            'off'
        ],
        'prefer-destructuring': [
            // require destructuring from arrays and/or objects [fixable]
            'off'
        ],
        'prefer-named-capture-group': [
            // Suggest using named capture group in regular expression
            'error'
        ],
        'prefer-numeric-literals': [
            // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
            'error'
        ],
        'prefer-rest-params': [
            // require rest parameters instead of `arguments`
            'error'
        ],
        'prefer-spread': [
            // require spread operators instead of `.apply()`
            'error'
        ],
        'prefer-template': [
            // require template literals instead of strings concatenation
            'off'
        ],
        'require-yield': [
            // require generator functions to contain `yield`
            'error'
        ],
        'rest-spread-spacing': [
            // enforce spacing between rest and spread operators and their expressions [fixable]
            'error',
            'never'
        ],
        'sort-imports': [
            // enforce sorted import declarations within modules
            'off',
            {
                ignoreCase: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [
                    'none',
                    'all',
                    'multiple',
                    'single'
                ]
            }
        ],
        'symbol-description': [
            // require symbol description
            'error'
        ],
        'template-curly-spacing': [
            // require or disallow spacing around embedded expressions of template strings [fixable]
            'error',
            'never'
        ],
        'yield-star-spacing': [
            // require or disallow spacing around the `*` in `yield*` expressions [fixable]
            'error',
            {
                before: true,
                after: false
            }
        ]
    },

    env: {
        browser: true,
        // browser global variables.
        node: true,
        // Node.js global variables and Node.js-specific rules.
        commonjs: false,
        // CommonJS global variables and CommonJS scoping (use this for browser-only code that users Browserify/WebPack).
        'shared-node-browser': true,
        // Globals common to both Node and Browser
        es6: true,
        // enable all ECMAScript 6 features except for modules.
        worker: true,
        // web workers global variables
        amd: false,
        // defines `require()` and `define()` as global variables as per the amd spec.
        mocha: true,
        // adds all of the Mocha testing global variables.
        jasmine: false,
        // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        jest: false,
        // Jest global variables
        phantomjs: false,
        // phantomjs global variables.
        protractor: true,
        // Protractor global variables.
        qunit: false,
        // QUnit global variables.
        jquery: false,
        // jquery global variables.
        prototypejs: false,
        // prototypejs global variables.
        shelljs: false,
        // shelljs global variables.
        meteor: false,
        // Meteor global variables.
        mongo: false,
        // MongoDB global variables.
        applescript: false,
        // AppleScript global variables.
        nashorn: false,
        // Java 8 Nashorn global variables.
        serviceworker: false,
        // Service Worker global variables.
        atomtest: false,
        // Atom test helper globals.
        embertest: false,
        // Ember tests helper globals.
        webextensions: false,
        // WebExtensions globals.
        greasemonkey: false
        // GreaseMonkey globals.
    },
    globals: {},
    plugins: []
};
