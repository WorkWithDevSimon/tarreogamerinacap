import "./Torneoestilo.css"
import { ComponetesVideojuegos } from '../../components/ComponenteTorneo/ComponetesVideojuegos';
import { ComponenteCompetidores } from '../../components/ComponenteTorneo/ComponeteCompetidores';
import { ComponeteCompetidores_2 } from '../../components/ComponenteTorneo/ComponeteCompetidores_2';
import { LeagueofLegends, Counter_strike, valorant, competicionIndividual, VideojuegoDatos } from "./indexTorneo";
import { LeagueofLegends_2, counter_strike, VALORANT_logo4, fornite1, mortal, easportsfc24, mitosYleyenda, pokemon } from "../../img/indexImg";



export const Torneo = () => {
    return (
        <>
            <ComponetesVideojuegos VideojuegoDatos={VideojuegoDatos}></ComponetesVideojuegos>
            <h1 className='tituloTorneo'>Bienvenido al torneo 2024</h1>
            <h1 className='estilo_seccion_juegos'>Juegos de PC</h1>
            {/* ------------------------- */}
            <ComponenteCompetidores
                competidores={LeagueofLegends}
                competicionImg={LeagueofLegends_2}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}>
            </ComponenteCompetidores>
            <ComponenteCompetidores
                competidores={Counter_strike}
                competicionImg={counter_strike}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}>
            </ComponenteCompetidores>

            <ComponenteCompetidores
                competidores={valorant}
                competicionImg={VALORANT_logo4}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}>
            </ComponenteCompetidores>

            <ComponeteCompetidores_2
                competidores={competicionIndividual}
                competicionImg={fornite1}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}
            ></ComponeteCompetidores_2>

            {/* ------------------------- */}
            <h1 className='estilo_seccion_juegos'>Juegos de Consola</h1>
            <ComponeteCompetidores_2
                competidores={competicionIndividual}
                competicionImg={mortal}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}
            ></ComponeteCompetidores_2>
            <ComponeteCompetidores_2
                competidores={competicionIndividual}
                competicionImg={easportsfc24}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}
            ></ComponeteCompetidores_2>

            <h1 className='estilo_seccion_juegos'>Juegos de Mesa</h1>
            <ComponeteCompetidores_2
                competidores={competicionIndividual}
                competicionImg={mitosYleyenda}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}
            ></ComponeteCompetidores_2>
            <ComponeteCompetidores_2
                competidores={competicionIndividual}
                competicionImg={pokemon}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}
            ></ComponeteCompetidores_2>
        </>
    )
}
