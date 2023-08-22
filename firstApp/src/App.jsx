import React, {useState} from 'react'
import './App.css';
import { ApplyLoan } from './Features/loan.application/screen/apply.loan';

function App() {
  const [state, setState] = useState('')
  const NewPage = () => {
    return(
      (
        <p>
          New Page
        </p>
      )
    )
  }

  return (
    <>
      <div className='root'>
        <div className='search'>
          <input
           type="text"
           placeholder='Search'
           />
          </div>
          <div className='profile'> 
        <img src="" alt="" />
        <p>my name</p>
          </div>
          <div className='navigation'>
            <ul>
              <li>Profile</li>
              <li>Request</li>
              <li>Balance</li>
              <li>Loan history</li>
              <li>Profile</li>
              <li>Profile</li>
            </ul>
            </div>
            <button
            onClick={()=> NewPage()}>
              Checking
              
            {/* <div className='applyloan' >Apply Loan</div> */}
            </button>
            
            
            <div className='repayloan'>Repay Loan</div>
            <div className='statistics'>Statistics</div>
            <div className='footer'>
             <p>my sdfghgfjhgfdtytujhgf
              </p>
              </div>
        </div>
      
    </>
  )
}

export default App
