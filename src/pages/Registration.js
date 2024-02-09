import React from 'react';
import useInput from '../components/useInput/useInput';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const Registration = () => {

    const navigate = useNavigate();

    const firstName = useInput('')
    const lastName = useInput('')
    const email = useInput('')
    const username = useInput('')
    const password = useInput('')

    const registerUser = (e) => {
        e.preventDefault()
    
        const formData = new FormData()
    
        formData.append('firstName', firstName.value)
        formData.append('lastName', lastName.value)
        formData.append('email', email.value)
        formData.append('username', username.value)
        formData.append('password', password.value)
    
        UserService.register(formData).then((res) => {
            navigate('/')
        });
    }

    return (
        <div className="container">
            <h1 className="title-1">Sign up</h1>
            <div className='creation-form-card'>
                <form className="creation-form-content">
                    <div className='input-container'>
                        <label className="input-label">First name</label>
                        <input placeholder='Elon' name='model' className={'input' + (!firstName.isValid ? ' input-error' : '')}
                            value={firstName.value} onChange={firstName.onChange} onBlur={firstName.onBlur}/>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Last name</label>
                        <input placeholder='Musk' name='model' className={'input' + (!lastName.isValid ? ' input-error' : '')}
                            value={lastName.value} onChange={lastName.onChange} onBlur={lastName.onBlur}/>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Email</label>
                        <input placeholder='elon1337@gmail.com' name='model' className={'input' + (!email.isValid ? ' input-error' : '')}
                            value={email.value} onChange={email.onChange} onBlur={email.onBlur}/>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Username</label>
                        <input placeholder='elon1337' name='model' className={'input' + (!username.isValid ? ' input-error' : '')}
                            value={username.value} onChange={username.onChange} onBlur={username.onBlur}/>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Password</label>
                        <input placeholder='' type='password' name='password' className={'input' + (!password.isValid ? ' input-error' : '')}
                            value={password.value} onChange={password.onChange} onBlur={password.onBlur}/>
                    </div>
                    <div className="submit-btn-container">
                        <button className='btn btn-success' onClick={registerUser}
                        disabled={!firstName.isReadyForSent || !lastName.isReadyForSent || !username.isReadyForSent}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;