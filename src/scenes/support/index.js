import React, { useState, useEffect } from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
} from "@chakra-ui/core";

import apiSupport from '../../services/api-support';
import './style.css';
import '../../globals/globalStyle.css';

function Support() {
    const [problem, setProblem] = useState('Sistema eletrônico com defeito');
    const [priority, setPriority] = useState('alta');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const makeRequest = async () => {
            await apiSupport.post('/support', {
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
        <div className="main">
            {success === "success" &&
                <Alert status="success" variant="solid">
                    <AlertIcon />
                    Em breve você receberá uma ligação de um dos nossos atendentes
                </Alert>
            }
            {error === "error" &&
                <Alert status="error" variant="solid">
                    <AlertIcon />
                    Aconteceu um erro na sua requisição, por favor cheque os dados enviados
                </Alert>
            }
            <Box className="p-5" bg="#FFFFFF" rounded="md">
                <div className="title-box">
                    <Heading as="h3" size="md">
                        Suporte
                    </Heading>
                </div>
                <div className="">
                    <div className="labelContainer">
                        <p className="labelText">Problema:</p>
                    </div>
                    <select onChange={e => {setProblem(e.target.value)}}>
                        <option value="Sistema eletrônico com defeito">Sistema eletrônico com defeito</option>
                        <option value="Problema do software">Problema do software</option>
                        <option value="Dados incoerentes">Dados incoerentes</option>
                        <option value="Perfil de acesso">Perfil de acesso</option>
                        <option value="Sobre o contrato">Sobre o contrato</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>

                <div className="inputTitulo">
                    <div className="labelContainer">
                        <p className="labelText">Classificação:</p>
                    </div>
                    <select onChange={e => {setPriority(e.target.value)}}>
                        <option value="alta">Atrapalha meu serviço</option>
                        <option value="média">Estou confuso</option>
                        <option value="baixa">Sugestão</option>
                    </select>
                </div>

                <div className="inputMensagem">
                    <div className="labelContainer">
                        <p className="labelText">Descrição:</p>
                    </div>
                    <textarea rows='10' onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="button-box">
                    <Button className="button-new" variantColor="primary" size="md" w="25%" onClick={() => makeRequest()}>ENVIAR</Button>
                </div>
            </Box>
        </div>
    );
}
  
  export default Support;
  