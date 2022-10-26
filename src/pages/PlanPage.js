import styled from "styled-components"
import plano1 from "../assets/img/Plano1.png"
import seta from "../assets/img/Seta.png"

export default function PlanPage() {
    return (
        <ContainerScreen>
            <Container>
                <img src={seta} alt="Seta" />
                <Imagem>
                    <img src={plano1} alt="Logo Driven" />
                </Imagem>
                <Title>Driven Plus</Title>
                <InfoPlano>
                    <h3>Benefícios:</h3>
                    <p>1.Brindes exclusivos</p>
                    <p>2. Materias bônus de web</p>

                    <h3>Preço:</h3>
                    <p>R$39,99 cobrados mensalmente</p>
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