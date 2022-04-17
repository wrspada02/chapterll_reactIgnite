
    import { api } from "./services/api";
    import { createContext, useState, useEffect, ReactNode} from "react";

    interface TransactionProps{
        id: number,
        title: string,
        amount: number,
        type: string,
        category: string,
        createdAt: string
    }

    type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'> //Copia props de TransactionProps menos id e createdAt

    interface TransactionsProviderProps{
        children: ReactNode
    }

    interface TransactionsContextData{
        transactions: TransactionProps[],
        createTransaction: (transaction: TransactionInput) => Promise<void>
    }

    export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

    export function TransactionsProvider({ children }: TransactionsProviderProps){
        const [transactions, setTransactions] = useState<TransactionProps[]>([]);

        useEffect(() => {
            api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
        }, []);

        async function createTransaction(transactionInput: TransactionInput){

            const response = await api.post('/transactions', {
                ...transactionInput,
                createdAt: new Date()
            });
            const { transaction } = response.data;

            setTransactions([
                ...transactions,
                transaction
            ])
        }

        return(
            <TransactionsContext.Provider value={{ transactions, createTransaction }}>
                { children }
            </TransactionsContext.Provider>
        );
    }