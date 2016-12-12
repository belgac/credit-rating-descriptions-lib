const CREDIT_RATING_DESCRIPTION_MOODYS = require('credit-rating-descriptions-moodys');

module.exports = setCreditRatingDescriptionMoodys;

function setCreditRatingDescriptionMoodys (creditRatingDescriptionsGetter, name) {
  creditRatingDescriptionsGetter.setRatingAgencyData(name || "Moody's", CREDIT_RATING_DESCRIPTION_MOODYS);
  return creditRatingDescriptionsGetter;
}
