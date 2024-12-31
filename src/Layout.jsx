import Navbar from './components/Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <header className="">
            <Navbar />
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 bg-slate-800 text-center">
          <p className="text-sm">© 2024 Mi Sitio. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  };
  
  export default Layout;
  