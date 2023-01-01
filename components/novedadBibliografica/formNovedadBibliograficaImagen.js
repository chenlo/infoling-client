import { useState } from "react";

function FormNovedadBibliograficaImagen({ imagenes, setImagenes }) {
  
  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3 required">Imágenes</legend>
        <div className="mb-6">
        <textarea
          id="descripcion"
          name="descripcion"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Lorem ipsum..."
          onChange={e => setDescripcion(e.target.value)}
          value={descripcion}
        />
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaImagen;
