'use strict';
const test = require('tape');
const fieldInputNumber = require('./arabic_num_conversion');
const submitButt = require('./arabic_num_conversion');

test('Input field exists and not ok', function (t) {
  t.ok(fieldInputNumber);
  t.end();
});

test('Submit button exists and not ok', function (t) {
  t.ok(submitButt);
  t.end();
});
