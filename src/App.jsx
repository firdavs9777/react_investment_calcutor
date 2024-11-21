import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/input'
import Result from './components/Result'
import './App.css'
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [inputIdentifier]: newValue
      }
    })
  }

  return (
    <section className="main">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Result userInput={ userInput} />
    </section>
  )
}

export default App
