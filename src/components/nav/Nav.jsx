import React from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareAdd} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook></BiBook></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine></RiServiceLine></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareAdd></BiMessageSquareAdd></a>
        </nav>
    )
}

export default Nav