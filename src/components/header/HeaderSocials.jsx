import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="#" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="#" target="_blank"><FaGithub></FaGithub></a>
            <a href="#" target="_blank"><FiDribbble></FiDribbble></a>
        </div>
    )
}

export default HeaderSocials