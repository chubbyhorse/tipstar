import './App.css';
import { useState } from 'react';

export default function App() {
  const [tipAmount, setTipAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [subTotal, setSubTotal] = useState(18);

  return (
    <div className="App">
      <form>
        <label>
          sub total:<input type="number" name="subTotal" value={subTotal} onChange={e => setSubTotal(e.target.value)}/>
        </label>
        <br /> <br />
        <label>
          tip %:<input type="number" name="tipPercentage" value={tipPercentage}  onChange={e => setTipPercentage(e.target.value)}/>
        </label>
        <br /> <br />
      </form>
      <p>your tip is: ${Number((subTotal * tipPercentage) / 100).toFixed(2)}</p>
      <p>your grand total is: ${Number(subTotal) + (Number((subTotal * tipPercentage) / 100))}</p>
    </div>
  );
}