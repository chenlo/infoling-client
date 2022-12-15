import { useState } from 'react'
import FormNovedadBibliograficaAutor from './formNovedadBibliograficaAutor'
import FormNovedadBibliograficaFormato from './formNovedadBibliograficaFormato'
import FormNovedadBibliograficaTematica from './formNovedadBibliograficaTematica'
import FormNovedadBibliograficaDescripcion from './formNovedadBibliograficaDescripcion'
import FormNovedadBibliograficaIndice from './formNovedadBibliograficaIndice'
import { ThreeDots } from 'react-loader-spinner'
import { toast } from 'react-toastify'

function FormNovedadBibliografica() {

  const [loading, setLoading] = useState(false)

  const [autores, setAutores] = useState([]);
  const [formatos, setFormatos] = useState([]);

  const [tematicas, setTematicas] = useState([])

  const [titulo, setTitulo] = useState("")
  const [subtitulo, setSubtitulo] = useState("")
  const [anno, setAnno] = useState("")
  const [lugarEdicion, setLugarEdicion] = useState("")
  const [editorial, setEditorial] = useState("")
  const [coleccion, setColeccion] = useState("")
  const [url, setUrl] = useState("")

  const [indice, setIndice] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [imagen, setImagen] = useState("")

  const [terms, setTerms] = useState(false)

  const handleChangeTerms = () => {
    setTerms(!terms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/novedad-bibliografica`, {
        autores,
        titulo,
        subtitulo,
        anno,
        lugarEdicion,
        editorial,
        coleccion,
        url,
        tematicas,
        formatos,
        indice,
        descripcion,
        imagen
      })
      toast.success('Novedad registrada correctamente. Ahora puede identificarse.')
    } catch (err) {
      if(err.response){
        toast.error('Error: ' + err.response.data)
      } else {
        toast.error('Error al registrar el libro. El servidor no responde.')
      }
    }
    setLoading(false)
  }

  return (
    <>
    <div className="alert alert-info shadow-sm mb-4">
      <div className='text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>No escriba en mayúsculas el nombre y/o apellido(s) del autor, el título o cualquier otra información sobre la publicación. Escriba, p. ej., Rodolfo Lenz, pero no RODOLFO LENZ; si se trata de un título, escriba La oración y sus partes, pero no LA ORACIÓN Y SUS PARTES.</span>
      </div>
    </div>
    <div className="alert alert-info shadow-sm mb-8">
      <div className='text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Infoling sólo puede anunciar las publicaciones sobre didáctica del ELE que vayan dirigidas a la formación del profesorado.</span>
      </div>
    </div>
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <FormNovedadBibliograficaAutor autores={autores} setAutores={setAutores} />
      <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3">Datos de la obra</legend>
        <div className="mb-6">
          <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Título *</label>
          <input
            type="text"
            id="titulo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Frankenstein"
            required
            autoFocus
            onChange={e => setTitulo(e.target.value)}
            value={titulo}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subtitulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subtítulo</label>
          <input
            type="text"
            id="subtitulo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="El moderno Prometeo"
            onChange={e => setSubtitulo(e.target.value)}
            required
            value={subtitulo}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="editorial"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Editorial *
          </label>
          <input
            type="text"
            id="editorial"
            name="editorial"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ediciones Complutense"
            required
            onChange={e => setEditorial(e.target.value)}
            value={editorial}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="coleccion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Colección
          </label>
          <input
            type="text"
            id="coleccion"
            name="coleccion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Obras universales"
            onChange={e => setColeccion(e.target.value)}
            value={coleccion}
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="anno"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Año de publicación *
            </label>
            <input
              type="number"
              id="anno"
              name="anno"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="1999"
              max="2100"
              placeholder="2022"
              onChange={e => setAnno(e.target.value)}
              required
              value={anno}
            />
          </div>
          <div>
            <label
              htmlFor="lugarEdicion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Lugar de edición *
            </label>
            <input
              type="text"
              id="lugarEdicion"
              name="lugarEdicion"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Barcelona"
              onChange={e => setLugarEdicion(e.target.value)}
              required
              value={lugarEdicion}
            />
          </div>
          
        </div>
        <div className="mb-6">
          <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL de acceso al libro</label>
          <input
            type="text"
            id="url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https:/web.com/libro.pdf"
            onChange={e => setUrl(e.target.value)}           
            value={url}
          />
        </div>
      </fieldset>
      <FormNovedadBibliograficaTematica tematicas={tematicas} setTematicas={setTematicas} />
      <FormNovedadBibliograficaFormato formatos={formatos} setFormatos={setFormatos} />
      <FormNovedadBibliograficaDescripcion descripcion={descripcion} setDescripcion={setDescripcion} />
      <FormNovedadBibliograficaIndice indice={indice} setIndice={setIndice} />
      <div className="mb-6">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            value={terms}
            className="sr-only peer"
            id="terms"
            name="terms"
            checked={terms}
            onChange={handleChangeTerms}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos personales</span>
        </label>
      </div>
      <div className="mb-6">
        <button type="submit" className="btn btn-primary" disabled={ !terms } >
          {loading ? <ThreeDots height="25" width="40" color="#fff" ariaLabel="three-dots-loading" /> : "Enviar"}
        </button>
      </div>
    </form>
    </>
  )
}

export default FormNovedadBibliografica