
    import { FormEvent, useState } from "react";
    
    import Modal from "react-modal";
    import { Container, TransactionTypeContainer, RadioBox } from "./styles";

    import closeImg from "../../assets/download/assets/close.svg";
    import incomeImg from "../../assets/download/assets/income.svg";
    import outcomeImg from "../../assets/download/assets/outcome.svg";
    import { api } from "../../services/api";

    interface NewTransactionModalProps{
        isOpen: boolean,
        onRequestClose: () => void
    }

    export function NewTransactionModal(props: NewTransactionModalProps){

        const [title, setTitle] = useState('');
        const [value, setValue] = useState(0);
        const [category, setCategory] = useState('');
        const [typeTransaction, setTypeTransaction] = useState('deposit');

        function handleCreateNewTransaction(event: FormEvent){
            event.preventDefault();


            const data = {
                title,
                value,
                category,
                typeTransaction
            };

            api.post('/transactions', data)
        }

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
            
                <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
                />

                <input
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => {
                        setTypeTransaction('deposit');
                    }}
                    isActive={typeTransaction === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Tipo entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                    type="button"
                    onClick={() => {
                        setTypeTransaction('withdraw');
                    }}
                    isActive={typeTransaction === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Tipo saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
                </Container>
          </Modal>
        );
    }