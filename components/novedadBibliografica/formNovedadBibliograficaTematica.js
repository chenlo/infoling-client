import { useState } from "react";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline'

function FormNovedadBibliograficaTematica({ tematicas, setTematicas }) {
  
  const [tematicaSelected, setTematicaSelected] = useState("");

  const handleChangeTematica = (event) => {
    setTematicaSelected(event.target.value);
  };

  const tiposTematica = [
    "Adquisición del español como lengua primera (L1)",
    "Alteraciones del lenguaje",
    "Análisis del discurso",
    "Antropología lingüística",
    "Ciencia cognitiva",
    "Español como lengua extranjera (ELE), Español como segunda lengua (EL2)",
    "Filosofía del lenguaje",
    "Fonética",
    "Fonología",
    "Historia de la lingüística, Historiografía lingüística",
    "Humanidades digitales",
    "Lengua de señas",
    "Lenguas indígenas o de fuerte tradición oral y/o transmisión comunitaria",
    "Lexicografía, Lexicología",
    "Lingüística cognitiva",
    "Lingüística computacional",
    "Lingüística de corpus",
    "Lingüística forense",
    "Lingüística histórica",
    "Lingüística románica",
    "Morfología",
    "Neurolingüística",
    "Otras especialidades",
    "Pragmática",
    "Psicolingüística",
    "Retórica",
    "Semántica",
    "Sintaxis",
    "Sociolingüística",
    "Técnicas de comunicación",
    "Teorías lingüísticas",
    "Terminología",
    "Tipología",
    "Traducción",
    "Variedades del español"
  ]

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3">Temática</legend>
        <div className="mb-6">
            <select 
                className="select select-bordered w-full max-w-lg" 
                onChange={handleChangeTematica}
                value={tematicaSelected}
            >
                <option value="">
                    Temática de la obra
                </option>
                {tiposTematica.map((tipoTematica, index) => (
                    <option key={"tipo-tematica-" + index} value={tipoTematica}>
                        {tipoTematica}
                    </option>
                ))}
            </select>
        </div>
        <div className="mb-6">
            <button
                className="btn btn-outline btn-secondary mr-2"
                disabled={!tematicaSelected}
                onClick={(e) => {
                    e.preventDefault;
                    if (tematicaSelected) {
                        setTematicas([...tematicas, tematicaSelected]);
                        setTematicaSelected("");
                    }
                }}
                >
                <PlusCircleIcon className="flex-shrink-0 w-6 h-6 mr-2" /> Añadir temática
            </button>
            {
                tematicas.length>0 ?
                    <button
                        className="btn btn-accent"
                        onClick={(e) => {
                            e.preventDefault;
                            setTematicas([]);
                            setTematicaSelected('');
                        }}
                        >
                        <TrashIcon className="flex-shrink-0 w-6 h-6" /> Limpiar temáticas
                    </button>
                : <></>
            }
        </div>
        <div className="flex justify-start">
            {
                tematicas.length>0 ?
                    tematicas.map((item, index) =>
                        <div key={'tematica-'+index} className="badge badge-primary mr-2">
                            { item }
                        </div>
                    )
                :
                <div className="badge badge-accent mr-4">Debe añadir por lo menos una temática.</div>
            }
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaTematica;
