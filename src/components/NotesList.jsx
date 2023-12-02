import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notesData, onDelete, showDate, isEmpty }) {
    return (
        <div className="notes-list">
            <h2>Saved Notes</h2>
            <div className="notes-list__item">
                <p className="notes-list__empty-message" style={{display: isEmpty ? 'block' : 'none', color: "gray"}}>Theres no saved notes</p>
                {
                    notesData.map(note => (
                        <NotesItem key={note.id} {...note} onDelete={onDelete} showDate={showDate} />
                    ))
                }
            </div>
        </div>
    )
}


export default NotesList