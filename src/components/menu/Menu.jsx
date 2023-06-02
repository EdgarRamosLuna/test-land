import { Link } from "react-router-dom";
import "./menu.scss"
import React from 'react';


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/" className="logo">
                        Inicio
                    </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#autos">Modelos</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#comunidad">¿Como funciona?</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#beneficios">Beneficios</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/vacante">Únete al equipo</Link>
                </li>
            </ul>
        </div>
    )
}
