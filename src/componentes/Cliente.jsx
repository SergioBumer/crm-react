import {useNavigate} from 'react-router-dom';
const Cliente = ({ cliente, handleEliminar }) => {
  const { nombre, empresa, email, telefono, id } = cliente;
  const navigate = useNavigate();

  const verCliente = () => {
    navigate(`/clientes/${id}`);
  };

  const editarCliente = () => {
    navigate(`/clientes/editar/${id}`);
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        {email && (
          <p>
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
        )}
        {telefono && (
          <p>
            <span className="text-gray-800 uppercase font-bold">
              Telefono:{" "}
            </span>
            {telefono}
          </p>
        )}
      </td>
      <td className="p-3">{empresa}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white uppercase p-2 font-bold text-xs"
          onClick={verCliente}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white uppercase p-2 font-bold text-xs mt-2"
          onClick={editarCliente}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white uppercase p-2 font-bold text-xs mt-2"
          onClick={() => {handleEliminar(id)}}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
