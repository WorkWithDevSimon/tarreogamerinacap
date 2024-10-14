import "./Reglamento.css"
import { ComponenteRegla } from '../../components/ComponenteReglamento/ComponenteRegla'
import {
    normasGenerales,
    normasConvivencia,
    reglasJuego,
    normasSeguridad,
    sanciones,
    aceptacionReglamento
} from './indexReglas'

export const Reglamento = () => {
    return (
        <>
            <h1 className="Reglamento_title">Reglamento Tarreo Gamer Inacap Osorno 2024</h1>
            <ComponenteRegla
                reglasTorneo={normasGenerales} SubituloReglas={"Normas Generales"}></ComponenteRegla>
            <ComponenteRegla
                reglasTorneo={normasConvivencia} SubituloReglas={"Normas de Convivencia y Comportamiento"}></ComponenteRegla>
            <ComponenteRegla
                reglasTorneo={reglasJuego} SubituloReglas={"Reglas del Juego"}></ComponenteRegla>
            <ComponenteRegla
                reglasTorneo={normasSeguridad} SubituloReglas={"Normas de Seguridad"}></ComponenteRegla>
            <ComponenteRegla
                reglasTorneo={sanciones} SubituloReglas={"Sanciones"}></ComponenteRegla>
            <ComponenteRegla
                reglasTorneo={aceptacionReglamento} SubituloReglas={"Aceptación del Reglamento"}></ComponenteRegla>



        </>
    )
}

