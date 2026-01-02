import { useState } from "react";

function App() {
  let [expenseName, setExpenseName] = useState("");
  let [expenseAmount, setExpenseAmount] = useState(0);
  let [expenseList, setExpenseList] = useState([]);
  let [totalExpense, setTotalExpense] = useState(0);

  const addExpense = () => {
    if (expenseAmount <= 0 || expenseName.trim() == "") return;

    const newExpense = {
      name: expenseName,
      amount: expenseAmount,
    };

    setTotalExpense(totalExpense + expenseAmount);
    setExpenseList([...expenseList, newExpense]);
    setExpenseAmount(0);
    setExpenseName("");
  };

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-8">Expense Tracker</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense Name"
          className="px-4 py-2 rounded-md text-black outline-none w-48 bg-white"
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
          placeholder="Expense Amount"
          className="px-4 py-2 rounded-md text-black outline-none w-48 bg-white"
        />
      </div>

      <button
        className="bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-md font-semibold mb-8"
        onClick={addExpense}
      >
        Add Expense
      </button>

      <div className="w-full max-w-md">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Total Expense : {totalExpense}
        </h3>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Expense List :
          </h3>
          <div>
            {expenseList.map((expense, index) => (
              <div
                key={index}
                className="flex justify-between bg-gray-800 p-2 rounded mb-2"
              >
                <span>{expense.name}</span>
                <span>₹{expense.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
