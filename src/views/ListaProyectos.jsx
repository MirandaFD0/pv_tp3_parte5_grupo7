import { useState, useEffect, useRef } from "react"
import { Box, Typography, TextField, Grid } from "@mui/material"
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
    <Box>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Listado de Proyectos
      </Typography>
      <Box sx={{ mb: 4, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom>
          Buscar Proyecto
        </Typography>
        <TextField fullWidth variant="outlined" placeholder="Buscá un proyecto..." value={busqueda} onChange={handleBuscar} />
      </Box>
      <FormularioProyecto onAgregar={handleAgregar} />
      <Typography variant="h5" component="h3" align="center" sx={{ mt: 5, mb: 3, fontWeight: 'medium' }}>
        Proyectos
      </Typography>
      <Grid container spacing={3}>
        {proyectoService.buscarProyecto(busqueda).map((proyecto) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={proyecto.id}>
            <ProyectoCard proyecto={proyecto} onEliminar={handleEliminar} />
          </Grid>
        ))}
      </Grid>
      {ultimaActualizacion && (
        <Box sx={{ mt: 4 }}>
          <RegistroActividad fechaActualizacion={ultimaActualizacion} />
        </Box>
      )}
    </Box>
  )
}

export default ListaProyectos