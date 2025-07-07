import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
function Transactions({
  transactions,
  addTransaction,
  deleteTransaction,
  editTrabsaction,
}) {
  const balance = transactions.reduce((acc, item) => {
    return item.type === "expense" ? acc - Number(item.amount) : acc + Number(item.amount);
  }, 0);
  return (
    <div>
 <Card className="glasscard sub-heading-medium">
  <CardHeader>
    Current Balance:
  </CardHeader>
  <CardContent>
    ₹{balance}
  </CardContent>
 </Card>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} editTrabsaction={editTrabsaction} />
    </div>
  );
}
export default Transactions;
