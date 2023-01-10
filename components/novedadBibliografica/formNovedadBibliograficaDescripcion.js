import WYSIWYGEditor from '../site/wysiwyg';

function FormNovedadBibliograficaDescripcion({ descripcion, setDescripcion }) {
  
  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3 required">Descripción</legend>
        <div className="mb-6">
          <WYSIWYGEditor setContent={setDescripcion} />
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaDescripcion;
