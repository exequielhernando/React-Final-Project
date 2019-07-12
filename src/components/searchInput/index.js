import React, { Component } from "react";
import './style.css'
class SearchInput extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestion,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const {
            isOpen,
        } = this.state;
        return(
            <div className="main-container">
                <input
                    type="search"
                    placeholder="Type the name of your favourite artist"
                    value={text}
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                {isOpen &&
                <div className="container-results">
                    {suggestion.map(suggestion =>
                    <div
                        key={suggestion.id}
                        component="div"
                        onClick={() => {
                            onChangeSelection(suggestion.title);
                            this.setState({ isOpen: false });
                        }}
                    >
                        {suggestion.title}
                    </div>)}
                </div>}
            </div>
        );
    }
}
export default SearchInput;