
    import Modal from "react-modal";
    import { Container } from "./styles";

    import closeImg from "../../assets/download/assets/close.svg";

    interface NewTransactionModalProps{
        isOpen: boolean,
        onRequestClose: () => void
    }

    export function NewTransactionModal(props: NewTransactionModalProps){


        return(
            <Modal 
                isOpen={props.isOpen} 
                onRequestClose={props.onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >

                <button 
                type="button" 
                onClick={props.onRequestClose} 
                className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>
            
                <Container>
                <h2>Cadastrar transação</h2>

                <input
                placeholder="Título"
                />

                <input
                type="number"
                placeholder="Título"
                />

                <input
                type="text"
                placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
                </Container>
          </Modal>
        );
    }