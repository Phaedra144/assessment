'use strict';
const test = require('tape');
const fieldInputNumber = require('./arabic_num_conversion');
const submitButt = require('./arabic_num_conversion');

test('Input field exists ', function (t) {
  t.notEqual(fieldInputNumber, null, 'should not be null');
  t.end();
});

test('Submit button exists ', function (t) {
  t.notEqual(submitButt, null, 'should not be null');
  t.end();
});

