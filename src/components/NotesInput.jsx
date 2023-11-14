import React from "react";
import NotesInputButton from "./NotesInputButton";

export default class NotesInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 50,
            title: '',
            body: ''
        }

        this.onHeaderInputHandler = this.onHeaderInputHandler.bind(this)
        this.onTextAreaInputHandler = this.onTextAreaInputHandler.bind(this)
        this.onSubmitNoteEventHandler = this.onSubmitNoteEventHandler.bind(this)
    }

    onHeaderInputHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState({
                title: event.target.value,
                counter: 50 - event.target.value.length
            })
        }
    }

    onTextAreaInputHandler(event) {
        this.setState({
            body: event.target.value
        })
    }

    onSubmitNoteEventHandler() {
        this.props.addNotes(this.state)
        this.setState({
            title: '',
            body: '',
            counter: 50
        })
    } 

    render() {
        return (
            <div className="notes-input">
                <input type="text" placeholder="Add Header" id="input-header" value={this.state.title} onChange={this.onHeaderInputHandler} />
                <textarea rows="7" placeholder="Type your text here!" id="input-text" value={this.state.body} onChange={this.onTextAreaInputHandler}></textarea>
                <p className="word-count">Header characters left : {this.state.counter}</p>
                <NotesInputButton submitNotes={this.onSubmitNoteEventHandler} />
            </div>
        )
    }
}
