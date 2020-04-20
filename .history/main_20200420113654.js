
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
  if (newStr.endsWith(',')) {
    newStr = newStr.replace(',', '.');
  }

  return newStr;
}




const stringOut = function(str) {
  let newStr = str.split(' ').join('');
  let spacedStr = newStr.split('').join(' ');

  return spacedStr;
}


const nightOwls = function(people) {
  let newArray = [];
  for (let i = 0; i < people.length; i++) {
    if(people[i].asleep === false && 
      people[i].localTime <= 400 && 
      people[i].localTime >= 100) {
        newArray.push(people[i]);
      }
  }
  return newArray;
}

cosnt totalScore = function(levels) {
  
  for (let i =0; i < levels.length; i++)
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
