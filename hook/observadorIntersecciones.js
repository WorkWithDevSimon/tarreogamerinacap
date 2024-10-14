import { useState, useEffect, useRef } from 'react';

export const observadorIntersecciones = () => {
    const [isVisible, setIsVisible] = useState(false);
    const objetivoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        if (objetivoRef.current) {
            observer.observe(objetivoRef.current);
        }

        return () => {
            if (objetivoRef.current) {
                observer.unobserve(objetivoRef.current);
            }
        };
    }, []);

    return { isVisible, objetivoRef };
};