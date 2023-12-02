import React from "react";
import NotesItemButton from "./NotesItemButton";

function NotesItem({ id, title, body, createdAt, onDelete, searched, showDate }) {
    return (
        <div className="notes-item" style={searched}>
            <h3>{title}</h3>
            <span>{showDate(createdAt)}</span>
            <p>{body}</p>
            <NotesItemButton onDelete={onDelete} id={id} />
        </div>
    )
}


export default NotesItem