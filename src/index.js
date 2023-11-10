import React from 'react';
import ReactDOM from 'react-dom/client';
//import './css/global.scss';//
import { ChakraProvider } from '@chakra-ui/react'
import pacienteA from './Pages/fichaPacientes/pacienteA'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    {pacienteA()}
    </ChakraProvider>
  </React.StrictMode>,
)

