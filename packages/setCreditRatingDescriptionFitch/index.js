const CREDIT_RATING_DESCRIPTION_FITCH = require('credit-rating-descriptions-fitch');

module.exports = setCreditRatingDescriptionFitch;

function setCreditRatingDescriptionFitch (creditRatingDescriptionsGetter, name) {
  creditRatingDescriptionsGetter.setRatingAgencyData(name || "Fitch", CREDIT_RATING_DESCRIPTION_FITCH);
  return creditRatingDescriptionsGetter;
}
