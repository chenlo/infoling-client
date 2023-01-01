import { useState } from 'react'
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import { DocumentMinusIcon } from '@heroicons/react/24/outline';

function FormNovedadBibliograficaFormato({ formatos, setFormatos }) {

  const [inputFields, setInputFields] = useState([
    {
      isbn13: '',
      isbn10: '',
      formato: '',
      numPag: 0,
      precioEur: 0.00,
      precioUsa: 0.00,
    }
  ])

  const tiposFormato = [
    "eBook",
    "PDF",
    "eBook / PDF",
    "Otros"
  ]

  const handleFormChange = (index, e) => {
    let data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data);
    setFormatos(data);
  }

  const addFields = (e) => {
    e.preventDefault()
    let newfield = {
      isbn13: '',
      isbn10: '',
      formato: '',
      numPag: 0,
      precioEur: 0.00,
      precioUsa: 0.00,
    }
    setInputFields([...inputFields, newfield])
  }

  const removeField = (e) => {
    e.preventDefault()
    let data = [...inputFields];
    data.splice(1, 1)
    setInputFields(data)
  }

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
      <legend className="text-secondary bg-base-100 p-6 pt-3">Formatos de edición</legend>
      {
        inputFields.map((input, index) => {
          return (
            <div key={index}>
              <h3 className="text-l font-normal leading-normal mt-3 mb-4 text-cyan-800">
                Formato #{index + 1}
              </h3>
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
                    placeholder="ISBN-13: 978-1-56619-909-4"
                    value={inputFields[index].isbn13}
                    onChange={e => handleFormChange(index, e)}
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
                    placeholder="ISBN-10: 1-56619-909-3"
                    value={inputFields[index].isbn10}
                    onChange={e => handleFormChange(index, e)}
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
                    name="formato"
                    value={inputFields[index].formato}
                    onChange={e => handleFormChange(index, e)}
                  >
                    <option value="" disabled>Formato de la obra</option>
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
                    value={inputFields[index].numPag}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-base-700 required">
                    Especifique un precio en al menos una de las siguientes monedas
                  </p>
                </div>
                <div>
                  <div className="form-control">
                    <label
                      htmlFor="precioEur"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Precio (euros)
                    </label>
                    <label className="input-group flex items-center select-none">
                      <input
                        type="number"
                        step="any"
                        id="precioEur"
                        name="precioEur"
                        placeholder="0.01"
                        className="input input-bordered"
                        required
                        value={inputFields[index].precioEur}
                        onChange={e => handleFormChange(index, e)}
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
                    <label className="input-group flex items-center select-none">
                      <span className="mr-2">US $</span>
                      <input
                        type="number"
                        step="any"
                        id="precioUsa"
                        name="precioUsa"
                        placeholder="0.01"
                        className="input input-bordered"
                        value={inputFields[index].precioUsa}
                        onChange={e => handleFormChange(index, e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="mb-6 pt-5">
        {
          inputFields.length<2 
            ?
              <button
                className="btn btn-outline btn-secondary"
                disabled={!(inputFields[inputFields.length-1].isbn13 || !inputFields[inputFields.length-1].isbn10) || inputFields.length>=2}
                onClick={e => addFields(e)}
              >
                <DocumentPlusIcon className="flex-shrink-0 w-6 h-6 mr-2"  />Añadir formato de edición
              </button>
            :
              <button
                className="btn btn-outline btn-accent ml-3"
                onClick={e => removeField(e)}
              >
                <DocumentMinusIcon className="flex-shrink-0 w-6 h-6 mr-2"  />Eliminar formato de edición
              </button>
        }
      </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaFormato;
