import { useEffect, useState } from "react";

const Inventario = () => {
  const [allInventario, setAllInventario] = useState([]);
  const [mantenimientos, setMantenimientos] = useState([]);
  const [nuevoActivo, setNuevoActivo] = useState({ nombre: "", descripcion: "", valor: "" });

  // Fetch activos y mantenimientos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const activosResponse = await fetch("http://localhost:3000/activos");
        const activosData = await activosResponse.json();
        setAllInventario(activosData);

        const mantenimientosResponse = await fetch("http://localhost:3000/maintenance");
        const mantenimientosData = await mantenimientosResponse.json();
        setMantenimientos(mantenimientosData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoActivo({ ...nuevoActivo, [name]: value });
  };

  // Manejar envío del formulario
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/activos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoActivo),
      });

      if (response.ok) {
        const nuevoActivoAgregado = await response.json();
        setAllInventario([...allInventario, nuevoActivoAgregado]);
        setNuevoActivo({ nombre: "", descripcion: "", valor: "" });
        document.getElementById("addActivo").close();
      } else {
        console.error("Error al agregar el activo");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://img.freepik.com/fotos-premium/o-ver-teatro-o-cine-vacio-filas-o-asientos_953425-1363.jpg"
          alt="Teatro interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Inventario de activos</h1>
        </div>
      </div>

      {/* Inventario */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            Aquí se muestra el inventario de activos de la empresa.
          </p>
          <table className="table-auto w-full text-left text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Cantidad</th>
                <th className="px-4 py-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              {allInventario.map((activo) => (
                <tr key={activo.id}>
                  <td className="border px-4 py-2">{activo.id}</td>
                  <td className="border px-4 py-2">{activo.name}</td>
                  <td className="border px-4 py-2">{activo.description}</td>
                  <td className="border px-4 py-2">{activo.quantity}</td>
                  <td className="border px-4 py-2">{activo.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mantenimientos */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Mantenimientos</h2>
        <table className="table-auto w-full text-left text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Activo ID</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Fecha Programada</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Costo</th>
            </tr>
          </thead>
          <tbody>
            {mantenimientos.map((mantenimiento) => (
              <tr key={mantenimiento.id}>
                <td className="border px-4 py-2">{mantenimiento.id}</td>
                <td className="border px-4 py-2">{mantenimiento.activosId}</td>
                <td className="border px-4 py-2">{mantenimiento.description}</td>
                <td className="border px-4 py-2">{mantenimiento.scheduledDate}</td>
                <td className="border px-4 py-2">{mantenimiento.status}</td>
                <td className="border px-4 py-2">{mantenimiento.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Agregar nuevo activo */}
      <div className="flex justify-center pb-16">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.getElementById("addActivo").showModal()}
        >
          Agregar Activo
        </button>
      </div>

      <dialog id="addActivo" className="bg-gray-900 p-6 rounded">
        <button
          className="absolute top-0 right-0 text-white"
          onClick={() => document.getElementById("addActivo").close()}
        >
          X
        </button>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <label className="block">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={nuevoActivo.nombre}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            required
          />
          <label className="block">Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={nuevoActivo.descripcion}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            required
          />
          <label className="block">Valor:</label>
          <input
            type="number"
            name="valor"
            value={nuevoActivo.valor}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Inventario;
