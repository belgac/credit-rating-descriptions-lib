const CLASSIC_SCALE = require('credit-rating-description-standard-scale');
const {
  IN_DEFAULT,
  NOT_RATED,
} = require('credit-rating-descriptions');

const CREDIT_RATING_DESCRIPTION_FITCH = Object.assign({
  DDD: IN_DEFAULT,
  DD: IN_DEFAULT,
  default: NOT_RATED
}, CLASSIC_SCALE);

module.exports = CREDIT_RATING_DESCRIPTION_FITCH;
