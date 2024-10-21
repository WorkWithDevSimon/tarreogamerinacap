import "./Torneoestilo.css"
import { ComponetesVideojuegos } from '../../components/ComponenteTorneo/ComponetesVideojuegos';
import { ComponenteCompetidores } from '../../components/ComponenteTorneo/ComponeteCompetidores';
import { ComponeteCompetidores_2 } from '../../components/ComponenteTorneo/ComponeteCompetidores_2';
import { LeagueofLegends, Counter_strike, valorant, competicionIndividual, VideojuegoDatos, Datosfornite, moraltKombal, EA_sports_fc_24 } from "./indexTorneo";
import { LeagueofLegends_2, counter_strike, VALORANT_logo4, fornite1, mortal, easportsfc24, mitosYleyenda, pokemon } from "../../img/indexImg";
import { NavLink } from "react-router-dom";



export const Torneo = () => {
    return (
        <>
            <ComponetesVideojuegos VideojuegoDatos={VideojuegoDatos}></ComponetesVideojuegos>
            <h1 className='tituloTorneo'>Bienvenido al torneo 2024</h1>
            <div className="button_container">
                <button className='boton_torno'>
                    <NavLink to='/BasesDelTorneo'  >
                        ¡Bases del Torneo!
                    </NavLink>
                </button>
            </div>
            <h1 className='estilo_seccion_juegos'>Juegos de PC</h1>
            {/* ------------------------- */}
            <ComponenteCompetidores
                competidores={LeagueofLegends}
                competicionImg={LeagueofLegends_2}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}>
            </ComponenteCompetidores>

            <ComponenteCompetidores
                competidores={valorant}
                competicionImg={VALORANT_logo4}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}>
            </ComponenteCompetidores>
            <ComponenteCompetidores
                competidores={Counter_strike}
                competicionImg={counter_strike}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}>
            </ComponenteCompetidores>

            <ComponenteCompetidores
                competidores={Datosfornite}
                competicionImg={fornite1}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}>
            </ComponenteCompetidores>



            {/* ------------------------- */}
            <h1 className='estilo_seccion_juegos'>Juegos de Consola</h1>

            <ComponenteCompetidores
                competidores={moraltKombal}
                competicionImg={mortal}
                agregarClassecompetidores={"competidores"}
                agregarClasseanimate={"animate"}>
            </ComponenteCompetidores>
            <ComponenteCompetidores
                competidores={EA_sports_fc_24}
                competicionImg={easportsfc24}
                agregarClassecompetidores={"competidores_2"}
                agregarClasseanimate={"animate_2"}>
            </ComponenteCompetidores>


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
