import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/core";

import apiNotification from '../../services/api-notification';
import './style.css';
import '../../globals/globalStyle.css';

function Notification() {
    const [notifications, setNotifications] = React.useState([]);
    let var_notification = [];

    const getNotifications = async () => {
        const user = localStorage.getItem("user");
        await apiNotification.get("/notification/" + user,
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
    }, []);

    const markAsRead = async (id) => {
        await apiNotification.patch("/notification/" + id,
        {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }).then((res) => {
            getNotifications();
        }).catch((error) => {
        });
    };

    return (
        <div className="main">
            <Box className="p-5" bg="#FFFFFF" rounded="md">
            {notifications.length > 0 ?
                notifications.map((element) => (
                    <div key={element._id.$oid}>
                        <div className="notification-container">
                            <div className="notification-texts">
                                <span className="notification-title">{element.title}</span>
                                <span>{element.message}</span>
                                <span className="notification-date">{element.date}</span>
                            </div>
                            <div className="notification-mark">
                                <button onClick={() => markAsRead(element._id.$oid)} className="notification-button">
                                    Marcar como lida
                                </button>
                            </div>
                        </div>
                        <div className="notification-separator"></div>
                    </div>
                ))
                :
                <div style={{textAlign: 'center'}}>Nenhuma notificação no momento!</div>
            }
            </Box>
        </div>
    )
}

export default Notification;