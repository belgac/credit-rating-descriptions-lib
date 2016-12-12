const setCreditRatingDescriptionMoodys = require('set-credit-rating-descriptions-moodys');
const getCreditRatingDescriptionsMoodys = setCreditRatingDescriptionMoodys(require('get-credit-rating-description'));

module.exports = getCreditRatingDescriptionsMoodys;
