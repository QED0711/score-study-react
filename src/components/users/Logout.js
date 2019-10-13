import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

const Logout = () => {

    const {setUser} = useContext(UserContext);

    setUser(null);

    return <Redirect to="/" />

}

export default Logout;