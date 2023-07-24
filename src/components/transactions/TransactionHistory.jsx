import { Transaction } from "./Transaction";
import {Table} from './Transactions.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <Transaction items={items}></Transaction>
  </tbody>
</Table>
    )
}