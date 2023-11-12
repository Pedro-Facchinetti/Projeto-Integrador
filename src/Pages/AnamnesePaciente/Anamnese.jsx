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
    Divider
} from "@chakra-ui/react";
import CustomVStack from "../../Components/CustomChakraUI/CustomVStack";

function Anamnese(props) {
    return (
        <Box minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)" p={50} >
            <Flex
                flexDirection="column"
                alignItems="center"
                justify="center"

                color="white"
                //fontWeight="bold"
                fontSize="4xl"
                w="100%"
            >
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
                                <Textarea id="nome" rows={5} required border="1px solid #057765" borderRadius="md" p="4" />
                            </Box>
                        </HStack>
                        <HStack w="100%">
                            <Box w="25%">
                                <FormLabel htmlFor="racionalidade">Racionalidade:</FormLabel>
                                <Input id="racionalidade" type="text" required border="1px solid #057765" borderRadius="md" p="4" />
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="altura">Altura:</FormLabel>
                                <Input id="altura" type="number" required border="1px solid #057765" borderRadius="md" p="4" />
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="peso">Peso:</FormLabel>
                                <Input id="peso" type="number" required border="1px solid #057765" borderRadius="md" p="4" />
                            </Box>
                            <Box w="25%">
                                <FormLabel htmlFor="tipo_sanguineo">Tipo sanguíneo:</FormLabel>
                                <Input id="tipo_sanguineo" type="text" required border="1px solid #057765" borderRadius="md" p="4" />
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
                                <Checkbox w="20%" value="Anemia" >Anemia</Checkbox>
                                <Checkbox w="20%" value="Depresao" >Depressão</Checkbox>
                                <Checkbox w="20%" value="Tosse" >Tosse</Checkbox>
                                <Checkbox w="20%" value="Pressao_alta" >Pressão alta</Checkbox>
                                <Checkbox w="20%" value="Sensi_alergica" >Sensibilidade alérgica</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" value="Cardiopatia" >Cardiopatia</Checkbox>
                                <Checkbox w="20%" value="Convulsao" >Convulsão</Checkbox>
                                <Checkbox w="20%" value="Asma" >Asma</Checkbox>
                                <Checkbox w="20%" value="Tensao" >Tensão</Checkbox>
                                <Checkbox w="20%" value="Anestesico" >Anestésico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" value="Hemorragia" >Hemorragia</Checkbox>
                                <Checkbox w="20%" value="Diabete" >Diabete</Checkbox>
                                <Checkbox w="20%" value="Bronquite" >Bronquite</Checkbox>
                                <Checkbox w="20%" value="Artrite" >Artrite</Checkbox>
                                <Checkbox w="20%" value="Abalgesico" >Analgésico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" value="Hemofilia" >Hemofilia</Checkbox>
                                <Checkbox w="20%" value="Herpes" >Herpes</Checkbox>
                                <Checkbox w="20%" value="Rinite" >Rinite</Checkbox>
                                <Checkbox w="20%" value="Reumatismo" >Reumatismo</Checkbox>
                                <Checkbox w="20%" value="Anti_inflamatorio" >Anti-Inflamatório</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" value="Aids" >Aids</Checkbox>
                                <Checkbox w="20%" value="Hepatite" >Hepatite</Checkbox>
                                <Checkbox w="20%" value="Sinusite" >Sinusite</Checkbox>
                                <Checkbox w="20%" value="Cirrose_epatica" >Cirrose epática</Checkbox>
                                <Checkbox w="20%" value="Anemia" >Antibiótico</Checkbox>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%" >
                                <Checkbox w="20%" value="Gastrite" >Gastrite</Checkbox>
                                <Checkbox w="20%" value="Desmaios" >Desmaios</Checkbox>
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
                </Center>
            </Flex>
        </Box>
    )
}

export default Anamnese;