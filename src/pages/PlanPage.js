import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import seta from "../assets/img/Seta.png"
import { InfoContext } from "../context/Info"
import calendario from "../assets/img/calendario.png"
import nota from "../assets/img/nota.png"


export default function PlanPage() {

    const { user, setUser, token, setToken, idPlan } = useContext(InfoContext)
    const [perk, setPerk] = useState([{}])

    console.log(idPlan)

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`


        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)

        promise.then((res) => {
            console.log(res.data)
            setUser(res.data)
            setPerk(res.data.perks)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])

    console.log(perk)

    return (
        <>
            <ContainerScreen>

                <Container>
                    <img src={seta} alt="Seta" />
                    <Imagem>
                        <img src={user.image} alt="Logo Driven" />
                    </Imagem>
                    <Title>{user.name}</Title>
                    <InfoPlano>
                        <ContainerBeneficio>
                            <img src={calendario} alt="calendario" />
                            <h3>Benefícios:</h3>
                        </ContainerBeneficio>

                        {perk.map((b, index) => (
                            <p>{index + 1}.{b.title}</p>
                        ))}
                        <ContainerPreco>
                            <img src={nota} alt="nota" />
                            <h3>Preço:</h3>
                        </ContainerPreco>
                        <p>R${user.price} cobrados mensalmente</p>
                    </InfoPlano>
                    <ContainerForm>
                        <InputMaior
                            type="text"
                            placeholder="Nome impresso no cartão"
                        />
                        <InputMaior
                            type="text"
                            placeholder="Digito do cartão"
                        />
                        <InfoCartao>
                            <InputMenor
                                type="text"
                                placeholder="Código de segurança"
                            />
                            <InputMenor
                                type="text"
                                placeholder="Validade"
                            />
                        </InfoCartao>
                        <Button>
                            ASSINAR
                        </Button>
                    </ContainerForm>
                </Container>
            </ContainerScreen>
        </>

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

const Imagem = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
`

const Title = styled.h1`
color: #FFFFFF;
font-weight: 700;
font-size: 30px;
margin-bottom: 30px;
display: flex;
justify-content: center;
`
const InfoPlano = styled.div`
width: 35vh;
color: #FFFFFF;
h3{
    font-size: 25px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
}
p{
    margin-bottom: 5px;
    font-size:20px;
}
`
const ContainerForm = styled.form`
flex-direction:column;
display: flex;
margin-top: 40px;
`
const InfoCartao = styled.div`
display: flex;
justify-content: space-between;
`

const InputMaior = styled.input`
width: 35vh;
height: 52px;
padding-left: 10px;
border-radius: 5px;
margin-bottom: 15px;
background-color: #FFFFFF;
color: #7E7E7E;
border: none;
`
const InputMenor = styled.input`
width: 16vh;
height: 52px;
padding-left: 10px;
border-radius: 5px;
margin-bottom: 15px;
background-color: #FFFFFF;
color: #7E7E7E;
border: none;
font-size: 10px;
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

const ContainerBeneficio = styled.div`
display: flex;
align-items: center;
img{
    width:20px;
    height: 24px;
}
`
const ContainerPreco = styled.div`
display: flex;
align-items: center;
img{
    width:25px;
    height: 21px;
}
`