import React, { Component } from 'react';
import '../../index.css'

class forJob extends Component {
    render() {
        return (
            <div className="container">
                <form>

                    <div className="form-group">
                        <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Full Name" />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    
                    <div className="form-group">
                        <input type="password" className="form-control" id="InputPassword" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <input type="mobileno" className="form-control" id="InputMobileNo" placeholder="Mobile Number" />
                    </div>

                    <div className="form-group">
                        <input type="address" className="form-control" id="InputAddress" placeholder="Address" />
                    </div>
                    
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="Check" />
                        <label className="form-check-label" >Agree to Terms & Conditions </label>
                    </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>
            </div>
        )
    }
} 

export default forJob;