import React from "react";
import {
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Box,
    Link
} from "@chakra-ui/core";
import { GrMail, GrLock } from "react-icons/gr"
import { Link as ReachLink } from "@reach/router"
import apiUser from "../../services/api"
import { login } from "../../services/auth";

import './style.css';
import { useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow] = React.useState(false);
    let history = useHistory();

    const makeLogin = async () => {
        await apiUser.post("/login", {
            email,
            password
        }).then((result) => {
            const { access_token } = result.data;
            login(access_token);
            history.push("/feedback")
            window.location.reload(true);
        }, (error) => {
            console.log(error);
        })
    }
    return (
        <Flex align="center">
            <Flex className="box-image" bg="green.50" size="100vh" align="center" justify="center">
            </Flex>
            <Flex className="box-login" bg="blue.50" size="100vh" align="center" justify="center">
                <div className="logo">
                    <img src={require("../../assets/imgs/login-icon.svg")}></img>
                </div>
                <FormControl>
                    <InputGroup className="input-email">
                        <InputLeftElement>
                            <Box as={GrLock} />
                        </InputLeftElement>
                        <Input type="email" id="email" aria-describedby="email-helper-text"
                            placeholder="Email ou Nome de Usuário" onChange={e => { setEmail(e.target.value) }} />
                    </InputGroup>
                    <InputGroup size="md">
                        <InputLeftElement>
                            <Box as={GrMail} />
                        </InputLeftElement>
                        <Input className="input-password"
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Senha"
                            onChange={e => { setPassword(e.target.value) }}
                        />
                    </InputGroup>
                    <Button variantColor="#591B2B" className="buttonLogin" onClick={e => makeLogin()}>ENTRAR</Button>
                    <div className="link">
                        <Link as={ReachLink} push to="/">
                            Esqueceu sua senha?
                        </Link>
                    </div>
                </FormControl>
            </Flex>
        </Flex>
    )
}

export default Login;