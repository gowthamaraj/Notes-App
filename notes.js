const fs = require('fs')

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
        console.log('Note added');
    }else{
        console.log('already exist');
    }
    
}

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
    addNotes
}