import React from 'react';
import ReactDOM from 'react-dom/client';

import Anamnese from './Pages/Anamnese';
import ButtonToTop from './Components/ButtomToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Anamnese/>
    <ButtonToTop/>
  </React.StrictMode>
);
