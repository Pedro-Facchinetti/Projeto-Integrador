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

    const [nomePaciente, setNomePaciente] = useState('');
    const [dataNasimento, setDataNascimentoA] = useState('');
    const [idadePaciente, setIdadePaciente] = useState('');
    const [sexoPaciente, setSexoPaciente] = useState('');
    const [telefonePaciente, setTelefonePaciente] = useState('');
    const [celularPaciente, setCelularPaciente] = useState('');
    const [enderecoPaciente, setEnderecoPaciente] =  useState('');
    const [cepPaciente, setCepPaciente] = useState('');
    const [ufPaciente, setUfPaciente] = useState('');
    const [cidadePaciente, setCidadePaciente] = useState('');
    const [emailPaciente, setEmailPaciente] = useState('');
    const [dataCadastroPaciente, setDataCadastroPaciente] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const pacienteAdultoData = {
            nome: nomePaciente,
            dataNascimento: dataNasimento,
            idade: parseInt(idadePaciente),
            sexo: sexoPaciente,
            telefone: telefonePaciente,
            celular: celularPaciente,
            endereco: enderecoPaciente,
            cep: cepPaciente,
            uf: ufPaciente,
            cidade: cidadePaciente,
            email: emailPaciente,
            dataCadastro: dataCadastroPaciente,
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
                                    <Input value={nomePaciente} onChange={e => setNomePaciente(e.target.value)}
                                        id="nome" type="name" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="date">Data de nascimento:</FormLabel>
                                    <Input value={dataNasimento} onChange={e => setDataNascimentoA(e.target.value)}
                                        id="date" type="date" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="age">Idade:</FormLabel>
                                    <Input value={idadePaciente} onChange={e => setIdadePaciente(e.target.value)}
                                        id="age" type="age" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="sex">Sexo:</FormLabel>
                                    <HStack square="24px">
                                        <Checkbox isChecked={sexoPaciente === 'masculino'} onChange={() => setSexoPaciente('masculino')}>Masculino</Checkbox>
                                        <Checkbox isChecked={sexoPaciente === 'feminino'} onChange={() => setSexoPaciente('feminino')}>Feminino</Checkbox>
                                    </HStack>
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="number">Telefone:</FormLabel>
                                    <Input value={telefonePaciente} onChange={e => setTelefonePaciente(e.target.value)}
                                    id="number" type="number" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="number">Celular:</FormLabel>
                                    <Input value={celularPaciente} onChange={e => setCelularPaciente(e.target.value)}
                                    id="number" type="number" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="67%">
                                    <FormLabel htmlFor="endereco">Endereço Residencial:</FormLabel>
                                    <Input value={enderecoPaciente} onChange={e => setEnderecoPaciente(e.target.value)}
                                    id="endereco" type="endereco" />
                                </Box>
                                <Box w="33%">
                                    <FormLabel htmlFor="cep">CEP:</FormLabel>
                                    <Input value={cepPaciente} onChange={e => setCepPaciente(e.target.value)}
                                    id="cep" type="cep" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="uf">UF:</FormLabel>
                                    <Input value={ufPaciente} onChange={e => setUfPaciente(e.target.value)}
                                    id="uf" type="uf" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="cidade">Cidade:</FormLabel>
                                    <Input value={cidadePaciente} onChange={e => setCidadePaciente(e.target.value)}
                                    id="cidade" type="cidade" />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="email">E-mail:</FormLabel>
                                    <Input value={emailPaciente} onChange={e => setEmailPaciente(e.target.value)}
                                    id="email" type="email" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="33%">
                                    <FormLabel htmlFor="date">Data de Hoje:</FormLabel>
                                    <Input value={dataCadastroPaciente} onChange={e => setDataCadastroPaciente(e.target.value)}
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