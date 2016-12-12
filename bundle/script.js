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

	const getDescriptions = __webpack_require__(1);

	const submitButton = document.getElementById('submit');

	submitButton.onclick = function() {
	  const rating = document.getElementById('rating').value;
	  const agency = document.getElementById('rating-agency').value;
	  const fullDescription = getDescriptions.getFullDescription(rating, agency);
	  const detailedDescription = getDescriptions.getDetailedDescription(rating, agency);
	  const gradeDescription = getDescriptions.getGradeDescription(rating, agency)
	  console.log(detailedDescription)
	  document.getElementById('result').innerHTML = `
	<h2> Result </h2>
	<div>
	  <h3> .getFullDescription() </h3>
	  <p>
	    <b>description:</b>
	    ${fullDescription.description}
	  </p>
	  <p>
	    <b>grade:</b>
	    ${fullDescription.grade}
	  </p>
	</div>
	<div>
	  <h3> .getDetailedDescription() </h3>
	  <p>
	    ${detailedDescription}
	  </p>
	</div>
	<div>
	  <h3> .getGradeDescription() </h3>
	  <p>
	    ${gradeDescription}
	  </p>
	</div>
	`;
	}



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const setCreditRatingDescriptionBigThree = __webpack_require__(2);
	const getCreditRatingDescriptionsBigThree = setCreditRatingDescriptionBigThree(__webpack_require__(11));

	module.exports = getCreditRatingDescriptionsBigThree;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const setCreditRatingDescriptionSP = __webpack_require__(3);
	const setCreditRatingDescriptionMoodys = __webpack_require__(7);
	const setCreditRatingDescriptionFitch = __webpack_require__(9);

	module.exports = setCreditRatingDescriptionBigThree;

	function setCreditRatingDescriptionBigThree (creditRatingDescriptionsGetter) {
	  return setCreditRatingDescriptionFitch(setCreditRatingDescriptionMoodys(setCreditRatingDescriptionSP(creditRatingDescriptionsGetter)));
	}



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const CREDIT_RATING_DESCRIPTION_SP = __webpack_require__(4);

	function setCreditRatingDescriptionSP (creditRatingDescriptionsGetter, name) {
	  creditRatingDescriptionsGetter.setRatingAgencyData(name || "S&P", CREDIT_RATING_DESCRIPTION_SP);
	  return creditRatingDescriptionsGetter;
	}

	module.exports = setCreditRatingDescriptionSP;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const CLASSIC_SCALE = __webpack_require__(5);
	const {
	  IN_DEFAULT,
	  NOT_RATED,
	} = __webpack_require__(6);

	const CREDIT_RATING_DESCRIPTION_SP = Object.assign({
	  RD: IN_DEFAULT,
	  SD: IN_DEFAULT,
	  default: NOT_RATED
	}, CLASSIC_SCALE);

	module.exports = CREDIT_RATING_DESCRIPTION_SP;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const {
	  PRIME,
	  HIGH_GRADE,
	  UPPER_MEDIUM_GRADE,
	  LOWER_MEDIUM_GRADE,
	  NON_INVESTMENT_GRADE_SPECULATIVE,
	  HIGHLY_SPECULATIVE,
	  SUBSTANTIAL_RISKS,
	  EXTREMELY_SPECULATIVE,
	  DEFAULT_IMMINENT,
	  IN_DEFAULT,
	  NOT_RATED,
	} = __webpack_require__(6);

	const STANDARD_SCALE = {
	  AAA: PRIME,
	  'AA+': HIGH_GRADE,
	  AA: HIGH_GRADE,
	  'AA-': HIGH_GRADE,
	  'A+': UPPER_MEDIUM_GRADE,
	   A: UPPER_MEDIUM_GRADE,
	  'A-': UPPER_MEDIUM_GRADE,
	  'BBB+': LOWER_MEDIUM_GRADE,
	  BBB: LOWER_MEDIUM_GRADE,
	  'BBB-': LOWER_MEDIUM_GRADE,
	  'BB+': NON_INVESTMENT_GRADE_SPECULATIVE,
	  BB: NON_INVESTMENT_GRADE_SPECULATIVE,
	  'BB-': NON_INVESTMENT_GRADE_SPECULATIVE,
	  'B+': HIGHLY_SPECULATIVE,
	  B: HIGHLY_SPECULATIVE,
	  'B-': HIGHLY_SPECULATIVE,
	  'CCC+': SUBSTANTIAL_RISKS,
	  CCC: SUBSTANTIAL_RISKS,
	  'CCC-': SUBSTANTIAL_RISKS,
	  CC: EXTREMELY_SPECULATIVE,
	  C: DEFAULT_IMMINENT,
	  D: IN_DEFAULT,
	  NR: NOT_RATED,
	  default: NOT_RATED,
	};

	module.exports = STANDARD_SCALE;


/***/ },
/* 6 */
/***/ function(module, exports) {

	const INVESTMENT_GRADE = 'Investment grade';
	const HIGH_YIELD = 'High-yield'

	const PRIME = {
	  description: 'Prime',
	  grade: INVESTMENT_GRADE
	}

	const HIGH_GRADE = {
	  description: 'High grade',
	  grade: INVESTMENT_GRADE,
	}

	const UPPER_MEDIUM_GRADE = {
	  description: 'Upper medium grade',
	  grade: INVESTMENT_GRADE,
	}

	const LOWER_MEDIUM_GRADE = {
	  description: 'Lower medium grade',
	  grade: INVESTMENT_GRADE,
	}

	const NON_INVESTMENT_GRADE_SPECULATIVE = {
	  description: 'Non-investment grade speculative',
	  grade: HIGH_YIELD,
	}

	const HIGHLY_SPECULATIVE = {
	  description: 'Highly speculative',
	  grade: HIGH_YIELD,
	}

	const SUBSTANTIAL_RISKS = {
	  description: 'Substantial risks',
	  grade: HIGH_YIELD,
	}

	const EXTREMELY_SPECULATIVE = {
	  description: 'Extremely speculative',
	  grade: HIGH_YIELD
	}

	const DEFAULT_IMMINENT = {
	  description: 'Default imminent',
	  grade: HIGH_YIELD,
	}

	const IN_DEFAULT = {
	  description: 'In default',
	  grade: HIGH_YIELD
	}

	const NOT_RATED = {
	  description: 'Not rated',
	  grade: 'Not rated',
	}

	module.exports = {
	  INVESTMENT_GRADE,
	  HIGH_YIELD,
	  PRIME,
	  HIGH_GRADE,
	  UPPER_MEDIUM_GRADE,
	  LOWER_MEDIUM_GRADE,
	  NON_INVESTMENT_GRADE_SPECULATIVE,
	  HIGHLY_SPECULATIVE,
	  SUBSTANTIAL_RISKS,
	  EXTREMELY_SPECULATIVE,
	  DEFAULT_IMMINENT,
	  IN_DEFAULT,
	  NOT_RATED,
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const CREDIT_RATING_DESCRIPTION_MOODYS = __webpack_require__(8);

	module.exports = setCreditRatingDescriptionMoodys;

	function setCreditRatingDescriptionMoodys (creditRatingDescriptionsGetter, name) {
	  creditRatingDescriptionsGetter.setRatingAgencyData(name || "Moody's", CREDIT_RATING_DESCRIPTION_MOODYS);
	  return creditRatingDescriptionsGetter;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const {
	  PRIME,
	  HIGH_GRADE,
	  UPPER_MEDIUM_GRADE,
	  LOWER_MEDIUM_GRADE,
	  NON_INVESTMENT_GRADE_SPECULATIVE,
	  HIGHLY_SPECULATIVE,
	  SUBSTANTIAL_RISKS,
	  EXTREMELY_SPECULATIVE,
	  DEFAULT_IMMINENT,
	  IN_DEFAULT,
	  NOT_RATED,
	} = __webpack_require__(6);

	const CREDIT_RATING_DESCRIPTION_MOODYS ={
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
	  default: NOT_RATED,
	}

	module.exports = CREDIT_RATING_DESCRIPTION_MOODYS;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	const CREDIT_RATING_DESCRIPTION_FITCH = __webpack_require__(10);

	module.exports = setCreditRatingDescriptionFitch;

	function setCreditRatingDescriptionFitch (creditRatingDescriptionsGetter, name) {
	  creditRatingDescriptionsGetter.setRatingAgencyData(name || "Fitch", CREDIT_RATING_DESCRIPTION_FITCH);
	  return creditRatingDescriptionsGetter;
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	const CLASSIC_SCALE = __webpack_require__(5);
	const {
	  IN_DEFAULT,
	  NOT_RATED,
	} = __webpack_require__(6);

	const CREDIT_RATING_DESCRIPTION_FITCH = Object.assign({
	  DDD: IN_DEFAULT,
	  DD: IN_DEFAULT,
	  default: NOT_RATED
	}, CLASSIC_SCALE);

	module.exports = CREDIT_RATING_DESCRIPTION_FITCH;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  getFullDescription,
	  getDetailedDescription,
	  getGradeDescription,
	  setRatingAgencyData,
	  setDefaultAgency,
	}

	const data = {};
	let agencyDefault = undefined;
	const ratingDefault = (agency) => data[agency  || agencyDefault].default;

	function getFullDescription(rating, agency) {
	  return data[agency || agencyDefault][rating] || ratingDefault(agency);
	};

	function getDetailedDescription(rating,agency) {
	  return  getFullDescription(rating, agency).description;
	}

	function getGradeDescription(rating, agency) {
	  return getFullDescription(rating, agency).grade;
	}

	function setRatingAgencyData (nameSpace, ratingData) {
	  data[nameSpace] = ratingData;
	  agencyDefault = agencyDefault || nameSpace
	};

	function setDefaultAgency(agency) {
	  agencyDefault = agency;
	}


/***/ }
/******/ ]);