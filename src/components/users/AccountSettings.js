import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';

import {UserContext} from '../../state/UserProvider';
import { changeUserEmail, changeUserPassword } from '../../js/apiRequests';

const AccountSettings = () => {

    const {state: s, stateMethods: sm} = useContext(UserContext);
    // s.user = {username: "qdizon", email: "qdizon@email.com"}
    if(!s.user) return <Redirect to="/" />

    const handleChangeEmailSubmit = e => {
        e.preventDefault()
        const email = document.getElementById("email").value;
        changeUserEmail({...s.user, email})
        // api call here
    }
    
    const handleChangePasswordSubmit = async e => {
        e.preventDefault();

        const currentPassword = document.getElementById("password").value
        const newPassword = document.getElementById("new-password").value
        const newPasswordConfirm = document.getElementById("new-password-confirm").value

        if(newPassword !== newPasswordConfirm) {
            return sm.setPasswordChangeMessage({message: "Password confirmation does not match new password", error: 1})
        }

        changeUserPassword({...s.user, currentPassword, newPassword, newPasswordConfirm}, sm)
    }

    return (
        <div>
            <h2>{s.user.username}</h2>
            <form className="user-form" id="email-settings-form" onSubmit={handleChangeEmailSubmit}>
                <label htmlFor="email">Email</label>
                <br/>
                <input id="email" type="text" defaultValue={s.user.email} />
                <br/>
                <input type="submit" value="change email" />
                <br/>
                <em>Note: you are not required to provide an email to use all the features of this application. Your email will only be used to verify identity if you forget your password.</em>
            </form>
            <hr/>
            
            <h3><em>Change Password</em></h3>

            <form className="user-form" id="password-settings-form" onSubmit={handleChangePasswordSubmit}>

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
                {
                s.passwordChangeMessage 
                &&
                <h5 style={{color: s.passwordChangeMessage?.error ? "red" : "black"}}>{s.passwordChangeMessage.message}</h5> 
                }
            </form>
        </div>
    )
}

export default AccountSettings;