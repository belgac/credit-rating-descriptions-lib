const CREDIT_RATING_DESCRIPTION_FITCH = require('credit-rating-descriptions-fitch');

function setCreditRatingDescriptionFitch (creditRatingDescriptionsGetter, name) {
  creditRatingDescriptionsGetter.setRatingAgencyData(name || "Fitch", CREDIT_RATING_DESCRIPTION_FITCH);
  return creditRatingDescriptionsGetter;
}

module.exports = setCreditRatingDescriptionFitch;
