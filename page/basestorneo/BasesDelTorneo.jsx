import { ComponenteBasesDelTorneo } from "../../components/ComponenteBasesDelTorneo/ComponenteBasesDelTorneo"
import "./BasesDelTorneo.css"

import { baseFortnite, baseValorant, baseLeagueOfLegends } from "./indexBasestorneo";

export const BasesDelTorneo = () => {
    return (
        <>
            <h1 className="tituloPrincialBases">Bases del tonerno</h1>
            <ComponenteBasesDelTorneo baseFortnite={baseFortnite}
                baseValorant={baseValorant}
                baseLeagueOfLegends={baseLeagueOfLegends}
            ></ComponenteBasesDelTorneo>
        </>
    )
}
