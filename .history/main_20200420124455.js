
const makeRunOn = function(str) {

  let newStr = '';

  let newStrWithCommas = '';

  for (let i = 0; i < str.length; i++) {
    if(str[i] === '.') {
      newStr += str[i].replace('.',',');
    } else {
      newStr += str[i];
    }
  }
  let newStrEndsWith = newStr[newStr.length - 1];
  if (newStrEndsWith.endsWith(',')) {
    newStrEndsWith = newStrEndsWith.replace(',', '.');
  }

  return newStr.slice(0, );
};




const stringOut = function(str) {
  let newStr = str.split(' ').join('');
  let spacedStr = newStr.split('').join(' ');

  return spacedStr;
};


const nightOwls = function(people) {
  const newArray = [];
  for (let i = 0; i < people.length; i++) {
    if(people[i].asleep === false && 
      people[i].localTime <= 400 && 
      people[i].localTime >= 100) {
        newArray.push(people[i]);
      }
  }
  return newArray;
}

const totalScore = function(levels) {
  const multipliedLevels = [];
  let sum = 0;
  for (let i =0; i < levels.length; i++) {
    if(levels[i].multiplier === undefined) {
    sum += Number(levels[i].score * 1);
    } else {
      sum += (levels[i].score * levels[i].multiplier)
    }
  }
  return sum;
};


const getToBed = function(people) {
  const newArray = [...people];
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i].localTime <= 400 && newArray[i].localTime >= 100) {
        newArray[i].asleep = true;
      }
  }
  return newArray;
};

const findIndices = function (ArrayParam, funcCallback) {
  const result = [];
  for (let i = 0; i < ArrayParam.length; i++) {
    if (funcCallback(ArrayParam[i]) === true) {
      result.push(ArrayParam[i].indexOf(ArrayParam[i]));
    }
  }
  return result;
};

const Faqtory = function (question) {
  return {
      questions: [],

      addQuestion: function(question) {
      
        question = {text: question,
                    answered: false,
                    id: 0};
        this.questions.push(question);
      },

      answerQuestion: function(id, answer) {
        for (i = 0; i < this.questions.length; i++) {
          if (this.questions[i].id === id) {
            this.questions[i].text += answer;
          }
        }
      }
  };

  };


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
