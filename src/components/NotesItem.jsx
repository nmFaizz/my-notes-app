import React from "react";
import NotesItemButton from "./NotesItemButton";

function NotesItem({ id, header, text, date, onDelete, onArchive, type, searched }) {
    return (
        <div className="notes-item" style={searched}>
            <h3>{header}</h3>
            <span>{date}</span>
            <p>{text}</p>
            <NotesItemButton onDelete={onDelete} id={id} onArchive={onArchive} type={type} />
        </div>
    )
}


export default NotesItem