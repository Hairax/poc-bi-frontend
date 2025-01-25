const Dashbords = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://img.freepik.com/fotos-premium/o-ver-teatro-o-cine-vacio-filas-o-asientos_953425-1363.jpg"
          alt="Escenario del Teatro"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Políticas del Teatro</h1>
          <p className="text-xl text-gray-200">Normas y lineamientos para una experiencia excepcional</p>
        </div>
      </div>
    </div>
  );
};

export default Dashbords;
