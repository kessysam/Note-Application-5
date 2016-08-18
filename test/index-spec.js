var chai = require("chai");
var noteApp = require("../index");
var assert = chai.assert;

describe("This is a test function,", function (author){

	var note = new noteApp();
	
	it(" should assign value to author", function() {
		assert.equal(note.author, 'anonymous');
	});
});

describe("This test the create() of the created object created. ", function(author){

	var note = new noteApp();

	it(" checks if the argument passed in, is at the intended index. ", function() {
		note.create("Shakespare");
		assert(note.notes[note.notes.length - 1], "Shakespare");
	});

	it(" checks if the argument passed in, is at the intended index. ", function() {
		assert.equal(note.notes.length, 1);
	});
});


describe("This test the list() of the created object. ", function() {

	var note = new noteApp("Adam Eve");

	it("should return a list of text that has been created through, create().", function(){

		note.create("a guru");
		assert.equal(note.listNotes(), "Notes Id: " +i+"\n"+ note.notes[0] + "\n By" + " Author "+note.author);
	});

	describe("This test the getNote() of the created object. ", function(){

		var note = new noteApp("Clinton");

		it("should return a string at a particular index . ", function(){
			note.create("A street king");
			assert.equal(note.getNote(0), "A street king");
		});
	});
});