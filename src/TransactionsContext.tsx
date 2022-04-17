
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
        transaction: TransactionProps[],
        createTransaction: (transaction: TransactionInput) => void
    }

    export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

    export function TransactionsProvider({ children }: TransactionsProviderProps){
        const [transaction, setTransaction] = useState<TransactionProps[]>([]);

        useEffect(() => {
            api.get('/transactions')
            .then(response => setTransaction(response.data.transactions));
        }, []);

        function createTransaction(transaction: TransactionInput){

            api.post('/transactions', transaction);
        }

        return(
            <TransactionsContext.Provider value={{ transaction, createTransaction }}>
                { children }
            </TransactionsContext.Provider>
        );
    }