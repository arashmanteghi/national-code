'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2018 Arash Manteghi.
  Licensed under the MIT License (MIT), see
  https://github.com/arashmanteghi/national-code
*/

(function () {
  'use strict';

  function nationalCode() {
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

    var inputValue = arguments[0];
    var intCode = [];
    var counter = 0;
    var sum = 0;
    var hasSameNumber = true;

    /*
      normalize input number to start calculating.
      input number starts from index 1 reversely.
    */
    for (var $i = 9; $i >= 0; $i--) {
      intCode[++counter] = parseInt(inputValue[$i]);
    }

    /*
      Check input value has same number or not
    */
    for (var _$i = 2; _$i <= 10; _$i++) {
      if (intCode[1] !== intCode[_$i]) {
        hasSameNumber = false;
        break;
      }
    }

    /*
      Calculate sum of digits after multiplication
    */
    for (var _$i2 = 2; _$i2 <= 10; _$i2++) {
      sum = sum + intCode[_$i2] * _$i2;
    }

    /*
      Check if national code is valid or not
    */
    var leftOver = sum % 11;
    if (leftOver >= 2 && 11 - leftOver === intCode[1] && !hasSameNumber || leftOver < 2 && leftOver === intCode[1] && !hasSameNumber) {
      return true;
    } else {
      return false;
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    nationalCode.default = nationalCode;
    module.exports = nationalCode;
  } else if (typeof window.define === 'function' && _typeof(window.define.amd) === 'object' && window.define.amd) {
    // register as 'nationalCode', consistent with npm package name
    window.define('nationalCode', [], function () {
      return nationalCode;
    });
  } else {
    window.nationalCode = nationalCode;
  }
})();