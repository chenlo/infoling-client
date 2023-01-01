import React from 'react'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

function FormNovedadesBibliograficasFormatosList({ formatos, setFormatos }) {

    return (
        <div>
            {
                formatos.length>0 ?
                    formatos.map((formato, index) =>
                        <div key={index} className="alert shadow-lg mb-4">
                            <div>
                                <BookOpenIcon className="flex-shrink-0 w-6 h-6" />
                                <span>
                                    <strong className='pl-3 pr-1'>ISBN-13:</strong>{formato.isbn13 ? formato.isbn13 : '-'}
                                    <strong className='pl-3 pr-1'>ISBN-10:</strong>{formato.isbn10 ? formato.isbn10 : '-'}
                                    <strong className='pl-3 pr-1'>núm. págs:</strong> {formato.numPag ? formato.numPag : '-'}
                                    <strong className='pl-3 pr-1'>formato:</strong> {formato.formato ? formato.formato : '-'}
                                    <strong className='pl-3 pr-1'>precio:</strong> {formato.precioEur ? formato.precioEur : '-'} € / {formato.precioUsa ? formato.precioUsa : '-'} $
                                </span>
                            </div>
                            <div className="flex-none">
                                <button className="btn btn-sm btn-accent">
                                    <TrashIcon
                                        className="flex-shrink-0 w-6 h-6"
                                        onClick={(e, index) => {
                                            e.preventDefault;
                                            var array = [...formatos];
                                            if (index !== -1) {
                                                array.splice(index, 1);
                                                setFormatos(array);
                                            }
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    )
                :
                <div className="badge badge-accent">Debe añadir al menos un formato</div>
            }
        </div>
    )
}

export default FormNovedadesBibliograficasFormatosList    