import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCustomContext } from "../context/Context";
import { Input, Button } from "antd";
import CustomAlert from "./CustomAlert";

const ExpenseForm = () => {
  const { expenseData, setExpenseData, handleExpenseSubmit } =
    useCustomContext();

  // Set the default date to today
  useEffect(() => {
    setExpenseData({ ...expenseData, expenseDate: new Date() });
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="form">
      <h2>Daily Expense Form</h2>
      <CustomAlert />
      <form>
        <label>Transaction Reference</label>
        <Input
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
        <Input
          type="text"
          value={expenseData.branchCode}
          onChange={(e) =>
            setExpenseData({ ...expenseData, branchCode: e.target.value })
          }
        />

        <label>Staff Phone</label>
        <Input
          type="text"
          value={expenseData.staffPhone}
          onChange={(e) =>
            setExpenseData({ ...expenseData, staffPhone: e.target.value })
          }
        />

        <label>Expense Date</label>
        <DatePicker
          selected={expenseData.expenseDate}
          onChange={(date) =>
            setExpenseData({ ...expenseData, expenseDate: date })
          }
          dateFormat="MM/dd/yyyy" // Adjust the date format as needed
        />

        <label>Expense Amount</label>
        <Input
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
        <Input
          type="text"
          value={expenseData.expenseCategory}
          onChange={(e) =>
            setExpenseData({ ...expenseData, expenseCategory: e.target.value })
          }
        />

        <label>Receipt Image URL</label>
        <Input
          type="text"
          value={expenseData.receiptImageUrl}
          onChange={(e) =>
            setExpenseData({ ...expenseData, receiptImageUrl: e.target.value })
          }
        />

        <Button type="primary" onClick={handleExpenseSubmit}>
          Submit Expense
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
