import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/img/Driven.png"


export default function LoginPage() {
    return (
        <ContainerScreen>
            <Container>
                <img src={Logo} alt="Logo Driven" />
                <ContainerForm>
                    <input
                        type="email" required
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                    />
                    <Button>
                        ENTRAR
                    </Button>
                </ContainerForm>
                <Link to="/sign-up">
                    <SemCadastro>Não possui uma conta? Cadastre-se</SemCadastro>    
                </Link>
            </Container>
        </ContainerScreen>
    )
}

const ContainerScreen = styled.div`
display: flex;
align-items:center;
justify-content: center;
height: 100vh;
`

const Container = styled.div`
`

const ContainerForm = styled.form`
flex-direction:column;
display: flex;
padding-top: 70px;
input{
    height: 45px;
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    background-color: #FFFFFF;
    color: #7E7E7E;
}
`
const Button = styled.button`
background-color: #FF4791;
border-radius: 5px;
font-weight: 700;
color: #FFFFFF;
height: 45px;
border: none;
margin-top: 10px;
font-family: roboto;

`
const SemCadastro = styled.h3`
color: white;
font-size: 14px;
font-weight: 400;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
`