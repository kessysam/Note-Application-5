

var NoteApplication = function(author, notes) {
	
	if(typeof author !== 'string' || typeof notes !== 'string') {
		return "Invalid input";
	}
	
 	var author = author;
 	var notes = [];

 	/**
 	* This function takes the note content
 	* as the parameter
 	* and adds it to the notes list of the object.
 	* @param {String} note_content
 	*/
 	var create = function(note_content) {
 		
 		this.notes.push(note_content.toString());
 		return this.notes;
 	}

};

 module.exports = NoteApplication;