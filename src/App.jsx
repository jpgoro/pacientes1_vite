import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = ()=>{//Detecta lo que hay primariamente en el storage y lo setea en el state de pacientes
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];//Si no hay nada entonces le carga un arreglo vacio. JSON.parse lo pasa de string a arreglo
      setPacientes(pacientesLS);
    }

    obtenerLS();
  },[]);

  useEffect(() => {//Guarda el LocalStorage, convierte el arreglo de pacientes en un string
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);//Actualiza el arreglo sin el objeto eliminado
  }

  return (
    <div className="container mt-20">
      <Header />
      <div className="columnas mt-12 md:flex">
        <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
