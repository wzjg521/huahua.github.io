/**
 * Created by PLUSH80673 on 2015/11/25.
 */

goog.require('goog.dom');
goog.require('goog.ui.Zippy');

goog.provide('tutorial.notepad');
goog.provide('tutorial.notepad.Note');

function sayHi() {
    var newHeader = goog.dom.createDom('h1', {
        'style' : 'background-color:red'
    },'hello world');
    goog.dom.appendChild(document.body, newHeader);
}


tutorial.notepad.makeNotes = function(data, noteContainer) {
    var notes = [];
    for (var i = 0; i < data.length; i++) {
        var note =
            new tutorial.notepad.Note(data[i].title, data[i].content, noteContainer);
        notes.push(note);
        console.log(notes);
        note.makeNoteDom();
    }
    return notes;
};



tutorial.notepad.Note = function(title, content, noteContainer) {
    this.title = title;
    this.content = content;
    this.parent = noteContainer;
};


tutorial.notepad.Note.prototype.makeNoteDom = function() {
    this.headerElement = goog.dom.createDom('div',
        {'style': 'background-color:#EEE'}, this.title);
    this.contentElement = goog.dom.createDom('div', null, this.content);
    var newNote = goog.dom.createDom('div', null,
        this.headerElement, this.contentElement);

    goog.dom.appendChild(this.parent, newNote);
    return new goog.ui.Zippy(this.headerElement, this.contentElement);
};

