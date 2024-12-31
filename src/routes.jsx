import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Politics from './Pages/Politics';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="politics" element={<Politics />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
