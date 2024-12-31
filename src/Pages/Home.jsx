/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Clock, X, Ticket } from 'lucide-react';
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      
      if (isOpen) {
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
      }
      
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose]);
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative z-10 bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    );
  };

  const AvailabilityModal = ({ isOpen, onClose, show }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative z-10 bg-slate-800 rounded-lg w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h3 className="text-xl font-bold mb-4">Entradas Disponibles</h3>
          <div className="space-y-4">
            {show.disponibilidad.map((slot, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-300" />
                  <span className="text-lg">{slot.horario}</span>
                </div>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    slot.disponible 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {slot.disponible ? 'Disponible' : 'Agotado'}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-sm text-gray-400 text-center">
            <p>Para reservas especiales o grupos grandes,</p>
            <p>contacta al +591 77788899</p>
          </div>
        </div>
      </div>
    );
  };

  const Home = () => {
    const [selectedShow, setSelectedShow] = useState(null);
    const [showAvailability, setShowAvailability] = useState(false);
  
    const DB = [
      {
        "nombre": "Cuando deje de doler",
        "horarios": ["20:00", "22:00"],
        "dias": ["Viernes", "Sábado"],
        "url_imagen": "https://radioluisdefuentes.com/wp-content/uploads/2019/09/IMG_20190913_150751.jpg",
        "url_trailer": "https://www.youtube.com/watch?v=trailerlasangrecaliente",
        "url_informacion": "https://ejemplo.com/lasangrecaliente",
        "descripcion": "Una conmovedora obra que explora las profundidades del amor y la pérdida. A través de una narrativa poética y emotiva, esta pieza teatral nos lleva por un viaje de sanación y redescubrimiento personal.",
        "duracion": "120 minutos",
        "precio": "$150 - $300",
        "director": "María González",
        "elenco": ["Ana López", "Juan Pérez", "Carmen Rodríguez"],
        "disponibilidad": [
          { "horario": "20:00", "disponible": true },
          { "horario": "22:00", "disponible": false }
        ]
      },
      {
        "nombre": "Plato Paceño",
        "horarios": ["19:30"],
        "dias": ["Jueves", "Domingo"],
        "url_imagen": "https://www.eldiario.net/noticias/2015/2015_10/nt151011/f_2015-10-11_21.jpg",
        "url_trailer": "https://www.youtube.com/watch?v=trailerlossuenosdemachito",
        "url_informacion": "https://ejemplo.com/lossuenosdemachito",
        "descripcion": "Una comedia costumbrista que celebra la rica cultura boliviana. Entre risas y tradiciones, esta obra nos invita a reflexionar sobre nuestra identidad y raíces.",
        "duracion": "90 minutos",
        "precio": "$100 - $250",
        "director": "Carlos Mamani",
        "elenco": ["Pedro Sánchez", "Luis Torres", "Rosa Mamani"],
        "disponibilidad": [
          { "horario": "19:30", "disponible": true }
        ]
      },
      {
        "nombre": "Zambo Salvito",
        "horarios": ["18:00", "21:00"],
        "dias": ["Miércoles", "Sábado"],
        "url_imagen": "https://www.teatromuseo.cl/images/cartelera/header/zambo3-5be98da8d7b84.jpg",
        "url_trailer": "https://www.youtube.com/watch?v=trailerelcandordelcoronel",
        "url_informacion": "https://ejemplo.com/elcandordelcoronel",
        "descripcion": "Una aventura musical que cautiva a grandes y pequeños. Con melodías pegajosas y una historia llena de valores, esta obra es perfecta para toda la familia.",
        "duracion": "100 minutos",
        "precio": "$120 - $280",
        "director": "Roberto Paz",
        "elenco": ["Miguel Ángel", "Diana Castro", "Fernando López"],
        "disponibilidad": [
          { "horario": "18:00", "disponible": false },
          { "horario": "21:00", "disponible": true }
        ]
      },
      {
        "nombre": "Jesucristo Superestrella",
        "horarios": ["20:30"],
        "dias": ["Martes", "Viernes"],
        "url_imagen": "https://www.quitoinforma.gob.ec/wp-content/uploads/2022/03/Jesucristo-Superstar-1-800x445.jpeg",
        "url_trailer": "https://www.youtube.com/watch?v=trailerlaciudadsinnombre",
        "url_informacion": "https://ejemplo.com/laciudadsinnombre",
        "descripcion": "La aclamada ópera rock que revolucionó el teatro musical. Una interpretación moderna y vibrante de una historia intemporal.",
        "duracion": "150 minutos",
        "precio": "$200 - $400",
        "director": "Andrea Vega",
        "elenco": ["Pablo Ruiz", "María José Torres", "Santiago Morales"],
        "disponibilidad": [
          { "horario": "20:30", "disponible": true }
        ]
      }
    ];

    const DBAnun = [
        {
          "nombre": "Franco Escamilla",
          "horarios": ["20:00", "22:00"],
          "dias": ["Viernes", "Sábado"],
          "url_imagen": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/64/6d/9c/646d9c62-fb2d-583d-e0f0-a0bea080f149/mza_11674961816547421469.jpeg/1200x1200bf.webp",
          "url_trailer": "https://www.youtube.com/watch?v=trailerlasangrecaliente",
          "url_informacion": "https://ejemplo.com/lasangrecaliente"
        },
        {
          "nombre": "Hablando Huevadas",
          "horarios": ["19:30"],
          "dias": ["Jueves", "Domingo"],
          "url_imagen": "https://i.scdn.co/image/ab6765630000ba8acac6327c4a6627b394822554",
          "url_trailer": "https://www.youtube.com/watch?v=trailerlossuenosdemachito",
          "url_informacion": "https://ejemplo.com/lossuenosdemachito"
        }
      ];

    const ShowDetails = ({ show }) => (
        

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">{show.nombre}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <img
              src={show.url_imagen}
              alt={show.nombre}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">{show.descripcion}</p>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2" />
                <span>Duración: {show.duracion}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{show.dias.join(" • ")} - {show.horarios.join(" • ")}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Ticket className="w-4 h-4 mr-2" />
                <span>Precio: {show.precio}</span>
              </div>
            </div>
  
            <div className="space-y-2">
              <h4 className="font-semibold">Director</h4>
              <p className="text-gray-300">{show.director}</p>
            </div>
  
            <div className="space-y-2">
              <h4 className="font-semibold">Elenco</h4>
              <ul className="text-gray-300">
                {show.elenco.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
  
            <button
                onClick={() => setShowAvailability(true)}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
                Ver Entradas Disponibles
            </button>
          </div>
        </div>
        <AvailabilityModal 
            isOpen={showAvailability}
            onClose={() => setShowAvailability(false)}
            show={show}
        />
      </div>
    );
  
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
  
        {/* Cartelera */}
        <div className="py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Cartelera Actual</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DB.map((obra, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedShow(obra)}
              >
                <div className="relative h-48">
                  <img
                    src={obra.url_imagen}
                    alt={obra.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{obra.nombre}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{obra.dias.join(" • ")}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{obra.horarios.join(" • ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Modal */}
        <Modal isOpen={!!selectedShow} onClose={() => setSelectedShow(null)}>
          {selectedShow && <ShowDetails show={selectedShow} />}
        </Modal>

        {/* Próximamente */}
        <div className="bg-slate-900 py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Próximamente</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {DBAnun.map((anuncio, index) => (
                <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-xl"
                >
                <div className="relative h-64">
                    <img
                    src={anuncio.url_imagen}
                    alt={anuncio.nombre}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold">{anuncio.nombre}</h3>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Información y Ubicación */}
        <div className="bg-slate-800 py-12 px-4">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Ubicación y Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                    <p className="text-lg">Calle Soria Galvarro y Bolivar</p>
                </div>
                <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-blue-400" />
                    <p className="text-lg">+591 77788899</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-300">
                    Horario de taquilla: Martes a Domingo de 10:00 a 20:00
                    </p>
                </div>
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                <a href='https://maps.app.goo.gl/A1sR6RGtxTinzviw6' target='_blank' rel='noreferrer'>
                    <p className="">Ver en Google Maps</p>
                    <img
                        src="https://www.google.com/maps/d/thumbnail?mid=1ZoJ7mXg2f3MfQJ0Pf4J5g4e2eJg&hl=es"
                        alt="Mapa"
                        className=" object-cover"
                    />
                </a>
                </div>
            </div>
            </div>
        </div>

      </div>
    );
  };
  
  export default Home;
