import{j as a}from"./index-1ab23ba9.js";const s=({CompetidoresPlataforma:e,Recuerdo:o})=>a.jsx(a.Fragment,{children:a.jsxs("section",{className:"cronograma-container",children:[a.jsxs("table",{className:"cronograma-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"cronograma-header",children:"Juego"}),a.jsx("th",{className:"cronograma-header",children:"Plataforma"}),a.jsx("th",{className:"cronograma-header",children:"Hora"}),a.jsx("th",{className:"cronograma-header",children:"Equipos"})]})}),a.jsx("tbody",{children:e.map((r,l)=>a.jsxs("tr",{children:[a.jsx("td",{className:"cronograma-cell","data-header":"Juego",children:r.nombre}),a.jsx("td",{className:"cronograma-cell","data-header":"Plataforma",children:r.plataforma}),a.jsx("td",{className:"cronograma-cell","data-header":"Hora",children:r.hora}),a.jsx("td",{className:"cronograma-cell","data-header":"Equipos",children:r.equipos.map((n,m)=>a.jsxs("div",{children:[n.nombre,"  ",n.rival]},m))})]},l))})]}),a.jsx("p",{className:"cronograma-note",children:o})]})}),i=({datosDelComiendoYfinalDelTarreo:e})=>a.jsx("section",{className:"cronograma-container",children:a.jsxs("table",{className:"cronograma-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"cronograma-header",children:"Fecha de Inicio y Fecha de Fin"}),a.jsx("th",{className:"cronograma-header",children:"Hora de Inicio y Hora de Fin"})]})}),a.jsx("tbody",{children:e.map((o,r)=>a.jsxs("tr",{children:[a.jsx("td",{className:"cronograma-cell",children:o.fecha}),a.jsx("td",{className:"cronograma-cell",children:o.hora})]},r))})]})}),c=[{fecha:"18 y 19 octubre",hora:"21:00 (viernes) a 08:00 (sábado)"}],t=[{nombre:"League of Legends",plataforma:"PC",hora:"14:00,15:00",equipos:[{nombre:"Café vs",rival:"Amarillo"}]},{nombre:"League of Legends",plataforma:"PC",hora:"14:00,15:00",equipos:[{nombre:"Café vs",rival:"rojo"}]},{nombre:"League of Legends",plataforma:"PC",hora:"14:00,15:00",equipos:[{nombre:"Café vs",rival:"Amarillo"}]},{nombre:"Valorant",plataforma:"PC",hora:"15:00",equipos:[{nombre:"Café vs",rival:"Amarillo"}]},{nombre:"Counter Strike v1.6",plataforma:"PC",hora:"16:00",equipos:[{nombre:"Café vs",rival:"Amarillo"},{nombre:"Sopaipilla vs",rival:"Taco"}]},{nombre:"Fornite",plataforma:"PC",hora:"17:00",equipos:[{nombre:"Jugador individual"}]}],d=[{nombre:"Mortal combal",plataforma:"Consola",hora:"14:00,15:00",equipos:[{nombre:"Jugador individual"}]},{nombre:"EA sports fc 24",plataforma:"Consola",hora:"14:00,15:00",equipos:[{nombre:"Jugador individual"}]}],h=[{nombre:"Pokémon",plataforma:"Juego de Mesa (Cartas)",hora:"14:00,15:00",equipos:[{nombre:"Jugador individual"}]},{nombre:"Mitos y Leyendas",plataforma:"Juego de Mesa (Cartas) ",hora:"14:00,15:00",equipos:[{nombre:"Jugador individual"}]}];const g=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"cronograma_title",children:"Cronograma de Juegos 2024"}),a.jsx(i,{datosDelComiendoYfinalDelTarreo:c}),a.jsx(s,{Recuerdo:"Recuerda traer tu PC (escritorio o portátil) para jugar Valorant y Fortnite.",CompetidoresPlataforma:t}),a.jsx(s,{CompetidoresPlataforma:d}),a.jsx(s,{CompetidoresPlataforma:h})]});export{g as Cronograma};
