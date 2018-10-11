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
  t.equal(actual, expected, 'Test 3 is ok');
  t.end();
});

test('Test 12', function(t){
  const actual = arabicNumConverters.convertArabicToText(12);
  const expected = 'twelve';
  t.equal(actual, expected, 'Test 12 is ok');
  t.end();
});

test('Test 19', function(t){
  const actual = arabicNumConverters.convertArabicToText(19);
  const expected = 'nineteen';
  t.equal(actual, expected, 'Test 19 is ok');
  t.end();
});

test('Test 20', function(t){
  const actual = arabicNumConverters.convertArabicToText(20);
  const expected = 'twenty-one';
  t.equal(actual, expected, 'Test 20 is ok');
  t.end();
});
