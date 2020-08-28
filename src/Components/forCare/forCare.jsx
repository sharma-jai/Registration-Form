import React, { Component } from 'react';
import '../../index.css'
import axios from 'axios';


class forCare extends Component {
    
    constructor(props) {
        super(props);
        
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullName: '',
            email: '',
            password: '',
            mobileno: '',
            address: ''

        }
    }

    onChangeFullName(event) {
        this.setState({
            fullName: event.target.value
        });
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    onChangeMobileNumber(event) {
        this.setState({
            mobileno: event.target.value
        });
    }
    onChangeAddress(event) {
        this.setState({
            address: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
    
        const object = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            mobileno: this.state.mobileno,
            address: this.state.address
        }
        
        axios.post('http://localhost/userregistration/insert.php',object)
        .then(res => console.log(res.data));

        this.setState({
            fullName: '',
            email: '',
            password: '',
            mobileno: '',
            address: ''
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Full Name" value={this.state.fullName} onChange={this.onChangeFullName} />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    
                    <div className="form-group">
                        <input type="password" className="form-control" id="InputPassword" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <input type="mobileno" className="form-control" id="InputMobileNo" placeholder="Mobile Number" value={this.state.mobileno} onChange={this.onChangeMobileNumber} />
                    </div>

                    <div className="form-group">
                        <input type="address" className="form-control" id="InputAddress" placeholder="Address" value={this.state.address} onChange={this.onChangeAddress} />
                    </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>
            </div>
        )
    }
} 

export default forCare;