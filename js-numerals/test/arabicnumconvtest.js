'use strict';

const test = require('tape');
const arabicNumConverters = require('../arabicnumconvbackend');

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
  const expected = 'twenty';
  t.equal(actual, expected, 'Test 20 is ok');
  t.end();
});

test('Get digits 3432', function(t){
  const actual = arabicNumConverters.getDigits(3432);
  const expected = [3, 4, 3, 2];
  t.deepEqual(actual, expected, 'get digits of 3432');
  t.end();
});

test('Test 21', function (t) {
  const actual = arabicNumConverters.convertArabicToText(21);
  const expected = 'twenty-one';
  t.equal(actual, expected, 'Test 21 is ok');
  t.end();
});

test('Test 64', function (t) {
  const actual = arabicNumConverters.convertArabicToText(64);
  const expected = 'sixty-four';
  t.equal(actual, expected, 'Test 64 is ok');
  t.end();
});

test('Test 99', function (t) {
  const actual = arabicNumConverters.convertArabicToText(99);
  const expected = 'ninety-nine';
  t.equal(actual, expected, 'Test 99 is ok');
  t.end();
});

test('Test 100', function (t) {
  const actual = arabicNumConverters.convertArabicToText(100);
  const expected = 'one hundred';
  t.equal(actual, expected, 'Test 100 is ok');
  t.end();
});

test('Test 101', function (t) {
  const actual = arabicNumConverters.convertArabicToText(101);
  const expected = 'one hundred and one';
  t.equal(actual, expected, 'Test 101 is ok');
  t.end();
});

test('Test 116', function (t) {
  const actual = arabicNumConverters.convertArabicToText(116);
  const expected = 'one hundred and sixteen';
  t.equal(actual, expected, 'Test 116 is ok');
  t.end();
});

test('Test 999', function (t) {
  const actual = arabicNumConverters.convertArabicToText(999);
  const expected = 'nine hundred and ninety-nine';
  t.equal(actual, expected, 'Test 999 is ok');
  t.end();
});

test('Test 1000', function (t) {
  const actual = arabicNumConverters.convertArabicToText(1000);
  const expected = 'one thousand';
  t.equal(actual, expected, 'Test 1000 is ok');
  t.end();
});

test('Test 1500', function (t) {
  const actual = arabicNumConverters.convertArabicToText(1500);
  const expected = 'one thousand five hundred';
  t.equal(actual, expected, 'Test 1500 is ok');
  t.end();
});

test('Test 1541', function (t) {
  const actual = arabicNumConverters.convertArabicToText(1541);
  const expected = 'one thousand five hundred and fourty-one';
  t.equal(actual, expected, 'Test 1541 is ok');
  t.end();
});

test('Test 13648', function (t) {
  const actual = arabicNumConverters.convertArabicToText(13648);
  const expected = 'thirteen thousand six hundred and fourty-eight';
  t.equal(actual, expected, 'Test 13648 is ok');
  t.end();
});

test.onFinish(() => process.exit(0));


