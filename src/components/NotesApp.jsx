import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NavigationBar from "./NavigationBar";
import FooterApp from "./FooterApp";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            archived: [],
            isSavedEmpty: true,
            isArchiveEmpty: true,
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onNotesDeleteHandler = this.onNotesDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onMoveNotesHandler = this.onMoveNotesHandler.bind(this);
        this.onDisplaySearchedHandler = this.onDisplaySearchedHandler.bind(this);
    }

    onAddNotesHandler({header, text}) {
        this.setState((pervState) => {
            return {
                notes: [
                    ...pervState.notes,
                    {
                        id: +new Date(),
                        header: header,
                        text: text,
                        date: new Date().toLocaleDateString("id-ID", 
                            { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            }
                        ),
                        isSearched: true
                    }
                ],
                isSavedEmpty: false
            }
        })
    }

    onNotesDeleteHandler(id, type) {
        if (type === "Saved Notes") {
            this.setState(prevState => ({
                notes: prevState.notes.filter(note => note.id !== id)
            }));
        } else if (type === "Archived Notes") {
            this.setState(pervState => ({
                archived: pervState.archived.filter(archive => archive.id !== id)
            }))
        }

    }

    onArchiveHandler(id) {
        let getNotes = this.state.notes.filter(note => note.id === id)
        this.setState(pervState => {
            return {
                notes: this.state.notes.filter(note => note.id !== id),
                archived: [
                    ...pervState.archived,
                    ...getNotes
                ],
                isArchiveEmpty: false
            }
        })
    }

    onMoveNotesHandler(id) {
        let getArchive = this.state.archived.filter(note => note.id === id)
        this.setState(pervState => {
            return {
                archived: this.state.archived.filter(note => note.id !== id),
                notes: [
                    ...pervState.notes,
                    ...getArchive
                ],
                isSavedEmpty: false
            }
        })
    }

    onDisplaySearchedHandler(searchValue) {
        const updatedNotes = this.state.notes
            
        updatedNotes.forEach((note, i) => {
            const slicedHeader = note.header.slice(0, searchValue.length)
            
            if (slicedHeader.toLowerCase() === searchValue.toLowerCase()) {
                updatedNotes[i].isSearched = true
            } else {
                updatedNotes[i].isSearched = false
            }
        })

        this.setState({
            notes: updatedNotes
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.archived.length === 0 && !this.state.isArchiveEmpty) {
            this.setState({
                isArchiveEmpty: true
            })
        } else if (this.state.notes.length === 0 && !this.state.isSavedEmpty) {
            this.setState({
                isSavedEmpty: true
            })
        }
    }

    render() {
        return (
            <div className="notes-app">
                    <NavigationBar notesData={this.state.notes} onSearch={this.onDisplaySearchedHandler} />
                    <div className="notes-app__input-container">
                        <NotesInput addNotes={this.onAddNotesHandler} />
                    </div>
                    <div className="notes-app__notes-list">
                        <NotesList 
                            notesData={this.state.notes} 
                            onDelete={this.onNotesDeleteHandler} 
                            type={{headerList: "Saved Notes", icon: "fa-solid fa-box-archive", btnName: "Archive"}} 
                            onArchive={this.onArchiveHandler}
                            isEmpty={this.state.isSavedEmpty} 
                        />
                        <NotesList 
                            notesData={this.state.archived} 
                            onDelete={this.onNotesDeleteHandler} 
                            type={{headerList: "Archived Notes", icon: "fa-solid fa-arrow-turn-up", btnName: "Move"}} 
                            onArchive={this.onMoveNotesHandler} 
                            isEmpty={this.state.isArchiveEmpty}
                        />
                </div>
                <FooterApp />
            </div>
        )
    }
}


export default NotesApp