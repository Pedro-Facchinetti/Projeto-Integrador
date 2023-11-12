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

function pacienteA(props) {
    return (
        <Box h="100vh">
            <Center
                as="header"
                h={150}
                bgGradient="linear(to-l, #10E8CE, #002C36)"
                color="white"
                fontWeight="bold"
                fontSize="4x1"
                pb="8"
            >
                <Flex align="center"
                    justify="center"
                    bg="#24394A"
                    width="120"
                    maxW={840}
                    height="60px"
                    borderRadius="10px"
                    padding="20px"
                    gap="35px"
                    position="center"
                >
                    <Center
                        color='white'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'>
                        <Tabs variant='soft-rounded' colorScheme='green'>
                            <TabList>
                                <Tab _selected={{ color: 'white', bg: '#13232F' }}>Paciente Adulto</Tab>
                                <Tab _selected={{ color: 'white', bg: '#13232F' }}> Paciente Infantil</Tab>
                            </TabList>
                        </Tabs>
                    </Center>
                </Flex>
            </Center>

            <Flex
                aling="center"
                justify="center"
                bgGradient="linear(to-l, #10E8CE, #002C36)"
                h="calc(100vh - 150px)"
            >
                <Center
                    w="100%"
                    maxW={840}
                    bg="#24394A"
                    top={100}
                    position="absolute"
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
        </Box>
    )
}

export default pacienteA;