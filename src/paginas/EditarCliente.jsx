import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Formulario from "../componentes/Formulario";
import Alerta from "../componentes/Alerta";

const EditarCliente = () => {

  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);


  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar un cliente.</p>
      {cliente?.nombre ? <Formulario cliente={cliente} /> : <Alerta>El cliente no existe</Alerta>}
    </div>
  )
}

export default EditarCliente