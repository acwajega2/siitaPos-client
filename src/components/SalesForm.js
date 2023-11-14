import React from "react";
import { useCustomContext } from "../context/Context";

const SaleForm = () => {
  const { saleData, setSaleData, handleSaleSubmit } = useCustomContext();

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
        <input
          type="text"
          value={saleData.saleDate}
          onChange={(e) =>
            setSaleData({ ...saleData, saleDate: e.target.value })
          }
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
