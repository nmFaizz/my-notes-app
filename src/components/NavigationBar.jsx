import React from "react";
import SearchNotes from "./SearchNotes";

function NavigationBar({ notesData, onSearch }) {
    return (
        <header className="navigation-bar">
            <div id="logo">
                <h2>MyNotes</h2>
            </div>

            <nav>
                <SearchNotes notesData={notesData} onSearch={onSearch} />
            </nav>
        </header>
    )
}

export default NavigationBar