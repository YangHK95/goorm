import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import netflixLogo from '../imges/netflixLogo.jpg'
import userLogo from '../imges/userLogo.png'
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        navigate(`/search?q=${e.target.value}`)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY)
            if (window.scrollY > 50) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", () => { });
        };

    }, [])

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img alt='Netflix logo' src={netflixLogo} className="nav__logo" onClick={() => window.location.reload()} />
            <input value={searchValue} onChange={handleChange} className='nav__input' type='text' placeholder='영화를 검색하주세요' />
            <img alt='user logo' src={userLogo} className="nav__avatar" onClick={() => window.location.reload()} />

        </nav>
    )
}
