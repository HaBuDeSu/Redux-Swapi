import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getData } from "../actions"

class CharacterListView extends React.Component {

  componentDidMount() {
    this.getData
  }

  render() {
    if (this.props.isFetching) {
      return (<p>Fetching...</p>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps,{getData})(CharacterListView);
