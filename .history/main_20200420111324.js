
const makeRunOn = function(str) {

  let newStr = '';

  // // return newStr;

  let newStrWithCommas = '';

  for (let i = 0; i < str.length; i++) {
    if(str[i] === '.') {
      newStr += str[i].replace('.',',');
    } else {
      newStr += str[i];
    }
  }
  newStr.endsWith

  return newStr;
}







if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
