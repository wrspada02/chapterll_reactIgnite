
    import { FormEvent, useState, useContext } from "react";
    import { TransactionsContext } from "../../TransactionsContext";
    import { api } from "../../services/api";
    import Modal from "react-modal";
    
    import closeImg from "../../assets/download/assets/close.svg";
    import incomeImg from "../../assets/download/assets/income.svg";
    import outcomeImg from "../../assets/download/assets/outcome.svg";

    import { Container, TransactionTypeContainer, RadioBox } from "./styles";
    
    interface NewTransactionModalProps{
        isOpen: boolean,
        onRequestClose: () => void
    }

    export function NewTransactionModal(props: NewTransactionModalProps){

        const { createTransaction } = useContext(TransactionsContext);

        const [title, setTitle] = useState('');
        const [amount, setAmount] = useState(0);
        const [category, setCategory] = useState('');
        const [type, setType] = useState('deposit');

        function handleCreateNewTransaction(event: FormEvent){
            event.preventDefault();

            createTransaction({
                title,
                amount,
                category,
                type,
            });
            
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
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => {
                        setType('deposit');
                    }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Tipo entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                    type="button"
                    onClick={() => {
                        setType('withdraw');
                    }}
                    isActive={type === 'withdraw'}
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