import { ShieldCheck, UserCheck, Users, FileText } from 'lucide-react';

const Politics = () => {
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

      {/* Políticas Generales */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Políticas Generales</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
            <p className="text-gray-300">
              El teatro mantiene un compromiso estricto con la seguridad de los asistentes y empleados, 
              garantizando un ambiente seguro y acogedor para todos.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <UserCheck className="w-8 h-8 text-green-400" />
            <p className="text-gray-300">
              Se espera que todos los asistentes respeten las normas establecidas y el comportamiento 
              adecuado durante las funciones.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-purple-400" />
            <p className="text-gray-300">
              Promovemos la inclusión y la accesibilidad, asegurándonos de que todas las personas puedan 
              disfrutar de las presentaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Código de Conducta */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Código de Conducta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Prohibiciones</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• No se permite el uso de dispositivos móviles durante las funciones.</li>
                <li>• Está prohibido fumar dentro de las instalaciones.</li>
                <li>• No se permite el ingreso con alimentos o bebidas.</li>
                <li>• Comportamientos disruptivos resultarán en la expulsión del teatro.</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Recomendaciones</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Llegar al menos 30 minutos antes de la función.</li>
                <li>• Consultar previamente la ubicación de los asientos.</li>
                <li>• Mantener el silencio durante las presentaciones.</li>
                <li>• Avisar al personal en caso de emergencia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Políticas de Venta y Reembolsos */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Políticas de Venta y Reembolsos</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FileText className="w-8 h-8 text-purple-400" />
              <p className="text-gray-300">
                Las entradas no son reembolsables excepto en caso de cancelación de la función por parte del teatro.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FileText className="w-8 h-8 text-blue-400" />
              <p className="text-gray-300">
                Cambios de fecha o función están sujetos a disponibilidad y deben solicitarse con al menos 48 horas de antelación.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Información de Privacidad */}
      <div className="bg-slate-800/50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Política de Privacidad</h2>
          <p className="text-gray-300 text-center">
            El Teatro Suavidad respeta la privacidad de sus usuarios y se compromete a proteger sus datos personales. 
            Toda la información recopilada se utiliza exclusivamente para mejorar la experiencia del usuario y no será 
            compartida con terceros sin su consentimiento expreso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Politics;
