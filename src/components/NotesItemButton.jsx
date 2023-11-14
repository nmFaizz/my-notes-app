import React from "react";

export default function NotesItemButton({ onDelete, id }) {
    return (
        <div className="notes-item__btn">
            <button id="delete-btn" onClick={() => onDelete(id)}>Delete <i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
}