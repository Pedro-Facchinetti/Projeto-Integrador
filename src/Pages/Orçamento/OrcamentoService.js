import axios from 'axios';

const API_URL = 'http://localhost:8080/orcamento'; // ajuste conforme necessário

export const createOrcamento = async (orcamentoData) => {
    try {
        //const response = await axios.post(API_URL, orcamentoData);
        return console.log(orcamentoData);
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar orcçamento', error);
    }
};

// Adicione métodos para buscar, atualizar e deletar
