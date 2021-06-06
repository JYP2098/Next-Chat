import Head from "next/head"
import styled from "styled-components"
import {Button} from "@material-ui/core"
import { auth, provider } from "../firebase"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src="https://icons-for-free.com/iconfiles/png/512/NextJS-1324888744726908747.png"/>
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login   

const Container = styled.div`
    display: grid;
    place-items: center;
    height:100vh;
    background-color:whitesmoke;
`
const LoginContainer =styled.div`
    padding: 100px;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius:40px;
`
const Logo = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 50px;
`