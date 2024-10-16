// useMenu.js
import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useMenu = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const location = useLocation(); // Obtiene la ubicación actual
    const [scrollPosicion, setScrollPosicion] = useState(0); // Guarda la posición del scroll

    const alternarMenu = useCallback(() => {
        setMenuAbierto(prev => {
            const nuevoEstado = !prev;
            const docElement = document.documentElement; // Referencia a la raíz del documento
            if (nuevoEstado) {
                // Guardar la posición actual del scroll
                setScrollPosicion(docElement.scrollTop || document.body.scrollTop);
                // Bloquear el scroll en el body
                document.body.style.position = 'fixed';
                document.body.style.top = `-${docElement.scrollTop || document.body.scrollTop}px`;
                document.body.style.width = '100%'; // Para evitar que cambie el tamaño del body
            } else {
                // Desbloquear el scroll
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                // Restaurar la posición del scroll
                docElement.scrollTo(0, scrollPosicion);
            }
            return nuevoEstado;
        });
    }, [scrollPosicion]);

    const cerrarMenu = useCallback(() => {
        const docElement = document.documentElement; // Referencia a la raíz del documento
        setMenuAbierto(false);
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // Restaurar la posición del scroll
        docElement.scrollTo(0, scrollPosicion);
    }, [scrollPosicion]);

    // Efecto que se ejecuta al cambiar de ruta
    useEffect(() => {
        // Desplazarse al principio de la página sin animación visible
        document.documentElement.scrollTo(0, 0);
    }, [location]);

    return { menuAbierto, alternarMenu, cerrarMenu };
};

export default useMenu;
