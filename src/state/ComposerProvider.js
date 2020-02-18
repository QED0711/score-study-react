import React, { Component, createContext } from "react";
import bindStateMethods from "./bindStateMethods";
import { thisExpression } from "@babel/types";

// ----------------------- CONTEXT -----------------------

export const ComposerContext = createContext(null);

// ----------------------- STATE -----------------------
const state = {
  composers: null,
  selectedComposers: [],
  scores: [],
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
    this.setState({ scores });
  },

  setSelectedScore: function(selectedScore) {
    console.log(selectedScore);
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
