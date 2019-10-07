import React from 'react';
import style from './TransactionHistory.module.css';

const TransactionHistory = items => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.thead}>
        <tr className={style.trThead}>
          <th className={style.td}>Type</th>
          <th className={style.td}>Amount</th>
          <th className={style.td}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {items.items.map(item => (
          <tr key={item.id} className={style.trTbody}>
            <td className={style.td}>{item.type}</td>
            <td className={style.td}>{item.amount}</td>
            <td className={style.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
