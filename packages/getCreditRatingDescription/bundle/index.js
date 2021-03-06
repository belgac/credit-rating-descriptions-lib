(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("getCreditRatingDescription", [], factory);
	else if(typeof exports === 'object')
		exports["getCreditRatingDescription"] = factory();
	else
		root["getCreditRatingDescription"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  getFullDescription: getFullDescription,
	  getDetailedDescription: getDetailedDescription,
	  getGradeDescription: getGradeDescription,
	  setRatingAgencyData: setRatingAgencyData,
	  setDefaultAgency: setDefaultAgency,
	  setRatingDescription: setRatingDescription,
	  setUnknownResponse: setUnknownResponse
	};

	var data = {};
	var agencyDefault = undefined;
	var ratingDefault = function ratingDefault(agency) {
	  return data[agency || agencyDefault].default;
	};

	function getFullDescription(rating, agency) {
	  return data[agency || agencyDefault][rating] || ratingDefault(agency);
	};

	function getDetailedDescription(rating, agency) {
	  return getFullDescription(rating, agency).description;
	}

	function getGradeDescription(rating, agency) {
	  return getFullDescription(rating, agency).grade;
	}

	function setRatingAgencyData(nameSpace, ratingData) {
	  data[nameSpace] = ratingData;
	  agencyDefault = agencyDefault || nameSpace;
	};

	function setDefaultAgency(agency) {
	  agencyDefault = agency;
	}

	function setRatingDescription(response, rating, agency) {
	  if (agency) {
	    data[agency][rating] = response;
	  } else {
	    Object.keys(data).forEach(function (agencyKey) {
	      return setRatingDescription(response, rating, agencyKey);
	    });
	  }
	}

	function setUnknownResponse(response, agency) {
	  setRatingDescription(response, 'default', agency);
	}

/***/ }
/******/ ])
});
;