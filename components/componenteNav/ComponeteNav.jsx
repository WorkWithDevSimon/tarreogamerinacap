import "./ComponenteNav.css";
import React, { useState } from 'react';
import { close, menu } from "../../icon/indexicon";
import { NavLink } from 'react-router-dom';

export const ComponenteNav = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const alternarMenu = () => {
        setMenuAbierto(prev => !prev);
    };
    const cerrarMenu = () => {
        setMenuAbierto(false);
        window.scrollTo(0, 0); // Desplaza al principio de la página
    };
    return (
        <header className="header">
            <section className="container_nav">
                <NavLink to='/' className="logo" onClick={cerrarMenu}>
                    Ta<span>rr</span>eo Ga<span>me</span>r
                </NavLink>
                <nav className={`nav ${menuAbierto ? 'open' : 'closed'}`}>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Torneo'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Torneo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Cronograma'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Cronograma
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Reglamento'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Reglamento
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Fotogalería'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Fotogalería
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* <div className="redes">
                    <a href="" className="imgRedes"><img src={instagram} alt="" /></a>
                    <a href="" className="imgRedes"><img src={linkedin} alt="" /></a>
                </div> */}

                <button className="menu_icono" onClick={alternarMenu} aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
                    <img src={menuAbierto ? close : menu} alt={menuAbierto ? "Cerrar menú" : "Abrir menú"} />
                </button>
            </section>
        </header>
    );
};
