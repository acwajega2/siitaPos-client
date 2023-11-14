import React, {
  createContext,
  useContext as useReactContext,
  useState,
} from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [saleData, setSaleData] = useState({
    staffPhone: "",
    saleDate: "",
    branchCode: "",
    saleAmount: 0,
    paymentMethod: "",
    transactionReference: "",
  });

  const [expenseData, setExpenseData] = useState({
    transactionReference: "",
    branchCode: "",
    staffPhone: "",
    expenseDate: "",
    expenseAmount: 0,
    expenseCategory: "",
    receiptImageUrl: "",
  });

  const [error, setError] = useState(null);

  const handleSaleSubmit = async () => {
    try {
      validateSaleData();

      // Call the API here
      const response = await fetch("http://3.80.87.61:8008/api/v1/dailySales", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saleData),
      });

      const result = await response.json();
      console.log("Sale posted successfully:", result);
    } catch (error) {
      console.error("Error posting sale:", error.message);
      setError(error.message); // Set error state
    }
  };

  const handleExpenseSubmit = async () => {
    try {
      validateExpenseData();

      // Call the API here
      const response = await fetch(
        "http://3.80.87.61:8008/api/v1/dailyExpenses",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(expenseData),
        },
      );

      const result = await response.json();
      console.log("Expense posted successfully:", result);
    } catch (error) {
      console.error("Error posting expense:", error.message);
      setError(error.message); // Set error state
    }
  };

  const validateSaleData = () => {
    const requiredFields = [
      "staffPhone",
      "saleDate",
      "branchCode",
      "saleAmount",
      "paymentMethod",
      "transactionReference",
    ];

    for (const field of requiredFields) {
      if (!saleData[field]) {
        throw new Error(
          `Please fill in all required fields for the daily sale. Missing: ${field}`,
        );
      }
    }

    if (saleData.saleAmount <= 0) {
      throw new Error("Sale amount must be greater than zero.");
    }
  };

  const validateExpenseData = () => {
    const requiredFields = [
      "transactionReference",
      "branchCode",
      "staffPhone",
      "expenseDate",
      "expenseAmount",
      "expenseCategory",
      "receiptImageUrl",
    ];

    for (const field of requiredFields) {
      if (!expenseData[field]) {
        throw new Error(
          `Please fill in all required fields for the daily expense. Missing: ${field}`,
        );
      }
    }

    if (expenseData.expenseAmount <= 0) {
      throw new Error("Expense amount must be greater than zero.");
    }
  };

  const contextValue = {
    saleData,
    setSaleData,
    expenseData,
    setExpenseData,
    handleSaleSubmit,
    handleExpenseSubmit,
    error, // Provide error state to components
    clearError: () => setError(null), // Function to clear error
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useCustomContext = () => {
  const context = useReactContext(Context);
  if (!context) {
    throw new Error("useCustomContext must be used within a ContextProvider");
  }
  return context;
};
