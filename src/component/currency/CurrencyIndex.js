import React, {useEffect, useState} from 'react'
import "./Currency.css"


const CurrencyIndex = () => {

const [currenctList, setCurrenctList] = useState([])
const [fromCurrency, setFromCurrency] = useState('AUD')
const [toCurrency, setToCurrency] = useState('AUD')
const [fromCurrencyValue, setFromCurrencyValue] = useState('')
const [toCurrencyValue, setToCurrencyValue] = useState('')

useEffect(() => {
  fetch("https://api.frankfurter.app/latest")
  .then(res => res.json())
  .then(result => {
    optimizeCurrencyName(result.rates)
  }).catch(err => console.log(err))
}, [])

const optimizeCurrencyName = (curr) => {
  const finalCurr = Object.keys(curr)
  setCurrenctList(finalCurr)
}

const handleFromCurrency = (e) => {
  console.log(e.target.value)
  setFromCurrency(e.target.value)
}

const handleToCurrency = (e) => {
  console.log(e.target.value)
  setToCurrency(e.target.value)
}

const handleFromValue = (e) => {
  console.log(e.target.value)
  setFromCurrencyValue(e.target.value)
}

const handleConvert = () => {
  console.log(`from ${fromCurrencyValue} ${fromCurrency} to ${toCurrency}`)
  conversionCurr(fromCurrencyValue,fromCurrency,toCurrency )
}

const conversionCurr = (fcv, fc, tc) => {
  if(fc === tc) {
    alert("Cannot convert to same currency")
  } else if(fcv === "") {
    alert("Please Enter the currency to convert")
    console.log("empty")
  } else {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${fcv}&from=${fc}&to=${tc}`)
    .then(resp => resp.json())
    .then((data) => {
      console.log(Object.values(data.rates))
      setToCurrencyValue(Object.values(data.rates)[0])
    }).catch(err => console.log(err))
  }

}

  return (
    <>
      <h2>Currency Converter</h2>
      <div className="currencyBlock">
        <div className="currencySelect">
          <select name="fromCurrency" id="from-currency" value={fromCurrency} onChange={handleFromCurrency}>
              {currenctList.map((i,index) => {
                return <option key={index} value={i} >{i}</option>
              })}
          </select>
          <select name="toCurrency" id="to-currency" value={toCurrency} onChange={handleToCurrency}>
              {currenctList.map((i,index) => {
                return <option key={index} value={i} >{i}</option>
              })}
          </select>
        </div>
        <div className="currencyEnter">
          <input type="number" value={fromCurrencyValue} onChange={handleFromValue} name="fromValue" id="from-value" placeholder="enter the currency" />
          <input type="number" name="toValue" id="to-value" readOnly value={toCurrencyValue}/>
        </div>
        <button onClick={handleConvert}>Convert</button>
      </div>
    </>
  )
}

export default CurrencyIndex