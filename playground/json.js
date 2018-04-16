const fs=require('fs');

const originalNote={
    title:"Some title",
    body: "Some body"
};

//convert the above originalNote object to a string
const originalNoteString= JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

//read notes.json file
const noteString=fs.readFileSync('notes.json');
//convert noteString back to object
const note=JSON.parse(noteString);

console.log(note.body);