import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

const dummyTransactions = [
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "50.8",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05691",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "29.95",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "08675",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "26.2",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05441",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "16.8",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-10-04",
    "TransactionAmount": "86.91",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05691",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-02",
    "TransactionAmount": "548.62",
    "TransactionType": "Credit",
    "TransactionCode": "300",
    "SICMCCCode": "00000",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-02",
    "TransactionAmount": "29.98",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05912",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06549"
  },
  {
    "TransactionPostDate": "2012-09-28",
    "TransactionAmount": "13.2",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05310",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06579"
  },
  {
    "TransactionPostDate": "2012-09-26",
    "TransactionAmount": "9.79",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05912",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06549"
  },
  {
    "TransactionPostDate": "2012-09-26",
    "TransactionAmount": "6.49",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06509"
  },
  {
    "TransactionPostDate": "2012-09-25",
    "TransactionAmount": "39.72",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-09-24",
    "TransactionAmount": "40.0",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05722",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-09-24",
    "TransactionAmount": "23.42",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06532"
  },
  {
    "TransactionPostDate": "2012-09-20",
    "TransactionAmount": "5.13",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06500"
  },
  {
    "TransactionPostDate": "2012-09-19",
    "TransactionAmount": "68.24",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05943",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06542"
  },
  {
    "TransactionPostDate": "2012-09-19",
    "TransactionAmount": "16.73",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06509"
  },
  {
    "TransactionPostDate": "2012-09-19",
    "TransactionAmount": "6.24",
    "TransactionType": "Credit",
    "TransactionCode": "400",
    "SICMCCCode": "05943",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06542"
  },
  {
    "TransactionPostDate": "2012-09-18",
    "TransactionAmount": "13.47",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06532"
  },
  {
    "TransactionPostDate": "2012-09-18",
    "TransactionAmount": "37.47",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-09-17",
    "TransactionAmount": "38.86",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-09-17",
    "TransactionAmount": "13.4",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06500"
  }
];

class TransactionsTable extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Merchant</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        { /* this.props.TransactionData */ dummyTransactions.map((trx, i) => (
          <tr key={ i }>
            <td>{ trx.TransactionPostDate }</td>
            <td>{ trx.MerchantNumber }</td>
            <td>{ (trx.TransactionType === 'Debit' ? '' : '–') + trx.TransactionAmount }</td>
          </tr>
        )) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ TransactionData }) {
  return { TransactionData };
}

export default connect(mapStateToProps)(TransactionsTable)