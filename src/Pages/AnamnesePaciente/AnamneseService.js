import axios from 'axios';

const API_URL = 'http://localhost:8080/anamneses'; // ajuste conforme necessário

export const createAnamnese = async (anamneseData) => {
    try {
        //const response = await axios.post(API_URL, anamneseData);
        return console.log(anamneseData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar anamnese', error);
    }
};

// Adicione métodos para buscar, atualizar e deletar
