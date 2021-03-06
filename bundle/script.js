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

	var getDescriptions = __webpack_require__(1);

	var submitButton = document.getElementById('submit');

	submitButton.onclick = function () {
	  var rating = document.getElementById('rating').value;
	  var agency = document.getElementById('rating-agency').value;
	  var fullDescription = getDescriptions.getFullDescription(rating, agency);
	  var detailedDescription = getDescriptions.getDetailedDescription(rating, agency);
	  var gradeDescription = getDescriptions.getGradeDescription(rating, agency);
	  document.getElementById('result').innerHTML = '\n<h2> Result </h2>\n<div>\n  <b>require(\'get-credit-rating-description-big-three\')</b>\n</div>\n<div>\n  <h3> .getFullDescription() </h3>\n  <p>\n    <b>description:</b>\n    ' + fullDescription.description + '\n  </p>\n  <p>\n    <b>grade:</b>\n    ' + fullDescription.grade + '\n  </p>\n</div>\n<div>\n  <h3> .getDetailedDescription() </h3>\n  <p>\n    ' + detailedDescription + '\n  </p>\n</div>\n<div>\n  <h3> .getGradeDescription() </h3>\n  <p>\n    ' + gradeDescription + '\n  </p>\n</div>\n';
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

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

		var setCreditRatingDescriptionBigThree = __webpack_require__(1);
		var getCreditRatingDescriptionsBigThree = setCreditRatingDescriptionBigThree(__webpack_require__(2));

		module.exports = getCreditRatingDescriptionsBigThree;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		"use strict";

		/******/(function (modules) {
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
		})(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var setCreditRatingDescriptionSP = __webpack_require__(1);
			var setCreditRatingDescriptionMoodys = __webpack_require__(2);
			var setCreditRatingDescriptionFitch = __webpack_require__(3);

			function setCreditRatingDescriptionBigThree(creditRatingDescriptionsGetter) {
				return setCreditRatingDescriptionFitch(setCreditRatingDescriptionMoodys(setCreditRatingDescriptionSP(creditRatingDescriptionsGetter)));
			}

			module.exports = setCreditRatingDescriptionBigThree;

			/***/
		},
		/* 1 */
		/***/function (module, exports) {

			"use strict";

			/******/
			(function (modules) {
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
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				var CREDIT_RATING_DESCRIPTION_SP = __webpack_require__(1);

				function setCreditRatingDescriptionSP(creditRatingDescriptionsGetter, name) {
					creditRatingDescriptionsGetter.setRatingAgencyData(name || "S&P", CREDIT_RATING_DESCRIPTION_SP);
					return creditRatingDescriptionsGetter;
				}

				module.exports = setCreditRatingDescriptionSP;

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				'use strict';

				/******/

				(function (modules) {
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
				})(
				/************************************************************************/
				/******/[
				/* 0 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var CLASSIC_SCALE = __webpack_require__(1);

					var _require = __webpack_require__(2),
					    IN_DEFAULT = _require.IN_DEFAULT,
					    NOT_RATED = _require.NOT_RATED;

					var CREDIT_RATING_DESCRIPTION_SP = Object.assign({
						RD: IN_DEFAULT,
						SD: IN_DEFAULT,
						default: NOT_RATED
					}, CLASSIC_SCALE);

					module.exports = CREDIT_RATING_DESCRIPTION_SP;

					/***/
				},
				/* 1 */
				/***/function (module, exports) {

					'use strict';

					/******/

					(function (modules) {
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
					})(
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

						var STANDARD_SCALE = {
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
							default: NOT_RATED
						};

						module.exports = STANDARD_SCALE;

						/***/
					},
					/* 1 */
					/***/function (module, exports) {

						'use strict';

						/******/

						(function (modules) {
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
						})(
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
						/******/]);

						/***/
					}
					/******/]);

					/***/
				},
				/* 2 */
				/***/function (module, exports) {

					'use strict';

					/******/

					(function (modules) {
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
					})(
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
					/******/]);

					/***/
				}
				/******/]);

				/***/
			}
			/******/]);

			/***/
		},
		/* 2 */
		/***/function (module, exports) {

			"use strict";

			/******/
			(function (modules) {
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
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				var CREDIT_RATING_DESCRIPTION_MOODYS = __webpack_require__(1);

				module.exports = setCreditRatingDescriptionMoodys;

				function setCreditRatingDescriptionMoodys(creditRatingDescriptionsGetter, name) {
					creditRatingDescriptionsGetter.setRatingAgencyData(name || "Moody's", CREDIT_RATING_DESCRIPTION_MOODYS);
					return creditRatingDescriptionsGetter;
				}

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				'use strict';

				/******/

				(function (modules) {
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
				})(
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
				/***/function (module, exports) {

					'use strict';

					/******/

					(function (modules) {
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
					})(
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
					/******/]);

					/***/
				}
				/******/]);

				/***/
			}
			/******/]);

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			"use strict";

			/******/
			(function (modules) {
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
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				var CREDIT_RATING_DESCRIPTION_FITCH = __webpack_require__(1);

				module.exports = setCreditRatingDescriptionFitch;

				function setCreditRatingDescriptionFitch(creditRatingDescriptionsGetter, name) {
					creditRatingDescriptionsGetter.setRatingAgencyData(name || "Fitch", CREDIT_RATING_DESCRIPTION_FITCH);
					return creditRatingDescriptionsGetter;
				}

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				'use strict';

				/******/

				(function (modules) {
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
				})(
				/************************************************************************/
				/******/[
				/* 0 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var CLASSIC_SCALE = __webpack_require__(1);

					var _require = __webpack_require__(2),
					    IN_DEFAULT = _require.IN_DEFAULT,
					    NOT_RATED = _require.NOT_RATED;

					var CREDIT_RATING_DESCRIPTION_FITCH = Object.assign({
						DDD: IN_DEFAULT,
						DD: IN_DEFAULT,
						default: NOT_RATED
					}, CLASSIC_SCALE);

					module.exports = CREDIT_RATING_DESCRIPTION_FITCH;

					/***/
				},
				/* 1 */
				/***/function (module, exports) {

					'use strict';

					/******/

					(function (modules) {
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
					})(
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

						var STANDARD_SCALE = {
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
							default: NOT_RATED
						};

						module.exports = STANDARD_SCALE;

						/***/
					},
					/* 1 */
					/***/function (module, exports) {

						'use strict';

						/******/

						(function (modules) {
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
						})(
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
						/******/]);

						/***/
					}
					/******/]);

					/***/
				},
				/* 2 */
				/***/function (module, exports) {

					'use strict';

					/******/

					(function (modules) {
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
					})(
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
					/******/]);

					/***/
				}
				/******/]);

				/***/
			}
			/******/]);

			/***/
		}
		/******/]);

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		"use strict";

		/******/(function (modules) {
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
		})(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			"use strict";

			module.exports = {
				getFullDescription: getFullDescription,
				getDetailedDescription: getDetailedDescription,
				getGradeDescription: getGradeDescription,
				setRatingAgencyData: setRatingAgencyData,
				setDefaultAgency: setDefaultAgency
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

			/***/
		}
		/******/]);

	/***/ }
	/******/ ]);

/***/ }
/******/ ]);