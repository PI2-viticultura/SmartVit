import React, { useState } from 'react';

import api from '../../services/api';

function Support() {
    const [problem, setProblem] = useState('Sistema eletrônico com defeito');
    const [priority, setPriority] = useState('alta');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const makeRequest = async () => {
            await api.post('/support', {
                problem,
                priority,
                description,
            },
            {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }).then(res => {
                setError('');
                setSuccess('success');
            }).catch(error => {
                setError('error');
                setSuccess('');
            })

    }
    return (
        <div>
            {
                error !== '' && <p>Aconteceu um erro na sua requisição, por favor cheque os dados enviados</p>
            }
            {
                success !== '' && <p>Em breve você receberá uma ligação de um dos nossos atendentes</p>
            }
            <p>Problema:</p>
            <select onChange={e => {setProblem(e.target.value)}}>
                <option value="Sistema eletrônico com defeito">Sistema eletrônico com defeito</option>
                <option value="Problema do software">Problema do software</option>
                <option value="Dados incoerentes">Dados incoerentes</option>
                <option value="Perfil de acesso">Perfil de acesso</option>
                <option value="Sobre o contrato">Sobre o contrato</option>
                <option value="outros">Outros</option>
            </select>

            <p>Classificação:</p>
            <select onChange={e => {setPriority(e.target.value)}}>
                <option value="alta">Atrapalha meu serviço</option>
                <option value="média">Estou confuso</option>
                <option value="baixa">Sugestão</option>
            </select>

            <p>Descrição:</p>
            <textarea onChange={e => setDescription(e.target.value)}></textarea>
            <button onClick={() => makeRequest()}>ENVIAR</button>
        </div>
    );
}
  
  export default Support;
  