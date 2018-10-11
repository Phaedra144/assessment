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
  if (inputNumber < 10) {
    return listBelowTen[inputNumber - 1]
  }
  return tens[inputNumber - 10];
}

module.exports = {
  fieldInputNum,
  submitButt,
  convertArabicToText
};
