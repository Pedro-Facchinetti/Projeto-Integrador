import axios from 'axios';

const API_URL = 'http://localhost:8080/pacienteA'; // ajuste conforme necessário

export const createPacienteA = async (pacienteAData) => {
    try {
        //const response = await axios.post(API_URL, pacienteAData);
        return console.log(pacienteAData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar ficha de paciente adulto', error);
    }
};

// Adicione métodos para buscar, atualizar e deletar
