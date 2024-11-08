import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import ListaUsuarios from './pages/ListaUsuarios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthRoute } from './components/AuthRoute';
import MapESCOM from './pages/MapESCOM';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route element={<AuthRoute type="public" />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<AuthRoute type="admin" />}>
            <Route path="/listaUsuarios" element={<ListaUsuarios />} />
          </Route>

          <Route element={<AuthRoute type="protected" />}>
            <Route path="/perfil" element={< Perfil/>} />
          </Route>

          <Route path="/" element={<Landing/>}/>
          
          <Route path="/mapa" element={<MapESCOM />} />  {/* Nueva ruta para el visualizador */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
