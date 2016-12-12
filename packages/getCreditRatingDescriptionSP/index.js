const setCreditRatingDescriptionSP = require('set-credit-rating-descriptions-sp');
const getCreditRatingDescriptionsSP = setCreditRatingDescriptionSP(require('get-credit-rating-description'));

module.exports = getCreditRatingDescriptionsSP;
