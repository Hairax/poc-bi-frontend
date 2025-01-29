import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Inventario from './Pages/Inventario';
import Dashbords from './Pages/Dashbords';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/dashbords" element={<Dashbords />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
