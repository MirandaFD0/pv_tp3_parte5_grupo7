import { Box, Typography, Container, Stack } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#002855', color: 'white', py: 4, mt: 'auto', boxShadow: 3 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
          <SchoolIcon sx={{ fontSize: 28, opacity: 0.9 }} />
          <Typography variant="body1" fontWeight="bold">
            EduProjects &copy; 2026 — Plataforma Educativa.
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ opacity: 0.8, textAlign: 'center' }}>
          Desarrollado por el Grupo 7 | Programación Visual
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer