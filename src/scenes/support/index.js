import React, { useState } from 'react';

import api from '../../services/api';

function Support() {
    const [problem, setProblem] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');

    const makeRequest = async () => {
        try {
            const response = await api.post('/support', {
                problem: 'outros',
                priority: 'alta',
                description: 'description',
            },
            {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            });
            console.log(response);

        } catch (_err) {
            console.log(_err);
        }
    }
    return (
        <div>
            <button onClick={() => makeRequest()}>Hora do show</button>
        </div>
    );
}
  
  export default Support;
  