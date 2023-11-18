import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";

import ButtonToTop from './Components/ButtomToTop/index';

import Anamnesse from "./Pages/AnamnesePaciente/Anamnese"
import Assinatura from "./Pages/Assinatura/Assinatura"
import PacienteA from "./Pages/fichaPacientes/PacienteA"
import PacienteInf from "./Pages/fichaPacientes/PacienteInf"
import Orcamento from "./Pages/Orçamento/Orcamento"

function App() {
    return (
        <ChakraProvider>
            <div>
                <Routes>
                    <Route path='/anamnese' element={<Anamnesse />} />
                    <Route path='/assinatura' element={<Assinatura />} />
                    <Route path='/ficha/paciente_adulto' element={<PacienteA />} />
                    <Route path='/ficha/paciente_infantil' element={<PacienteInf />} />
                    <Route path='/orcamento' element={<Orcamento />} />
                </Routes>
            </div>
            <ButtonToTop />
        </ChakraProvider>
    );
}

export default App;
