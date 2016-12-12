const CLASSIC_SCALE = require('credit-rating-description-standard-scale');
const {
  IN_DEFAULT,
  NOT_RATED,
} = require('credit-rating-descriptions');

const CREDIT_RATING_DESCRIPTION_SP = Object.assign({
  RD: IN_DEFAULT,
  SD: IN_DEFAULT,
  default: NOT_RATED
}, CLASSIC_SCALE);

module.exports = CREDIT_RATING_DESCRIPTION_SP;
