import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useForm } from "../components/useForm"


export default function RegisterPage() {

    const [form, handleForm] = useForm({ email: "", name: "", cpf: "", password: "" })
    const navigate = useNavigate()

    function registration(event) {

        event.preventDefault()

        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up"

        const promise = axios.post(URL, form)

        promise.then(() => 
            navigate("/")
        )

        promise.catch((err) => {
            console.log(err.response.data)
            alert(err.response.data.message)
        }
            
        )

    }

    return (

        <ContainerScreen>
            <Container>
                <ContainerForm onSubmit={registration}>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                    />
                    <input
                        type="number"
                        placeholder="CPF"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleForm}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                    />
                    <Button type="submit">
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
    all: unset;
    width: 35vh;
    height: 52px;
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    background-color: #FFFFFF;
    color: #7E7E7E;
    border: none;
}
input:autofill {
    background-color: #FFFFFF;
    color: #7E7E7E;
    border: none;
    font-family: roboto;
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