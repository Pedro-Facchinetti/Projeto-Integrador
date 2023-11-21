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
import { createPacienteA } from "./PacienteAService";


function PacienteA(props) {

    const [nomePacienteA, setNomePacienteA] = useState('');
    const [dataNasimentoA, setDataNascimentoA] = useState('');
    const [idadePacienteA, setIdadePacienteA] = useState('');
    const [sexoPacienteA, setSexoPacienteA] = useState('');
    const [telefonePacienteA, setTelefonePacienteA] = useState('');
    const [celularPacienteA, setCelularPacienteA] = useState('');
    const [enderecoPacienteA, setEnderecoPacienteA] =  useState('');
    const [cepPacienteA, setCepPacienteA] = useState('');
    const [ufPacienteA, setUfPacienteA] = useState('');
    const [cidadePacienteA, setCidadePacienteA] = useState('');
    const [emailPacienteA, setEmailPacienteA] = useState('');
    const [dataCadastroPacienteA, setDataCadastroPacienteA] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const pacienteAdultoData = {
            nomePacienteA,
            dataNasimentoA,
            idadePacienteA: parseInt(idadePacienteA),
            sexoPacienteA,
            telefonePacienteA,
            celularPacienteA,
            enderecoPacienteA,
            cepPacienteA,
            ufPacienteA,
            cidadePacienteA,
            emailPacienteA  ,
            dataCadastroPacienteA,
        }
        await createPacienteA(pacienteAdultoData);
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
                                    <Input value={nomePacienteA} onChange={e => setNomePacienteA(e.target.value)}
                                        id="nome" type="name" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="date">Data de nascimento:</FormLabel>
                                    <Input value={dataNasimentoA} onChange={e => setDataNascimentoA(e.target.value)}
                                        id="date" type="date" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="age">Idade:</FormLabel>
                                    <Input value={idadePacienteA} onChange={e => setIdadePacienteA(e.target.value)}
                                        id="age" type="age" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="sex">Sexo:</FormLabel>
                                    <HStack square="24px">
                                        <Checkbox isChecked={sexoPacienteA === 'masculino'} onChange={() => setSexoPacienteA('masculino')}>Masculino</Checkbox>
                                        <Checkbox isChecked={sexoPacienteA === 'feminino'} onChange={() => setSexoPacienteA('feminino')}>Feminino</Checkbox>
                                    </HStack>
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="number">Telefone:</FormLabel>
                                    <Input value={telefonePacienteA} onChange={e => setTelefonePacienteA(e.target.value)}
                                    id="number" type="number" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="number">Celular:</FormLabel>
                                    <Input value={celularPacienteA} onChange={e => setCelularPacienteA(e.target.value)}
                                    id="number" type="number" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="67%">
                                    <FormLabel htmlFor="endereco">Endereço Residencial:</FormLabel>
                                    <Input value={enderecoPacienteA} onChange={e => setEnderecoPacienteA(e.target.value)}
                                    id="endereco" type="endereco" />
                                </Box>
                                <Box w="33%">
                                    <FormLabel htmlFor="cep">CEP:</FormLabel>
                                    <Input value={cepPacienteA} onChange={e => setCepPacienteA(e.target.value)}
                                    id="cep" type="cep" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="uf">UF:</FormLabel>
                                    <Input value={ufPacienteA} onChange={e => setUfPacienteA(e.target.value)}
                                    id="uf" type="uf" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="cidade">Cidade:</FormLabel>
                                    <Input value={cidadePacienteA} onChange={e => setCidadePacienteA(e.target.value)}
                                    id="cidade" type="cidade" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="email">E-mail:</FormLabel>
                                    <Input value={emailPacienteA} onChange={e => setEmailPacienteA(e.target.value)}
                                    id="email" type="email" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="33%">
                                    <FormLabel htmlFor="date">Data de Hoje:</FormLabel>
                                    <Input value={dataCadastroPacienteA} onChange={e => setDataCadastroPacienteA(e.target.value)}
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