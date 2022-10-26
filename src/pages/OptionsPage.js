import styled from "styled-components"
import plano1 from "../assets/img/Plano1.png"
import plano2 from "../assets/img/Plano2.png"
import plano3 from "../assets/img/Plano3.png"


export default function OptionsPage() {
    return (
        <ContainerScreen>
            <Container>
                <Title>
                    Escolha seu Plano
                </Title>
                <ContainerOpcao>
                    <img src={plano1} alt="Logo Driven"/>
                    <h2>R$39,99</h2>
                </ContainerOpcao>
                <ContainerOpcao>
                    <img src={plano2} alt="Logo Driven"/>
                    <h2>R$69,99</h2>
                </ContainerOpcao>
                <ContainerOpcao>
                    <img src={plano3} alt="Logo Driven"/>
                    <h2>R$99,99</h2>
                </ContainerOpcao>

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
const ContainerOpcao = styled.div`
width: 250px;
height: 180px;
border: 3px solid #7e7e7e;
border-radius: 12px;
justify-content: space-between;
align-items: center;
display: flex;
padding-left: 20px;
padding-right: 20px;
margin-bottom: 15px;
h2{
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
}
`