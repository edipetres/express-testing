var expect = require('chai').expect;
var calculator = require('../lib/calculator');


describe("Calculator with basic functions", function() {
    it("adds two numbers", function() {
        expect(calculator.add(3,5)).to.equal(8);
    }); 
    it("subtracts two numbers", function() {
        expect(calculator.subtract(10,4)).to.equal(6);
    }); 
    it("multiplies two numbers", function() {
        expect(calculator.multiply(3,5)).to.equal(15);
    }); 
    it("divides two numbers", function() {
        expect(calculator.divide(14,2)).to.equal(7);
    }); 
    it("throws Error if trying to divide by 0", function() {
        expect(calculator.divide(3,0)).to.throw("Attempt to divide by zero");
    })
});