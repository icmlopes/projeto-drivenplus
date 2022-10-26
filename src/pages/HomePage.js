import styled from "styled-components"
import NavBar from "../components/NavBar"


export default function HomePage() {
    return (
        <>
            <NavBar />
            <ContainerScreen>
                <Container>
                    <Title>
                        Olá, Fulano
                    </Title>
                    <ContainerBeneficios>
                        <Button>
                            Solicitar brindes
                        </Button>
                        <Button>
                            Materiais bônus da web
                        </Button>
                        <Button>
                            Materiais bônus da web
                        </Button>
                    </ContainerBeneficios>
                    <ContainerFuncionalidades>
                        <Button>
                            Mudar plano
                        </Button>
                        <Button>
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

const ContainerBeneficios = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction:column;
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
margin-top:310px;
`