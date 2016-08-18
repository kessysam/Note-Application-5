
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
	
}

module.exports = NoteApplication;