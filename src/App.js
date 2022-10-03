
import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState('')
  const [upper, setUpper] = useState('')
  const [lower, setLower] = useState('')
  const [fullresult, setFullResult] = useState('')

  function calculate(e) {
    e.preventDefault()
    const result = (220 - age) * 0.85
    const result2 = (220 - age) *0.65
    setUpper(result)
  
    
  }
  return (
    <div>
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
        </div>
        <input></input>
        <div>
          <label>Heart rate limits</label>
        </div>
        <output>{upper}</output>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
