import { useState } from 'react'
import FormNovedadesBibliograficasAutoresLista from './formNovedadesBibliograficasAutoresList'
import { UserPlusIcon } from '@heroicons/react/24/outline';

function FormNovedadBibliograficaAutor({ autores, setAutores }) {

  const [nombre, setNombre] = useState("")
  const [primerApellido, setPrimerApellido] = useState("")
  const [segundoApellido, setSegundoApellido] = useState("")
  const [tipo, setTipo] = useState("autor")

  const handleTipoAutor = (event) => {
    setTipo(event.target.value)
  }

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
      <legend className="text-secondary bg-base-100 p-6 pt-3">Datos de los autores/as</legend>
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div className="col-span-2">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Miguel"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="primerApellido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primer apeliido *
            </label>
            <input
              type="text"
              id="primerApellido"
              name="primerApellido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="de Cervantes"
              value={primerApellido}
              onChange={e => setPrimerApellido(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="segundoApellido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Segundo apeliido
            </label>
            <input
              type="text"
              id="segundoApellido"
              name="segundoApellido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Saavedra"
              value={segundoApellido}
              onChange={e => setSegundoApellido(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div>
          <input
            type="radio"
            id="tipo-autor"
            name="tipo"
            className="radio pr-2"
            value="autor"
            checked={tipo === 'autor'}
            onChange={handleTipoAutor}
          />
          <label htmlFor="tipo-autor" className="ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Autor/a</label>
          <input type="radio" id="tipo-editor" name="tipo" className="radio" value="editor" checked={tipo === 'editor'} onChange={handleTipoAutor} />
          <label htmlFor="tipo-editor" className="ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Editor/a</label>
          <input type="radio" id="tipo-director" name="tipo" className="radio" value="director" checked={tipo === 'director'} onChange={handleTipoAutor} />
          <label htmlFor="tipo-director" className="ml-2 mr-4 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Director/a</label>
          <input type="radio" id="tipo-coordinador" name="tipo" className="radio" value="coordinador" checked={tipo === 'coordinador'} onChange={handleTipoAutor} />
          <label htmlFor="tipo-coordinador" className="ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Coordinador/a</label>
        </div>
      </div>
      <div className="mb-6">
        <button
          className="btn btn-outline btn-secondary"
          disabled={ !tipo || !nombre || !primerApellido }
          onClick={(e) => {
            e.preventDefault;
            let autor = {
              'nombre': nombre,
              'primerApellido': primerApellido,
              'segundoApellido': segundoApellido,
              'tipo': tipo,
            }
            if(tipo && nombre && primerApellido){
              setAutores([...autores, autor]);
              setNombre('')
              setPrimerApellido('')
              setSegundoApellido('')
              setTipo('autor')
            }
          }}
        >
          <UserPlusIcon className="flex-shrink-0 w-6 h-6 mr-2" />Añadir autor/a
        </button>
      </div>
    <FormNovedadesBibliograficasAutoresLista autores={autores} setAutores={setAutores} />
    </fieldset >
  );
}

export default FormNovedadBibliograficaAutor;
