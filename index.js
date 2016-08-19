
function NoteApplication(author) {
	
	if(typeof author === 'undefined') {
		this.author = 'anonymous';
	} else {
		this.author = author.toString();
	}
	
	this.notes = [];

	/*
	*This function takes the note contentas the parameter 
 	* and adds it to the notes list of the object
 	*/
	this.create = function(text){
		this.notes.push(text);
	};


 	/**
 	*This function lists out each of the notes in the notes list 
 	*/
 	this.listNotes = function() {
 		
 		for (i = 0; i < this.notes.length; i++) {
 			return ("Notes Id: " +i+"\n"+ this.notes[i] + "\n By" + " Author "+this.author);		 			
 		}		
 	}

 	/**
 	* This function takes a parameter note_id which refers to the index of the text in the notes list.
 	* The index is validated, and a string is returned if the index is valid.
 	*/
 	this.getNote = function(note_id) {
 		
 		if(this.notes[note_id] === undefined){
 			return false;
		}
 		return this.notes[note_id];	
 	}	

 	/**
	*This function deletes the note at the index note_id of the notes list
	*/
	this.deleteNote = function(note_id) {

		if(this.notes[note_id] === undefined) {
			return false;
		}
		this.notes = this.notes.splice(note_id);
	}
}

module.exports = NoteApplication;