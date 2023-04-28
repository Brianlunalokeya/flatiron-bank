import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';

function App() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:8001/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data))
        .catch(error => console.error(error));
    }, []);
  
    const addTransaction = async (transaction) => {
      try {
        const response = await fetch('http://localhost:8001/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(transaction)
        });
  
        if (!response.ok) {
          throw new Error('Failed to add transaction');
        }
  
        const data = await response.json();
        setTransactions([...transactions, data]);
      } catch (error) {
        console.error(error);
      }
    };
  
    const deleteTransaction = async (id) => {
      try {
        const response = await fetch(`http://localhost:8001/transactions/${id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete transaction');
        }
  
        setTransactions(transactions.filter(transaction => transaction.id !== id));
      } catch (error) {
        console.error(error);
      }
    };
  
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <hr />
        <TransactionForm onAdd={addTransaction} />
        <hr />
        <TransactionTable transactions={filteredTransactions} onDelete={deleteTransaction} />
        <hr />
      </div>
    );
  }
  
export default App;