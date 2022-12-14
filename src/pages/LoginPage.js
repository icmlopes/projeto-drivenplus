import axios from "axios"
import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/img/Driven.png"
import { useForm } from "../components/useForm"
import { InfoContext } from "../context/Info"


export default function LoginPage() {

    const [form, handleForm] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const { user, setUser, setAndPersistToken, token, setToken, userMembership } = useContext(InfoContext)
    

    useEffect(() => {
        console.log(userMembership)
        if (userMembership !== null) navigate("/home")
        else if ( token !== null) navigate("/subscriptions") 

    }, [token, userMembership])



    function login(event) {

        event.preventDefault();

        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"

        const promise = axios.post(URL, form)

        promise.then(res => {
            setAndPersistToken(res.data.token)
            setUser(res.data)
            console.log(res.data)

            form.membership === null ? navigate("/home") : navigate("/subscriptions")
        })

        promise.catch((err) => {
            console.log(err.response.data)
            alert(err.response.data.message)
        })



        console.log(token)
    }

    return (

        <ContainerScreen>
            <Container>
                <img src={Logo} alt="Logo Driven" />
                <ContainerForm onSubmit={login}>
                    <input
                        type="email" required
                        placeholder="E-mail"
                        name="email"
                        value={(form.email)}
                        onChange={handleForm}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={(form.password)}
                        onChange={handleForm}
                    />
                    <Button type="submit">
                        ENTRAR
                    </Button>
                </ContainerForm>
                <Link to="/sign-up">
                    <SemCadastro>N??o possui uma conta? Cadastre-se</SemCadastro>
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
    all: unset;
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