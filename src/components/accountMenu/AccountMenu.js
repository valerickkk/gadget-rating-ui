import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import img from './accountBtn.svg'
import './style.css'

const AccountMenu = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false)

    const logOut = () => {
        setAuth({})
        navigate('/')
    }
    
    return (
        <div className='account-menu-btn'>
            <button className='account-btn' onClick={() => setOpen(!isOpen)}>
                <img src={img} className='account-btn__icon' alt='account'/>
            </button>
            <ul className={`menu ${isOpen ? "active" : ""}`}>
                <li className='menu-item' type='button'>Profile</li>
                <li className='menu-item' onClick={logOut}>Exit</li>
            </ul>
        </div>
    );
};

export default AccountMenu;