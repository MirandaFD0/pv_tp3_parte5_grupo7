import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useUsuario } from '../context/UsuarioContext'

const Dashboard = () => {
  const { usuario } = useUsuario()

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Bienvenido, {usuario.nombre}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
        Resumen general y métricas de gestión de la plataforma EduProjects.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 3 }}>
            <Box sx={{ bgcolor: '#1565c0', color: 'white', p: 2, borderRadius: 2, display: 'flex' }}>
              <FolderIcon sx={{ fontSize: 40 }} />
            </Box>
            <CardContent sx={{ flex: 1, pb: '16px !important' }}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
                Total de Proyectos
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#1565c0">
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 3 }}>
            <Box sx={{ bgcolor: '#ef6c00', color: 'white', p: 2, borderRadius: 2, display: 'flex' }}>
              <AccessTimeIcon sx={{ fontSize: 40 }} />
            </Box>
            <CardContent sx={{ flex: 1, pb: '16px !important' }}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
                Proyectos en Curso
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#ef6c00">
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 3 }}>
            <Box sx={{ bgcolor: '#2e7d32', color: 'white', p: 2, borderRadius: 2, display: 'flex' }}>
              <CheckCircleIcon sx={{ fontSize: 40 }} />
            </Box>
            <CardContent sx={{ flex: 1, pb: '16px !important' }}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
                Proyectos Finalizados
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#2e7d32">
                7
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard