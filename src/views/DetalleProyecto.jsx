import { useParams, Link } from 'react-router-dom'
import { Box, Paper, Typography, Button, Divider, List, ListItem, ListItemText, Chip } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import GitHubIcon from '@mui/icons-material/GitHub'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import LinkIcon from '@mui/icons-material/Link'
import proyectoService from '../services/proyectoService'

const DetalleProyecto = () => {
  const { id } = useParams()
  const proyecto = proyectoService.obtenerProyectoPorId(id)

  if (!proyecto) {
    return (
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" color="error">Proyecto no encontrado</Typography>
        <Button component={Link} to="/proyectos" variant="contained" sx={{ mt: 2 }}>
          Volver a proyectos
        </Button>
      </Box>
    )
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto

  const getIcono = (tipo) => {
    const texto = tipo.toLowerCase()
    if (texto.includes('pdf')) return <PictureAsPdfIcon />
    if (texto.includes('github')) return <GitHubIcon />
    if (texto.includes('drive')) return <AddToDriveIcon />
    return <LinkIcon />
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Button component={Link} to="/proyectos" variant="outlined" sx={{ mb: 3 }}>
        ← Volver
      </Button>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          {titulo}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Chip label={categoria} color="primary" variant="outlined" />
          <Chip label={estado} color={estado === 'Finalizado' ? 'success' : 'primary'} />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Descripción</Typography>
        {descripcion.map((parrafo, index) => (
          <Typography key={index} sx={{ mb: 2 }}>{parrafo}</Typography>
        ))}
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Recursos</Typography>
        <List dense>
          {recursos.map((recurso, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <Button component="a" href={recurso.url} target="_blank" rel="noreferrer" variant="outlined" color="primary" startIcon={getIcono(recurso.tipo)}>
                {recurso.tipo}
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Equipo</Typography>
        <List dense>
          {equipo.map((miembro, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={miembro.nombre}
                secondary={miembro.rol}
                slotProps={{ primary: { sx: { fontWeight: 'medium' } } }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}

export default DetalleProyecto