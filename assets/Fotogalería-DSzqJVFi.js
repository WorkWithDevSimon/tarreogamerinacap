import{r,j as a,_ as t}from"./index-yf3uNnkW.js";const l=({imagenes:s})=>{const[g,_]=r.useState([]),[m,n]=r.useState(null);r.useEffect(()=>{(async()=>{const e=Object.keys(s),o=await Promise.all(e.map(async d=>(await s[d]()).default));_(o)})()},[]);const p=i=>{n(i)},c=()=>{n(null)};return a.jsxs("section",{className:"container",children:[a.jsx("div",{className:"galeria",children:g.map((i,e)=>{const o=e%3===0?"img-short":e%3===1?"img-medium":"img-tall";return a.jsx("img",{src:i,alt:`Imagen ${e+1}`,className:o,onClick:()=>p(i)},e)})}),m&&a.jsx("div",{className:"modal show",onClick:c,children:a.jsx("img",{src:m,alt:"Imagen ampliada"})})]})},u=Object.assign({"../../img/imgFotoGaleria2024/Captura de pantalla 2024-10-14 020153 copy 2.png":()=>t(()=>import("./Captura de pantalla 2024-10-14 020153 copy 2-Ca0QlxVt.js"),[]),"../../img/imgFotoGaleria2024/Captura de pantalla 2024-10-16 223019.png":()=>t(()=>import("./Captura de pantalla 2024-10-16 223019-ckWTqOUW.js"),[]),"../../img/imgFotoGaleria2024/Captura de pantalla 2024-10-16 223143.png":()=>t(()=>import("./Captura de pantalla 2024-10-16 223143-B_PEJsEw.js"),[]),"../../img/imgFotoGaleria2024/Captura de pantalla 2024-10-17 000326.png":()=>t(()=>import("./Captura de pantalla 2024-10-17 000326-BBar_x3U.js"),[])}),E=Object.assign({"../../img/imgFotoGaleria2025/Captura de pantalla 2024-10-16 223019.png":()=>t(()=>import("./Captura de pantalla 2024-10-16 223019-DMCPbeW3.js"),[]),"../../img/imgFotoGaleria2025/Captura de pantalla 2024-10-16 235817.png":()=>t(()=>import("./Captura de pantalla 2024-10-16 235817-FkneYUeq.js"),[]),"../../img/imgFotoGaleria2025/Captura de pantalla 2024-10-16 235845.png":()=>t(()=>import("./Captura de pantalla 2024-10-16 235845-DbZ6lri8.js"),[]),"../../img/imgFotoGaleria2025/Captura de pantalla 2024-10-16 235902.png":()=>t(()=>import("./Captura de pantalla 2024-10-16 235902-B6cR99_Q.js"),[]),"../../img/imgFotoGaleria2025/Captura de pantalla 2024-10-17 000007.png":()=>t(()=>import("./Captura de pantalla 2024-10-17 000007-BiNcj8jx.js"),[])}),I=Object.assign({"../../img/imgFotoGaleria2026/Captura de pantalla 2024-10-17 000326.png":()=>t(()=>import("./Captura de pantalla 2024-10-17 000326-CAEi45ge.js"),[]),"../../img/imgFotoGaleria2026/Captura de pantalla 2024-10-17 000822.png":()=>t(()=>import("./Captura de pantalla 2024-10-17 000822-BUpmJ-JJ.js"),[]),"../../img/imgFotoGaleria2026/Captura de pantalla 2024-10-17 000841.png":()=>t(()=>import("./Captura de pantalla 2024-10-17 000841-tlQcKtU-.js"),[])}),C=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"TitulofotoGaleria",children:"Fotogaleria 2026"}),a.jsx(l,{imagenes:u}),a.jsx("h1",{className:"TitulofotoGaleria",children:"Fotogaleria 2025"}),a.jsx(l,{imagenes:E}),a.jsx("h1",{className:"TitulofotoGaleria",children:"Fotogaleria 2024"}),a.jsx(l,{imagenes:I})]});export{C as Fotogalería};
