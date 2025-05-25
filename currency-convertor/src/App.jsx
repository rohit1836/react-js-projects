import { useEffect, useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [originalAmount,setOriginalAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currenciesList = useCurrencyInfo(fromCurrency.toLowerCase());    // calls the API 
  const currencyOptions = Object.keys(currenciesList);

  function swap(){
    const origAmt = originalAmount, origCurr = fromCurrency;
    setOriginalAmount(convertedAmount)
    setFromCurrency(toCurrency)
    setConvertedAmount(origAmt)
    setToCurrency(origCurr)
  }


  function convert(){
    let conversionRate = currenciesList[toCurrency.toLowerCase()]
    let conversionAmount = conversionRate * originalAmount;
    conversionAmount = Number(conversionAmount.toFixed(3))
    setConvertedAmount(conversionAmount)
  }

  return (
    <div className="container">
      <h1>Currency Convertor</h1>
      <div className="main-container">
        <InputBox 
          label='From'
          amount={originalAmount}
          selectedCurrency={fromCurrency}
          allCurrencies={currencyOptions}
          onAmountChange={(value) => setOriginalAmount(value)}
          onCurrencyChange={(value) => setFromCurrency(value)}
        />

        <button onClick={swap}>Swap</button>

        <InputBox 
          label='To'
          amount={convertedAmount}
          selectedCurrency={toCurrency}
          amountDisabled={true}
          allCurrencies={currencyOptions}
          onAmountChange={(value) => setConvertedAmount(value)}
          onCurrencyChange={(value) => setToCurrency(value)}
        />

        <button onClick={convert}>Convert {fromCurrency} to {toCurrency}</button>

      </div>
    </div>
  )
}

export default App
