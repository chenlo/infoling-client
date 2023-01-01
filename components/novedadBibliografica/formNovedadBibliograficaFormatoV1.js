import React from "react";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'
import FormNovedadesBibliograficasFormatosLista from './formNovedadesBibliograficasFormatosList'

function FormNovedadBibliograficaFormato({formatos, setFormatos}) {

  const [isbn13, setIsbn13] = useState("")
  const [isbn10, setIsbn10] = useState("")
  const [formato, setFormato] = useState("")
  const [numPag, setNumPag] = useState(0)
  const [precioEur, setPrecioEur] = useState(0.00)
  const [precioUsa, setPrecioUsa] = useState(0.00)

  const tiposFormato = [
    "eBook",
    "PDF",
    "eBook / PDF",
    "Otros"
  ]

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
      <legend className="text-secondary bg-base-100 p-6 pt-3 required">Formato de edición</legend>
      <p className="text-sm text-base-700 mb-4 required">
        ISBN (Rellene al menos alguno de los campos)
      </p>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="isbn13"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            ISBN-13
          </label>
          <input
            type="text"
            id="isbn13"
            name="isbn13"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="978-3-16-148410-0"
            value={isbn13}
            onChange={e => setIsbn13(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="isbn10"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            ISBN-10 (antiguo)
          </label>
          <input
            type="text"
            id="isbn10"
            name="isbn10"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ISBN 0-545-01022-1"
            value={isbn10}
            onChange={e => setIsbn10(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="formato"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
          >
             Elija un formato
          </label>
          <select 
              className="select select-bordered w-full max-w-lg" 
              onChange={e => setFormato(e.target.value)}
              value={formato}
          >
              <option value=""></option>
              {tiposFormato.map((tipoFormato, index) => (
                  <option key={"tipo-formato-" + index} value={tipoFormato}>
                      {tipoFormato}
                  </option>
              ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="numPag"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
          >
            Número de págs.
          </label>
          <input
            type="number"
            id="numPag"
            name="numPag"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100"
            required
            value={numPag}
            onChange={e => setNumPag(e.target.value)}
          />
        </div>
        <div>
          <div className="form-control">
            <label
              htmlFor="precioEur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
            >
              Precio (euros)
            </label>
            <label className="input-group">
              <input
                type="number"
                step="any"
                id="precioEur"
                name="precioEur"
                placeholder="0.01"
                className="input input-bordered"
                required
                value={precioEur}
                onChange={e => setPrecioEur(e.target.value)}
              />
              <span className="ml-2">EUR</span>
            </label>
          </div>
        </div>
        <div>
          <div className="form-control">
            <label
              htmlFor="precioUsa"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Precio (dólares)
            </label>
            <label className="input-group">
              <span className="mr-2">US $</span>
              <input
                type="number"
                step="any"
                id="precioUsa"
                name="precioUsa"
                placeholder="0.01"
                className="input input-bordered"
                value={precioUsa}
                onChange={e => setPrecioUsa(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="col-start-2 col-end-3">
          <button
            className="btn btn-outline btn-secondary"
            disabled={!(isbn10 || isbn13) || !numPag || !precioEur}
            onClick={(e) => {
              e.preventDefault;
              let itemFormato = {
                'isbn13': isbn13,
                'isbn10': isbn10,
                'formato': formato,
                'numPag': numPag,
                'precioEur': precioEur,
                'precioUsa': precioUsa
              }
              if ((isbn10 || isbn13) && formato && numPag && precioEur) {
                setFormatos([...formatos, itemFormato]);
                setIsbn13('')
                setIsbn10('')
                setFormato('')
                setNumPag(0)
                setPrecioEur(0.00)
                setPrecioUsa(0.00)
              }
            }}
          >
            <PlusCircleIcon className="flex-shrink-0 w-6 h-6 mr-2" />Añadir otro formato de edición
          </button>
        </div>
      </div>
      <FormNovedadesBibliograficasFormatosLista formatos={formatos} setFormatos={setFormatos} />
    </fieldset>
  );
}

export default FormNovedadBibliograficaFormato;
