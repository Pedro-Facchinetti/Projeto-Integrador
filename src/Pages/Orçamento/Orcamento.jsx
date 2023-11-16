import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
    Tab,
    Tabs,
    TabPanel,
    TabPanels,
    TabList,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Select,
    Portal,
    VStack,
    Checkbox,
    CheckboxGroup,
    Heading,
    Textarea,
    Text
} from "@chakra-ui/react";

import Arcada from "../../Assets/mandibula.svg"
import CustomVStack from "../../Components/CustomChakraUI/CustomVStack";

function Orcamento(props) {
    return (
        <Box alignContent={"center"} minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)" flexDir={"column"} p={"100px"} >
            <Center color="white" fontWeight="bold" fontSize="4x1" flexDirection={"column"} >
                <Flex aling="center" justify="center" gap="25px" >
                    <Flex //imagem mandibula
                        w="425px"
                        height="550px"
                        bg="#24394A"
                        borderRadius="10px"
                        p="6"
                        color="white"
                    >
                        <img width={"100%"} src={Arcada} />
                    </Flex>
                    <Flex //radiografia
                        w="700px"
                        height="550px"

                        bg="#24394A"
                        borderRadius="10px"
                        p="6"
                        color="white"
                    >
                        <Box w="100%" align={"center"} justify="center" >
                            <Box w={"100%"} color='white' fontWeight='Open Sans' letterSpacing='wide' fontSize='32px' mb='30px' >
                                <h1>Radiografia</h1>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="1" >1</Checkbox>
                                    <Checkbox left="200px" value="9" >9</Checkbox>
                                    <Checkbox left="227px" value="17" >17</Checkbox>
                                    <Checkbox left="250px" value="25" >25</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="2" >2</Checkbox>
                                    <Checkbox left="200px" value="10" >10</Checkbox>
                                    <Checkbox left="220px" value="18" >18</Checkbox>
                                    <Checkbox left="240px" value="26" >26</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="3" >3</Checkbox>
                                    <Checkbox left="200px" value="11" >11</Checkbox>
                                    <Checkbox left="220px" value="19" >19</Checkbox>
                                    <Checkbox left="240px" value="27" >27</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="4" >4</Checkbox>
                                    <Checkbox left="200px" value="12" >12</Checkbox>
                                    <Checkbox left="220px" value="20" >20</Checkbox>
                                    <Checkbox left="240px" value="28" >28</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="5" >5</Checkbox>
                                    <Checkbox left="200px" value="13" >13</Checkbox>
                                    <Checkbox left="220px" value="21" >21</Checkbox>
                                    <Checkbox left="240px" value="29" >29</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="6" >6</Checkbox>
                                    <Checkbox left="200px" value="14" >14</Checkbox>
                                    <Checkbox left="220px" value="22" >22</Checkbox>
                                    <Checkbox left="240px" value="30" >30</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="7" >7</Checkbox>
                                    <Checkbox left="200px" value="15" >15</Checkbox>
                                    <Checkbox left="220px" value="23" >23</Checkbox>
                                    <Checkbox left="240px" value="31" >31</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white">
                                    <Checkbox left="190px" value="8" >8</Checkbox>
                                    <Checkbox left="200px" value="16" >16</Checkbox>
                                    <Checkbox left="220px" value="24" >24</Checkbox>
                                    <Checkbox left="240px" value="32" >32</Checkbox>
                                </HStack>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
                <Flex w="1150px" align="center" justify="center" height="450px" bg="#24394A" borderRadius="10px" p="6" color="white" mt="70px" >
                    <Box w="100%" align="center" justify="center">
                        <Box
                            color='white'
                            w="100%"
                            fontWeight='Open Sans'
                            letterSpacing='wide'
                            fontSize='32px'
                            mb="8">
                            <Box w={"100%"} color='white' fontWeight='Open Sans' letterSpacing='wide' fontSize='32px' m='30px' >
                                <h1>Orçamento</h1>
                            </Box>

                            <Flex
                                w="70%"
                                border="1px"
                                borderColor="#057765"
                                borderRadius={10}
                                mb="4"
                                mr="60%"
                                flexDir="column"
                                padding={1}
                            >
                                <Flex align="center">
                                    <FormLabel w="auto" htmlFor="orcamento" ml="40px" mb="2">Orçamento válido por: </FormLabel>
                                    <Input
                                        w={"70px"}
                                        type="number"
                                        id="orcamento"
                                        placeholder="dias"
                                        borderColor="transparent"
                                        borderBottom="2px"
                                        borderRadius={0}
                                    />
                                    <FormLabel htmlFor="llmo" ml="10px" mb="2">Dias.</FormLabel>
                                </Flex>
                            </Flex>
                            <Flex
                                w="70%"
                                border="1px"
                                borderColor="#057765"
                                borderRadius={10}
                                mb="4"
                                mr="60%"
                                flexDir="column"
                                padding={1}
                            >
                                <Flex align="center">
                                    <FormLabel w="auto" htmlFor="llmo" ml="40px" mb="2">llmo(a) Sr. (a): </FormLabel>
                                    <Input
                                        w={"500px"}
                                        type="text"
                                        id="llmo"
                                        placeholder="Nome do cliente"
                                        borderColor="transparent"
                                        borderBottom="2px"
                                        borderRadius={0}
                                    />
                                </Flex>
                            </Flex>
                            <Flex w="70%"
                                border="1px"
                                borderColor="#057765"
                                borderRadius={10}
                                mb="4"
                                mr="60%"
                                padding={1}>
                                <FormLabel w="auto" htmlFor="endereco" ml="40px" mb="2">Endereço: </FormLabel>
                                <Input
                                    w={"500px"}
                                    type="text"
                                    id="endereco"
                                    placeholder="Endereço do cliente"
                                    borderColor="transparent"
                                    borderBottom="2px"
                                    borderRadius={0}
                                />
                            </Flex>
                            <Box w="100%" mb="4" flexDir="column">
                                <Box
                                    w="100%"
                                    border='1px'
                                    borderColor='#057765'
                                    borderRadius={10}
                                >
                                    <FormLabel htmlFor="number" ml="40px" >Dias de tratamento:
                                        <CheckboxGroup>
                                            <HStack spacing={[1, 5]} direction={['column', 'row']} mb="4"  >
                                                <Checkbox value='2°'>2°</Checkbox>
                                                <Checkbox value='3°'>3°</Checkbox>
                                                <Checkbox value='4°'>4°</Checkbox>
                                                <Checkbox value='5°'>5°</Checkbox>
                                                <Checkbox value='6°'>6°</Checkbox>
                                                <Checkbox value='Sábado'>Sábado</Checkbox>
                                            </HStack>
                                        </CheckboxGroup>
                                        <Box w="100%" direction="row">
                                            <FormLabel w="auto" htmlFor="horario" mb="2">Horário: </FormLabel>
                                            <Input
                                                w={"500px"}
                                                type="number"
                                                id="horario"
                                                placeholder="Nome"
                                                borderColor="transparent"
                                                borderBottom="2px"
                                                borderRadius={0}
                                            />
                                        </Box>
                                    </FormLabel>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Flex>

                <Flex w="1150px" align="center" h="auto" justify="center" bg="#24394A" borderRadius="10px" p="6" color="white" mt="70px" direction={"column"} >
                    <Box w="auto" color='white' fontWeight='Open Sans' letterSpacing='wide' fontSize='32px' m='30px' >
                        <h1>Serviços e grau de importância</h1>
                    </Box>
                    <Box w="100%" >
                        <FormLabel htmlFor="nome">Serviços a executar:</FormLabel>
                        <Textarea id="nome" rows={5} required border="1px solid #057765" borderRadius="md" p="4" />
                    </Box>
                    <CustomVStack w="100%" >
                        <Text w="auto" fontSize="md">Informe o grau de importância:</Text>
                        <Checkbox w="10%" value="baixa" >Baixa</Checkbox>
                        <Checkbox w="10%" value="media" >Media</Checkbox>
                        <Checkbox w="10%" value="alta" >Alta</Checkbox>
                    </CustomVStack>
                    <CustomVStack w="100%">
                        <Text w="45%" fontSize="md">Informe o valor do procedimento:</Text>
                        <Input id="valor_procedimento" type="number" />
                    </CustomVStack>
                </Flex>

                <Flex w="1150px" h="auto" align="center" justify="center" bg="#24394A" borderRadius="10px" p="6" color="white" mt="70px" direction={"column"} >
                    <Box w="auto" color='white' fontWeight='Open Sans' letterSpacing='wide' fontSize='32px' m='30px' >
                        <h1>Pagamento</h1>
                    </Box>
                    <Box w="100%" >
                        <FormLabel htmlFor="nome">Serviços a executar:</FormLabel>
                        <Textarea id="nome" rows={5} required border="1px solid #057765" borderRadius="md" p="4" />
                    </Box>
                    <CustomVStack w="100%" >
                        <Text w="auto" fontSize="md">Foi feito o pagamento do tratamento referente a 50%  do valor total do tratamento (Ou valor combinado)?</Text>
                        <Checkbox w="10%" value="sim" >Sim</Checkbox>
                        <Checkbox w="10%" value="nao" >Não</Checkbox>
                    </CustomVStack>
                    <CustomVStack w="100%">
                        <Text w="80%" fontSize="md">Se sim, qual foi a data de efetuação do pagamento?</Text>
                        <Input id="data_pagamento" type="date" />
                    </CustomVStack>
                    <CustomVStack w="100%" >
                        <Text w="auto" fontSize="md">Forma de paamento que o cliente optou:</Text>
                        <Checkbox w="10%" value="cartao" >Cartão</Checkbox>
                        <Checkbox w="10%" value="dinheiro" >Dinheiro</Checkbox>
                        <Checkbox w="10%" value="pix" >Pix</Checkbox>
                    </CustomVStack>
                </Flex>
            </Center>
        </Box >
    )
}
export default Orcamento;