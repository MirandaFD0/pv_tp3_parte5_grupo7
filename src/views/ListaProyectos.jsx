import { useState, useEffect, useRef } from "react"
import proyectoService from "../services/proyectoService"
import ProyectoCard from "../components/ProyectoCard"
import RegistroActividad from "../components/RegistroActividad"
import FormularioProyecto from "../components/FormularioProyecto"

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null)

  const primeraVez = useRef(true)

  useEffect(() => {
    if (primeraVez.current) {
      primeraVez.current = false
      return
    }

    const ahora = new Date()
    const dia = String(ahora.getDate()).padStart(2, '0')
    const mes = String(ahora.getMonth() + 1).padStart(2, '0')
    const año = ahora.getFullYear()
    const horas = String(ahora.getHours()).padStart(2, '0')
    const minutos = String(ahora.getMinutes()).padStart(2, '0')

    const mensaje = `Última actualización de la lista: ${dia}/${mes}/${año} a las ${horas}:${minutos} hs.`

    setUltimaActualizacion(mensaje)
  }, [proyectos])

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id)
    setProyectos(proyectoService.obtenerProyectos())
  }

  const handleBuscar = (e) => {
    const { value } = e.target
    setBusqueda(value)
  }

  const handleAgregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto)
    setProyectos(proyectoService.obtenerProyectos())
  }

  return (
    <main>
      <h2>Listado de Proyectos</h2>
      <section>
        <h3>Buscar Proyecto</h3>
        <input type="text" placeholder="Buscá un proyecto..." value={busqueda} onChange={handleBuscar} />
      </section>
      <FormularioProyecto onAgregar={handleAgregar} />
      <h3>Proyectos</h3>
      <section>
        {proyectoService.buscarProyecto(busqueda).map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} onEliminar={handleEliminar} />
        ))}
      </section>
      {ultimaActualizacion && <RegistroActividad fechaActualizacion={ultimaActualizacion} />}
    </main>
  )
}

export default ListaProyectos