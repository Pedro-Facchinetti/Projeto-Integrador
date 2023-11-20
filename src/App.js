import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/index';
import { UserProvider, useUser } from './Contexts/UserContext';
import { ChakraProvider } from '@chakra-ui/react';  

import Menu from './Pages/Menu/index';
import Cadastro from "./Pages/Cadastro/index"
import Clientes from "./Pages/Clientes/index"
import Anamnesse from "./Pages/AnamnesePaciente/Anamnese"
import Assinatura from "./Pages/Assinatura/Assinatura"
import PacienteA from "./Pages/fichaPacientes/PacienteA"
import PacienteInf from "./Pages/fichaPacientes/PacienteInf"
import Orcamento from "./Pages/Orçamento/Orcamento"

import { useEffect } from 'react';
import ProtectedRoute from './Utils/ProtectedRoute';
import DocumentTitle from './Utils/DocumentTitle';

function HomeRoute() {
    const { user } = useUser();
    return (
        <>
            <DocumentTitle title="Home" />
            {user.type ? <Menu userType={user.type} /> : <Login />}
        </>
    );
}

function NotFound() {
    useEffect(() => {
        document.title = "404: Not Found";
        window.status = 404;
    }, []);

    return null;
}

function App() {
    return (
      <ChakraProvider>
      <UserProvider>
          <Routes>
            <Route path="/home" element={<HomeRoute />} />
            <Route path="/cadastro" element={
              <ProtectedRoute allowedUserTypes={['ADMIN']}>
                <Cadastro />
              </ProtectedRoute>
            } />
            <Route path="/clientes" element={
              <ProtectedRoute allowedUserTypes={['ADMIN', 'PADRAO']}>
                <Clientes />
              </ProtectedRoute>
            } />
            <Route path="/404" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path='/' element={<Login />}/>
            <Route path='/anamnese' element={<Anamnesse />} />
            <Route path='/assinatura' element={<Assinatura />} />
            <Route path='/ficha/paciente_adulto' element={<PacienteA />} />
            <Route path='/ficha/paciente_infantil' element={<PacienteInf />} />
            <Route path='/orcamento' element={<Orcamento />} />
          </Routes>
      </UserProvider>
  </ChakraProvider>

    );
  }
  
  export default App;