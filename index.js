
function NoteApplication(author) {
	
	if(typeof author === 'undefined') {
		this.author = 'anonymous';
	} else {
		this.author = author.toString();
	}
	
	this.notes = [];
	
	this.create = function(text){
		this.notes.push(text);
	};
	
}

module.exports = NoteApplication;