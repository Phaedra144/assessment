'use strict';
const test = require('tape');
const arabicNumConverters = require('./arabic_num_conversion');

test('Input field exists ', function (t) {
  t.notEqual(arabicNumConverters.fieldInputNumber, null, 'input should not be null');
  t.end();
});

test('Submit button exists ', function (t) {
  t.notEqual(arabicNumConverters.submitButt, null, 'button should not be null');
  t.end();
});

test('Test 1', function(t){
  const actual = arabicNumConverters.convertArabicToText(1);
  const expected = 'one';
  t.equal(actual, expected, 'Test 1 is ok');
  t.end();
});

test('Test 2', function(t){
  const actual = arabicNumConverters.convertArabicToText(2);
  const expected = 'two';
  t.equal(actual, expected, 'Test 2 is ok');
  t.end();
});

test('Test 3', function(t){
  const actual = arabicNumConverters.convertArabicToText(3);
  const expected = 'three';
  t.equal(actual, expected, 'Test 3 is not ok');
  t.end();
});
