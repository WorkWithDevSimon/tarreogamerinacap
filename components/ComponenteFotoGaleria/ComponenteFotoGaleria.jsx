import React, { useEffect, useState } from 'react';
import "./ComponenteFotoGaleria.css";


export const ComponenteFotoGaleria = ({ imagenes }) => {
  const [imagenesArray, setImagenesArray] = useState([]);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    const cargarImagenes = async () => {
      const paths = Object.keys(imagenes);
      const imagenesImportadas = await Promise.all(
        paths.map(async (path) => {
          const mod = await imagenes[path]();
          return mod.default;
        })
      );
      setImagenesArray(imagenesImportadas);
    };

    cargarImagenes();
  }, []);

  const abrirModal = (src) => {
    setModalImg(src);
  };

  const cerrarModal = () => {
    setModalImg(null);
  };

  return (
    <section className="container">
      <div className="galeria">
        {imagenesArray.map((src, index) => {
          // Asignar clases de altura aleatoriamente
          const alturaClase = index % 3 === 0 ? 'img-short' : index % 3 === 1 ? 'img-medium' : 'img-tall';
          return (
            <img key={index} src={src} alt={`Imagen ${index + 1}`} className={alturaClase} onClick={() => abrirModal(src)} />
          );
        })}
      </div>

      {modalImg && (
        <div className="modal show" onClick={cerrarModal}>
          <img src={modalImg} alt="Imagen ampliada" />
        </div>
      )}
    </section>
  );
};
