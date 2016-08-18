var chai = require("chai");
var index = require("../index.js");
var assert = chai.assert;
var prog = new index(3, 4);

describe("The is a test function", function (author, notes){
	it("It should a text", function() {
		assert.equal('Author cannot be empty', " ");
	});
});