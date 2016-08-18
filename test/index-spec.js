var chai = require("chai");
var noteApp = require("../index");
var assert = chai.assert;

describe("This is a test function,", function (author){
	it(" should assign value to author", function() {
		var note = new noteApp();
		//assert.equal('Unknown Author', note.author );
		assert.equal(note.author, 'anonymous');
	});
});