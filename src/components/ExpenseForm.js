import React from "react";
import { useCustomContext } from "../context/Context";

const ExpenseForm = () => {
  const { expenseData, setExpenseData, handleExpenseSubmit } =
    useCustomContext();

  return (
    <div className="form">
      <h2>Daily Expense Form</h2>
      <form>
        <label>Transaction Reference</label>
        <input
          type="text"
          value={expenseData.transactionReference}
          onChange={(e) =>
            setExpenseData({
              ...expenseData,
              transactionReference: e.target.value,
            })
          }
        />

        <label>Branch Code</label>
        <input
          type="text"
          value={expenseData.branchCode}
          onChange={(e) =>
            setExpenseData({ ...expenseData, branchCode: e.target.value })
          }
        />

        <label>Staff Phone</label>
        <input
          type="text"
          value={expenseData.staffPhone}
          onChange={(e) =>
            setExpenseData({ ...expenseData, staffPhone: e.target.value })
          }
        />

        <label>Expense Date</label>
        <input
          type="text"
          value={expenseData.expenseDate}
          onChange={(e) =>
            setExpenseData({ ...expenseData, expenseDate: e.target.value })
          }
        />

        <label>Expense Amount</label>
        <input
          type="number"
          value={expenseData.expenseAmount}
          onChange={(e) =>
            setExpenseData({
              ...expenseData,
              expenseAmount: Number(e.target.value),
            })
          }
        />

        <label>Expense Category</label>
        <input
          type="text"
          value={expenseData.expenseCategory}
          onChange={(e) =>
            setExpenseData({ ...expenseData, expenseCategory: e.target.value })
          }
        />

        <label>Receipt Image URL</label>
        <input
          type="text"
          value={expenseData.receiptImageUrl}
          onChange={(e) =>
            setExpenseData({ ...expenseData, receiptImageUrl: e.target.value })
          }
        />

        <button type="button" onClick={handleExpenseSubmit}>
          Submit Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
