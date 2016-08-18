var chai = require("chai");
var noteApp = require("../index");
var assert = chai.assert;

describe("This is a test function,", function (author){

	var note = new noteApp();
	note.create("lkjdfglkjs");

	console.log(note);
	it(" should assign value to author", function() {
		assert.equal(note.author, 'anonymous');
	});
});

describe("This test the create() of the created object created. ", function(author){

	var note = new noteApp();

	it(" checks if the argument passed in, is at the intended index. ", function() {
		note.create("lsfdjbvklsjdf");
		assert(note.notes[note.notes.length - 1], "lsfdjbvklsjdf");
		//console.log(note);
		//assert.equal(note.notes.length, 2);
	});

	it(" checks if the argument passed in, is at the intended index. ", function() {
		//note.create("lsfdjbvklsjdf");
		//assert(note.notes[note.notes.length - 1], "lsfdjbvklsjdf");
		console.log(note);
		assert.equal(note.notes.length, 1);
	});
});