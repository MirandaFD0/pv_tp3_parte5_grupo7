import { Link } from 'react-router-dom'

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto

  return (
    <article>
      <h4>{titulo}</h4>
      <p><strong>Categoría:</strong> {categoria}</p>
      <span>{estado}</span>
      <button onClick={() => onEliminar(id)}>Eliminar</button>
      <Link to={`/proyectos/${id}`}>Ver detalle</Link>
    </article>
  )
}

export default ProyectoCard