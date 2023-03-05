import PropTypes from 'prop-types';

import {
  Transaction,
  TransactionThead,
  TransactionTlist,
  TransactionTitem,
  TransactionBody,
  TransactionList,
  TransactionItem,
} from './TransactionHistory.styled';

const TransactionHistory = prop => {
  return (
    <Transaction>
      <TransactionThead>
        <TransactionTlist>
          <TransactionTitem>Type</TransactionTitem>
          <TransactionTitem>Amount</TransactionTitem>
          <TransactionTitem>Currency</TransactionTitem>
        </TransactionTlist>
      </TransactionThead>

      <TransactionBody>
        {prop.items.map(item => (
          <TransactionList key={item.id}>
            <TransactionItem>{item.type}</TransactionItem>
            <TransactionItem>{item.amount}</TransactionItem>
            <TransactionItem>{item.currency}</TransactionItem>
          </TransactionList>
        ))}
      </TransactionBody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id : PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
