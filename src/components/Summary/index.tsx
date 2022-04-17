
    import { Container } from "./styles";
    import iconImage from "../../assets/download/assets/income.svg";
    import outconImage from "../../assets/download/assets/outcome.svg";
    import totalImage from "../../assets/download/assets/total.svg";
    import { useTransactions } from "../../hooks/useTransactions";

    export function Summary(){

        const { transactions } = useTransactions();

        const summary = transactions.reduce((acc, transaction) => {

            if(transaction.type === 'deposit'){
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            }else{
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount;
            }
            return acc;
        }, {
            deposits: 0,
            withdraws: 0,
            total: 0
        });

        return(
            <Container>

                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={iconImage} alt="Entradas" />
                    </header>
                    <strong>R$ {summary.deposits.toFixed(2)}</strong>
                </div>
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outconImage} alt="Saídas" />
                    </header>
                    <strong>R$ {summary.withdraws.toFixed(2)}</strong>
                </div>
                <div className="highlight-background">
                    <header>
                        <p>Total</p>
                        <img src={totalImage} alt="Total" />
                    </header>
                    <strong>R$ {summary.total.toFixed(2)}</strong>
                </div>
            </Container>
        );
    }