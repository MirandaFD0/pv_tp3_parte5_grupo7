import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import ListaProyectos from './views/ListaProyectos'
import DetalleProyecto from './views/DetalleProyecto'
import PerfilUsuario from './views/PerfilUsuario'

const tema = createTheme({
  palette: {
    primary: { main: '#0d4b92' },
    secondary: { main: '#0ea5e9' },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={tema}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8fafc' }}>
        <Header />
        <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proyectos" element={<ListaProyectos />} />
            <Route path="/proyectos/:id" element={<DetalleProyecto />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App