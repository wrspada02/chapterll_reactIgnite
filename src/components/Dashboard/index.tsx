
    import { Container } from "./styles";
    import { Summary } from "../Summary";
    import { TransactionsTable } from "../TransactionsTable";
    import { createServer } from "miragejs";

    createServer({
        routes(){
            this.namespace = 'api';

            this.get('/transactions', () => {
                return [
                    {
                        id: 1,
                        title: 'Transaction 1',
                        amount: 400,
                        type: 'deposit',
                        category: 'Food',
                        createdAt: new Date()
                    }
                ]
            });
        }
    });

    export function Dashboard(){
        return(
            <Container>
                <Summary/>
                <TransactionsTable/>
            </Container>    
        );
    }