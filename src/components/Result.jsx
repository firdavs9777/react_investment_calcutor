import { calculateInvestmentResults } from "../utils/investment";
import './Result.css'
// eslint-disable-next-line react/prop-types
const Result = ({ userInput }) => {
  
  // eslint-disable-next-line react/prop-types
  const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput;
  
  const annualResult = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration })
  
  return (
    <section className="table-section">
      <h2>Investment Result</h2>
      <table>
        <thead>
          <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>End Value</th>
          <th>Annual Investment </th>
        </tr>
        </thead>
        <tbody>
          {annualResult.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.interest}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{ data.annualInvestment }</td>
            </tr>
          ))}
        </tbody>

      </table>
    </section>
  )
}
export default Result;