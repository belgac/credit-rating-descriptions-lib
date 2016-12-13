const setCreditRatingDescriptionSP = require('set-credit-rating-descriptions-sp');
const setCreditRatingDescriptionMoodys = require('set-credit-rating-descriptions-moodys');
const setCreditRatingDescriptionFitch = require('set-credit-rating-descriptions-fitch');

module.exports = function setCreditRatingDescriptionBigThree (creditRatingDescriptionsGetter) {
  return setCreditRatingDescriptionFitch(setCreditRatingDescriptionMoodys(setCreditRatingDescriptionSP(creditRatingDescriptionsGetter)));
};
