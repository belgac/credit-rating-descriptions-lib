const CREDIT_RATING_DESCRIPTION_SP = require('credit-rating-descriptions-sp');

function setCreditRatingDescriptionSP (creditRatingDescriptionsGetter, name) {
  creditRatingDescriptionsGetter.setRatingAgencyData(name || "S&P", CREDIT_RATING_DESCRIPTION_SP);
  return creditRatingDescriptionsGetter;
}

module.exports = setCreditRatingDescriptionSP;
