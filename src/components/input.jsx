import { useState } from "react";
import './input.css'
// eslint-disable-next-line react/prop-types
const UserInput = ({userInput, onChange}) => {
 function handleChange(inputIdentifier, newValue) {
    onChange(inputIdentifier, newValue);
  }
  return (
    <section className="main-section">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input type="number" required value={userInput.initialInvestment} onChange={(e) => handleChange("initialInvestment", e.target.value)}/>
      </p>
      <p>
        <label>Annual Investment</label>
        <input type="number" required value={userInput.annualInvestment} onChange={(e) => handleChange("annualInvestment", e.target.value)} />
      </p>
      </div>
      
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        
        <input type="number" required value={userInput.expectedReturn} onChange={(e) => handleChange("expectedReturn", e.target.value)} />        
      </p>
      <p>
        <label>Duration</label>
        <input type="number" required value={userInput.duration} onChange={(e) => handleChange("duration", e.target.value)} />
      </p>
      </div>
          </section>
 )
}

export default UserInput;