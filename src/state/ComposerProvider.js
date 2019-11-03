import React, {Component, createContext} from 'react';
import bindStateMethods from './bindStateMethods';
import { thisExpression } from '@babel/types';

// ----------------------- CONTEXT -----------------------

export const ComposerContext = createContext(null)


// ----------------------- STATE -----------------------
const state = {
    composers: null,
    selectedComposers: [],
    scores: [],
    selectedScore: null,
}

// ----------------------- STATE METHODS -----------------------

const stateMethods = {

    setComposers: function(composers){
        this.setState({composers})
    },
    
    setSelectedComposers: function(selectedComposers){
        this.setState({selectedComposers})
    },
    
    setScores: function(scores){
        this.setState({scores})
    },
    
    setSelectedScore: function(selectedScore){
        console.log(selectedScore)
        this.setState({selectedScore})
    },

}

// ----------------------- COMPOSER PROVIDER -----------------------  

export default class ComposerProvider extends Component {
    constructor(props){
        super(props);

        this.state = state;
        this.stateMethods = bindStateMethods(stateMethods, this);
    }

    render(){
        return(
            <ComposerContext.Provider value={{state: this.state, stateMethods: this.stateMethods}}>
                {this.props.children}
            </ComposerContext.Provider>
        )
    }
}