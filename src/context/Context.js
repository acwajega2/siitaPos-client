import React, {
  createContext,
  useContext as useReactContext,
  useState,
} from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [customAlertConfig, setCustomAlertConfig] = useState({
    customAlertType: "",
    customAlertMessage: "",
    customAlertDescription: "",
    displayCustomAlert: false,
  });

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

  const displayCustomAlert = ({ type, message, description, visible }) => {
    setCustomAlertConfig({
      customAlertType: type,
      customAlertMessage: message,
      customAlertDescription: description,
      displayCustomAlert: visible,
    });
  };

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
      displayCustomAlert({
        type: "success",
        message: "Sale Submission success",
        description: result,
        visible: true,
      });
    } catch (error) {
      console.error("Error posting sale:", error.message);
      displayCustomAlert({
        type: "error",
        message: "Sale Submission failure",
        description: error.message,
        visible: true,
      });
      setError(error.message); // Set error state
    } finally {
      // Always clear errors in any case
      clearError();
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
      displayCustomAlert({
        type: "success",
        message: "Expense Submission success",
        description: result,
        visible: true,
      });
    } catch (error) {
      console.error("Error posting expense:", error.message);
      displayCustomAlert({
        type: "error",
        message: "Expense Submission failure",
        description: error.message,
        visible: true,
      });
      setError(error.message); // Set error state
    } finally {
      // Always clear errors in any case
      clearError();
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
        displayCustomAlert({
          type: "error",
          message: "Sale Submission failure",
          description: `Please fill in all required fields for the daily sale. Missing: ${field}`,
          displayCustomAlert: true,
        });
        throw new Error(
          `Please fill in all required fields for the daily sale. Missing: ${field}`,
        );
      }
    }

    if (saleData.saleAmount <= 0) {
      displayCustomAlert({
        type: "error",
        message: "Sale Submission failure",
        description: "Sale amount must be greater than zero.",
        displayCustomAlert: true,
      });
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
        displayCustomAlert({
          type: "error",
          message: "Expense Submission failure",
          description: `Please fill in all required fields for the daily expense. Missing: ${field}`,
          displayCustomAlert: true,
        });
        throw new Error(
          `Please fill in all required fields for the daily expense. Missing: ${field}`,
        );
      }
    }

    if (expenseData.expenseAmount <= 0) {
      displayCustomAlert({
        type: "error",
        message: "Expense Submission failure",
        description: "Expense amount must be greater than zero.",
        displayCustomAlert: true,
      });
      throw new Error("Expense amount must be greater than zero.");
    }
  };

  const clearError = () => {
    setError(null);
  };

  const contextValue = {
    saleData,
    setSaleData,
    expenseData,
    setExpenseData,
    handleSaleSubmit,
    handleExpenseSubmit,
    customAlertConfig,
    setCustomAlertConfig,
    error, // Provide error state to components
    clearError, // Function to clear error
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
