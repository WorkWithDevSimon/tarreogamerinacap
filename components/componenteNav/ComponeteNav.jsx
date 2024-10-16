import "./ComponenteNav.css";
 import { close, menu } from "../../icon/indexicon";
import { NavLink } from 'react-router-dom';

import usarMenu from "../../hook/usarMenu";


export const ComponenteNav = () => {
    const { menuAbierto, alternarMenu, cerrarMenu } = usarMenu(); // Usar el hook

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