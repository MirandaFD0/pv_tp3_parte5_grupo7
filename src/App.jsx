import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import ListaProyectos from './views/ListaProyectos'
import DetalleProyecto from './views/DetalleProyecto'
import PerfilUsuario from './views/PerfilUsuario'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App