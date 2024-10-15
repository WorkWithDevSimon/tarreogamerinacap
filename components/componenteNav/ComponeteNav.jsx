import "./ComponenteNav.css";
import React, { useState, useCallback } from 'react';
import { close, menu } from "../../icon/indexicon";
import { NavLink } from 'react-router-dom';

export const ComponenteNav = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    // Función para alternar el estado del menú
    const alternarMenu = useCallback(() => {
        setMenuAbierto(prev => !prev);
    }, []);

    // Función para cerrar el menú
    const cerrarMenu = useCallback(() => {
        setMenuAbierto(false);
    }, []);

    return (
        <header className="header">
            <section className="container_nav">
                <NavLink to='/' className="logo" onClick={cerrarMenu}>
                    Ta<span>rr</span>eo Ga<span>me</span>r
                </NavLink>

                <nav className={`nav ${menuAbierto ? 'open' : 'closed'}`}>
                    <ul>
                        {[
                            { to: '/', label: 'Inicio' },
                            { to: '/Torneo', label: 'Torneo' },
                            { to: '/Cronograma', label: 'Cronograma' },
                            { to: '/Reglamento', label: 'Reglamento' },
                            { to: '/Fotogalería', label: 'Fotogalería' },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    onClick={cerrarMenu}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="menu_icono"
                    onClick={alternarMenu}
                    aria-expanded={menuAbierto}
                    aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                >
                    <img src={menuAbierto ? close : menu} alt={menuAbierto ? "Cerrar menú" : "Abrir menú"} />
                </button>
            </section>
        </header>
    );
};
