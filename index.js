modole.exports = function NotesApplication;

var NoteApplication = function(author, notes) {
	
	/**
	*This program is a simple NoteApplication archive
	*/

 	/**
 	*@param {String} author
 	* @param {String} notes
 	*/
 	
 	this.author = author;
 	this.notes = [];

 	/**
 	* This function takes the note content
 	* as the parameter
 	* and adds it to the notes list of the object.
 	* @param {String} note_content
 	*/
 	create(note_content) {
 		
 		this.notes.push(note_content.toString());
 	}	

}



 	
 