import React from "react";

export default class SearchNotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    }

    onSearchChangeEventHandler(event) {
        const searchText = event.target.value

        this.setState({
            search: searchText
        }, () => {
            this.props.onSearch(searchText)
        })
    }

    render() {
        return (
            <div className="search-notes">
                <input type="search" id="input-search" placeholder="Search Notes..." onChange={this.onSearchChangeEventHandler} />
                <div className="search-notes__btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        )
    }
}