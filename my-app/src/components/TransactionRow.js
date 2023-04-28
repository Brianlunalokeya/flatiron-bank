import React from "react";

const TransactionRow = ({ transaction, onDelete }) => {
  const handleDelete = () => {
    onDelete(transaction.id);
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TransactionRow;
