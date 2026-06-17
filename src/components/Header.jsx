import { Link } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext'

const Header = () => {
  const { usuario } = useUsuario()

  return (
    <header>
      <h1>EduProjects</h1>
      <p>Plataforma de Gestión de Proyectos Educativos</p>
      <p>Bienvenido, <strong>{usuario.nombre}</strong> — {usuario.rol}</p>
      <nav>
        <ul>
          <li><Link to="/dashboard">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/perfil">Mi Perfil</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header