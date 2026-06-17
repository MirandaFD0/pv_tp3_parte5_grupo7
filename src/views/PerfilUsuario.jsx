import { useState } from 'react'
import { useUsuario } from '../context/UsuarioContext'

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useUsuario()
  const [editando, setEditando] = useState(false)
  const [formulario, setFormulario] = useState({ ...usuario })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
  }

  const handleGuardar = () => {
    actualizarPerfil(formulario)
    setEditando(false)
  }

  const handleEditar = () => {
    setFormulario({ ...usuario })
    setEditando(true)
  }

  return (
    <main>
      <h2>Perfil de Usuario</h2>
      {editando ? (
        <section>
          <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} placeholder="Nombre" />
          <input type="text" name="dni" value={formulario.dni} onChange={handleChange} placeholder="DNI" />
          <input type="text" name="rol" value={formulario.rol} onChange={handleChange} placeholder="Rol" />
          <input type="text" name="institucion" value={formulario.institucion} onChange={handleChange} placeholder="Institución" />
          <button onClick={handleGuardar}>Guardar Cambios</button>
        </section>
      ) : (
        <section>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>DNI:</strong> {usuario.dni}</p>
          <p><strong>Rol:</strong> {usuario.rol}</p>
          <p><strong>Institución:</strong> {usuario.institucion}</p>
          <button onClick={handleEditar}>Editar Perfil</button>
        </section>
      )}
    </main>
  )
}

export default PerfilUsuario