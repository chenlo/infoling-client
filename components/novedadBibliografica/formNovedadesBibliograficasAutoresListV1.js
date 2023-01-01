import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/outline'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

function FormNovedadesBibliograficasAutoresList({ autores, setAutores, setAutorIndexSelected }) {
    
    return (
        <div>
            {
                autores.length>0 ?
                    autores.map((autor, index) =>
                        <div key={"autor-" + index} className="alert shadow-lg mb-4">
                            <div className="flex-grow-0">
                                <UserIcon className="flex-shrink-0 w-6 h-6" />
                            </div>
                            <div className="flex-grow">
                                <strong className="capitalize">{autor.tipo}/a: </strong>
                                {autor.nombre} {autor.primerApellido} {autor.segundoApellido}
                            </div>
                            <div className="flex-grow-0">
                                { index>0 ? (
                                    <button className="btn btn-sm btn-accent mr-1">
                                        <ArrowUpIcon
                                            className="flex-shrink-0 w-6 h-6"
                                            onClick={(e) => {
                                                e.preventDefault;
                                                let autorSelected = autores[index];
                                                let autorPrev = autores[index-1];
                                                let arrayAutoresAux = [
                                                    ...autores.slice(0, index-1),
                                                    autorSelected,
                                                    autorPrev,
                                                    ...autores.slice(index + 1)
                                                ];
                                                setAutores(arrayAutoresAux);
                                            }}
                                        />
                                    </button>
                                ) : (    
                                    <button className="btn btn-sm btn-disabled mr-1">
                                       <ArrowUpIcon 
                                            className="flex-shrink-0 w-6 h-6"
                                            onClick={(e) => {
                                                e.preventDefault;
                                            }}
                                        />
                                    </button>
                                )}
                                { index!==autores.length-1 ? (
                                    <button className="btn btn-sm btn-accent mr-1">
                                        <ArrowDownIcon
                                            className="flex-shrink-0 w-6 h-6"
                                            onClick={(e) => {
                                                e.preventDefault;
                                                let autorSelected = autores[index];
                                                let autorNext = autores[index+1];
                                                let arrayAutoresAux = [
                                                    ...autores.slice(0, index),
                                                    autorNext,
                                                    autorSelected,
                                                    ...autores.slice(index+1,autores.length-1)
                                                ];
                                                setAutores(arrayAutoresAux);
                                            }}
                                        />
                                    </button>
                                ) : (    
                                    <button className="btn btn-sm btn-disabled mr-1">
                                       <ArrowDownIcon 
                                            className="flex-shrink-0 w-6 h-6"
                                            onClick={(e, index) => {
                                                e.preventDefault; 
                                            }}
                                        />
                                    </button>
                                )}
                                <button className="btn btn-sm btn-primary mr-1">
                                    <PencilIcon
                                        className="flex-shrink-0 w-6 h-6"
                                        onClick={(e) => {
                                            e.preventDefault;
                                            setAutorIndexSelected(index+1);
                                        }}
                                    />
                                </button>
                                <button className="btn btn-sm btn-secondary">
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