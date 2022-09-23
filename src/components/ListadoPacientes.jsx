import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {
  
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center">
            Adiministra tus{" "}
            <span className="text-teal-600 font-bold">Pacientes y Turnos</span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 text-center">
            Agrega nuevos{" "}
            <span className="text-teal-600 font-bold">Pacientes</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
