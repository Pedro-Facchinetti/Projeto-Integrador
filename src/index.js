import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react'

import ButtonToTop from './Components/ButtomToTop';
import Anamnese from './Pages/AnamnesePaciente/Anamnese';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {Anamnese()}
    </ChakraProvider>
    <ButtonToTop />
  </React.StrictMode>
);
