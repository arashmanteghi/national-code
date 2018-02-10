/*!
  Copyright (c) 2018 Arash Manteghi.
  Licensed under the MIT License (MIT), see
  https://github.com/arashmanteghi/national-code
*/

(function () {
  'use strict';
  function nationalCode () {
    /*
      validate input value
    */
    if (arguments.length > 1) return false;
    if (typeof arguments[0] === 'undefined') {
      console.error('nationalCode method needs input value');
      return false;
    }
    if (typeof arguments[0] !== 'number' && typeof arguments[0] !== 'string') {
      console.error('nationalCode method needs string or number input value');
      return false;
    }
    if (typeof arguments[0] === 'number') {
      arguments[0] = arguments[0].toString();
    }
    if (arguments[0].length !== 10) {
      console.error('input is not 10 digit: ', arguments[0].length);
      return false;
    }

    const inputValue = arguments[0];
    let intCode = [];
    let counter = 0;

    /*
      normalize input number to start calculating
      input number starts from index 1 reversely
    */
    for (let $i = 9; $i >= 0; $i--) {
      intCode[++counter] = parseInt(inputValue[$i]);
    }

  }

  if (typeof module !== 'undefined' && module.exports) {
    nationalCode.default = nationalCode;
    module.exports = nationalCode;
  } else if (typeof define === 'function' && typeof window.define.amd === 'object' && window.define.amd) {
    // register as 'nationalCode', consistent with npm package name
    window.define('nationalCode', [], function () {
      return nationalCode;
    });
  } else {
    window.nationalCode = nationalCode;
  }
}());
