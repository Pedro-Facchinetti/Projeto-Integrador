import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    Button,
    Checkbox,
} from "@chakra-ui/react";

import NavBar from "../../NavBar";
import NavFicha from "../../Components/NavFicha/NavFicha";
import { useState } from "react";
import { createPacienteInf } from './PacienteInfService'


function PacienteA(props) {

    const [nomePacienteInf, setNomePacienteInf] = useState('');
    const [dataNasimentoInf, setDataNascimentoInf] = useState('');
    const [idadePacienteInf, setIdadePacienteInf] = useState('');
    const [sexoPacienteInf, setSexoPacienteInf] = useState('');
    const [telefonePacienteInf, setTelefonePacienteInf] = useState('');
    const [celularPacienteInf, setCelularPacienteInf] = useState('');
    const [enderecoPacienteInf, setEnderecoPacienteInf] =  useState('');
    const [cepPacienteInf, setCepPacienteInf] = useState('');
    const [ufPacienteInf, setUfPacienteInf] = useState('');
    const [cidadePacienteInf, setCidadePacienteInf] = useState('');
    const [emailPacienteInf, setEmailPacienteInf] = useState('');
    const [dataCadastroPacienteInf, setDataCadastroPacienteInf] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const pacienteInfantilData = {
            nomePacienteInf: nomePacienteInf,
            dataNasimentoInf: dataNasimentoInf,
            idadePacienteInf: parseInt(idadePacienteInf),
            sexoPacienteInf: sexoPacienteInf,
            telefonePacienteInf: telefonePacienteInf,
            celularPacienteInf: celularPacienteInf,
            enderecoPacienteInf: enderecoPacienteInf,
            cepPacienteInf: cepPacienteInf,
            ufPacienteInf: ufPacienteInf,
            cidadePacienteInf: cidadePacienteInf,
            emailPacienteInf: emailPacienteInf  ,
            dataCadastroPacienteInf: dataCadastroPacienteInf,
        }
        await createPacienteInf(pacienteInfantilData);
    };

    return (
        <Box minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)">
            <Center as="header" color="white" fontSize="4x1" p="50px" flexDir={"column"} align="center" justify="center">
                <Flex mb={35}> <NavBar /> </Flex>
                <Flex w={"500px"} pb={"30px"} > <NavFicha /> </Flex>
                <Flex>
                    <Center w="100%" maxW={840} bg="#24394A" top={100} borderRadius={5} p="6" color="white" >
                        <FormControl display="flex" flexDir="column" gap="4" isRequired='15px'>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="nome">Nome:</FormLabel>
                                    <Input value={nomePacienteInf} onChange={e => setNomePacienteInf(e.target.value)}
                                        id="nome" type="name" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="date">Data de nascimento:</FormLabel>
                                    <Input value={dataNasimentoInf} onChange={e => setDataNascimentoInf(e.target.value)}
                                        id="date" type="date" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="age">Idade:</FormLabel>
                                    <Input value={idadePacienteInf} onChange={e => setIdadePacienteInf(e.target.value)}
                                        id="age" type="age" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="sex">Sexo:</FormLabel>
                                    <HStack square="24px">
                                        <Checkbox isChecked={sexoPacienteInf === 'masculino'} onChange={() => setSexoPacienteInf('masculino')}>Masculino</Checkbox>
                                        <Checkbox isChecked={sexoPacienteInf === 'feminino'} onChange={() => setSexoPacienteInf('feminino')}>Feminino</Checkbox>
                                    </HStack>
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="number">Telefone:</FormLabel>
                                    <Input value={telefonePacienteInf} onChange={e => setTelefonePacienteInf(e.target.value)}
                                    id="number" type="number" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="number">Celular:</FormLabel>
                                    <Input value={celularPacienteInf} onChange={e => setCelularPacienteInf(e.target.value)}
                                    id="number" type="number" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="67%">
                                    <FormLabel htmlFor="endereco">Endereço Residencial:</FormLabel>
                                    <Input value={enderecoPacienteInf} onChange={e => setEnderecoPacienteInf(e.target.value)}
                                    id="endereco" type="endereco" />
                                </Box>
                                <Box w="33%">
                                    <FormLabel htmlFor="cep">CEP:</FormLabel>
                                    <Input value={cepPacienteInf} onChange={e => setCepPacienteInf(e.target.value)}
                                    id="cep" type="cep" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="uf">UF:</FormLabel>
                                    <Input value={ufPacienteInf} onChange={e => setUfPacienteInf(e.target.value)}
                                    id="uf" type="uf" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="cidade">Cidade:</FormLabel>
                                    <Input value={cidadePacienteInf} onChange={e => setCidadePacienteInf(e.target.value)}
                                    id="cidade" type="cidade" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="email">E-mail:</FormLabel>
                                    <Input value={emailPacienteInf} onChange={e => setEmailPacienteInf(e.target.value)}
                                    id="email" type="email" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="33%">
                                    <FormLabel htmlFor="date">Data de Hoje:</FormLabel>
                                    <Input value={dataCadastroPacienteInf} onChange={e => setDataCadastroPacienteInf(e.target.value)}
                                    id="date" type="date" />
                                </Box>
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='right' width='100%'
                                >
                                    <Button
                                        w={250}
                                        p="5"
                                        type="submit"
                                        bg="teal.400"
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        mt="7"
                                        _hover={{ bg: "teal.800" }}
                                        onClick={handleSubmit}
                                    >
                                        Cadastrar Paciente
                                    </Button>
                                </Box>
                            </HStack>
                        </FormControl>
                    </Center>
                </Flex>
            </Center>
        </Box>
    )
}

export default PacienteA;