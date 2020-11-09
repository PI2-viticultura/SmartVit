import React, { useState } from 'react';
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

import apiFeedback from '../../services/api-feedback';
import '../../globals/globalStyle.css';
import './style.css';

function Feedback() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const makeRequest = async () => {
        await apiFeedback.post('/feedback', {
            title,
            message
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
                    O feedback foi registrado com sucesso!
                </Alert>
            }
            {error === "error" &&
                <Alert status="error" variant="solid">
                    <AlertIcon />
                    Aconteceu um erro na sua requisição, por favor cheque os dados enviados!
                </Alert>
            }
            <Box className="p-5" bg="#FFFFFF" rounded="md">
                <div className="title-box">
                    <Heading as="h3" size="md">
                        Feedback
                    </Heading>
                </div>
                <div className="inputTitulo">
                    <div className="labelContainer">
                        <p className="labelText">Título:</p>
                    </div>
                    <input type="text" maxLength='32' onChange={e => {setTitle(e.target.value)}}></input>
                </div>
                <div className="inputMensagem">
                    <div className="labelContainer">
                        <p className="labelText">Mensagem:</p>
                    </div>
                    <textarea rows='10' onChange={e => {setMessage(e.target.value)}}></textarea>
                </div>
                <div className="button-box">
                    <Button className="button-new" variantColor="primary" size="md" w="25%" onClick={() => makeRequest()}>ENVIAR</Button>
                </div>
            </Box>
        </div>
    )
}

export default Feedback;