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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Teatro Suavidad</h1>
            <p className="text-xl md:text-2xl text-gray-200">Donde el arte cobra vida</p>
            </div>
        </div>

        {/* Descripción */}
        <div className="max-w-4xl mx-auto px-4 py-12 text-center bg-slate-800 rounded-lg shadow-xl mt-8">
            <h2 className="text-3xl font-semibold mb-6">Bienvenidos al Teatro Suavidad</h2>
            <div className="space-y-4 text-gray-300">
            <p className="text-lg">
                Fundado en 1925, el Teatro Suavidad se ha convertido en un ícono cultural en el corazón de nuestra ciudad.
                Con casi un siglo de historia, nuestro teatro ha sido testigo de innumerables actuaciones memorables y
                continúa siendo un faro para las artes escénicas.
            </p>
            <p className="text-lg">
                Ofrecemos una experiencia única que combina la arquitectura clásica con tecnología moderna,
                creando el ambiente perfecto para disfrutar de obras teatrales, conciertos y eventos culturales
                de primer nivel.
            </p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Home;
