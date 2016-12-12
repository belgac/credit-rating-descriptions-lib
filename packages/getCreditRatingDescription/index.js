module.exports = {
  getFullDescription,
  getDetailedDescription,
  getGradeDescription,
  setRatingAgencyData,
  setDefaultAgency,
}

const data = {};
let agencyDefault = undefined;
const ratingDefault = (agency) => data[agency  || agencyDefault].default;

function getFullDescription(rating, agency) {
  return data[agency || agencyDefault][rating] || ratingDefault(agency);
};

function getDetailedDescription(rating,agency) {
  return  getFullDescription(rating, agency).description;
}

function getGradeDescription(rating, agency) {
  return getFullDescription(rating, agency).grade;
}

function setRatingAgencyData (nameSpace, ratingData) {
  data[nameSpace] = ratingData;
  agencyDefault = agencyDefault || nameSpace
};

function setDefaultAgency(agency) {
  agencyDefault = agency;
}
