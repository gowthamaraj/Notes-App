const fs = require('fs')
const chalk = require('chalk');
const getNotes = function() {
    return 'Your notes'
}

const addNotes = function(title, body){

    const notes = loadNotes()
    const noteExist = notes.filter(function(note){
        return note.title === title
    })

    if(noteExist.length === 0){
        notes.push({title, body})
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added'));
    }else{
        console.log(chalk.red.inverse('already exist'));
    }
    
}

const listNotes = function(){
    const notes = loadNotes();
    console.log(chalk.inverse('List of Notes'));
    notes.forEach((element) => {
        console.log(chalk.yellow(`${element.title}`));
    });
}

const removeNotes = function(title){
    const notes = loadNotes();
    const Filtered = notes.filter(function(note){
        return note.title !== title
    });
    if(notes.length > Filtered.length){
        console.log(chalk.green.inverse('Note Removed'));
        saveNotes(Filtered);
    }else{
        console.log(chalk.red.inverse('No Note Found'));
    }
}
const readNotes = function(title){
    const notes = loadNotes();
    debugger
    const Filtered = notes.find(function(note){
        return note.title === title
    });
    if(Filtered){
        console.log(chalk.green.inverse(`${Filtered.title}:${Filtered.body}`));
    }else{
        console.log(chalk.red.inverse('No Note Found'));
    }
}

//helper
const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = function(notes){
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

module.exports = {
    getNotes,
    addNotes,
    removeNotes,
    listNotes,
    readNotes
}