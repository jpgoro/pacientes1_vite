import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [texto, setTexto] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    //Lo uso para cargar los imputs con los valores del objeto al pulsar editar
    if (Object.keys(paciente).length > 0) {
      //Object.keys devuelve un arreglo y veo si tiene algo
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setTexto(paciente.texto);
    }
  }, [paciente]); //Lee los cambios en el objeto paciente

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([nombre, propietario, email, fecha, texto].includes("")) {
      return setError(true);
    }
    setError(false);
    //objetos paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      texto,
    };

    if (paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);

      setPaciente({});//Limpio el state y lo vuelvo vacio al objeto
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciar los inputs a vacios
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setTexto("");
    setError("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Agrega Pacientes y{" "}
        <span className="text-teal-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-5 py-10 mb-10 mx-5">
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-4">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="bordedr-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            type="text"
            placeholder="Nombre de mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">
            Nombre Dueño
          </label>
          <input
            id="propietario"
            className="bordedr-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="bordedr-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            type="email"
            placeholder="Email de contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="fecha"
            className="bordedr-2 w-full p-2 mt-2 placeholder-slate-500 rounded-md"
            type="date"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="texto"
            className="block text-gray-700 uppercase font-bold mb-2">
            Síntomas
          </label>
          <textarea
            id="texto"
            placeholder="Indique los síntomas del paciente"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}></textarea>
        </div>
        <input
          type="submit"
          className="s bg-teal-600 w-full p-3 rounded-md uppercase font-bold hover:bg-teal-800 text-white cursor-pointer transition-color"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
