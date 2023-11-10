import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.scss';
import { ChakraProvider } from '@chakra-ui/react'
import pacienteA from './Pages'
import pacienteInf from './Pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>Hello word</div>
    {/** Coloque a referência da página aqui */}
  </React.StrictMode>
);
