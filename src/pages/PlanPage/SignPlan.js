import axios from "axios";
import styled from "styled-components";
import { useForm } from "../../components/useForm"
import { InfoContext } from "../../context/Info"
import { useContext, useEffect, useState } from "react"
import Modal from 'react-modal'


export default function SignPlan() {

    const { user, setUser, token, setToken, idPlan } = useContext(InfoContext)
    // const [form, handleForm] = useForm(
    //     {
    //         membershipId: "",
    //         cardName: "",
    //         cardNumber: "",
    //         securityNumber: "",
    //         expirationDate: ""
    //     })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    
    //     useEffect(() => {

    //         const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`


    //         const config = {
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         }

    //         const promise = axios.post(URL, config, form)

    //         promise.then((res) => {
    //             console.log(res.data)
    //         })

    //         promise.catch((err) => {
    //             console.log(err.response.data)
    //         })
    //     }, [])


    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <>
            <ContainerForm>
                <InputMaior
                    type="text"
                    placeholder="Nome impresso no cartão"
                    name="cardName"
                // value={form.cardName}
                // onChange={handleForm}
                />
                <InputMaior
                    type="text"
                    placeholder="Digito do cartão"
                    name="cardNumber"
                // value={form.cardNumber}
                // onChange={handleForm}
                />
                <InfoCartao>
                    <InputMenor
                        type="text"
                        placeholder="Código de segurança"
                        name="securityNumber"
                    // value={form.securityNumber}
                    // onChange={handleForm}
                    />
                    <InputMenor
                        type="text"
                        placeholder="Validade"
                        name="expirationDate"
                    // value={form.expirationDate}
                    // onChange={handleForm}
                    />
                </InfoCartao>
                <Button onClick={openModal}>
                    ASSINAR
                </Button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    styled={customStyles}
                >
                    <h1>Tem certeza qye deseja assinar o plano {user.name} R${user.price}</h1>
                    <button>Sim</button>
                    <button>Não</button>

                </Modal>
            </ContainerForm>
        </>
    )
}

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
