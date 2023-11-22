import axios from 'axios';

const API_URL = 'http://localhost:8080/orcamentos'; // ajuste conforme necessário

export const createOrcamento = async (orcamentoData) => {
    try {
        console.log(orcamentoData)
        const response = await axios.post(API_URL, orcamentoData);
        return response;
    } catch (error) {
        // Trate o erro conforme necessário
        console.error('Erro ao criar orcçamento', error);
    }
};

// Adicione métodos para buscar, atualizar e deletar
