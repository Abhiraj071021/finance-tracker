const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// using the packages ie middleware
app.use(cors());
app.use(express.json());

// Connecting to mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "MyFinanceApp",
  })
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.error("Cannot connect to database, error: ", err);
  });

//Database creation
// Define a schema for a transaction
const transactionSchema = new mongoose.Schema({
  id: Number,
  amount: Number,
  description: String,
  type: {
    // Type: income or expense
    type: String,
    enum: ["income", "expense"],
    default: "expense",
    required: true,
  },
  category: {
    type: String,
    default: "General", // Default to General category
    required: true,
  },
  date :{
    type : Date,
    default: Date.now,
  }
});

// Create a model from the schema
const Transaction = mongoose.model("Transaction", transactionSchema);

// GET /transactions - fetch all transactions
app.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ id: -1 }); // Newest first
    res.send(transactions);
    res.json(transactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/transactions", async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    const saved=await newTransaction.save();
    res.json(saved);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// DELETE /transactions/:id - delete by MongoDB _id
app.delete("/transactions/:id", async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id); // Remove by _id
    res.json(deleted);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/transactions/:id", async (req,res)=>{
    try{
        const updated = await Transaction.findByIdAndUpdate(req.params.id , req.body, {new:true});
        res.json(updated);
    }catch(error){
        res.status(500).send(error.message);
    }
})

//Requesting to server
app.get("/", (req, res) => {
  res.send("This is my server");
});

// starting the server
app.listen(5000, (req, res) => {
  console.log("server is running on port 5000");
});
