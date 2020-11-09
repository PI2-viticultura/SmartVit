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
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import apiPest from '../../services/api-pest';
import './style.css';
import '../../globals/globalStyle.css';

function Pest(){
    const [idVineyard, setIdVineyard] = useState('');
    const [type, setType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [action, setAction] = useState('');
    const [observation, setObservation] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const makeRequest = async () => {
        await apiPest.post('/pest', {
            idVineyard,
            type,
            startTime,
            endTime,
            action,
            observation
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
                    A praga foi registrada!
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
                        Pragas
                    </Heading>
                </div>
                <div className="inputTitulo">
                    <div className="labelContainer">
                        <p className="labelText">Vinícola:</p>
                    </div>
                    <input type="text" maxLength='32' onChange={e => {setIdVineyard(e.target.value)}}></input>
                </div>
                <div className="inputTitulo">
                    <div className="labelContainer">
                        <p className="labelText">Tipo:</p>
                    </div>
                    <input type="text" maxLength='32' onChange={e => {setType(e.target.value)}}></input>
                </div>
                <div className="periodContainer">
                    <div className="periodInnerContainer">
                        <div className="inputMensagem periodInput">
                            Início <br/>
                            <DatePicker selected={startTime} onChange={date => {setStartTime(date)}}> </DatePicker>
                        </div>
                        <div className="inputMensagem periodInput">
                            Fim <br/>
                            <DatePicker selected={endTime} onChange={date => {setEndTime(date)}}> </DatePicker>
                        </div>
                    </div>
                </div>
                <div className="inputMensagem">
                    <div className="labelContainer">
                        <p className="labelText">Medidas tomadas:</p>
                    </div>
                    <textarea rows='5' onChange={e => {setAction(e.target.value)}}></textarea>
                </div>
                <div className="inputMensagem">
                    <div className="labelContainer">
                        <p className="labelText">Observações:</p>
                    </div>
                    <textarea rows='10' onChange={e => {setObservation(e.target.value)}}></textarea>
                </div>
                <div className="button-box">
                    <Button className="button-new" variantColor="primary" size="md" w="25%" onClick={() => makeRequest()}>SALVAR</Button>
                </div>
            </Box>
        </div>
    )
}

export default Pest;