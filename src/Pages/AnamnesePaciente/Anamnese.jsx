import {
    Flex,
    Box,
    Center,
    FormControl,
    HStack,
    FormLabel,
    Input,
    Textarea,
    Heading,
    Checkbox,
    Text,
    Divider,
    Button,
} from "@chakra-ui/react";

import CustomVStack from "../../Components/CustomChakraUI/CustomVStack";
import NavBar from '../../NavBar'
import { useState } from "react";
import {createAnamnese} from'./AnamneseService'

function Anamnese(props) {

    const [motivoConsulta, setMotivoConsulta] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [tipoSanguineo, setTipoSanguineo] = useState('');
    const [anemia, setAnemia] = useState(false);
    const [cardiopatias, setCardiopatias] = useState(false);
    const [hemorragia, setHemorragia] = useState(false);
    const [hemofilia, setHemofilia] = useState(false);
    const [aids, setAids] = useState(false);
    const [gastrite, setGastrite] = useState(false);
    const [problemasGestacao, setProblemasGestacao] = useState('');
    const [convulsao, setConvulsao] = useState(false);
    const [depressao, setDepressao] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [hepatite, setHepatite] = useState(false);
    const [herpes, setHerpes] = useState(false);
    const [desmaiosTonturas, setDesmaiosTonturas] = useState(false);
    const [parto, setParto] = useState('');
    const [tosseFrequente, setTosseFrequente] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const anamneseData = {
            motivoConsulta,
            peso: parseInt(peso),
            altura: parseFloat(altura),
            tipoSanguineo,
            anemia: anemia ? 'SIM' : 'NAO',
            cardiopatias: cardiopatias ? 'SIM' : 'NAO',
            hemorragia: hemorragia ? 'SIM' : 'NAO',
            hemofilia: hemofilia ? 'SIM' : 'NAO',
            aids: aids ? 'SIM' : 'NAO',
            gastrite: gastrite ? 'SIM' : 'NAO',
            problemasGestacao,
            convulsao: convulsao ? 'SIM' : 'NAO',
            depressao: depressao ? 'SIM' : 'NAO',
            diabetes: diabetes ? 'SIM' : 'NAO',
            hepatite: hepatite ? 'SIM' : 'NAO',
            herpes: herpes ? 'SIM' : 'NAO',
            desmaiosTonturas: desmaiosTonturas ? 'SIM' : 'NAO',
            parto, // Aqui precisa ser tratado conforme o enum TipoParto
            tosseFrequente: tosseFrequente ? 'SIM' : 'NAO'
        };
        await createAnamnese(anamneseData);
    };

    return (
        <Box minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)" p={50} >
            <Flex
                flexDirection="column"
                alignItems="center"
                justify="center"

                color="white"
                fontSize="4xl"
                w="100%"
            >
                <Flex mb={35}> <NavBar /> </Flex>

                <Center //Cadastro do paciente
                    w="100%"
                    maxW={1000}
                    bg="#24394A"
                    borderRadius={5}
                    p="6"//24px
                >
                    <FormControl display="flex" flexDir="column" gap="4">
                        <Heading>Anamnese do paciente</Heading>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <FormLabel htmlFor="nome">Motivo da consulta:</FormLabel>
                                <Textarea id="motivoConsulta" rows={5} required border="1px solid #057765" borderRadius="md" p="4"
                                              value={motivoConsulta} onChange={e => setMotivoConsulta(e.target.value)} />                            </Box>
                        </HStack>
                        <HStack w="100%">
                            <Box w="25%">
                                <FormLabel htmlFor="racionalidade">Racionalidade:</FormLabel>
                                <Input id="racionalidade" type="text" required border="1px solid #057765" borderRadius="md" p="4"
                                /> 
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="altura">Altura:</FormLabel>
                                <Input id="altura" type="number" required border="1px solid #057765" borderRadius="md" p="4"
                                            value={altura} onChange={e => setAltura(e.target.value)} />
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="peso">Peso:</FormLabel>
                                <Input id="peso" type="number" required border="1px solid #057765" borderRadius="md" p="4" 
                                value={peso} onChange={e => setPeso(e.target.value)}/>
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="tipo_sanguineo">Tipo sanguíneo:</FormLabel>
                                <Input id="tipo_sanguineo" type="text" required border="1px solid #057765" borderRadius="md" p="4"
                                value={tipoSanguineo} onChange={e => setTipoSanguineo(e.target.value)}/>
                            </Box>
                        </HStack>
                    </FormControl>
                </Center>
                <Center //Antecedentes pessoais
                    flexDirection="column"
                    w="100%"
                    maxW={1000}
                    bg="#24394A"
                    borderRadius={5}
                    p="6"//24px
                    marginTop={50}
                    overflow={"hidden"}
                >
                    <FormControl display="flex" flexDir="column" gap="4" >
                        <Heading>Antecedentes pessoais do cliente</Heading>
                        <HStack spacing="4">
                            <Box w="100%" >
                            <Checkbox w="20%" isChecked={anemia} onChange={e => setAnemia(e.target.checked)}>Anemia</Checkbox>
                                <Checkbox w="20%" isChecked={depressao} onChange={e => setDepressao(e.target.checked)}>Depressão</Checkbox>
                                <Checkbox w="20%" isChecked={tosseFrequente} onChange={e => setTosseFrequente(e.target.checked)}>Tosse</Checkbox>
                                <Checkbox w="20%" isChecked={hemorragia} onChange={e => setHemorragia(e.target.checked)}>Pressão alta</Checkbox>
                                <Checkbox w="20%" isChecked={hepatite} onChange={e => setHepatite(e.target.checked)}>Sensibilidade alérgica</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                            <Checkbox w="20%" isChecked={cardiopatias} onChange={e => setCardiopatias(e.target.checked)}>Cardiopatia</Checkbox>
                                <Checkbox w="20%" isChecked={convulsao} onChange={e => setConvulsao(e.target.checked)}>Convulsão</Checkbox>
                                <Checkbox w="20%" isChecked={diabetes} onChange={e => setDiabetes(e.target.checked)}>Asma</Checkbox>
                                <Checkbox w="20%" isChecked={desmaiosTonturas} onChange={e => setDesmaiosTonturas(e.target.checked)}>Tensão</Checkbox>
                                <Checkbox w="20%" isChecked={gastrite} onChange={e => setGastrite(e.target.checked)}>Anestésico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={hemorragia} onChange={e => setHemorragia(e.target.checked)}>Hemorragia</Checkbox>
                                <Checkbox w="20%" isChecked={diabetes} onChange={e => setDiabetes(e.target.value)} >Diabete</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Bronquite</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Artrite</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Analgésico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={hemofilia} onChange={e => setHemofilia(e.target.value)} >Hemofilia</Checkbox>
                                <Checkbox w="20%" isChecked={herpes} onChange={e => setHerpes(e.target.value)} >Herpes</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Rinite</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Reumatismo</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Anti-Inflamatório</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={aids} onChange={e => setAids(e.target.value)} >Aids</Checkbox>
                                <Checkbox w="20%" isChecked={hepatite} onChange={e => setHepatite} >Hepatite</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Sinusite</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Cirrose epática</Checkbox>
                                <Checkbox w="20%" isChecked={null} >Antibiótico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={gastrite} onChange={e => setGastrite(e.target.value)} >Gastrite</Checkbox>
                                <Checkbox w="20%" isChecked={desmaiosTonturas} onChange={e => setDesmaiosTonturas(e.target.value)} >Desmaios</Checkbox>
                                <Checkbox w="20%" value="Tuberculose" >Tuberculose</Checkbox>
                                <Checkbox w="20%" value="Meningite" >Meningite</Checkbox>
                                <Checkbox w="20%" value="Ulcera" >Ulcera</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" value="Enfer_venerea" >Enfer. venérea</Checkbox>
                                <Checkbox w="20%" value="Febre_reumatica" >Febre Reumática</Checkbox>
                                <Checkbox w="30%" value="Dor_mandibula" >Dor na articulação da mandíbula</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <FormLabel htmlFor="outras_doencas">Outras possíveis doenças e alergias:</FormLabel>
                                <Textarea id="outras_doencas" rows={5} border="1px solid #057765" borderRadius="md" p="4" />
                            </Box>
                        </HStack>
                        <Box>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Está tomando algum medicamento no momento?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Text w="30%" fontSize="md">Se sim, qual?</Text>
                                <Input id="medicamento" type="text" />
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Está fazendo tratamento médico no momento?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Text w="30%" fontSize="md">Se sim, qual?</Text>
                                <Input id="medicamento" type="text" />
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Já fez tratamento de radioterapia ou quimioterapia?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">As gengivas sangram com facilidade?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Range os dentes durante o sono?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Dorme de boca aberta?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Ronca durante o sono?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" value="sim" >Sim</Checkbox>
                                <Checkbox w="10%" value="nao" >Não</Checkbox>
                                <Text w="80%" fontSize="md">Está grávida (Sexo feminino)?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Text w="30%" fontSize="md">Se sim, de quantos meses?</Text>
                                <Input id="medicamento" type="text" />
                            </CustomVStack>
                        </Box>
                    </FormControl>
                    <Divider w="110%" borderBottom="5px solid #057765" p="4" />
                    <FormControl paddingTop={4}>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Último tratamento odontológico:</Text>
                            <Checkbox w="20%" value="-6mes" >Menos de 6 meses</Checkbox>
                            <Checkbox w="20%" value="+6mes" >Mais de 6 meses</Checkbox>
                            <Checkbox w="10%" value="1ano" >1 ano</Checkbox>
                            <Checkbox w="20%" value="2ouMais" >2 anos ou mais</Checkbox>
                        </CustomVStack>
                        <CustomVStack>
                            <Text fontSize={"md"}>Horario de escovação:</Text>
                            <Checkbox value={"antesCafe"}>Antes do café</Checkbox>
                            <Checkbox value={"depoisCafe"}>Depois do café</Checkbox>
                            <Checkbox value={"depoisAlmoco"}>Depois do almoço</Checkbox>
                            <Checkbox value={"depoisJanta"}>Depois da janta</Checkbox>
                            <Checkbox value={"antesDormir"}>Antes de formir</Checkbox>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Usa pasta de dentes?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="20%" fontSize="md">Tipo de pasta:</Text>
                            <Checkbox w="20%" value="opaca" >Opaca</Checkbox>
                            <Checkbox w="20%" value="gel" >Gel</Checkbox>
                            <Checkbox w="20%" value="mista" >Mista (Com listras)</Checkbox>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Bochechos com flúor?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Usa fio dental?</Text>
                        </CustomVStack>
                    </FormControl>
                    <Divider w="110%" borderBottom="5px solid #057765" p="4" />
                    <FormControl paddingTop={4} flexDirection={"column"}>
                        <Heading>Antecedentes Familiares dos parentes mais próximos</Heading>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Alergias?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Se sim, quem?</Text>
                            <Input id="medicamento" type="text" />
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Cardiopatias?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Se sim, quem?</Text>
                            <Input id="medicamento" type="text" />
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Hemofilia?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Se sim, quem?</Text>
                            <Input id="medicamento" type="text" />
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Diabetes?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Se sim, quem?</Text>
                            <Input id="medicamento" type="text" />
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Mãe teve rubeola próxima a gravidez?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" value="sim" >Sim</Checkbox>
                            <Checkbox w="10%" value="nao" >Não</Checkbox>
                            <Text w="80%" fontSize="md">Outros?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Se sim, quem e o que?</Text>
                            <Input id="medicamento" type="text" />
                        </CustomVStack>
                    </FormControl>
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
                </Center>
            </Flex>
        </Box>
    )
}

export default Anamnese;