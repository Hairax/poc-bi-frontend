import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Poc BI</h1>
          </div>
          {/* Botón de menú para móviles */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Abrir menú</span>
              {/* Icono de hamburguesa */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icono de cierre */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Opciones de navegación */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/dashbords" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">
              Dashbords
            </a>
            <a href="/inventario" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">
              Inventario
            </a>
          </div>
        </div>
      </div>
      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block hover:underline px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/dashbords" className="block hover:underline px-3 py-2 rounded-md text-base font-medium">
              Dashbords
            </a>
            <a href="/inventario" className="block hover:underline px-3 py-2 rounded-md text-base font-medium">
              Inventario
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
