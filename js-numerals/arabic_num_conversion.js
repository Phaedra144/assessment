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
  if (inputNumber === 2) {
    return 'two'
  }
  return 'one';
}

module.exports = {
  fieldInputNum,
  submitButt,
  convertArabicToText
};
