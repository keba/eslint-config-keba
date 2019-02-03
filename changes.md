# Changes

### 1.3.6
- updated node to 10.15.0 and npm to 6.4.1
- updated eslint to 5.13.0

### 1.3.5
- updated eslint to 5.9.0
- removed jsdoc related rules due to eslint deprecating them
- changed `array-element-newline` to `consistent`
- node should be version 8.11.4 or higher
- npm should be version 5.6.0 or higher

### 1.3.4
- updated eslint to 5.7.0
- added new config for `camelcase` and `no-tabs`

### 1.3.3
- updated `max-depth` to 10
- updated `eslint` to 5.3.0
- added `no-misleading-character-class` as an error condition
- added `require-atomic-updates` as an error condition
- added `no-async-promise-executor` as an error condition
- added `require-unicode-regexp` as an error condition
- removed `no-catch-shadow` as it was deprecated in 5.1.0

### 1.3.2
- removed `eslint-plugin-html` and `eslint-plugin-vue` - they are added only when needed in individual projects
- updated `eslint` to 5.2.0
- updated `npm run eslint` and `npm run eslint-fix` commands

### 1.3.1
- added `h`, `x`, `y`, `to` and `el` to `id-length`
- updated `id-match` to fit the new one character variable exceptions
- `no-console` is now set to warn rather than error
- updated babel-eslint to v8.2.6
- updated eslint to 5.1.0
- added dependencies for html and vue plugins

### 1.3.0
- renamed eslint config package name to `eslint-config-keba` from `eslint-config-keba-web`
- updated `eslint` to 5.0.1
- added `max-classes-per-file`
- changed `no-unused-vars` to error
- added `max-lines-per-function` set to 200
- added `prefer-object-spread`
- updated globals to include `worker`, `mocha` and `protractor`
- updated LICENSE to current year
- updated README.md for new repo name
- updated npm test command
- updated `test.js` for function name now that globals are updated
- added CircleCI config 

### 1.2.3
- `sort-imports` now off
- fixed eslint errors caused by v1.2.2
- removed eslint-plugin-react
- added array examples to test.js

### 1.2.2
- minItems 2 for `array-element-newline`

### 1.2.1
- turned off `no-loop-func` and `function-paren-newline`

### 1.2.0
- updated to current eslint rules

### 1.1.6
- minItems 5 for `array-element-newline`

### 1.1.5
- consistency for multi-line in `object-property-newline` enabled

### 1.1.4
- turned off `indent` as it refuses to play well with WebStorm standard code style preferences

### 1.1.3
- fixed `indent` eslint setting and also exported WebStorm code style preferences which match as `webstorm-code-style-preferences.xml`
- updated `array-element-newline` to `minItems = 2`

### 1.1.2
- minItems null for array-(bracket|element)-newline

### 1.1.1
- Now compatible with the defaults for auto-formatting in IntelliJ/WebStorm.

### 1.1.0
- Updated for eslint@4.11.0

### 1.0.1
- Updated for React.

### 1.0.0
- Initial commit
