
    import Modal from "react-modal";
    import { Container } from "./styles";

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
                type="number"
                placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
                </Container>
          </Modal>
        );
    }