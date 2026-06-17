import { Card, CardContent, Typography, Button, CardActions, Chip } from '@mui/material'
import { Link } from 'react-router-dom'

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {titulo}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          <strong>Categoría:</strong> {categoria}
        </Typography>
        <Chip
          label={estado}
          color={estado === 'Finalizado' ? 'success' : 'primary'}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button variant="outlined" color="error" size="small" onClick={() => onEliminar(id)}>
          Eliminar
        </Button>
        <Button component={Link} to={`/proyectos/${id}`} variant="contained" color="primary" size="small">
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProyectoCard