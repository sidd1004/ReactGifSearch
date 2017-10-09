import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: "" };
    }

    onInputChange(term) {
        this.setState({ term: term });
        this.props.onSearchTerm(term);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }
}

export default SearchBar;