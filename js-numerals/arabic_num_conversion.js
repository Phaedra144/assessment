'use strict';

const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');

const html = fs.readFileSync(__dirname + '/arabicnumconversion.html', 'utf8');
const DOM = new JSDOM(html);
global.document = DOM.window.document;

const fieldInputNum = document.querySelector('#input_number');
const submitButt = document.querySelector('#submit_button');

submitButt.addEventListener('click', convertArabicToText);

function convertArabicToText(inputNumber) {
  const listBelowTen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decades = ['ten', 'twenty'];
  let result = '';
  if (inputNumber < 10) {
    result = listBelowTen[inputNumber - 1];
  } else if (inputNumber >= 10 && inputNumber < 20) {
    result = tens[inputNumber - 10];
  } else {
    result = decades[inputNumber/10 - 1];
  }
  return result;
}

function getDigits(number) {
  let output = [];
  while (number) {
    output.push(number % 10);
    number = Math.floor(number / 10);
  }
  output = output.reverse();
  return output;
}

module.exports = {
  fieldInputNum,
  submitButt,
  convertArabicToText,
  getDigits
};
