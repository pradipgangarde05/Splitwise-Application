import React, { useState } from "react";
import HomeButton from "./HomeButton";

function BillDivider() {
  const [subtotal, setSubtotal] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [noOfPerson, setNoOfPerson] = useState("");
  const [totalBill, setTotalBill] = useState("00.00");
  const [billPerPerson, setBillPerPerson] = useState("00.00");
  const [totalTip, setTotalTip] = useState("00.00");
  const [tipPerPerson, setTipPerPerson] = useState("00.00");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const inputs = {
      subtotal,
      tipPercent,
      noOfPerson,
    };

    calculateBillDivider(inputs);
  };

  const calculateBillDivider = (inputs) => {
    const totalTip =
      (parseFloat(inputs.subtotal) * parseFloat(inputs.tipPercent)) / 100;
    const totalAmount = parseFloat(inputs.subtotal) + totalTip;
    const tipPerPerson = totalTip / parseFloat(inputs.noOfPerson);
    const billPerPerson = totalAmount / parseFloat(inputs.noOfPerson);

    setTotalBill(totalAmount.toFixed(2));
    setBillPerPerson(billPerPerson.toFixed(2));
    setTotalTip(totalTip.toFixed(2));
    setTipPerPerson(tipPerPerson.toFixed(2));

    resetForm();
  };

  const resetForm = () => {
    setSubtotal("");
    setTipPercent("");
    setNoOfPerson("");
  };

  return (
    <>
      <HomeButton />
      <div className="container center">
        <div className="bill-divider-wrapper">
          <div className="title">
            <h1>Bill Split</h1>
          </div>

          <div className="bill-inputs">
            <form onSubmit={handleFormSubmit} className="bill-divider-form">
              <div className="form-group">
                <label htmlFor="subtotal">subtotal bill ($)</label>
                <input
                  type="number"
                  id="subtotal"
                  className="form-control form-control-lg mb-2"
                  min="0"
                  step="any"
                  required
                  value={subtotal}
                  onChange={(e) => setSubtotal(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tip">tip (%)</label>
                <input
                  type="number"
                  id="tip"
                  className="form-control form-control-lg mb-2"
                  min="0"
                  step="any"
                  required
                  value={tipPercent}
                  onChange={(e) => setTipPercent(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="no-of-person">no of person</label>
                <input
                  type="number"
                  id="no-of-person"
                  className="form-control form-control-lg mb-2"
                  min="0"
                  step="1"
                  required
                  value={noOfPerson}
                  onChange={(e) => setNoOfPerson(e.target.value)}
                />
              </div>

              <input
                type="submit"
                id="calc-btn"
                className="w-100 btn btn-lg btn-success"
                value="calculate"
              />
            </form>
          </div>

          <div className="bill-output">
            <div className="text-group">
              <h3>Total Bill</h3>
              <span id="total-bill">$ {totalBill}</span>
            </div>

            <div className="text-group">
              <h3>Bill Per Person</h3>
              <span id="bill-per-person">$ {billPerPerson}</span>
            </div>

            <div className="text-group">
              <h3>Total Tip</h3>
              <span id="total-tip">$ {totalTip}</span>
            </div>

            <div className="text-group">
              <h3>Tip Per Person</h3>
              <span id="tip-per-person">$ {tipPerPerson}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillDivider;
