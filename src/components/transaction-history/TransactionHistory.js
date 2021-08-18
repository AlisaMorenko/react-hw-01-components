import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';
const TransactionHistory = ({ items }) => (
  <table className={styles.transaction}>
    <thead>
      <tr>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) => (
      <tbody key={id}>
        <tr>
          <td className={styles.data}>{type}</td>
          <td className={styles.data}>{amount}</td>
          <td className={styles.data}>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
