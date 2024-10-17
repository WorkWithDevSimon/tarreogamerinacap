import { ComponenteBasesDelTorneo } from "../../components/ComponenteBasesDelTorneo/ComponenteBasesDelTorneo"

import { ComponenteBasesDelTorneo2 } from "../../components/ComponenteBasesDelTorneo/ComponenteBasesDelTorneo2";
import { ComponenteBasesDelTorneo3 } from "../../components/ComponenteBasesDelTorneo/ComponenteBasesDelTorneo3";

import "./BasesDelTorneo.css"

import { baseFortnite, baseValorant, baseLeagueOfLegends,baseMitosYLeyendas } from "./indexBasestorneo";

export const BasesDelTorneo = () => {
    return (
        <>
            <h1 className="tituloPrincialBases">Bases del tonerno</h1>
            <ComponenteBasesDelTorneo baseFortnite={baseFortnite}
                baseValorant={baseValorant}
                baseLeagueOfLegends={baseLeagueOfLegends}
            ></ComponenteBasesDelTorneo>

            <ComponenteBasesDelTorneo2 baseMitosYLeyendas={baseMitosYLeyendas} ></ComponenteBasesDelTorneo2>

            <ComponenteBasesDelTorneo3></ComponenteBasesDelTorneo3>
        </>
    )
}
