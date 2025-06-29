import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;
type TransactionInput = Pick<Transactions, 'title' | 'amount' | 'type' | 'category'>;


interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transactions: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transactions[]>([])
  
    useEffect(() => {
      api.get('/transactions')
      // .then(response => console.log(response.data))
      .then(response => setTransactions(response.data.transactions))
  
    }, []);

    function createTransaction(transactions: TransactionInput) {
       
      api.post('/transactions', transactions)
    }

    return (
      <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        { children }
      </TransactionsContext.Provider>
    )

}