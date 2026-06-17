import { createContext, useContext, useState, useEffect } from "react"

const UsuarioContext = createContext()

export const UsuarioProvider = ({ children }) => {
  const datosIniciales = {
    nombre: "Carlos Mendoza",
    dni: "32456789",
    rol: "Docente",
    institucion: "Facultad de Ingeniería - UNJu"
  }

  const cargarUsuario = () => {
    const guardado = localStorage.getItem("usuario")
    if (guardado) {
      return JSON.parse(guardado)
    }
    return datosIniciales
  }

  const [usuario, setUsuario] = useState(cargarUsuario)

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario({ ...usuario, ...nuevosDatos })
  }

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export const useUsuario = () => {
  return useContext(UsuarioContext)
}