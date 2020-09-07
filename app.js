const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs')

//args version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list all notes',
    handler: function(){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse();