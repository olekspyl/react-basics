import { Transaction } from "./Transaction"

export const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
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
</table>
    )
}