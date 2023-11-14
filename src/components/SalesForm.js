import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCustomContext } from "../context/Context";

const SaleForm = () => {
  const { saleData, setSaleData, handleSaleSubmit } = useCustomContext();

  // Set the default date to today
  useEffect(() => {
    setSaleData({ ...saleData, saleDate: new Date() });
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="form">
      <h2>Daily Sale Form</h2>
      <form>
        <label>Staff Phone</label>
        <input
          type="text"
          value={saleData.staffPhone}
          onChange={(e) =>
            setSaleData({ ...saleData, staffPhone: e.target.value })
          }
        />

        <label>Sale Date</label>
        <DatePicker
          selected={saleData.saleDate}
          onChange={(date) => setSaleData({ ...saleData, saleDate: date })}
          dateFormat="MM/dd/yyyy" // Adjust the date format as needed
        />

        <label>Branch Code</label>
        <input
          type="text"
          value={saleData.branchCode}
          onChange={(e) =>
            setSaleData({ ...saleData, branchCode: e.target.value })
          }
        />

        <label>Sale Amount</label>
        <input
          type="number"
          value={saleData.saleAmount}
          onChange={(e) =>
            setSaleData({ ...saleData, saleAmount: Number(e.target.value) })
          }
        />

        <label>Payment Method</label>
        <input
          type="text"
          value={saleData.paymentMethod}
          onChange={(e) =>
            setSaleData({ ...saleData, paymentMethod: e.target.value })
          }
        />

        <label>Transaction Reference</label>
        <input
          type="text"
          value={saleData.transactionReference}
          onChange={(e) =>
            setSaleData({ ...saleData, transactionReference: e.target.value })
          }
        />

        <button type="button" onClick={handleSaleSubmit}>
          Submit Sale
        </button>
      </form>
    </div>
  );
};

export default SaleForm;
