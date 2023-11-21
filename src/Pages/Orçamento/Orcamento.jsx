import {
    Flex,
    Box,
    Center,
    Input,
    FormLabel,
    HStack,
    Checkbox,
    CheckboxGroup,
    Textarea,
    Text,
    Button
} from "@chakra-ui/react";

import Arcada from "../../Assets/mandibula.svg"
import CustomVStack from "../../Components/CustomChakraUI/CustomVStack";

import NavBar from "../../NavBar";
import { useState } from "react";
import { createOrcamento } from './OrcamentoService';


function Orcamento(props) {

    //radiografia
    const [dente1, setDente1] = useState(false);
    const [dente2, setDente2] = useState(false);
    const [dente3, setDente3] = useState(false);
    const [dente4, setDente4] = useState(false);
    const [dente5, setDente5] = useState(false);
    const [dente6, setDente6] = useState(false);
    const [dente7, setDente7] = useState(false);
    const [dente8, setDente8] = useState(false);
    const [dente9, setDente9] = useState(false);
    const [dente10, setDente10] = useState(false);
    const [dente11, setDente11] = useState(false);
    const [dente12, setDente12] = useState(false);
    const [dente13, setDente13] = useState(false);
    const [dente14, setDente14] = useState(false);
    const [dente15, setDente15] = useState(false);
    const [dente16, setDente16] = useState(false);
    const [dente17, setDente17] = useState(false);
    const [dente18, setDente18] = useState(false);
    const [dente19, setDente19] = useState(false);
    const [dente20, setDente20] = useState(false);
    const [dente21, setDente21] = useState(false);
    const [dente22, setDente22] = useState(false);
    const [dente23, setDente23] = useState(false);
    const [dente24, setDente24] = useState(false);
    const [dente25, setDente25] = useState(false);
    const [dente26, setDente26] = useState(false);
    const [dente27, setDente27] = useState(false);
    const [dente28, setDente28] = useState(false);
    const [dente29, setDente29] = useState(false);
    const [dente30, setDente30] = useState(false);
    const [dente31, setDente31] = useState(false);
    const [dente32, setDente32] = useState(false);

    //orçamento
    const [validadeOrcamento, setValidadeOrcamento] = useState('');
    const [pacienteName, setPacienteName] = useState('');
    const [segunda, setSegunda] = useState('');
    const [terca, setTerca] = useState('');
    const [quarta, setQuarta] = useState('');
    const [quinta, setQuinta] = useState('');
    const [sexta, setSexta] = useState('');
    const [sabado, setSabado] = useState('');
    const [horarioAtendimento, setHorarioAtendimento] = useState('');

    //serviços
    const [descricaoServicos, setDescricaoServicos] = useState('');
    const [valorProcedimento, setValorProcedimento] = useState('');

    //pagamento
    const [situacaoPamaneto, setSituacaoPagamento] = useState('');
    const [formaDePagamento, setFormaDePagamento] = useState('');
    const [dataPagamento, setDataPagamento] = useState('');

    //botão
    const handleSubmit = async (event) => {
        event.preventDefault();
        const orcamentoData = {
            dente1: dente1 ? true : false, dente9: dente9 ? true : false, dente17: dente17 ? true : false, dente25: dente25 ? true : false,
            dente2: dente2 ? true : false, dente10: dente10 ? true : false, dente18: dente18 ? true : false, dente26: dente26 ? true : false,
            dente3: dente3 ? true : false, dente11: dente11 ? true : false, dente19: dente19 ? true : false, dente27: dente27 ? true : false,
            dente4: dente4 ? true : false, dente12: dente12 ? true : false, dente20: dente20 ? true : false, dente28: dente28 ? true : false,
            dente5: dente5 ? true : false, dente13: dente13 ? true : false, dente21: dente21 ? true : false, dente29: dente29 ? true : false,
            dente6: dente6 ? true : false, dente14: dente14 ? true : false, dente22: dente22 ? true : false, dente30: dente30 ? true : false,
            dente7: dente7 ? true : false, dente15: dente15 ? true : false, dente23: dente23 ? true : false, dente31: dente31 ? true : false,
            dente8: dente8 ? true : false, dente16: dente16 ? true : false, dente24: dente24 ? true : false, dente32: dente32 ? true : false,

            validadeOrcamento: parseInt(validadeOrcamento),
            pacienteName,
            segunda: segunda ? true : false,
            terca: terca ? true : false,
            quarta: quarta ? true : false,
            quinta: quinta ? true : false,
            sexta: sexta ? true : false,
            sabado: sabado ? true : false,
            horarioAtendimento: parseInt(horarioAtendimento),

            descricaoServicos,
            valorProcedimento: parseInt(valorProcedimento),

            situacaoPamaneto,
            dataPagamento,
            formaDePagamento,
        }
        await createOrcamento(orcamentoData);
    };

    return (
        <Box alignContent={"center"} minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)" flexDir={"column"} p={"50px"} >
            <Center color="white" fontSize="4x1" flexDirection={"column"} >
                <Flex mb={35}> <NavBar /> </Flex>
                <Flex aling="center" justify="center" gap="25px" >
                    <Flex //imagem mandibula
                        w="425px"
                        height="550px"
                        bg="#24394A"
                        borderRadius="10px"
                        p="6"
                        color="white"
                    >
                        <img width={"100%"} src={Arcada} alt="Arcada dentaria" />
                    </Flex>
                    <Flex //radiografia
                        w="700px"
                        height="550px"

                        bg="#24394A"
                        borderRadius="10px"
                        p="6"
                        color="white"
                    >
                        {/**Checkbox*/}
                        <Box w="100%" align={"center"} justify="center" >
                            <Box w={"100%"} color='white' fontWeight='Open Sans' letterSpacing='wide' fontSize='32px' mb='30px' >
                                <h1>Radiografia</h1>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente1} onChange={e => setDente1(e.target.checked)}>1</Checkbox>
                                    <Checkbox isChecked={dente9} onChange={e => setDente9(e.target.checked)} >9</Checkbox>
                                    <Checkbox isChecked={dente17} onChange={e => setDente17(e.target.checked)} >17</Checkbox>
                                    <Checkbox isChecked={dente25} onChange={e => setDente25(e.target.checked)} >25</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente2} onChange={e => setDente2(e.target.checked)} >2</Checkbox>
                                    <Checkbox isChecked={dente10} onChange={e => setDente10(e.target.checked)} >10</Checkbox>
                                    <Checkbox isChecked={dente18} onChange={e => setDente18(e.target.checked)} >18</Checkbox>
                                    <Checkbox isChecked={dente26} onChange={e => setDente26(e.target.checked)} >26</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente3} onChange={e => setDente3(e.target.checked)} >3</Checkbox>
                                    <Checkbox isChecked={dente11} onChange={e => setDente11(e.target.checked)} >11</Checkbox>
                                    <Checkbox isChecked={dente19} onChange={e => setDente19(e.target.checked)} >19</Checkbox>
                                    <Checkbox isChecked={dente27} onChange={e => setDente27(e.target.checked)} >27</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente4} onChange={e => setDente4(e.target.checked)} >4</Checkbox>
                                    <Checkbox isChecked={dente12} onChange={e => setDente12(e.target.checked)} >12</Checkbox>
                                    <Checkbox isChecked={dente20} onChange={e => setDente20(e.target.checked)} >20</Checkbox>
                                    <Checkbox isChecked={dente28} onChange={e => setDente28(e.target.checked)} >28</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente5} onChange={e => setDente5(e.target.checked)} >5</Checkbox>
                                    <Checkbox isChecked={dente13} onChange={e => setDente13(e.target.checked)} >13</Checkbox>
                                    <Checkbox isChecked={dente21} onChange={e => setDente21(e.target.checked)} >21</Checkbox>
                                    <Checkbox isChecked={dente29} onChange={e => setDente29(e.target.checked)} >29</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente6} onChange={e => setDente6(e.target.checked)} >6</Checkbox>
                                    <Checkbox isChecked={dente14} onChange={e => setDente14(e.target.checked)} >14</Checkbox>
                                    <Checkbox isChecked={dente22} onChange={e => setDente22(e.target.checked)} >22</Checkbox>
                                    <Checkbox isChecked={dente30} onChange={e => setDente30(e.target.checked)} >30</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente7} onChange={e => setDente7(e.target.checked)} >7</Checkbox>
                                    <Checkbox isChecked={dente15} onChange={e => setDente15(e.target.checked)} >15</Checkbox>
                                    <Checkbox isChecked={dente23} onChange={e => setDente23(e.target.checked)} >23</Checkbox>
                                    <Checkbox isChecked={dente31} onChange={e => setDente31(e.target.checked)} >31</Checkbox>
                                </HStack>
                            </Box>
                            <Box w="100%" mb="4">
                                <HStack spacing="5" square="24px" color="white" justify={"center"} gap={14}>
                                    <Checkbox isChecked={dente8} onChange={e => setDente8(e.target.checked)} >8</Checkbox>
                                    <Checkbox isChecked={dente16} onChange={e => setDente16(e.target.checked)} >16</Checkbox>
                                    <Checkbox isChecked={dente24} onChange={e => setDente24(e.target.checked)} >24</Checkbox>
                                    <Checkbox isChecked={dente32} onChange={e => setDente32(e.target.checked)} >32</Checkbox>
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
                                <h1>Serviço</h1>
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
                                    <Input value={validadeOrcamento} onChange={e => setValidadeOrcamento(e.target.value)}
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
                                    <Input value={pacienteName} onChange={e => setPacienteName(e.target.value)}
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
                                                <Checkbox isChecked={segunda} onChange={e => setSegunda(e.target.checked)}>Segunda</Checkbox>
                                                <Checkbox isChecked={terca} onChange={e => setTerca(e.target.checked)}>Terça</Checkbox>
                                                <Checkbox isChecked={quarta} onChange={e => setQuarta(e.target.checked)}>Quarta</Checkbox>
                                                <Checkbox isChecked={quinta} onChange={e => setQuinta(e.target.checked)}>Quinta</Checkbox>
                                                <Checkbox isChecked={sexta} onChange={e => setSexta(e.target.checked)}>Sexta</Checkbox>
                                                <Checkbox isChecked={sabado} onChange={e => setSabado(e.target.checked)}>Sábado</Checkbox>
                                            </HStack>
                                        </CheckboxGroup>
                                        <Box w="100%" direction="row">
                                            <FormLabel w="auto" htmlFor="horario" mb="2">Horário: </FormLabel>
                                            <Input value={horarioAtendimento} onChange={e => setHorarioAtendimento(e.target.value)}
                                                w={"500px"}
                                                type="number"
                                                id="horario"
                                                placeholder="Horário para consulta"
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
                        <h1>Orçamento</h1>
                    </Box>
                    <Box w="100%" >
                        <FormLabel htmlFor="nome">Descrição do serviço:</FormLabel>
                        <Textarea value={descricaoServicos} onChange={e => setDescricaoServicos(e.target.value)}
                            id="nome" rows={5} required border="1px solid #057765" borderRadius="md" p="4" />
                    </Box>
                    <CustomVStack w="100%">
                        <Text w="45%" fontSize="md">Informe o valor do procedimento:</Text>
                        <Input value={valorProcedimento} onChange={e => setValorProcedimento(e.target.value)}
                            id="valor_procedimento" type="number" />
                    </CustomVStack>
                </Flex>

                <Flex w="1150px" h="auto" align="center" justify="center" bg="#24394A" borderRadius="10px" p="6" color="white" mt="70px" direction={"column"} >
                    <Box w="auto" color='white' fontWeight='Open Sans' letterSpacing='wide' fontSize='32px' m='30px' >
                        <h1>Pagamento</h1>
                    </Box>
                    <CustomVStack w="100%" >
                        <Text w="auto" fontSize="md">Foi feito o pagamento do tratamento referente a 50%  do valor total do tratamento (Ou valor combinado)?</Text>
                        <Checkbox w="10%" isChecked={situacaoPamaneto === 'SIM'} onChange={() => setSituacaoPagamento("SIM")} >Sim</Checkbox>
                        <Checkbox w="10%" isChecked={situacaoPamaneto === 'NAO'} onChange={() => setSituacaoPagamento("NAO")} >Não</Checkbox>
                    </CustomVStack>
                    <CustomVStack w="100%" >
                        <Text w="80%" fontSize="md">Se sim, qual foi a data de efetuação do pagamento?</Text>
                        <Input
                            value={dataPagamento} onChange={e => setDataPagamento(e.target.value)}
                            id="data_pagamento"
                            type="date"
                        />
                    </CustomVStack>

                    <CustomVStack w="100%" >
                        <Text w="auto" fontSize="md">Forma de pagamento que o cliente optou:</Text>
                        <Checkbox
                            w="10%"
                            isChecked={formaDePagamento === 'cartao'}
                            onChange={() => setFormaDePagamento('cartao')}
                        >
                            Cartão
                        </Checkbox>
                        <Checkbox
                            w="10%"
                            isChecked={formaDePagamento === 'dinheiro'}
                            onChange={() => setFormaDePagamento('dinheiro')}
                        >
                            Dinheiro
                        </Checkbox>
                        <Checkbox
                            w="10%"
                            isChecked={formaDePagamento === 'pix'}
                            onChange={() => setFormaDePagamento('pix')}
                        >
                            Pix
                        </Checkbox>
                    </CustomVStack>
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
                        Registrar informações
                    </Button>
                </Flex>
            </Center>
        </Box >
    )
}
export default Orcamento;