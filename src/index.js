import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD

import Anamnese from './Pages/Anamnese';
import ButtonToTop from './Components/ButtomToTop';
=======
//import './css/global.scss';//
import { ChakraProvider } from '@chakra-ui/react'
import pacienteA from './Pages/fichaPacientes/pacienteA'
>>>>>>> f23b5795f928e9f8dbbc2d441c4f3852d944d845


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Anamnese/>
    <ButtonToTop/>
  </React.StrictMode>
);
    <ChakraProvider>
    {pacienteA()}
    </ChakraProvider>
  </React.StrictMode>,
)

