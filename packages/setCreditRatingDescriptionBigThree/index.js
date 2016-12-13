const setCreditRatingDescriptionSP = require('set-credit-rating-descriptions-sp');
const setCreditRatingDescriptionMoodys = require('set-credit-rating-descriptions-moodys');
const setCreditRatingDescriptionFitch = require('set-credit-rating-descriptions-fitch');

function setCreditRatingDescriptionBigThree (creditRatingDescriptionsGetter) {
  return setCreditRatingDescriptionFitch(setCreditRatingDescriptionMoodys(setCreditRatingDescriptionSP(creditRatingDescriptionsGetter)));
}

module.exports = setCreditRatingDescriptionBigThree;

