# Changes

### 1.3.1
- added `h`, `x`, `y`, `id`, to` and `el` to `id-length`
- updated `id-match` to fit the new one character variable exceptions
- `no-console` is now set to warn rather than error
- updated babel-eslint to v8.2.6
- updated eslint to 5.1.0
- added dependencies for html and vue plugins

### 1.3.0
- renamed config to `eslint-config-keba` from `eslint-config-keba-web`
- updated eslint to 5.0.1
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
