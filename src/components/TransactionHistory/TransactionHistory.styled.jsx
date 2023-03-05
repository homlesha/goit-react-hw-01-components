import styled from 'styled-components';

export const Transaction = styled.table`
  width: 900px;
  margin: 50px auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const TransactionThead = styled.thead``;
export const TransactionTlist = styled.tr`
  height: 60px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  background-color: #00bcd5;
`;
export const TransactionTitem = styled.th`
  text-transform: uppercase;
  font-size: 15px;
`;

export const TransactionBody = styled.tbody`
  color: white;
  font-weight: 400;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
`;
export const TransactionList = styled.tr`
  &:nth-child(even) {
    background: #ecf1f4;
  }
`;
export const TransactionItem = styled.td`
  padding: 12px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 15px;
  color: #696969;
  text-transform: capitalize;
  text-align: center;
`;
