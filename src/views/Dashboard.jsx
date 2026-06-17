import { useUsuario } from '../context/UsuarioContext'

const Dashboard = () => {
  const { usuario } = useUsuario()

  return (
    <main>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Resumen general de la plataforma EduProjects.</p>
      <section>
        <article>
          <h3>Total de Proyectos</h3>
          <p>12</p>
        </article>
        <article>
          <h3>Proyectos en Curso</h3>
          <p>5</p>
        </article>
        <article>
          <h3>Proyectos Finalizados</h3>
          <p>7</p>
        </article>
      </section>
    </main>
  )
}

export default Dashboard