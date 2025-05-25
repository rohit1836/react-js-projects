import React from "react";

function InputBox({
  label,
  amount,
  amountDisabled=false,
  selectedCurrency,
  allCurrencies = [],
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className="input-container">
      <div className="label-wrapper">
        <label>{label}</label>
        <label>Currency</label>
      </div>
      <div className="input-wrapper">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(event) => {
            if(onAmountChange){
                onAmountChange(Number(event.target.value));
            }
          }
        }
        />

        <select
          name="currency-dropdown"
          id="currency-dropdown"
          value={selectedCurrency}
          onChange={(event) => {
            if(onCurrencyChange) {
                onCurrencyChange((event.target.value).toUpperCase());
                // event.target.value = event.target.value
            }
          }}
        >
          {(allCurrencies).map((curr) => (
            <option key={curr} value={curr.toUpperCase()}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
