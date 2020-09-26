import React, { useState } from 'react';

import api from '../../services/api.js';
import './style.css'

function Feedback() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const makeRequest = async () => {
        console.log('Amigo estou aqui');
        await api.post('/feedback', {
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
            <form>
                <div className="inputTitulo">
                    <input type="text" maxLength='32' onChange={e => {setTitle(e.target.value)}}></input>
                </div>
                <div className="inputMensagem">
                    <textarea rows='18' onChange={e => {setMessage(e.target.value)}}></textarea>
                </div>
                <div className="buttonArea">
                    <button className="buttonEnviar" onClick={() => makeRequest()}>ENVIAR</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback;