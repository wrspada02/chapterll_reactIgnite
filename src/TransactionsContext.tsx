
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

    interface TransactionsProviderProps{
        children: ReactNode
    }

    export const TransactionsContext = createContext<TransactionProps[]>([]);

    export function TransactionsProvider({ children }: TransactionsProviderProps){
        const [transaction, setTransaction] = useState<TransactionProps[]>([]);

        useEffect(() => {
            api.get('/transactions')
            .then(response => setTransaction(response.data.transactions));
        }, []);

        return(
            <TransactionsContext.Provider value={transaction}>
                { children }
            </TransactionsContext.Provider>
        );
    }