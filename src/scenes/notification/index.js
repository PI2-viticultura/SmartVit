import React, { useEffect, useState } from 'react';

import api from '../../services/api.js';
import './style.css';
import '../../globals/globalStyle.css';

function Notification() {
    const [notifications, setNotifications] = React.useState([]);
    let var_notification = [];

    const getNotifications = async () => {
        await api.get("/notification/user_id",
        {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }).then((res) => {
            var_notification = res.data.filter((element) => typeof element.message === "string");
            setNotifications(var_notification);
        }).catch((error) => {
        });
    };

    useEffect(() => {
        getNotifications();
    });

    return (
        <div className="board">
            {notifications.map((element) => <a key={element.date}>{element.message}</a>)}
        </div>
    )
}

export default Notification;