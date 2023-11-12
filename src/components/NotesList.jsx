import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ type, notesData, onDelete, onArchive, isEmpty }) {
    return (
        <div className="notes-list">
            <h2>{type.headerList}</h2>
            <div className="notes-list__item">
                <p className="notes-list__empty-message" style={{display: isEmpty ? 'block' : 'none', color: "gray"}}>Theres no {type.headerList}</p>
                {
                    notesData.map(note => (
                        <NotesItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} type={type} searched={{display: note.isSearched ? 'block' : 'none'}} />
                    ))
                }
            </div>
        </div>
    )
}


export default NotesList