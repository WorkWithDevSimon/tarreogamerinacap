
import "./ComponenteBasesDelTorneo.css";


export const ComponenteBaseDelTorneo4 = ({ torneoCounter }) => {
    return (
        <div className="torneos-container">
            <div className="torneo-card">
                <h1 className="titulo_base">Bases del torneo de {torneoCounter.nombre}</h1>

                <h2 className="titulo_seccion">Descripción General</h2>
                <ul>
                    <li><strong>Modalidad:</strong> {torneoCounter.descripcionGeneral.modalidad}</li>
                    <li><strong>Formato del Torneo:</strong> {torneoCounter.descripcionGeneral.formatoTorneo}</li>
                    <li><strong>Número de Participantes:</strong> {torneoCounter.descripcionGeneral.numeroParticipantes}</li>
                    <li><strong>Plataforma:</strong> {torneoCounter.descripcionGeneral.plataforma}</li>
                    <li><strong>Versión del Juego:</strong> {torneoCounter.descripcionGeneral.versionJuego}</li>
                </ul>

                <h2 className="titulo_seccion">Fecha y Horario</h2>
                <ul>
                    <li><strong>Inicio del Torneo:</strong> {torneoCounter.fechaYHorario.inicio}</li>
                    <li><strong>Duración Aproximada:</strong> {torneoCounter.fechaYHorario.duracion}</li>
                    <li><strong>Final del Torneo:</strong> {torneoCounter.fechaYHorario.final}</li>
                </ul>

                <h2 className="titulo_seccion">Premios</h2>
                <ul>
                    <li><strong>Premio 1er Lugar:</strong> {torneoCounter.premios.primerLugar}</li>
                    <li><strong>Premio 2do Lugar:</strong> {torneoCounter.premios.segundoLugar}</li>
                </ul>

                <h2 className="titulo_seccion">Reglas Específicas del Juego</h2>
                <ul>
                    <li><strong>Modo de Juego:</strong> {torneoCounter.reglasJuego.modoJuego}</li>
                    <li><strong>Duración de la Partida:</strong> {torneoCounter.reglasJuego.duracionPartida}</li>
                    <li><strong>Condiciones de Victoria:</strong> {torneoCounter.reglasJuego.condicionesVictoria}</li>
                    <li><strong>Puntuación:</strong>
                        <ul>
                            <li>{torneoCounter.reglasJuego.puntuacion.killEstandar}</li>
                            <li>{torneoCounter.reglasJuego.puntuacion.killArmaEspecifica}</li>
                            <li>{torneoCounter.reglasJuego.puntuacion.knifeKill}</li>
                        </ul>
                    </li>
                    <li><strong>Reglas de Desempate:</strong> {torneoCounter.reglasJuego.reglasDesempate}</li>
                </ul>

                <h2 className="titulo_seccion">Comportamiento en el Juego</h2>
                <ul>
                    <li><strong>Uso de Hacks o Cheats:</strong> {torneoCounter.comportamiento.usoHacks}</li>
                    <li><strong>Actitud Deportiva:</strong> {torneoCounter.comportamiento.actitudDeportiva}</li>
                </ul>

                <h2 className="titulo_seccion">Formato del Torneo</h2>
                <ul>
                    <li><strong>Fase de Grupos:</strong> {torneoCounter.formatoTorneo.faseGrupos}</li>
                    <li><strong>Eliminación Directa:</strong> {torneoCounter.formatoTorneo.eliminacionDirecta}</li>
                </ul>

                <h2 className="titulo_seccion">Inscripción y Requisitos</h2>
                <ul>
                    <li><strong>Inscripción:</strong> {torneoCounter.inscripcionYRequisitos.inscripcion}</li>
                    <li><strong>Requisitos:</strong> {torneoCounter.inscripcionYRequisitos.requisitos}</li>
                    <li><strong>Documentación:</strong> {torneoCounter.inscripcionYRequisitos.documentacion}</li>
                </ul>

                <h2 className="titulo_seccion">Puntuación y Avance</h2>
                <ul>
                    <li><strong>Sistema de Puntuación:</strong> {torneoCounter.puntuacionYAvance.sistemaPuntuacion}</li>
                    <li><strong>Clasificación a la Siguiente Fase:</strong> {torneoCounter.puntuacionYAvance.clasificacion}</li>
                </ul>

                <h2 className="titulo_seccion">Contacto y Soporte</h2>
                <ul>
                    <li><strong>Organizadores:</strong> {torneoCounter.contactoYSoporte.organizadores}</li>
                    <li><strong>Contacto para consultas:</strong> {torneoCounter.contactoYSoporte.contacto}</li>
                    <li><strong>Canales de comunicación:</strong> {torneoCounter.contactoYSoporte.canales}</li>
                </ul>
            </div>
        </div>
    );
};