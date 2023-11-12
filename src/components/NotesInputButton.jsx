import React from "react";

function NotesInputButton({ submitNotes }) {
    return (
        <div className="notes-input__button">
            <button onClick={() => submitNotes()}>ADD NOTES</button>
        </div>
    )
}

export default NotesInputButton















