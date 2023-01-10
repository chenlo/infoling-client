function ModalNovedadBibliograficaStep3({setCurrentModal}) {

    const openNextModal = (e) => {
        e.preventDefault()
        setCurrentModal(0)
    }

    return (
        <>
            <input type="checkbox" id="modal-form-nb-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg pb-12">Gracias</h3>
                    <div className="p-6">
                        <p>
                            Lorem...
                        </p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="modal-form-nb-1" className="btn btn-secondary">Modificar</label>
                        <label className="btn btn-primary" onClick={(e)=>openNextModal(e)}>Confirmar</label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalNovedadBibliograficaStep3
