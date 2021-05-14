import React, { Component } from 'react'; // import React, and pull off Component as Component

class SearchBar extends Component { // give SearchBar functionality from React.Component class
    constructor(props) { // like sol constructor, py init
        super(props);
        
        this.state = { term: '' };
    }

    // every class needs render method
    // whenever reference js variable inside jsx, {it}
    // controlled field is a form element whos value is set by the state
    render() {
        return (
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;
