const getDescriptions = require('get-credit-rating-description-big-three');

const submitButton = document.getElementById('submit');

submitButton.onclick = function() {
  const rating = document.getElementById('rating').value;
  const agency = document.getElementById('rating-agency').value;
  const fullDescription = getDescriptions.getFullDescription(rating, agency);
  const detailedDescription = getDescriptions.getDetailedDescription(rating, agency);
  const gradeDescription = getDescriptions.getGradeDescription(rating, agency)
  console.log(detailedDescription)
  document.getElementById('result').innerHTML = `
<h2> Result </h2>
<div>
  <h3> .getFullDescription() </h3>
  <p>
    <b>description:</b>
    ${fullDescription.description}
  </p>
  <p>
    <b>grade:</b>
    ${fullDescription.grade}
  </p>
</div>
<div>
  <h3> .getDetailedDescription() </h3>
  <p>
    ${detailedDescription}
  </p>
</div>
<div>
  <h3> .getGradeDescription() </h3>
  <p>
    ${gradeDescription}
  </p>
</div>
`;
}

