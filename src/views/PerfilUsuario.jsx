import { useState } from 'react'
import { Box, Paper, Typography, Avatar, Divider, List, ListItem, ListItemText, Button, TextField, Stack } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { useUsuario } from '../context/UsuarioContext'

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useUsuario()
  const [editando, setEditando] = useState(false)
  const [formulario, setFormulario] = useState({ ...usuario })

  const iniciales = usuario.nombre
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

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
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500, textAlign: 'center' }}>
        <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
          {iniciales}
        </Avatar>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Perfil de Usuario
        </Typography>
        <Divider sx={{ my: 2 }} />
        {editando ? (
          <Stack spacing={2} sx={{ textAlign: 'left' }}>
            <TextField label="Nombre" name="nombre" value={formulario.nombre} onChange={handleChange} fullWidth size="small" />
            <TextField label="DNI" name="dni" value={formulario.dni} onChange={handleChange} fullWidth size="small" />
            <TextField label="Rol" name="rol" value={formulario.rol} onChange={handleChange} fullWidth size="small" />
            <TextField label="Institución" name="institucion" value={formulario.institucion} onChange={handleChange} fullWidth size="small" />
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleGuardar}>
              Guardar Cambios
            </Button>
          </Stack>
        ) : (
          <>
            <List>
              <ListItem disablePadding sx={{ py: 1 }}>
                <ListItemText primary="Nombre" secondary={usuario.nombre} primaryTypographyProps={{ sx: { fontWeight: 'bold' } }} />
              </ListItem>
              <ListItem disablePadding sx={{ py: 1 }}>
                <ListItemText primary="DNI" secondary={usuario.dni} primaryTypographyProps={{ sx: { fontWeight: 'bold' } }} />
              </ListItem>
              <ListItem disablePadding sx={{ py: 1 }}>
                <ListItemText primary="Rol" secondary={usuario.rol} primaryTypographyProps={{ sx: { fontWeight: 'bold' } }} />
              </ListItem>
              <ListItem disablePadding sx={{ py: 1 }}>
                <ListItemText primary="Institución" secondary={usuario.institucion} primaryTypographyProps={{ sx: { fontWeight: 'bold' } }} />
              </ListItem>
            </List>
            <Button variant="outlined" startIcon={<EditIcon />} onClick={handleEditar} sx={{ mt: 2 }}>
              Editar Perfil
            </Button>
          </>
        )}
      </Paper>
    </Box>
  )
}

export default PerfilUsuario