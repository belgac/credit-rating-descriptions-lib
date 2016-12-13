/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(1),
	    PRIME = _require.PRIME,
	    HIGH_GRADE = _require.HIGH_GRADE,
	    UPPER_MEDIUM_GRADE = _require.UPPER_MEDIUM_GRADE,
	    LOWER_MEDIUM_GRADE = _require.LOWER_MEDIUM_GRADE,
	    NON_INVESTMENT_GRADE_SPECULATIVE = _require.NON_INVESTMENT_GRADE_SPECULATIVE,
	    HIGHLY_SPECULATIVE = _require.HIGHLY_SPECULATIVE,
	    SUBSTANTIAL_RISKS = _require.SUBSTANTIAL_RISKS,
	    EXTREMELY_SPECULATIVE = _require.EXTREMELY_SPECULATIVE,
	    DEFAULT_IMMINENT = _require.DEFAULT_IMMINENT,
	    IN_DEFAULT = _require.IN_DEFAULT,
	    NOT_RATED = _require.NOT_RATED;

	var CREDIT_RATING_DESCRIPTION_MOODYS = {
	  Aaa: PRIME,
	  Aa1: HIGH_GRADE,
	  Aa2: HIGH_GRADE,
	  Aa3: HIGH_GRADE,
	  A1: UPPER_MEDIUM_GRADE,
	  A2: UPPER_MEDIUM_GRADE,
	  A3: UPPER_MEDIUM_GRADE,
	  Baa1: LOWER_MEDIUM_GRADE,
	  Baa2: LOWER_MEDIUM_GRADE,
	  Baa3: LOWER_MEDIUM_GRADE,
	  Ba1: NON_INVESTMENT_GRADE_SPECULATIVE,
	  Ba2: NON_INVESTMENT_GRADE_SPECULATIVE,
	  Ba3: NON_INVESTMENT_GRADE_SPECULATIVE,
	  B1: HIGHLY_SPECULATIVE,
	  B2: HIGHLY_SPECULATIVE,
	  B3: HIGHLY_SPECULATIVE,
	  Caa1: SUBSTANTIAL_RISKS,
	  Caa2: SUBSTANTIAL_RISKS,
	  Caa3: SUBSTANTIAL_RISKS,
	  Ca: EXTREMELY_SPECULATIVE,
	  C: IN_DEFAULT,
	  NR: NOT_RATED,
	  default: NOT_RATED
	};

	module.exports = CREDIT_RATING_DESCRIPTION_MOODYS;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var INVESTMENT_GRADE = 'Investment grade';
	var HIGH_YIELD = 'High-yield';

	var PRIME = {
	  description: 'Prime',
	  grade: INVESTMENT_GRADE
	};

	var HIGH_GRADE = {
	  description: 'High grade',
	  grade: INVESTMENT_GRADE
	};

	var UPPER_MEDIUM_GRADE = {
	  description: 'Upper medium grade',
	  grade: INVESTMENT_GRADE
	};

	var LOWER_MEDIUM_GRADE = {
	  description: 'Lower medium grade',
	  grade: INVESTMENT_GRADE
	};

	var NON_INVESTMENT_GRADE_SPECULATIVE = {
	  description: 'Non-investment grade speculative',
	  grade: HIGH_YIELD
	};

	var HIGHLY_SPECULATIVE = {
	  description: 'Highly speculative',
	  grade: HIGH_YIELD
	};

	var SUBSTANTIAL_RISKS = {
	  description: 'Substantial risks',
	  grade: HIGH_YIELD
	};

	var EXTREMELY_SPECULATIVE = {
	  description: 'Extremely speculative',
	  grade: HIGH_YIELD
	};

	var DEFAULT_IMMINENT = {
	  description: 'Default imminent',
	  grade: HIGH_YIELD
	};

	var IN_DEFAULT = {
	  description: 'In default',
	  grade: HIGH_YIELD
	};

	var NOT_RATED = {
	  description: 'Not rated',
	  grade: 'Not rated'
	};

	module.exports = {
	  INVESTMENT_GRADE: INVESTMENT_GRADE,
	  HIGH_YIELD: HIGH_YIELD,
	  PRIME: PRIME,
	  HIGH_GRADE: HIGH_GRADE,
	  UPPER_MEDIUM_GRADE: UPPER_MEDIUM_GRADE,
	  LOWER_MEDIUM_GRADE: LOWER_MEDIUM_GRADE,
	  NON_INVESTMENT_GRADE_SPECULATIVE: NON_INVESTMENT_GRADE_SPECULATIVE,
	  HIGHLY_SPECULATIVE: HIGHLY_SPECULATIVE,
	  SUBSTANTIAL_RISKS: SUBSTANTIAL_RISKS,
	  EXTREMELY_SPECULATIVE: EXTREMELY_SPECULATIVE,
	  DEFAULT_IMMINENT: DEFAULT_IMMINENT,
	  IN_DEFAULT: IN_DEFAULT,
	  NOT_RATED: NOT_RATED
	};

/***/ }
/******/ ]);