import './app.css';
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navegador } from '../page/nav/Navegador';
import { Footer } from "../page/footer/Footer";

// Carga de rutas de manera perezosa (lazy loading)
const Inicio = lazy(() => import("../page/Inicio/Inicio").then(x => {
  console.log('Inicio cargado');
  return { default: x.Inicio };
}));
const Torneo = lazy(() => import("../page/torneo/Torneo").then(x => {
  console.log('Torneo cargado');
  return { default: x.Torneo };
}));
const BasesDelTorneo = lazy(() => import("../page/basestorneo/BasesDelTorneo").then(x => {
  console.log('Bases Del Torneo cargado');
  return { default: x.BasesDelTorneo };
}));
const Cronograma = lazy(() => import("../page/cronograma/Cronograma").then(x => {
  console.log('Cronograma cargado');
  return { default: x.Cronograma };
}));
const Reglamento = lazy(() => import("../page/reglamento/Reglamento").then(x => {
  console.log('Reglamento cargado');
  return { default: x.Reglamento };
}));
const Fotogalería = lazy(() => import("../page/fotogaleria/Fotogalería").then(x => {
  console.log('Fotogalería cargada');
  return { default: x.Fotogalería };
}));

const App = () => {
  return (
    <>
      <Navegador />
      <main>
        <Suspense fallback={<div className='cargando'></div>}>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Torneo' element={<Torneo />} />
            <Route path='/BasesDelTorneo' element={<BasesDelTorneo />} />
            <Route path='/Cronograma' element={<Cronograma />} />
            <Route path='/Reglamento' element={<Reglamento />} />
            <Route path='/Fotogalería' element={<Fotogalería />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
