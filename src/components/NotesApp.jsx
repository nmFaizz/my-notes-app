import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NavigationBar from "./NavigationBar";
import FooterApp from "./FooterApp";
import { getInitialData, showFormattedDate } from "../utils";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            filteredNotes: [],
            searchValue: ""
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onNotesDeleteHandler = this.onNotesDeleteHandler.bind(this);
        this.onFilteredSearchHandler = this.onFilteredSearchHandler.bind(this)
    }

    onAddNotesHandler({ title, body }) {
        this.setState((pervState) => {
            return {
                notes: [
                    ...pervState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                        isSearched: true
                    }
                ],
            }
        })
    }

    onNotesDeleteHandler(id, type) {
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }));
    }


    onFilteredSearchHandler(searchValue) {
        const notes = this.state.notes

        const filteredNotes = notes.filter(note => 
            note.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())    
        )

        this.setState({ filteredNotes: filteredNotes, searchValue: searchValue })
    }

    render() {
        return (
            <div className="notes-app">
                    <NavigationBar notesData={this.state.notes} onSearch={this.onFilteredSearchHandler}/>
                    <div className="notes-app__input-container">
                        <NotesInput addNotes={this.onAddNotesHandler} />
                    </div>
                    <div className="notes-app__notes-list">
                        <NotesList 
                            notesData={this.state.searchValue === "" ? this.state.notes : this.state.filteredNotes} 
                            onDelete={this.onNotesDeleteHandler} 
                            type={{headerList: "Saved Notes", icon: "fa-solid fa-box-archive", btnName: "Archive"}} 
                            isEmpty={this.state.notes.length === 0 ? true : false}
                            showDate={showFormattedDate}
                            filteredNotes={this.state.filteredNotes}
                        />
                </div>
                <FooterApp />
            </div>
        )
    }
}


export default NotesApp