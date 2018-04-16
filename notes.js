const fs=require('fs');

const fetchNotes=()=>{
    try {
        let notesString= fs.readFileSync('notes-data.json');
        return notes=JSON.parse(notesString);
    }catch(e){
        return [];
    } 
}
const saveNotes=(notes)=>{
    //add notes to file
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
const addNote=(title,body)=>{
    let notes=fetchNotes();
    let note={
        title,
        body
    };
    let duplicateNotes=notes.filter((note)=> note.title===title);
    if(duplicateNotes.length ===0 ){
          //add note to notes array
        notes.push(note);
        saveNotes(notes);
        return note;
    }
  
}
const getAll=()=>{
    return fetchNotes();
}
const getNote=(title)=>{
    var notes=fetchNotes();
    //get note
    var foundNote=notes.filter((note)=> note.title===title);
    //return the note
    return foundNote[0];
}
const removeNote=(title)=>{
    //fetch notes
    var notes=fetchNotes();
    //filter notes
    var filteredNotes=notes.filter((note)=> note.title!==title);
    //remove the note with the title argument
    saveNotes(filteredNotes);

    return notes.length !==filteredNotes.length;
}
debugger;
const logNote=(note)=>{
    console.log('---');
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}
module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
