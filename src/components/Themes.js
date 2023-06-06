import React, { useEffect, useState } from 'react'
import ThemesItem from './ThemesItem'
import {BsSun , BsMoon} from 'react-icons/bs'
import './Themes.css'

const getStorageTheme = () =>{
    let theme = 'light-theme';
    //if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    //}

    return theme;
}

function Themes() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () =>{
        if(theme === 'light-theme'){
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect (()=>{
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);


    return (
    <div>
        <div className="style__switcher">
            <div className='theme__toggler' onClick={toggleTheme}>
                {theme === 'light-theme' ? <BsMoon/> : <BsSun />}
            </div>
        </div>
    </div>
    )
}

export default Themes