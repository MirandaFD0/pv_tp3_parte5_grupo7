import { Alert } from '@mui/material'

const RegistroActividad = ({ fechaActualizacion }) => {
  return (
    <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
      {fechaActualizacion}
    </Alert>
  )
}

export default RegistroActividad