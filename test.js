'use strict';

var expect = require('chai').expect;

var app = require('./app');

describe('sum()', function(){
  it('Should return the sum of two numbers.', function(){
    expect(app.sum(3,4)).to.equal(7);
    expect(app.sum(-3,-4)).to.equal(-7);
  });
});