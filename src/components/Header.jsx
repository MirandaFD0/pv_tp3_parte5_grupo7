import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FolderIcon from '@mui/icons-material/Folder'
import PersonIcon from '@mui/icons-material/Person'
import { useUsuario } from '../context/UsuarioContext'

const Header = () => {
  const { usuario } = useUsuario()

  return (
    <Box
      component="header"
      sx={{
        bgcolor: '#002855',
        color: 'white',
        py: 4,
        textAlign: 'center',
        boxShadow: 3
      }}
    >
      <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
        EduProjects
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ opacity: 0.9 }}>
        Plataforma de Gestión de Proyectos Educativos
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, mt: 2, opacity: 0.8, fontSize: '1.1rem' }}>
        Bienvenido, <strong>{usuario.nombre}</strong> — {usuario.rol}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Button
          component={Link}
          to="/dashboard"
          variant="outlined"
          startIcon={<HomeIcon />}
          sx={{
            color: 'white',
            borderColor: 'rgba(255,255,255,0.5)',
            borderRadius: '25px',
            px: 3,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
          }}
        >
          INICIO
        </Button>
        <Button
          component={Link}
          to="/proyectos"
          variant="outlined"
          startIcon={<FolderIcon />}
          sx={{
            color: 'white',
            borderColor: 'rgba(255,255,255,0.5)',
            borderRadius: '25px',
            px: 3,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
          }}
        >
          PROYECTOS
        </Button>
        <Button
          component={Link}
          to="/perfil"
          variant="outlined"
          startIcon={<PersonIcon />}
          sx={{
            color: 'white',
            borderColor: 'rgba(255,255,255,0.5)',
            borderRadius: '25px',
            px: 3,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
          }}
        >
          MI PERFIL
        </Button>
      </Box>
    </Box>
  )
}

export default Header