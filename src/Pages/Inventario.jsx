const Inventario = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-200">Casi un siglo de historia teatral</p>
        </div>
      </div>

      {/* Historia */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            Desde 1925, el Teatro Suavidad ha sido el epicentro cultural de nuestra ciudad, 
            acogiendo a los artistas más destacados y presentando obras que han marcado 
            generaciones. Nuestro compromiso con la excelencia artística y la innovación 
            cultural nos ha convertido en un referente del arte escénico en Bolivia.
          </p>
        </div>
      </div>

      {/* Misión, Visión y Valores */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Misión</h3>
              <p className="text-gray-300">
                Proporcionar experiencias teatrales excepcionales que inspiren, 
                eduquen y entretengan a nuestra comunidad, fomentando el amor por 
                las artes escénicas y preservando nuestra rica herencia cultural.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Visión</h3>
              <p className="text-gray-300">
                Ser reconocidos como el principal centro de artes escénicas en Bolivia, 
                liderando la innovación teatral y cultivando el talento artístico 
                nacional e internacional.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Valores</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Excelencia Artística</li>
                <li>• Innovación Creativa</li>
                <li>• Inclusión Cultural</li>
                <li>• Compromiso Comunitario</li>
                <li>• Integridad Profesional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Inventario;