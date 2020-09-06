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
    handler: function(){
        console.log('Removing the note');
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list all notes',
    handler: function(){
        console.log('list all notes');
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read all notes',
    handler: function(){
        console.log('read note');
    }
})

yargs.parse();