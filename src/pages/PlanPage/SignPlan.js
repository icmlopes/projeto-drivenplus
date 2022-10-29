import axios from "axios";
import styled from "styled-components";
import { useForm } from "../../components/useForm"
import { InfoContext } from "../../context/Info"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SignPlan() {

    
    const { user, setUser, token, setToken, idPlan } = useContext(InfoContext)
    const [form, handleForm] = useForm(
        {
            membershipId: idPlan,
            cardName: "",
            cardNumber: "",
            securityNumber: "",
            expirationDate: ""
        })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function confirmChoice(event) {

        event.preventDefault();
        console.log(form)

  
    }

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    return (
        <Container>
            {modalIsOpen ? <PrintModal setModalIsOpen={setModalIsOpen} form={form} token={token}/> : <></>}
            <ContainerForm onSubmit={confirmChoice}>
                <InputMaior
                    type="text" required
                    placeholder="Nome impresso no cartão"
                    name="cardName"
                    value={form.cardName}
                    onChange={handleForm}
                />
                <InputMaior
                    type="text" required
                    placeholder="Digito do cartão"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleForm}
                />
                <InfoCartao>
                    <InputMenor
                        type="text" required
                        placeholder="Código de segurança"
                        name="securityNumber"
                        value={form.securityNumber}
                        onChange={handleForm}
                    />
                    <InputMenor
                        type="text" required
                        placeholder="Validade"
                        name="expirationDate"
                        value={form.expirationDate}
                        onChange={handleForm}
                    />
                </InfoCartao>
                <Button onClick={openModal}>
                    ASSINAR
                </Button>
            </ContainerForm>
        </Container>
    )
}

function PrintModal({setModalIsOpen, form, token}) {

    const { user, idPlan, plan, setPlan } = useContext(InfoContext)
    const { membershipId, setUserMembership, persistMembership, persistPerk, planPerks } = useContext(InfoContext)
    const navigate = useNavigate()
    

    function handleSubmit(){
        console.log(token)
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`

        const body = {
            
                membershipId: form.membershipId,
                cardName: form.cardName,
                cardNumber: form.cardNumber,
                securityNumber: parseInt(form.securityNumber),
                expirationDate: form.expirationDate
        }

        console.log(body)

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, body, config)

        promise.then((res) => {
            console.log(res.data)
            persistMembership(res.data)
            persistPerk(res.data.membership.perks)
            navigate("/home")
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }

    console.log(planPerks)

    return (
        <Modal
        // isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        // styled={customStyles}
        >
            <ContainerModal>
                <Text>
                    <h1>Tem certeza que deseja assinar o plano {plan.name} (R${plan.price})?</h1>
                </Text>
                <Buttons>
                    <Nao onClick={() => setModalIsOpen(false)}>Não</Nao>

 
                    <Sim onClick={handleSubmit} >Sim</Sim>
                
                    
                </Buttons>
            </ContainerModal>
        </Modal>
    )
}

const Container = styled.div`

`

const Modal = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
top: 0;
display: flex;
align-items: center;
`

const ContainerModal = styled.div`
background-color: #fff;
width: 330px;
height: 230px;
border-radius: 13px;
display: flex;
align-items:center;
justify-content: center;
flex-direction:column;
font-family:roboto;
`
const Text = styled.div`
padding: 20px;
text-align: center;
word-spacing: 15px;
h1{
    color: black;
    font-size:23px;
    font-weight: 700;
}
`
const Buttons = styled.div`
padding-left: 20px;
padding-right: 20px;
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const Sim = styled.button`
    border: none;
    width: 140px;
    height: 55px;
    border-radius: 5px;
    background-color: #FF4791;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
`
const Nao = styled.button`
    border: none;
    width: 140px;
    height: 55px;
    border-radius: 5px;
    background-color: #CECECE;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
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
