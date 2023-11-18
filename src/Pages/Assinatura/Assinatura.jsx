import {
    Flex,
    Box,
    Center,
    Input,
    FormLabel,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer
} from "@chakra-ui/react";

import NavBar from "../../NavBar";

function Assinatura() {
    return (
        <Box minH="100vh" bgGradient="linear(to-l, #10E8CE, #002C36)" p="50px">
            <Box w="100%">
                <Flex
                    align="center"
                    justify="center"
                    flexDir={"column"}
                >
                    <Flex mb={35}> <NavBar /> </Flex>
                    <Center
                        w="100%"
                        maxW={840}
                        bg="#24394A"
                        top={100}
                        borderRadius={5}
                        p="6"
                        color="white"
                    >
                        <TableContainer>
                            <Table variant='striped' colorScheme='#13232F' w='100%'>
                            </Table>
                        </TableContainer>
                        {/*COLOCAR "MOTIVO DA CONSULTA" ACIMA DO CODIGO ABAIXO */}
                        <TableContainer>
                            <Table variant='striped' colorScheme='#13232F' w='100%'>
                                <Thead color='white'>
                                    <Tr color='white'>
                                        <Th w="20%" color='white'> <FormLabel htmlFor="date" color='white' ></FormLabel>  <Input color='white' id="date" type="date" /></Th>
                                        <Th w="57%" color='white'><Input color='white' id="motivo" type="string" /></Th>
                                        <Th w="23%" color='white'><Input color='white' id="motivo" type="string" /></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr color='white'>
                                        <Td> <FormLabel htmlFor="date" color='white' ></FormLabel>  <Input color='white' id="date" type="date" /></Td>
                                        <Td><Input color='white' id="motivo" type="string" /> </Td>
                                        <Td><Input color='white' id="motivo" type="string" /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>  <FormLabel htmlFor="date" color='white' ></FormLabel> <Input color='white' id="date" type="date" /></Td>
                                        <Td ><Input color='white' id="motivo" type="string" /> </Td>
                                        <Td><Input color='white' id="motivo" type="string" /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <FormLabel htmlFor="date" color='white' ></FormLabel>  <Input color='white' id="date" type="date" /></Td>
                                        <Td> <Input color='white' id="motivo" type="string" /> </Td>
                                        <Td><Input color='white' id="motivo" type="string" /></Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Td> <FormLabel htmlFor="date" color='white' ></FormLabel> <Input color='white' id="date" type="date" /></Td>
                                        <Td><Input color='white' id="motivo" type="string" /></Td>
                                        <Td><Input color='white' id="motivo" type="string" /></Td>
                                    </Tr>
                                </Tfoot>
                                <Tr>
                                    <Td> <FormLabel htmlFor="date" color='white' ></FormLabel>  <Input color='white' id="date" type="date" /></Td>
                                    <Td><Input color='white' id="motivo" type="string" /> </Td>
                                    <Td><Input color='white' id="motivo" type="string" /></Td>
                                </Tr>
                                <Tr>
                                    <Td>  <FormLabel htmlFor="date" color='white' ></FormLabel> <Input color='white' id="date" type="date" /></Td>
                                    <Td><Input color='white' id="motivo" type="string" /> </Td>
                                    <Td><Input color='white' id="motivo" type="string" /></Td>
                                </Tr>
                            </Table>
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
                                    _hover={{ bg: "teal.800" }}>Registrar informações </Button>
                            </Box>
                        </TableContainer>
                    </Center>
                </Flex>
            </Box>
        </Box>
    )
}
export default Assinatura;