import "./ComponenteBasesDelTorneo.css";

 

export const ComponenteBasesDelTorneo3 = ({torneo}) => {
  return (
    <div className="torneos-container">
      <div className="torneo-card">
        <h1 className="titulo_base">Bases del torneo de {torneo.nombre}</h1>

        <h2 className="titulo_seccion">Descripción General</h2>
        <ul>
          <li><p>Modalidad:</p> {torneo.descripcionGeneral.modalidad}</li>
          <li><p>Plataforma:</p> {torneo.descripcionGeneral.plataforma}</li>
          <li><p>Formato del Torneo:</p> {torneo.descripcionGeneral.formatoTorneo}</li>
          <li><p>Versión del Juego:</p> {torneo.descripcionGeneral.versionJuego}</li>
        </ul>

        <h2 className="titulo_seccion">Fecha y Horario</h2>
        <ul>
          <li><p>Inicio del Torneo:</p> {torneo.fechaYHorario.inicio}</li>
          <li><p>Duración Aproximada:</p> {torneo.fechaYHorario.duracion}</li>
          <li><p>Final del Torneo:</p> {torneo.fechaYHorario.final}</li>
        </ul>

        <h2 className="titulo_seccion">Premios</h2>
        <ul>
          <li><p>Premio 1er Lugar:</p> {torneo.premios.primerLugar}</li>
          <li><p>Otro Lugar:</p> {torneo.premios.otroLugar}</li>
        </ul>

        <h2 className="titulo_seccion">Reglas Específicas del Juego</h2>
        <ul>
          <li><p>Duración del Partido:</p> {torneo.reglasJuego.duracionPartido}</li>
          <li><p>Tipo de Partidos:</p> {torneo.reglasJuego.tipoPartidos}</li>
          <li><p>Dificultad:</p> {torneo.reglasJuego.dificultad}</li>
          <li><p>Equipos Permitidos:</p> {torneo.reglasJuego.equiposPermitidos}</li>
          <li><p>Condiciones de Victoria:</p> {torneo.reglasJuego.condicionesVictoria}</li>
          <li><p>Empates:</p> {torneo.reglasJuego.empates}</li>
        </ul>

        <h2 className="titulo_seccion">Formato del Torneo</h2>
        <ul>
          <li><p>Fase de Eliminación Directa:</p> {torneo.formatoTorneo.faseEliminacion}</li>
          <li><p>Final:</p> {torneo.formatoTorneo.final}</li>
        </ul>

        <h2 className="titulo_seccion">Inscripción y Requisitos</h2>
        <ul>
          <li><p>Inscripción:</p> {torneo.inscripcionYRequisitos.inscripcion}</li>
          <li><p>Requisitos:</p> {torneo.inscripcionYRequisitos.requisitos}</li>
        </ul>

        <h2 className="titulo_seccion">Configuración y Avance</h2>
        <ul>
          <li><p>Velocidad del Juego:</p> {torneo.configuracionYAvance.velocidadJuego}</li>
          <li><p>Lesiones:</p> {torneo.configuracionYAvance.lesiones}</li>
          <li><p>Clima:</p> {torneo.configuracionYAvance.clima}</li>
          <li><p>Estadio:</p> {torneo.configuracionYAvance.estadio}</li>
          <li><p>Criterios de Avance:</p> {torneo.configuracionYAvance.criteriosAvance}</li>
        </ul>

        <h2 className="titulo_seccion">Contacto y Soporte</h2>
        <ul>
          <li><p>Organizadores:</p> {torneo.contactoYSoporte.organizadores}</li>
          <li><p>Contacto para consultas:</p> {torneo.contactoYSoporte.contacto}</li>
          <li><p>Canales de comunicación:</p> {torneo.contactoYSoporte.canales}</li>
        </ul>
      </div>
    </div>
  );
};