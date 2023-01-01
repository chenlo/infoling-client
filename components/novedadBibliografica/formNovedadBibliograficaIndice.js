import { useState } from "react";

function FormNovedadBibliograficaIndice({ indice, setIndice }) {
  
  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3 required">Índice</legend>
        <div className="mb-6">
        <textarea
          id="indice"
          name="indice"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Lorem ipsum..."
          onChange={e => setIndice(e.target.value)}
          value={indice}
        />
          <ul className='text-left text-xs leading-6 text-zinc-500 mt-4 mb-8'>
            <li>(1) <strong>Elimine los números de página, los puntos suspensivos, los tabuladores y/o los indentados</strong>.</li>
            <li>(2) <strong>No escriba los subcapítulos en mayúsculas</strong>.</li>
            <li>(3) Si su publicación recoge una recopilación de contribuciones, <strong>NO ponga el nombre de los autores ni el título de sus contribuciones en mayúsculas</strong>: escriba p. ej., Amparo Alcina. Metodología y tecnologías para la elaboración de diccionarios terminológicos onomasiológicos, pero <strong>NO ponga</strong> AMPARO ALCINA. Metodología y tecnologías para la elaboración de diccionarios terminológicos onomasiológicos o Amparo Alcina. METODOLOGÍA Y TECNOLOGÍAS PARA LA ELABORACIÓN DE DICCIONARIOS TERMINOLÓGICOS ONOMASIOLÓGICOS.</li>
          </ul>
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaIndice;
