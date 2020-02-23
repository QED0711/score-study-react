import React, { Component, createContext } from "react";
import bindStateMethods from "./bindStateMethods";

// ----------------------- HELPERS -----------------------
import processGenres from '../js/processGenres';

// ----------------------- CONTEXT -----------------------

export const ComposerContext = createContext(null);

// ----------------------- STATE -----------------------
const state = {
  composers: null,
  selectedComposers: [],
  scores: [],
  genres: null,
  selectedGenres: [],

  filteredScores: [],

  selectedScore: null,

  selectedScoreURL: null, // used only with comments that provide a direct (not generated) score url

  selectedScoreComments: null
};

// ----------------------- STATE METHODS -----------------------

const stateMethods = {
  setComposers: function(composers) {
    this.setState({ composers });
  },

  setSelectedComposers: function(selectedComposers) {
    this.setState({ selectedComposers });
  },

  setScores: function(scores) {
    const genres = processGenres(scores)

    // if some genres have already been defined, then filter scores on those genres
    const filteredScores = this.state.selectedGenres.length 
    ? 
    scores.filter(score => {
      for (let genre of this.state.selectedGenres){
        if(score.tags.includes(genre)) return true;
      }
      return false
    })
    :
    scores


    this.setState({ scores, genres, filteredScores }, () => {
      // in the event that the user changes composer selection without updating genre filters first
      // and this change causes there to be no scores that match the new composer selection and the previous genre selection
      // then we remove all previous selected genres and set the filtered scores to all scores by the new composer selection
      if(!this.state.filteredScores.length && this.state.selectedGenres.length){
        this.setState({selectedGenres: [], filteredScores: scores})
      }
    });
  },

  setSelectedGenres: function(selectedGenres){

    // filter scores based on selected genre
    const filteredScores = selectedGenres.length 
    ?
    this.state.scores.filter(score => {
      for (let genre of selectedGenres){
        if(score.tags.includes(genre)) return true;
      }
      return false
    })
    :
    this.state.scores

    this.setState({selectedGenres, filteredScores})
  },

  setFilteredScores: function(filteredScores) {
      this.setState({filteredScores});
  },

  setSelectedScore: function(selectedScore) {
    // console.log(selectedScore);
    this.setState({ 
      selectedScore,
      selectedScoreComments: null
     });
  },

  setSelectedScoreURL: function(scoreURL){
    this.setState({selectedScoreURL: scoreURL})
  },

  setSelectedScoreComments: function(comments) {
    this.setState({selectedScoreComments: comments})
  }
};

// ----------------------- COMPOSER PROVIDER -----------------------

export default class ComposerProvider extends Component {
  constructor(props) {
    super(props);

    this.state = state;
    this.stateMethods = bindStateMethods(stateMethods, this);
  }

  render() {
    return (
      <ComposerContext.Provider
        value={{ state: this.state, stateMethods: this.stateMethods }}
      >
        {this.props.children}
      </ComposerContext.Provider>
    );
  }
}
