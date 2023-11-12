import React from "react";

export default function NotesItemButton({ onDelete, onArchive, id, type }) {
    return (
        <div className="notes-item__btn">
            <button id="delete-btn" onClick={() => onDelete(id, type.headerList)}>Delete <i className="fa-solid fa-trash-can"></i></button>
            <button id="archive-btn" onClick={() => onArchive(id)}>{type.btnName} <i className={type.icon}></i></button>
        </div>
    )
}