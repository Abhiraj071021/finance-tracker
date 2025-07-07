import { Button } from "@/components/ui/button";
const TransactionList = (props) => {
  console.log(props.transactions);
  const { transactions, editTransaction, deleteTransaction } = props;
  return (
    <div style={{ color: "black", padding: "1rem" }} className="glasscard sub-heading-medium" >
      <h1>TransactionList</h1>
      <ul className="">
        {transactions.map((item) => (
          <TransactionItem key={transactions._id} item={item} editTransaction={editTransaction} deleteTransaction={deleteTransaction} />
        ))
        }
      </ul >
    </div >
  );
};

const TransactionItem = ({ item, deleteTransaction, editTransaction }) => {

  return (
    <div >
      <li key={item._id}>
        <h1>{item.description} — ₹{item.amount} ({item.type}) in {item.category}</h1>
        <div>
          <Button onClick={() => editTransaction(item._id,)}>Edit</Button>
          <Button onClick={() => deleteTransaction(item._id)}>Delete</Button>
        </div>
      </li>
    </div>
  );
};

export default TransactionList;
