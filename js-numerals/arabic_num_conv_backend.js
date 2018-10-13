'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/ || ""', (req, res) => {
  res.sendFile('./public/arabicnumconversion.html', {
    "root": __dirname
  });
});

app.post('/converter', (req, res) => {
  const inputnum = req.body.inputnumber;
  const conversionResult = convertArabicToText(inputnum);
  res.json({
    result: conversionResult
  })

})

app.listen(3000);

function convertArabicToText(inputNumber) {
  const oneToNineteen = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  const decades = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const centuries = [' thousand', ' hundred']
  let result = '';
  const digits = getDigits(inputNumber);
  let lastDigits = parseInt(digits.slice(digits.length - 2, digits.length).join(''));

  if (digits.length > 2) {
    let centuryIndex = 0;
    for (let index = 0; index < digits.length - 2; index++) {
      if (digits.length === 3) {
        centuryIndex++;
      }
      result = result.concat(oneToNineteen[digits[index]] + centuries[centuryIndex]) + ' ';
      centuryIndex++;
      if (lastDigits === 0 && digits[digits.length - 3] === 0) {
        return result;
      }
    }
    if (lastDigits > 0) {
      result = result.concat('and ');
    } else {
      return result;
    }
  }

  if (lastDigits >= 20) {
    result = result.concat(decades[digits[digits.length - 2]]);
    if (inputNumber % 10 === 0) {
      return result;
    } else {
      result = result.concat('-');
      lastDigits = digits[digits.length - 1];
    }
  }
  result = result.concat(oneToNineteen[lastDigits]);
  return result;
}

function getDigits(number) {
  let output = [];
  while (number) {
    output.push(number % 10);
    number = Math.floor(number / 10);
  }
  output.reverse();
  return output;
}

module.exports = {
  convertArabicToText,
  getDigits
};
