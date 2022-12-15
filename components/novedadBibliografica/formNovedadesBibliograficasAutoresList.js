import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

function FormNovedadesBibliograficasAutoresList({ autores, setAutores }) {

    return (
        <div>
            {
                autores.length>0 ?
                    autores.map((autor, index) =>
                        <div key={index} className="alert shadow-lg mb-4">
                            <div>
                                <UserIcon className="flex-shrink-0 w-6 h-6" />
                                <span>
                                    <strong className="capitalize">{autor.tipo}: </strong>
                                    {autor.nombre} {autor.primerApellido} {autor.segundoApellido}
                                </span>
                            </div>
                            <div className="flex-none">
                                <button className="btn btn-sm btn-accent">
                                    <TrashIcon
                                        className="flex-shrink-0 w-6 h-6"
                                        onClick={(e, index) => {
                                            e.preventDefault;
                                            var array = [...autores];
                                            if (index !== -1) {
                                                array.splice(index, 1);
                                                setAutores(array);
                                            }
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    )
                    :
                    <div className="badge badge-accent">Debe añadir al menos un autor</div>
            }
        </div>
    )
}

export default FormNovedadesBibliograficasAutoresList    