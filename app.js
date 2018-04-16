const fs=require('fs');
const yargs=require('yargs');
const notes=require('./notes');
const titleOptions={
    describe: "Title of note",
    demand: true,
    alias: 't'
};
const bodyOptions={
    describe: "Note body",
    demand: true,
    alias: "b"
};
const argv=yargs
    .command('add',"Add New Note",{
        title: titleOptions,
        body:bodyOptions
    })
    .command("list","List all notes")
    .command("read","Read a note",{
        title:titleOptions
    })
    .command("remove","Delete note",{
        title:titleOptions
    })
    .help()
    .argv;

const command=process.argv[2];
if(command==='add'){
    let note= notes.addNote(argv.title,argv.body);
    if(note){
        console.log("Created Succesfully!");
        notes.logNote(note);
    } else{
        console.log("Note title already exists!");
    }
} else if(command==='list'){
    const allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach(note => notes.logNote(note));
} else if(command==='read'){
   let foundNote= notes.getNote(argv.title);
   if(foundNote){
       console.log("Note found!");
       notes.logNote(foundNote);
   } else{
       console.log("Note not found!");
   }
} else if(command==='remove'){
    let noteRemoved=notes.removeNote(argv.title);
    var message=noteRemoved ? "Note was Removed" : "Note not found";
    console.log(message);
}
else{
    console.log("Command not recognized");
}