import axios from 'axios';

const API_URL = 'http://localhost:8080/pacienteInf'; // ajuste conforme necessário

export const createPacienteInf = async (pacienteInfData) => {
    try {
        //const response = await axios.post(API_URL, pacienteInfData);
        return console.log(pacienteInfData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar ficha de paciente infantil', error);
    }
};

// Adicione métodos para buscar, atualizar e deletar
