import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import seta from "../../assets/img/Seta.png"
import { InfoContext } from "../../context/Info"
import calendario from "../../assets/img/calendario.png"
import nota from "../../assets/img/nota.png"
import SignPlan from "./SignPlan"
import { Link } from "react-router-dom"


export default function PlanPage() {

    const { user, setUser, token, setToken, idPlan, plan, setPlan } = useContext(InfoContext)
    const [perk, setPerk] = useState([{}])
    
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
            setPlan(res.data)
            setPerk(res.data.perks)
        })

        promise.catch((err) => {
            console.log(err.response.data)
            alert(err.response.data.message)
        })

    }, [])

    return (
        <>
            <ContainerScreen>

                <Container>
                    <Link to="/subscriptions">
                        <img src={seta} alt="Seta" />
                    </Link>
                    
                    <Imagem>
                        <img src={plan.image} alt="Logo Driven" />
                    </Imagem>
                    <Title>{plan.name}</Title>
                    <InfoPlano>
                        <ContainerBeneficio>
                            <img src={calendario} alt="calendario" />
                            <h3>Benefícios:</h3>
                        </ContainerBeneficio>

                        {perk.map((b, index) => ( 
                            <p key={index}>{index + 1}.{b.title}</p> 
                        ))}
                        <ContainerPreco>
                            <img src={nota} alt="nota" />
                            <h3>Preço:</h3>
                        </ContainerPreco>
                        <p>R${plan.price} cobrados mensalmente</p>
                    </InfoPlano>
                    <SignPlan/>
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