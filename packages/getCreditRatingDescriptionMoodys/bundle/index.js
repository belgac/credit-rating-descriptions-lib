(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("getCreditRatingDescriptionMoodys", [], factory);
	else if(typeof exports === 'object')
		exports["getCreditRatingDescriptionMoodys"] = factory();
	else
		root["getCreditRatingDescriptionMoodys"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var setCreditRatingDescriptionMoodys = __webpack_require__(1);
	var getCreditRatingDescriptions = __webpack_require__(3);

	module.exports = setCreditRatingDescriptionMoodys(getCreditRatingDescriptions);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof3(exports)) === 'object' && ( false ? 'undefined' : _typeof3(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === 'object') exports["setCreditRatingDescriptionsMoodys"] = factory();else root["setCreditRatingDescriptionsMoodys"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				var CREDIT_RATING_DESCRIPTION_MOODYS = __webpack_require__(1);

				function setCreditRatingDescriptionMoodys(creditRatingDescriptionsGetter, name) {
					creditRatingDescriptionsGetter.setRatingAgencyData(name || "Moody's", CREDIT_RATING_DESCRIPTION_MOODYS);
					return creditRatingDescriptionsGetter;
				}

				module.exports = setCreditRatingDescriptionMoodys;

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (module) {
					'use strict';

					var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
						return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
					} : function (obj) {
						return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
					};

					(function webpackUniversalModuleDefinition(root, factory) {
						if ((false ? 'undefined' : _typeof2(exports)) === 'object' && (false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["creditRatingDescriptionsMoodys"] = factory();else root["creditRatingDescriptionsMoodys"] = factory();
					})(undefined, function () {
						return (/******/function (modules) {
								// webpackBootstrap
								/******/ // The module cache
								/******/var installedModules = {};

								/******/ // The require function
								/******/function __webpack_require__(moduleId) {

									/******/ // Check if module is in cache
									/******/if (installedModules[moduleId])
										/******/return installedModules[moduleId].exports;

									/******/ // Create a new module (and put it into the cache)
									/******/var module = installedModules[moduleId] = {
										/******/exports: {},
										/******/id: moduleId,
										/******/loaded: false
										/******/ };

									/******/ // Execute the module function
									/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

									/******/ // Flag the module as loaded
									/******/module.loaded = true;

									/******/ // Return the exports of the module
									/******/return module.exports;
									/******/
								}

								/******/ // expose the modules object (__webpack_modules__)
								/******/__webpack_require__.m = modules;

								/******/ // expose the module cache
								/******/__webpack_require__.c = installedModules;

								/******/ // __webpack_public_path__
								/******/__webpack_require__.p = "";

								/******/ // Load entry module and return exports
								/******/return __webpack_require__(0);
								/******/
							}(
							/************************************************************************/
							/******/[
							/* 0 */
							/***/function (module, exports, __webpack_require__) {

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

								/***/
							},
							/* 1 */
							/***/function (module, exports, __webpack_require__) {

								var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (module) {
									'use strict';

									var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
										return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
									} : function (obj) {
										return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
									};

									(function webpackUniversalModuleDefinition(root, factory) {
										if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["creditRatingDescriptions"] = factory();else root["creditRatingDescriptions"] = factory();
									})(undefined, function () {
										return (/******/function (modules) {
												// webpackBootstrap
												/******/ // The module cache
												/******/var installedModules = {};

												/******/ // The require function
												/******/function __webpack_require__(moduleId) {

													/******/ // Check if module is in cache
													/******/if (installedModules[moduleId])
														/******/return installedModules[moduleId].exports;

													/******/ // Create a new module (and put it into the cache)
													/******/var module = installedModules[moduleId] = {
														/******/exports: {},
														/******/id: moduleId,
														/******/loaded: false
														/******/ };

													/******/ // Execute the module function
													/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

													/******/ // Flag the module as loaded
													/******/module.loaded = true;

													/******/ // Return the exports of the module
													/******/return module.exports;
													/******/
												}

												/******/ // expose the modules object (__webpack_modules__)
												/******/__webpack_require__.m = modules;

												/******/ // expose the module cache
												/******/__webpack_require__.c = installedModules;

												/******/ // __webpack_public_path__
												/******/__webpack_require__.p = "";

												/******/ // Load entry module and return exports
												/******/return __webpack_require__(0);
												/******/
											}(
											/************************************************************************/
											/******/[
											/* 0 */
											/***/function (module, exports) {

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

												/***/
											}
											/******/])
										);
									});
									;
									/* WEBPACK VAR INJECTION */
								}).call(exports, __webpack_require__(2)(module));

								/***/
							},
							/* 2 */
							/***/function (module, exports) {

								module.exports = function (module) {
									if (!module.webpackPolyfill) {
										module.deprecate = function () {};
										module.paths = [];
										// module.parent = undefined by default
										module.children = [];
										module.webpackPolyfill = 1;
									}
									return module;
								};

								/***/
							}
							/******/])
						);
					});
					;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(2)(module));

				/***/
			},
			/* 2 */
			/***/function (module, exports) {

				module.exports = function (module) {
					if (!module.webpackPolyfill) {
						module.deprecate = function () {};
						module.paths = [];
						// module.parent = undefined by default
						module.children = [];
						module.webpackPolyfill = 1;
					}
					return module;
				};

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["getCreditRatingDescription"] = factory();else root["getCreditRatingDescription"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports) {

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

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }
/******/ ])
});
;