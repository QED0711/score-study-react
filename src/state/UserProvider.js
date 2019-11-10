import React, { Component, createContext } from "react";

import bindStateMethods from './bindStateMethods';

export const UserContext = createContext(null);

const state = {
    user: null,
    signInError: null,
    passwordChangeMessage: null,
}

const stateMethods = {
    setUser: function (user) {
        this.setState({user, signInError: null})
    },
    setSignInError: function(signInError){
        this.setState({signInError})
    },
    setPasswordChangeMessage: function(passwordChangeMessage){
        this.setState({passwordChangeMessage})
    }
}

export default class UserProvider extends Component {
    constructor(props){
        super(props);

        this.state = state;
        this.stateMethods = bindStateMethods(stateMethods, this);

    }

    render(){
        return(
            <UserContext.Provider value={{state: this.state, stateMethods: this.stateMethods}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
