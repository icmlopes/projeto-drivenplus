import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { InfoContext } from "../context/Info"

export default function OptionsPage() {

    const { user, setUser, token, setToken, setIdPlan } = useContext(InfoContext)
    const [selectedPlan, setSelectedPlan] = useState([])
    const navigate = useNavigate()
    const [perk, setPerk] = useState([{}])

    useEffect(() => {
        if (token !== undefined) {
            console.log(token)
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships"
            const promise = axios.get(URL, config)

            promise.then((res) => {
                console.log(res.data)
                setSelectedPlan(res.data)
                setPerk(res.data.perks)
            })

            promise.catch((err) => {
                console.log(err.response.data)
            })


        }
    }, [user])

    if (user.token === undefined) {
        return (
            <ContainerScreen>
                <Container>
                    <Title>
                        Carregando...
                    </Title>
                </Container>
            </ContainerScreen>
        )
        
    }

    function handlePlanID(id){
        setIdPlan(id)
        navigate(`/subscriptions/${id}`)
    }

    return (
        <ContainerScreen>
            <Container>
                <Title>
                    Escolha seu Plano
                </Title>
                {selectedPlan.map((p, index) => (
                    <ContainerOpcao key={index} onClick={() => handlePlanID(p.id)}>
                        {<img src={p.image} alt="Logo Driven" />}
                        <h2>R${p.price}</h2>
                    </ContainerOpcao>
                ))}
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

const Title = styled.h1`
color: #FFFFFF;
font-weight: 700;
font-size: 30px;
margin-bottom: 30px;
display: flex;
justify-content: center;
`
const ContainerOpcao = styled.button`
width: 300px;
height: 180px;
border: 3px solid #7e7e7e;
border-radius: 12px;
justify-content: space-between;
align-items: center;
display: flex;
padding-left: 20px;
padding-right: 20px;
margin-bottom: 15px;
background-color: transparent;
h2{
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
}
`