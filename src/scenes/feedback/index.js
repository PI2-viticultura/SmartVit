import React, { useState } from 'react';

import apiFeedback from '../../services/api-feedback';
import './style.css';
import '../../globals/globalStyle.css';

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
        <div className="board">
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
            <div className="buttonArea">
                <button className="buttonEnviar" onClick={() => makeRequest()}>ENVIAR</button>
            </div>
        </div>
    )
}

export default Feedback;