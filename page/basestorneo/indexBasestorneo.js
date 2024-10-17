const baseFortnite = {
    nombre: "Fortnite",
    descripcion: [
        "Modalidad: individual",
        "Número de participantes: Máximo de 100 jugadores (o ajustado según inscripción)",
        "Formato del Torneo: Mejor de 5 partidas",
        "Plataforma: PC, Consola",
        "Versión del Juego: Versión actual, modo Battle Royale"
    ],
    fecha: [
        "Inicio del Torneo: 18 de octubre de 2024 - 04:30 hrs",
        "Duración aproximada: Aproximadamente 30 minutos por partida",
        "Final del Torneo: 18 de octubre de 2024 - 07:00 hrs"
    ],
    premios: [
        "Premio 1er Lugar: Galvano + Disco Duro Externo 500 GB",
        "Otro Lugar: Diploma por participación"
    ],
    reglas: [
        "Duración de la partida: Cada partida dura hasta que solo quede un jugador en pie o se cumplan los límites de la zona",
        "Condiciones de Victoria: El ganador será determinado por el total de puntos acumulados a lo largo de las 5 partidas",
        "En el caso de que el jugador sea un docente, recibe 1000 puntos",
        "Puntuación: Eliminaciones (kills): 1 punto por cada eliminación, 1er lugar: 10 puntos, 2do lugar: 7 puntos, 3er - 5to lugar: 5 puntos, 6to - 10mo lugar: 3 puntos, 11vo - 20mo lugar: 1 punto",
        "Reglas de Desempate: En caso de empate en la puntuación total, se disputará una partida adicional"
    ]
};

const baseValorant = {
    nombre: "Valorant",
    descripcion: [
        "Modalidad: Equipos 5v5",
        "Número de Equipos: Máximo de 8 equipos",
        "Formato del Torneo: Brackets de eliminación doble (ganadores y perdedores)",
        "Plataforma: PC",
        "Versión del Juego: Actual"
    ],
    fecha: [
        "Inicio del Torneo: 18 de octubre de 2024 - 01:00 hrs",
        "Duración aproximada: 30 - 40 minutos por partida",
        "Final del Torneo: 18 de octubre de 2024 - 04:30 hrs en el Auditorio de la sede"
    ],
    premios: [
        "Premio 1er lugar: Galvano + Mouse",
        "Otro lugar: Diploma por participación"
    ],
    reglas: [
        "Modo de Juego: Competitivo 5v5",
        "Duración de la partida: Al mejor de 13 rondas (modo estándar de Valorant)",
        "Condiciones de Victoria: El equipo que gane 13 rondas primero será el ganador",
        "Elección de Agentes: Libre, cada jugador puede elegir su agente antes del inicio de cada ronda",
        "Reglas de Desempate: En caso de empate (12-12), se jugarán rondas de desempate hasta que haya un ganador",
        "Uso de Hacks o Cheats: Prohibido. Cualquier infracción resultará en la descalificación del equipo",
        "Actitud Deportiva: Conductas tóxicas o antideportivas serán sancionadas"
    ]
};

const baseLeagueOfLegends = {
    nombre: "League of Legends",
    descripcion: [
        "Modalidad: Equipos 5v5",
        "Número de Equipos: Máximo de 8 equipos",
        "Formato del Torneo: Brackets de eliminación doble (ganadores y perdedores)",
        "Plataforma: PC",
        "Versión del Juego: Actual, modo competitivo"
    ],
    fecha: [
        "Inicio del Torneo: 18 de octubre de 2024 - 22:00 hrs",
        "Duración aproximada: 30 - 40 minutos por partida",
        "Final del Torneo: 18 de octubre de 2024 - 00:30 hrs en el Auditorio de la sede"
    ],
    premios: [
        "Premio 1er lugar: Galvano + Mouse",
        "Otro lugar: Diploma por participación"
    ],
    reglas: [
        "Modo de Juego: 5v5 en la Grieta del Invocador",
        "Duración de la partida: Sin límite de tiempo, termina cuando un equipo destruye el nexo del otro",
        "Condiciones de Victoria: El equipo que destruya el nexo enemigo gana la partida",
        "Elección de Campeones: Modo de selección competitiva (draft), no se permiten campeones deshabilitados por Riot.",
        "Reglas de Desempate: En caso de empate en series, se jugará una partida extra bajo las mismas reglas"
    ]
};



const baseMitosYLeyendas = {
    nombre: "Mitos y Leyendas",
    formato: {
        modoClasificacion: "Doble eliminación",
        detalles: [
            "Los jugadores comenzarán en la llave superior.",
            "El que pierda un duelo bajará a la llave inferior.",
            "Si un jugador pierde en la llave inferior, quedará eliminado del torneo."
        ]
    },
    reglasConstruccionMazos: [
        "El mazo Castillo constará de 50 cartas, y el armado de este estará restringido a algunas reglas.",
        "Aliados: Cada mazo debe contener un mínimo de 16 cartas de Aliado.",
        "Oros: Solo se permiten Oros sin habilidades.",
        "Cartas Raras: Las cartas Ultra Reales (Negras), Promocionales (Verde), Mega Reales (Blanca) y Legendarias (Revisar Por tu cuenta) están limitadas; no pueden haber copias de estas en el mazo. Solo se podrán crear barajas con cartas, vasallas (azules), cortesanas (rojas) y reales (amarillas).",
        "Combinación de Razas: Los mazos pueden combinar hasta dos razas. Esto es opcional y queda a elección de cada jugador.",
        "Combinación de Eras: No hay restricciones en cuanto a la combinación de Eras y ediciones. Los jugadores pueden mezclar cartas de diferentes Eras, como Furia Extendido con Imperio y otras disponibles.",
        "Deck extra: Se permite un deck extra de hasta 10 cartas que pueden ser intercambiadas entre partidas dentro de un mismo enfrentamiento, respetando las reglas de construcción del mazo principal."
    ],
    inspeccionMazos: [
        "Antes de comenzar el torneo, se revisarán todos los mazos para asegurar que cumplen con las reglas establecidas.",
        "Los jugadores deben presentarse a la inspección con sus mazos completos y listos para jugar."
    ],
    juecesYResolucion: [
        "Habrá jueces designados para el torneo.",
        "Los jueces serán responsables de resolver cualquier consulta sobre los efectos de las cartas y cómo proceden en el juego.",
        "La decisión de los jueces será final y debe ser respetada por todos los participantes."
    ],
    reglasGenerales: [
        "Todos los jugadores deben ser respetuosos con sus oponentes y jueces.",
        "No se permite hacer cambios en los mazos durante el torneo, a excepción de las cartas del deck extra si es que se permite su uso.",
        "Cualquier forma de trampa o comportamiento antideportivo resultará en la descalificación inmediata del jugador."
    ],
    otrasConsideraciones: [
        "Se recomienda que los jugadores traigan fundas para sus cartas y un tapete de juego para proteger sus cartas durante las partidas.",
        "Los jugadores deben estar atentos a los horarios de las partidas y presentarse puntualmente."
    ]
};



export { baseFortnite, baseValorant, baseLeagueOfLegends, baseMitosYLeyendas }
