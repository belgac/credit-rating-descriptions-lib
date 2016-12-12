const setCreditRatingDescriptionFitch = require('set-credit-rating-descriptions-fitch');
const getCreditRatingDescriptionsFitch = setCreditRatingDescriptionFitch(require('get-credit-rating-description'));

module.exports = getCreditRatingDescriptionsFitch;
