import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UsuarioProvider } from './context/UsuarioContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </BrowserRouter>
)