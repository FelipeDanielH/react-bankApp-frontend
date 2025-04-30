// src\App.jsx
import  AppRoutes  from './routes';
import { AuthProvider } from './modules/auth/context/AuthContext'


import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
