
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
 	* This function takes a parameter note_id which refers to the index of the note in the notes list.
 	* The index is validated, and a sting is passed if the index is validz.
 	*/
 	getNote(note_id) {
 		
 		if(this.notes.indexOf(note_id) !== -1){
 			return this.notes[note_id];
 		}
 		
 		return false;	
 	}	
}

module.exports = NoteApplication;