import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react'
import pacienteA from './Pages/fichaPacientes/pacienteA'
import ButtonToTop from './Components/ButtomToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    {pacienteA()}
    </ChakraProvider>
    <ButtonToTop/>
  </React.StrictMode>
);
