import React from 'react';
import { ComponeteInicio } from '../../components/ComponenteIncio/ComponeteInicio';
import { ComponenteAcerca } from '../../components/ComponenteIncio/ComponenteAcerca';
import { ComponenteObjetivo } from '../../components/ComponenteIncio/ComponenteObjetivo';

export const Inicio = () => {

    return (
        <>
            <ComponeteInicio></ComponeteInicio>
            <ComponenteAcerca></ComponenteAcerca>
            <ComponenteObjetivo></ComponenteObjetivo>
            <></>
        </>
    );
};
