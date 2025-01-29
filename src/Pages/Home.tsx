import React from 'react';
  const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
         {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
            src="https://img.freepik.com/fotos-premium/o-ver-teatro-o-cine-vacio-filas-o-asientos_953425-1363.jpg"
            alt="Teatro background"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Poc BI for Jacha Inti</h1>
            </div>
        </div>

        {/* Descripción */}
        <div className="max-w-4xl mx-auto px-4 py-12 text-center bg-slate-800 rounded-lg shadow-xl mt-8">
            <h2 className="text-3xl font-semibold mb-6">Bienvenidos al Poc inicial</h2>
        </div>
      </div>
    );
  };
  
  export default Home;
