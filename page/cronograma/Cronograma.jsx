import { ComponenteCronograma } from "../../components/ComponenteCronograma/ComponenteCronograma"
import { ComponenteInicioTarreo } from "../../components/ComponenteCronograma/ComponenteInicioTarreo";
import { datosDelComiendoYfinalDelTarreo, CompetidoresPlataformaPC, CompetidoresPlataformaconsola, Competidoresjuego_de_Mesa } from "./indexcronograma";
import "./Cronograma.css"

export const Cronograma = () => {
    return (
        <>
            <h1 className="cronograma_title">Cronograma de Juegos 2024</h1>
            <ComponenteInicioTarreo datosDelComiendoYfinalDelTarreo={datosDelComiendoYfinalDelTarreo}></ComponenteInicioTarreo>
            {/* <ComponenteCronograma tituloDelCronograma={"Esto es un titulo"} CompetidoresPlataformaPC={CompetidoresPlataformaPC}></ComponenteCronograma> */}
            <ComponenteCronograma Recuerdo={"Recuerda traer tu PC (escritorio o portátil) para jugar Valorant y Fortnite."}
                CompetidoresPlataforma={CompetidoresPlataformaPC}></ComponenteCronograma>
            <ComponenteCronograma CompetidoresPlataforma={CompetidoresPlataformaconsola}></ComponenteCronograma>
            <ComponenteCronograma CompetidoresPlataforma={Competidoresjuego_de_Mesa}></ComponenteCronograma>
        </>
    )
}

