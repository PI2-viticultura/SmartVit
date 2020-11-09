import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { logout, getToken } from "../../services/auth"


function Logout() {
    let isRedirect;
    if(getToken()){
        isRedirect = true;
    }else {
        isRedirect = false;
    }
    logout();
    if(isRedirect){
        window.location.reload(true);
    }
    return (
        <Redirect to={{
            pathname: "/",
            state: { isLogout: true }
        }}></Redirect>
    );
}

export default Logout;