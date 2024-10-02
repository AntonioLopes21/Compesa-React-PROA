import React from "react"
import logo from "../assets/compesa-logo.png"

function Navbar() {

    return (
        
        <div className="navbar">
            <nav>
                <img src={logo} alt="logo" className="logo" width={150}/>
                <ul>
                    <li><a href="#home">Institucional</a></li>
                    <li><a href="#about">Notícia</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar