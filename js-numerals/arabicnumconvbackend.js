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
  const conversionResult = convertNumToText(inputnum);
  res.json({
    result: conversionResult
  })

})

app.listen(3000);

function convertNumToText(inputNumber) {
  const oneToNineteen = {
    0: '',
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
  const centuries = ['hundred', 'thousand'];
  let result = [];
  const digits = getDigits(inputNumber);
  let twoDigits = 0;
  const lastDigits = parseInt(digits.slice(digits.length - 2, digits.length).join(''));

  if (digits.length > 5) {
    result.push(oneToNineteen[digits[0]]);
    result.push(centuries[0]);
    digits.shift();
  }

  if (digits.length > 3) {
    twoDigits = parseInt(digits.slice(0, digits.length - 3).join(''));
    result.push(getTwoDigits(oneToNineteen, decades, digits, twoDigits, inputNumber));
    result.push(centuries[1]);
    result = result.filter(x => x !== '');
  }

  twoDigits = lastDigits;

  if (digits.length > 2) {
    if (checkIfRounded(twoDigits, digits)) {
      return result.join(' ');
    }
    result.push(oneToNineteen[digits[digits.length - 3]]);
    result.push(centuries[0]);

    if (twoDigits > 0) {
      result.push('and');
    } else {
      return result.join(' ');
    }
  }
  result.push(getTwoDigits(oneToNineteen, decades, digits, twoDigits, inputNumber));

  return result.join(' ');
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

function getTwoDigits(oneToNineteen, decades, digits, twoDigits, inputNumber) {
  let twoDigitString = '';
  if (twoDigits >= 20) {
    twoDigitString = getTens(decades, digits, inputNumber);
    twoDigits = digits[digits.length - 1];
  }
  twoDigitString = twoDigitString.concat(oneToNineteen[twoDigits]);
  return twoDigitString;
}

function getTens(decades, digits, inputNumber) {
  let tens = '';
  tens = tens.concat(decades[digits[digits.length - 2]]);
  if (inputNumber % 10 === 0) {
    return tens;
  } else {
    tens = tens.concat('-');
  }
  return tens;
}

function checkIfRounded(twoDigits, digits) {
  return twoDigits === 0 && digits[digits.length - 3] === 0;
}

module.exports = {
  convertNumToText,
  getDigits
};
