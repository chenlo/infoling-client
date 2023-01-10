import {useState} from 'react'

function ModalNovedadBibliograficaStep2({currentModal, setCurrentModal}) {

    const [terms, setTerms] = useState(false)
    
    const openNextModal = (e) => {
        e.preventDefault()
        document.getElementById('modal-form-nb-1').checked = false;
        document.getElementById('modal-form-nb-2').checked = false;
        document.getElementById('modal-form-nb-3').checked = true;
        setCurrentModal(currentModal+1)
    }

    const handleChangeTerms = () => {
        setTerms(!terms);
    };

    return (
        <>
            <input type="checkbox" id="modal-form-nb-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg pb-12">Condiciones de envío</h3>
                    <div className="p-6">
                        <p>
                            Para poder anunciar una publicación en Infoling, es imprescindible mandar un ejemplar de dicha publicación a la redacción de Infoling.
                        </p>
                        <div className="my-8">
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
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">¿Acepta Vd. enviar un ejemplar a la redacción de Infoling, concretamente, a la siguiente dirección?:</span>
                            </label>
                        </div>
                        <p>Carlos Subirats / Infoling<br/>
                            Universidad Autónoma de Barcelona<br/>
                            Facultad de Letras, Edificio B<br/>
                            Dept. Filología Española<br/>
                            08193 Bellaterra</p>
                    </div>
                    <div className="modal-action">
                        <label className="btn btn-primary" disabled={ !terms } onClick={(e)=>openNextModal(e)}>Registrar la novedad bibliográfica</label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalNovedadBibliograficaStep2
