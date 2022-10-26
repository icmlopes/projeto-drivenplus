import styled from "styled-components";
import usuario from "../assets/img/usuario.png"
import plano1 from "../assets/img/Plano1.png"

export default function NavBar(){
    return(
        <Container>
            <Divisao>
                <Logo>
                    <img src={plano1} alt="Logo Driven"/>
                </Logo>
                <img src={usuario} alt="Perfil usuário"/>
            </Divisao>
            
        </Container>
    )
}


const Container = styled.div`
height: 140px;
`
const Divisao = styled.div`
padding-left: 20px;
display: flex;
align-items:center;
justify-content: space-between;
padding-right: 30px;
`

const Logo = styled.div`
padding-top: 20px;
padding-left: 20px;
`
