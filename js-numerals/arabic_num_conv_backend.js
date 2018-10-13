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
  const listBelowTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decades = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = '';
  const digits = getDigits(inputNumber);

  switch (digits.length) {
    case 1:
      result = listBelowTen[inputNumber];
      break;
    case 2:
      if (inputNumber > 20 && inputNumber % 10 !== 0) {
        result = decades[digits[0]] + '-' + listBelowTen[digits[1]];
      } else if (inputNumber >= 20 && inputNumber % 10 === 0) {
        result = decades[inputNumber / 10];
      } else {
        result = tens[inputNumber - 10];
      }
      break;
    case 3:
      result = listBelowTen[digits[0]] + ' hundred';
      break;
  }
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
