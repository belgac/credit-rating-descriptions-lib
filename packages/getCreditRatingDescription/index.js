module.exports = {
  getFullDescription,
  getDetailedDescription,
  getGradeDescription,
  setRatingAgencyData,
  setDefaultAgency,
  setRatingDescription,
  setUnknownResponse,
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

function setRatingDescription(response, rating, agency) {
  if (agency) {
    data[agency][rating] = response;
  } else {
    Object.keys(data).forEach((agencyKey) => setRatingDescription(response, rating, agencyKey));
  }
}

function setUnknownResponse(response, agency) {
  setRatingDescription(response, 'default', agency);
}
