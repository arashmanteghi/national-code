# National Code

Simple library to validate Iranian national code.



## Install

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install national-code --save
```


Yarn (note that `yarn add` automatically saves the package to the `dependencies` in `package.json`):
```sh
yarn add national-code
```



## Usage

```js
import nationalCode from 'natioanl-code';
nationalCode(4839941637); // => true
nationalCode(4839941638); // => false
nationalCode('4839941637'); // => true
nationalCode('4839941638'); // => false
nationalCode('2222222222'); // => false
nationalCode(3333333333); // => false
```

or:


```js
var nationalCode = require('national-code');
nationalCode('4839941637'); // => true
```



## Lunch demo as indepented project

1. `git clone https://github.com/arashmanteghi/national-code.git`
2. Run `npm install`
3. Start the http-server using `npm start`
3. Open [http://localhost:9000](http://localhost:9000)



## Commands

- `npm start` - start the http-server
- `npm run build` - build as production
- `npm run lint` - run an ESLint check
- `npm run coverage` - run code coverage and generate report in the `coverage` folder
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode



## Licence
_national-code_ is available under MIT.
