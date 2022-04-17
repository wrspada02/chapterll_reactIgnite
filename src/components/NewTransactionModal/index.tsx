
    import { FormEvent, useState } from "react";
    import { useTransactions } from "../../hooks/useTransactions";
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

        const { createTransaction } = useTransactions();

        const [title, setTitle] = useState('');
        const [amount, setAmount] = useState(0);
        const [category, setCategory] = useState('');
        const [type, setType] = useState('deposit');

        async function handleCreateNewTransaction(event: FormEvent){
            event.preventDefault();

            await createTransaction({
                title,
                amount,
                category,
                type,
            });
         
            props.onRequestClose();
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
                onChange={event => setTitle(event.target.value)}
                />

                <input
                type="number"
                placeholder="Valor"
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
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
                </Container>
          </Modal>
        );
    }