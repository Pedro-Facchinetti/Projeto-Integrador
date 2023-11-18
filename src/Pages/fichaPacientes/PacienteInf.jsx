import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    Button,
    Tab,
    Tabs,
    TabList,
    Checkbox,
} from "@chakra-ui/react";

import NavBar from "../../NavBar";

function pacienteA(props) {
    return (
        <Box minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)">
            <Center
                as="header"
                color="white"
                
                fontSize="4x1"
                p="50px"
                flexDir={"column"}
                align="center"
                justify="center"
            >
                <Flex mb={35}> <NavBar /> </Flex>

                <Flex>
                    <Center
                        w="100%"
                        maxW={840}
                        bg="#24394A"
                        top={100}
                        borderRadius={5}
                        p="6"
                        color="white"
                    >

                        <FormControl display="flex" flexDir="column" gap="4" isRequired='15px'>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="nome">Nome:</FormLabel>
                                    <Input id="nome" type="name" />
                                </Box>

                                <Box w="100%">
                                    <FormLabel htmlFor="date">Data de nascimento:</FormLabel>
                                    <Input id="date" type="date" />
                                </Box>

                                <Box w="100%">
                                    <FormLabel htmlFor="age">Idade:</FormLabel>
                                    <Input id="age" type="age" />
                                </Box>
                            </HStack>

                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="sex">Sexo:</FormLabel>
                                    <HStack square="24px">
                                        <Checkbox value="masculino">Masculino</Checkbox>
                                        <Checkbox value="feminino" >Feminino</Checkbox>
                                    </HStack>
                                </Box>

                                <Box w="100%">
                                    <FormLabel htmlFor="number">Telefone:</FormLabel>
                                    <Input id="number" type="number" />
                                </Box>

                                <Box w="100%">
                                    <FormLabel htmlFor="number">Celular:</FormLabel>
                                    <Input id="number" type="number" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">

                                <Box w="67%">
                                    <FormLabel htmlFor="endereco">Endereço Residencial:</FormLabel>
                                    <Input id="endereco" type="endereco" />
                                </Box>

                                <Box w="33%">
                                    <FormLabel htmlFor="cep">CEP:</FormLabel>
                                    <Input id="cep" type="cep" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">

                                <Box w="100%">
                                    <FormLabel htmlFor="uf">UF:</FormLabel>
                                    <Input id="uf" type="uf" />
                                </Box>

                                <Box w="100%">
                                    <FormLabel htmlFor="cidade">Cidade:</FormLabel>
                                    <Input id="cidade" type="cidade" />
                                </Box>

                                <Box w="100%">
                                    <FormLabel htmlFor="email">E-mail:</FormLabel>
                                    <Input id="email" type="email" />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="33%">
                                    <FormLabel htmlFor="date">Data de Hoje:</FormLabel>
                                    <Input id="date" type="date" />
                                </Box>
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='right'
                                    width='100%'
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

export default pacienteA;