import { useState } from "react"
import { Box, Paper, Typography, TextField, Select, MenuItem, Button, Grid, FormControl, InputLabel } from "@mui/material"

const FormularioProyecto = ({ onAgregar }) => {
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ['', ''],
    recursos: [
      { tipo: 'PDF', url: '' },
      { tipo: 'GitHub', url: '' },
      { tipo: 'Drive', url: '' }
    ],
    equipo: [{ nombre: '', rol: '' }]
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoProyecto({ ...nuevoProyecto, [name]: value })
  }

  const handleDescripcion = (index, value) => {
    const nuevaDesc = [...nuevoProyecto.descripcion]
    nuevaDesc[index] = value
    setNuevoProyecto({ ...nuevoProyecto, descripcion: nuevaDesc })
  }

  const handleRecurso = (index, value) => {
    const nuevosRecursos = [...nuevoProyecto.recursos]
    nuevosRecursos[index] = { ...nuevosRecursos[index], url: value }
    setNuevoProyecto({ ...nuevoProyecto, recursos: nuevosRecursos })
  }

  const handleEquipo = (index, field, value) => {
    const nuevoEquipo = [...nuevoProyecto.equipo]
    nuevoEquipo[index] = { ...nuevoEquipo[index], [field]: value }
    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo })
  }

  const agregarMiembro = () => {
    setNuevoProyecto({
      ...nuevoProyecto,
      equipo: [...nuevoProyecto.equipo, { nombre: '', rol: '' }]
    })
  }

  const handleSubmit = () => {
    if (nuevoProyecto.titulo.trim() === '') return
    onAgregar({ ...nuevoProyecto, id: Date.now() })
    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'En curso',
      descripcion: ['', ''],
      recursos: [
        { tipo: 'PDF', url: '' },
        { tipo: 'GitHub', url: '' },
        { tipo: 'Drive', url: '' }
      ],
      equipo: [{ nombre: '', rol: '' }]
    })
  }

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Agregar Proyecto
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Título" name="titulo" value={nuevoProyecto.titulo} onChange={handleChange} size="small" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Categoría" name="categoria" value={nuevoProyecto.categoria} onChange={handleChange} size="small" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Estado</InputLabel>
            <Select name="estado" value={nuevoProyecto.estado} label="Estado" onChange={handleChange}>
              <MenuItem value="En curso">En curso</MenuItem>
              <MenuItem value="Finalizado">Finalizado</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Párrafo 1" value={nuevoProyecto.descripcion[0]} onChange={(e) => handleDescripcion(0, e.target.value)} size="small" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Párrafo 2" value={nuevoProyecto.descripcion[1]} onChange={(e) => handleDescripcion(1, e.target.value)} size="small" />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {nuevoProyecto.recursos.map((recurso, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TextField fullWidth label={`URL ${recurso.tipo}`} value={recurso.url} onChange={(e) => handleRecurso(index, e.target.value)} size="small" />
          </Grid>
        ))}
      </Grid>
      {nuevoProyecto.equipo.map((miembro, index) => (
        <Grid container spacing={2} sx={{ mb: 2 }} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Nombre" value={miembro.nombre} onChange={(e) => handleEquipo(index, 'nombre', e.target.value)} size="small" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Rol" value={miembro.rol} onChange={(e) => handleEquipo(index, 'rol', e.target.value)} size="small" />
          </Grid>
        </Grid>
      ))}
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="outlined" color="secondary" onClick={agregarMiembro}>
          + Agregar miembro
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Agregar Proyecto
        </Button>
      </Box>
    </Paper>
  )
}

export default FormularioProyecto