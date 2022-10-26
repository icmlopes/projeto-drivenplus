import { Link } from "react-router-dom"
import styled from "styled-components"


export default function RegisterPage() {
    return (

        <ContainerScreen>
            <Container>
                <ContainerForm>
                    <input
                        type="text"
                        placeholder="Nome"
                    />
                    <input
                        type="number"
                        placeholder="CPF"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                    />
                    <Button>
                        CADASTRAR
                    </Button>

                </ContainerForm>
                <Link to="/">
                    <PossuiCadastro>Já possui uma conta? Entre</PossuiCadastro>
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
input{
    width: 35vh;
    height: 52px;
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    background-color: #FFFFFF;
    color: #7E7E7E;
    border: none;
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
const PossuiCadastro = styled.h3`
color: white;
font-size: 14px;
font-weight: 400;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
`