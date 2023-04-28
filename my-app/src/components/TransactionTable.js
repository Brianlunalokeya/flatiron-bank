import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions, onDeleteTransaction }) {
  const handleDelete = (id) => {
    onDeleteTransaction(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
