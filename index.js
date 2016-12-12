const getDescriptions = require('get-credit-rating-description-big-three');

console.log('S&P A', getDescriptions.getGradeDescription('A','S&P'));
console.log('moodys Aaa',getDescriptions.getDetailedDescription('Aaa',"Moody's"));
console.log('Fitch B', getDescriptions.getDetailedDescription('B',"Fitch"))
