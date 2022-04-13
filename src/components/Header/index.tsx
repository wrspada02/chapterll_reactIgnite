
    import { useState } from "react";
    import { Container, Content } from "./styles";

    import logoImg from "../../assets/download/assets/logo.svg";
    
    type HeaderProps = {
        onOpenNewTransactionModal: () => void
    }


    export function Header(props : HeaderProps){
        return(
            <Container>
                <Content>
                    <img src={logoImg} alt="Dt Money Logo" />
                    <button onClick={props.onOpenNewTransactionModal}>
                        Nova Transação
                    </button>
                </Content>
            </Container>
        );
    }