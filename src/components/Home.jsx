import React, { Component} from 'react';
import {connect} from 'react-redux'
import Header from './header/Header';
import ArtistList from './artistList/ArtistList'
import SearchInput from './searchInput/SearchInput';
import findSuggestion from '../redux/actions/findSuggestion';
import findArtist from '../redux/actions/findArtist'
import './mainView.css'
class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            text:'',
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }
    onChangeText(text) {
        this.setState({ text })
        this.props.findSuggestion(text);
    }
    onChangeSelection(text) {
        this.setState({ text })
        this.props.findArtist(text);
    }
    render(){
        const {text} = this.state;
        const {suggestion} = this.props;
        
        return(
            <div>
                <Header/>
                <article>
                    <div>
                        <SearchInput
                            text={text}
                            suggestion={suggestion}
                            onChangeText={this.onChangeText}
                            onChangeSelection={this.onChangeSelection}
                        />
                    </div>
                    <div>
                        <ArtistList                             
                        />
                    </div>
                </article>
            </div>
            );

    }
}
const mapStateToProps = state => {
    return{
        suggestion: state.suggestion,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        findSuggestion: (text) => dispatch(findSuggestion(text)),
        findArtist: (text) => dispatch(findArtist(text)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
