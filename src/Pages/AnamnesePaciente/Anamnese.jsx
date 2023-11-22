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
import { createAnamnese } from './AnamneseService'

function Anamnese(props) {

    //anamnese
    const [motivoConsulta, setMotivoConsulta] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [tipoSanguineo, setTipoSanguineo] = useState('');

    //antecedentes paciente
    const [anemia, setAnemia] = useState(false);
    const [cardiopatias, setCardiopatias] = useState(false);
    const [hemorragia, setHemorragia] = useState(false);
    const [hemofilia, setHemofilia] = useState(false);
    const [aids, setAids] = useState(false);
    const [gastrite, setGastrite] = useState(false);
    const [enferVenerea, setEnferVenerea] = useState('');

    const [depressao, setDepressao] = useState(false);
    const [convulsao, setConvulsao] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [herpes, setHerpes] = useState(false);
    const [hepatite, setHepatite] = useState(false);
    const [desmaios, setDesmaios] = useState(false);
    const [febreReumatia, setFebreReumatica] = useState('');

    const [tosse, setTosse] = useState(false);
    const [asma, setAsma] = useState('');
    const [bronquite, setBronquite] = useState('');
    const [rinite, setRinite] = useState('');
    const [sinusite, setSinusite] = useState('');
    const [tuberculose, setTuberculose] = useState('');
    const [dorArtMandibula, setDorArtMandibula] = useState('');

    const [pressaoAlta, setPressaoAlta] = useState('');
    const [tensao, setTensao] = useState('');
    const [artrite, setArtrite] = useState('');
    const [reumatismo, setReumatismo] = useState('');
    const [cirroseEpatica, setCirroseEpatica] = useState('');
    const [meningite, setMeningite] = useState('');

    const [sensibilidadeAlergica, setSensibilidadeAlergica] = useState('');
    const [anestesico, setAnestesico] = useState('');
    const [analgesico, setAnalgesico] = useState('');
    const [antInflamatorio, setAntInflamatorio] = useState('');
    const [antibiorico, setAntibiotico] = useState('');
    const [ulcera, setUlcera] = useState('');
    const [outrasDoencas, setOutraDoencas] = useState('');

    const [tomandoMedicamento, setTomandoMedicamento] = useState('');
    const [qualMedicamento, setQualMedicamento] = useState('');
    const [fazendoTratamento, setFazendoTratamento] = useState('');
    const [qualTratamento, setQualTratamento] = useState('');
    const [fezRadioterapiaQuimioterapia, setFezRadioterapiaQuimioterapia] = useState('');
    const [gengivaSangra, setGengivaSangra] = useState('');
    const [rangeDente, setRangeDente] = useState('');
    const [dormeBocaAberta, setDormeBocaAberta] = useState('');
    const [ronca, setRonca] = useState('');
    const [gravida, setGravida] = useState('');
    const [mesesGravidez, setMesesGravidez] = useState('');

    const [ulitmoTratamento, setUltimoTratamento] = useState('');
    const [antesCafe, setAntesCafe] = useState('');
    const [depoisCafe, setDepoisCafe] = useState('');
    const [depoisAlmoco, setDepoisAlmoco] = useState('');
    const [depoisJanta, setDepoisJanta] = useState('');
    const [antesDormir, setAntesDormir] = useState('');
    const [escovaDente, setEscovaDente] = useState('');
    const [tipoDePasta, setTipoDePasta] = useState('');
    const [usaFluor, setUsaFluor] = useState('');
    const [fioDental, setFioDental] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const anamneseData = {
            motivoConsulta,
            altura: parseFloat(altura),
            peso: parseInt(peso),
            tipoSanguineo,

            anemia: anemia ? 'SIM' : 'NAO',
            cardiopatias: cardiopatias ? 'SIM' : 'NAO',
            hemorragia: hemorragia ? 'SIM' : 'NAO',
            hemofilia: hemofilia ? 'SIM' : 'NAO',
            aids: aids ? 'SIM' : 'NAO',
            gastrite: gastrite ? 'SIM' : 'NAO',
            enferVenerea: enferVenerea ? 'SIM' : 'NAO',
            convulsao: convulsao ? 'SIM' : 'NAO',
            depressao: depressao ? 'SIM' : 'NAO',
            diabetes: diabetes ? 'SIM' : 'NAO',
            herpes: herpes ? 'SIM' : 'NAO',
            hepatite: hepatite ? 'SIM' : 'NAO',
            desmaios: desmaios ? 'SIM' : 'NAO',
            febreReumatia: febreReumatia ? 'SIM' : 'NAO',
            tosse: tosse ? 'SIM' : 'NAO',
            asma: asma ? 'SIM' : 'NAO',
            bronquite: bronquite ? 'SIM' : 'NAO',
            rinite: rinite ? 'SIM' : 'NAO',
            sinusite: sinusite ? 'SIM' : 'NAO',
            tuberculose: tuberculose ? 'SIM' : 'NAO',
            dorArtMandibula: dorArtMandibula ? 'SIM' : 'NAO',
            pressaoAlta: pressaoAlta ? 'SIM' : 'NAO',
            tensao: tensao ? 'SIM' : 'NAO',
            artrite: artrite ? 'SIM' : 'NAO',
            reumatismo: reumatismo ? 'SIM' : 'NAO',
            cirroseEpatica: cirroseEpatica ? 'SIM' : 'NAO',
            meningite: meningite ? 'SIM' : 'NAO',
            sensibilidadeAlergica: sensibilidadeAlergica ? 'SIM' : 'NAO',
            anestesico: anestesico ? 'SIM' : 'NAO',
            analgesico: analgesico ? 'SIM' : 'NAO',
            antInflamatorio: antInflamatorio ? 'SIM' : 'NAO',
            antibiorico: antibiorico ? 'SIM' : 'NAO',
            ulcera: ulcera ? 'SIM' : 'NAO',
            outrasDoencas,
            qualMedicamento,
            tomandoMedicamento: tomandoMedicamento ? 'SIM' : 'NAO',
            fazendoTratamento: fazendoTratamento ? 'SIM' : 'NAO',
            qualTratamento,
            fezRadioterapiaQuimioterapia: fezRadioterapiaQuimioterapia ? 'SIM' : 'NAO',
            gengivaSangra: gengivaSangra ? 'SIM' : 'NAO',
            rangeDente: rangeDente ? 'SIM' : 'NAO',
            dormeBocaAberta: dormeBocaAberta ? 'SIM' : 'NAO',
            ronca: ronca ? 'SIM' : 'NAO',
            gravida: gravida ? 'SIM' : 'NAO',
            mesesGravidez,
            ulitmoTratamento,
            antesCafe: antesCafe ? "SIM": "NAO",
            depoisCafe: depoisCafe ? 'SIM' : 'NAO',
            depoisAlmoco: depoisAlmoco ? 'SIM' : 'NAO',
            depoisJanta: depoisJanta ? 'SIM' : 'NAO',
            antesDormir: antesDormir ? 'SIM' : 'NAO',
            escovaDente, tipoDePasta, usaFluor, fioDental,
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
                                    value={peso} onChange={e => setPeso(e.target.value)} />
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="tipo_sanguineo">Tipo sanguíneo:</FormLabel>
                                <Input id="tipo_sanguineo" type="text" required border="1px solid #057765" borderRadius="md" p="4"
                                    value={tipoSanguineo} onChange={e => setTipoSanguineo(e.target.value)} />
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
                                <Checkbox w="20%" isChecked={tosse} onChange={e => setTosse(e.target.checked)}>Tosse</Checkbox>
                                <Checkbox w="20%" isChecked={pressaoAlta} onChange={e => setPressaoAlta(e.target.checked)}>Pressão alta</Checkbox>
                                <Checkbox w="20%" isChecked={sensibilidadeAlergica} onChange={e => setSensibilidadeAlergica(e.target.checked)}>Sensibilidade alérgica</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={cardiopatias} onChange={e => setCardiopatias(e.target.checked)}>Cardiopatia</Checkbox>
                                <Checkbox w="20%" isChecked={convulsao} onChange={e => setConvulsao(e.target.checked)}>Convulsão</Checkbox>
                                <Checkbox w="20%" isChecked={asma} onChange={e => setAsma(e.target.checked)}>Asma</Checkbox>
                                <Checkbox w="20%" isChecked={tensao} onChange={e => setTensao(e.target.checked)}>Tensão</Checkbox>
                                <Checkbox w="20%" isChecked={anestesico} onChange={e => setAnestesico(e.target.checked)}>Anestésico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={hemorragia} onChange={e => setHemorragia(e.target.checked)}>Hemorragia</Checkbox>
                                <Checkbox w="20%" isChecked={diabetes} onChange={e => setDiabetes(e.target.checked)} >Diabete</Checkbox>
                                <Checkbox w="20%" isChecked={bronquite} onChange={e => setBronquite(e.target.checked)} >Bronquite</Checkbox>
                                <Checkbox w="20%" isChecked={artrite} onChange={e => setArtrite(e.target.checked)} >Artrite</Checkbox>
                                <Checkbox w="20%" isChecked={analgesico} onChange={e => setAnalgesico(e.target.checked)} >Analgésico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={hemofilia} onChange={e => setHemofilia(e.target.checked)} >Hemofilia</Checkbox>
                                <Checkbox w="20%" isChecked={herpes} onChange={e => setHerpes(e.target.checked)} >Herpes</Checkbox>
                                <Checkbox w="20%" isChecked={rinite} onChange={e => setRinite(e.target.checked)} >Rinite</Checkbox>
                                <Checkbox w="20%" isChecked={reumatismo} onChange={e => setReumatismo(e.target.checked)} >Reumatismo</Checkbox>
                                <Checkbox w="20%" isChecked={antInflamatorio} onChange={e => setAntInflamatorio(e.target.checked)} >Anti-Inflamatório</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={aids} onChange={e => setAids(e.target.checked)} >Aids</Checkbox>
                                <Checkbox w="20%" isChecked={hepatite} onChange={e => setHepatite(e.target.checked)} >Hepatite</Checkbox>
                                <Checkbox w="20%" isChecked={sinusite} onChange={e => setSinusite(e.target.checked)} >Sinusite</Checkbox>
                                <Checkbox w="20%" isChecked={cirroseEpatica} onChange={e => setCirroseEpatica(e.target.checked)} >Cirrose epática</Checkbox>
                                <Checkbox w="20%" isChecked={antibiorico} onChange={e => setAntibiotico(e.target.checked)} >Antibiótico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={gastrite} onChange={e => setGastrite(e.target.checked)} >Gastrite</Checkbox>
                                <Checkbox w="20%" isChecked={desmaios} onChange={e => setDesmaios(e.target.checked)} >Desmaios</Checkbox>
                                <Checkbox w="20%" isChecked={tuberculose} onChange={e => setTuberculose(e.target.checked)} >Tuberculose</Checkbox>
                                <Checkbox w="20%" isChecked={meningite} onChange={e => setMeningite(e.target.checked)} >Meningite</Checkbox>
                                <Checkbox w="20%" isChecked={ulcera} onChange={e => setUlcera(e.target.checked)} >Ulcera</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" isChecked={enferVenerea} onChange={e => setEnferVenerea(e.target.checked)} >Enfer. venérea</Checkbox>
                                <Checkbox w="20%" isChecked={febreReumatia} onChange={e => setFebreReumatica(e.target.checked)} >Febre Reumática</Checkbox>
                                <Checkbox w="30%" isChecked={dorArtMandibula} onChange={e => setDorArtMandibula(e.target.checked)} >Dor na articulação da mandíbula</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <FormLabel htmlFor="outras_doencas">Outras possíveis doenças e alergias:</FormLabel>
                                <Textarea value={outrasDoencas} onChange={e => setOutraDoencas(e.target.value)}
                                    id="outras_doencas" rows={5} border="1px solid #057765" borderRadius="md" p="4" />
                            </Box>
                        </HStack>
                        <Box>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={tomandoMedicamento === 'SIM'} onChange={() => setTomandoMedicamento("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={tomandoMedicamento === 'NAO'} onChange={() => setTomandoMedicamento("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Está tomando algum medicamento no momento?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Text w="30%" fontSize="md">Se sim, qual?</Text>
                                <Input value={qualMedicamento} onChange={e => setQualMedicamento(e.target.value)}
                                    id="medicamento" type="text" />
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={fazendoTratamento === 'SIM'} onChange={() => setFazendoTratamento("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={fazendoTratamento === 'NAO'} onChange={() => setFazendoTratamento("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Está fazendo tratamento médico no momento?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Text w="30%" fontSize="md">Se sim, qual?</Text>
                                <Input value={qualTratamento} onChange={e => setQualTratamento(e.target.value)}
                                    id="medicamento" type="text" />
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={fezRadioterapiaQuimioterapia === 'SIM'} onChange={() => setFezRadioterapiaQuimioterapia("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={fezRadioterapiaQuimioterapia === 'NAO'} onChange={() => setFezRadioterapiaQuimioterapia("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Já fez tratamento de radioterapia ou quimioterapia?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={gengivaSangra === 'SIM'} onChange={() => setGengivaSangra("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={gengivaSangra === 'NAO'} onChange={() => setGengivaSangra("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">As gengivas sangram com facilidade?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={rangeDente === 'SIM'} onChange={() => setRangeDente("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={rangeDente === 'NAO'} onChange={() => setRangeDente("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Range os dentes durante o sono?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={dormeBocaAberta === 'SIM'} onChange={() => setDormeBocaAberta("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={dormeBocaAberta === 'NAO'} onChange={() => setDormeBocaAberta("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Dorme de boca aberta?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={ronca === 'SIM'} onChange={() => setRonca("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={ronca === 'NAO'} onChange={() => setRonca("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Ronca durante o sono?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Checkbox w="10%" isChecked={gravida === 'SIM'} onChange={() => setGravida("SIM")} >Sim</Checkbox>
                                <Checkbox w="10%" isChecked={gravida === 'NAO'} onChange={() => setGravida("NAO")} >Não</Checkbox>
                                <Text w="80%" fontSize="md">Está grávida (Sexo feminino)?</Text>
                            </CustomVStack>
                            <CustomVStack>
                                <Text w="30%" fontSize="md">Se sim, de quantos meses?</Text>
                                <Input value={mesesGravidez} onChange={e => setMesesGravidez(e.target.value)}
                                    id="mesesGravidez" type="text" />
                            </CustomVStack>
                        </Box>
                    </FormControl>
                    <Divider w="110%" borderBottom="5px solid #057765" p="4" />
                    <FormControl paddingTop={4}>
                        <CustomVStack>
                            <Text w="30%" fontSize="md">Último tratamento odontológico:</Text>
                            <Checkbox w="20%" isChecked={ulitmoTratamento === 'menosDe6m'} onChange={() => setUltimoTratamento("menosDe6m")} >Menos de 6 meses</Checkbox>
                            <Checkbox w="20%" isChecked={ulitmoTratamento === 'maisDe6m'} onChange={() => setUltimoTratamento("maisDe6m")} >Mais de 6 meses</Checkbox>
                            <Checkbox w="10%" isChecked={ulitmoTratamento === '1ano'} onChange={() => setUltimoTratamento("1ano")} >1 ano</Checkbox>
                            <Checkbox w="20%" isChecked={ulitmoTratamento === '2anos'} onChange={() => setUltimoTratamento("2anos")} >2 anos ou mais</Checkbox>
                        </CustomVStack>
                        <CustomVStack>
                            <Text fontSize={"md"}>Horario de escovação:</Text>
                            <Checkbox value={antesCafe} onChange={e => setAntesCafe(e.target.checked)} >Antes do café</Checkbox>
                            <Checkbox value={depoisCafe} onChange={e => setDepoisCafe(e.target.checked)} >Depois do café</Checkbox>
                            <Checkbox value={depoisAlmoco} onChange={e => setDepoisAlmoco(e.target.checked)} >Depois do almoço</Checkbox>
                            <Checkbox value={depoisJanta} onChange={e => setDepoisJanta(e.target.checked)} >Depois da janta</Checkbox>
                            <Checkbox value={antesDormir} onChange={e => setAntesDormir(e.target.checked)} >Antes de formir</Checkbox>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" isChecked={escovaDente === "SIM"} onChange={() => setEscovaDente("SIM")} >Sim</Checkbox>
                            <Checkbox w="10%" isChecked={escovaDente === "NAO"} onChange={() => setEscovaDente("NAO")} >Não</Checkbox>
                            <Text w="80%" fontSize="md">Usa pasta de dentes?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Text w="20%" fontSize="md">Tipo de pasta:</Text>
                            <Checkbox w="20%" isChecked={tipoDePasta === "opaca"} onChange={() => setTipoDePasta("opaca")} >Opaca</Checkbox>
                            <Checkbox w="20%" isChecked={tipoDePasta === "gel"} onChange={() => setTipoDePasta("gel")} >Gel</Checkbox>
                            <Checkbox w="20%" isChecked={tipoDePasta === "mista"} onChange={() => setTipoDePasta("mista")} >Mista (Com listras)</Checkbox>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" isChecked={usaFluor === "SIM"} onChange={() => setUsaFluor("SIM")} >Sim</Checkbox>
                            <Checkbox w="10%" isChecked={usaFluor === "NAO"} onChange={() => setUsaFluor("NAO")} >Não</Checkbox>
                            <Text w="80%" fontSize="md">Bochechos com flúor?</Text>
                        </CustomVStack>
                        <CustomVStack>
                            <Checkbox w="10%" isChecked={fioDental === "SIM"} onChange={() => setFioDental("SIM")} >Sim</Checkbox>
                            <Checkbox w="10%" isChecked={fioDental === "NAO"} onChange={() => setFioDental("NAO")} >Não</Checkbox>
                            <Text w="80%" fontSize="md">Usa fio dental?</Text>
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