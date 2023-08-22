import React from "react";
import { LoanVerification } from "../../verification/loan.verification";



export const ApplyLoan = () => {
    return( 
        <>
        <div>
            <div className="personaldetails">
                <p> Personal details</p>
                <div className="names">
                    <input
                    type="text"
                    placeholder="First name"
                    value={text}/>
                    <input
                    type="text" 
                    placeholder="Last name"
                    value={text}/>
                </div>
                 <div className="numbers">
                    <input
                    type="number"
                    placeholder="Phone Number"
                    value={number}/>
                    <input 
                    type="number"
                    placeholder=" Nida"
                    value={number}/>
                                    </div>
                                    
                                    <div className="Address">
                    <input
                    type="text"
                    placeholder="Address1*"
                    value={text}/>
                    <input 
                    type="text"
                    placeholder=" Address2(Optional)"
                    value={text}/>
                    <input
                    type="email"
                    placeholder="EmailAddress*"
                    value={email}
                    />
                                    </div>
            
            </div>

<div className="Loan info">
    <p>Loan information</p>
    <p>Enter amount  of Loan you want(20000-120,000)</p>
    <p>Amount</p>
    <input
    type="number"
    />
    <p>Choose time to pay</p>
    <input
    type="checkbox"
    name="1 Week"
    />
     <input
    type="checkbox"
    name="1 Month"
    />
    <button
    onClick={LoanVerification}
    >Submit</button>

</div>
        </div>
        
        </>
    )
} 