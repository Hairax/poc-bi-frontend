import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const About = () => {
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

      {/* Información de Contacto */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ubicación */}
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-300">Calle Soria Galvarro y Bolivar</p>
              {/*Link ubicacion*/}
                <a href="https://maps.app.goo.gl/A1sR6RGtxTinzviw6" className="text-blue-400 hover:underline">Ver en Google Maps</a>
            </div>

            {/* Teléfono */}
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-300">+591 77788899</p>
            </div>

            {/* Email */}
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">infoteatrosuavidad@gmail.com</p>
            </div>

            {/* Horarios */}
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">Horarios</h3>
              <p className="text-gray-300">Martes a Domingo<br />10:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="bg-slate-800/50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Síguenos en Redes Sociales</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com
            " className="transform hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8 text-pink-400" />
            </a>
            <a href="https://www.facebook.com
            " className="transform hover:scale-110 transition-transform">
              <Facebook className="w-8 h-8 text-blue-400" />
            </a>
            <a href="https://www.twitter.com
            " className="transform hover:scale-110 transition-transform">
              <Twitter className="w-8 h-8 text-sky-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;