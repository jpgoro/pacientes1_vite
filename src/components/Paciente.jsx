const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { email, fecha, texto, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="tm-5 mx-3 bg-white shadow-md px-5 py-10 mb-4 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{texto}</span>
      </p>
      <div className="flex justify-between mt-7">
        <button
          type="button"
          className="py-2 px-10 bg-teal-500 hover:bg-teal-700 text-white font-bold uppercase rounded-md"
          onClick={() => setPaciente(paciente)}>
          {" "}
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          onClick={handleEliminar}>
          {" "}
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
