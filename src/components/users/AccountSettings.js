import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';

import {UserContext} from '../../state/UserProvider';
import { changeUserPassword } from '../../js/apiRequests';

const AccountSettings = () => {

    const {state: s, stateMethods: sm} = useContext(UserContext);
    // s.user = {username: "qdizon", email: "qdizon@email.com"}
    if(!s.user) return <Redirect to="/" />

    const handleChangeEmailSubmit = e => {
        const newEmail = document.getElementById("email").value;
        // api call here
    }
    
    const handleChangePasswordSubmit = e => {
        e.preventDefault();
        
        const currentPassword = document.getElementById("password").value
        const newPassword = document.getElementById("new-password").value
        const newPasswordConfirm = document.getElementById("new-password-confirm").value

        changeUserPassword({...s.user, currentPassword, newPassword, newPasswordConfirm}, sm)
    }

    return (
        <div>
            <h2>{s.user.username}</h2>
            <form id="email-settings-form">
                <label htmlFor="email">Email</label>
                <br/>
                <input id="email" type="text" defaultValue={s.user.email} />
                <br/>
                <input type="submit" value="change email" />
            </form>
            <hr/>
            <form id="password-settings-form" onSubmit={handleChangePasswordSubmit}>

                <label htmlFor="password">Current Password:</label>
                <br/>
                <input id="password" type="password" required />
                <br/>
                <label htmlFor="new-password">New Password:</label>
                <br/>
                <input id="new-password" type="password" required />
                <br/>
                <label htmlFor="new-password-confirm">Confirm New Password:</label>
                <br/>
                <input id="new-password-confirm" type="password" required />

                <br/>

                <input type="submit" value="change Password" />
            </form>
        </div>
    )
}

export default AccountSettings;