# Modern React Template
A light-weight yet inclusive react web application template.

### Structure
The following tree shows the detail of the `src` folder and a brief explanation
* `actions`  contains all the custom redux actions
   * `axios` configuration for networking
   * `store` configurations for redux storage
* `assets` includes images
* `components` includes all the reusable components
* `containers` typically includes all the page components used as routes
* `configs` all the scripts for configuration
* `reducers` redux reducers defined here
* `styles` all the styles must go here

### Features
Here is a summary of implemented features
##### Transpiler
* [@Babel/core](https://github.com/babel/babel/tree/master/packages/babel-core) is used as the compiler with the following plugins
* @babel/preset-react for transpiling JSX syntax
* @babel/plugin-proposal-decorators to support decorating classes
* @babel/plugin-proposal-optional-chaining an experimental plugin for safe null checking:
```const  page = book?.page```
* @babel/plugin-syntax-dynamic-import to support code-splitting

##### Bundler
Webpack 4 and webpack-dev-server

##### Redux state management
redux-thunk as middleware

##### Style
Supports importing scss files

##### ESLint
eslint:recommended and react/recommended