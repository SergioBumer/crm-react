import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../componentes/Spinner";

const VerCliente = () => {
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
      {cargando ? (
        <Spinner/>
      ) : Object.keys(cliente).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">Ver Cliente</h1>
          <p>Información del cliente</p>
          <p className="text-4xl text-gray-600 mt-10">
            <span className=" uppercase text-gray-700 font-bold">
              Cliente:{" "}
            </span>
            {cliente.nombre}
          </p>
          <p className="text-2xl text-gray-600">
            <span className=" uppercase text-gray-700 font-bold">Email: </span>
            {cliente.email}
          </p>
          {cliente.telefono && (
            <p className="text-2xl text-gray-600">
              <span className=" uppercase text-gray-700 font-bold">
                Telefono:{" "}
              </span>
              {cliente.telefono}
            </p>
          )}
          <p className="text-2xl text-gray-600">
            <span className=" uppercase text-gray-700 font-bold">
              Empresa:{" "}
            </span>
            {cliente.empresa}
          </p>
          {cliente.notas && (
            <p className="text-2xl text-gray-600">
              <span className=" uppercase text-gray-700 font-bold">
                Notas:{" "}
              </span>
              {cliente.notas}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCliente;
