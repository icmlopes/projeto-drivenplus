import axios from "axios"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import NavBar from "../../components/NavBar"
import { InfoContext } from "../../context/Info"


export default function HomePage() {

    const { token, user, planPerks } = useContext(InfoContext)
    const navigate = useNavigate()

    console.log(user)

    function handleSubmit(){

        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.delete(URL, config)

        promise.then((res) => {
            console.log(res.data)
            navigate("/subscriptions")
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <>
            <NavBar />
            <ContainerScreen>
                <Container>
                    <Title>
                        Olá, {user.name}
                    </Title>
                    <ContainerBenefits>
                        {planPerks.map((t, index) => (
                            <a href={t.link} key={index}>
                                <Benefits >
                                    {t.title}
                                </Benefits>
                            </a>
                        ))}
                    </ContainerBenefits>
                    <ContainerFuncionalidades>
                        <Link to={"/"}>
                            <ChangePlan>
                                Mudar plano
                            </ChangePlan>
                        </Link>
                        <Button onClick={handleSubmit}>
                            Cancelar plano
                        </Button>
                    </ContainerFuncionalidades>

                </Container>

            </ContainerScreen>
        </>
    )
}

const ContainerScreen = styled.div`
display: flex;
align-items:flex-start;
justify-content: center;
`
const Container = styled.div`
width: 80%;
`
const Title = styled.h1`
color: #FFFFFF;
font-weight: 700;
font-size: 30px;
margin-top: 30px;
margin-bottom: 60px;
display: flex;
justify-content: center;
`

const ContainerBenefits = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction:column;
`

const Benefits = styled.button`
background-color: #FF4791;
border-radius: 5px;
font-weight: 700;
color: #FFFFFF;
height: 45px;
border: none;
margin-top: 13px;
font-family: roboto;
width: 330px;
`
const ChangePlan = styled.button`
background-color: #FF4791;
border-radius: 5px;
font-weight: 700;
color: #FFFFFF;
height: 45px;
border: none;
margin-top: 13px;
font-family: roboto;
width: 330px;
`
const Button = styled.button`
background-color: #FF4791;
border-radius: 5px;
font-weight: 700;
color: #FFFFFF;
height: 45px;
border: none;
margin-top: 13px;
font-family: roboto;
width: 100%;
`
const ContainerFuncionalidades = styled.div`
display: flex;
align-items:center;
justify-content: flex-end;
flex-direction:column;
position: fixed;
bottom: 20px;
`