import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistListView from "./ArtistListView";

class ArtistList extends Component{
    constructor(props) {
        super(props);

        this.state = {
        };

        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            artist,
        } = this.props;

        return (
            <ArtistListView
                artist={artist}
                goTo={this.goTo}
            />
        );
    }
}
            
const mapStateToProps = state => {
    return{
        artist: state.artist,
    }
}
export default withRouter(
    connect(mapStateToProps)(ArtistList)
);