import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import validator from 'validator'
import 'react-toastify/dist/ReactToastify.css';
import UserApiService from './UserApiService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: ''
        }
    }
    validate() {
        let firstNameError = "";
        let usernameError = "";
        let passwordError = "";
        let emailError = "";
        let invalidEmail = "";
        if (!this.state.firstName) {
            firstNameError = "First Name is required with min 3 letter";
        }
        if (!this.state.username) {
            usernameError = "Username is required with min 3 letter";
        }
        if (!this.state.password) {
            passwordError = "Password is required with min 3 letter";
        }
        if (!this.state.email) {
            emailError = "Email is required";
        }
        else if (!validator.isEmail(this.state.email)) {
            invalidEmail = "Enter a valid email";
        }

        if (firstNameError || usernameError || passwordError || emailError || invalidEmail) {
            this.setState({ firstNameError, usernameError, passwordError, emailError, invalidEmail });
            return false;
        }
        return true;
    }
    saveForm = (event) => {
        event.preventDefault();
        if (this.validate()) {
            let user = { firstName: this.state.firstName, lastName: this.state.lastName, username: this.state.username, password: this.state.password, email: this.state.email };
            UserApiService.saveUser(user).then((response) =>{
                toast.success("Registered")
            this.setState({
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: '',
                nameError: '',
                passwordError: '',
                firstNameError: '',
                emailError: ''
            })
        }).catch(error=>{
            if(error.response.data.status===500){
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else{
                console.log(error)
                toast.warning(error.response.data)
        }})
            
            }}
    render() {
        return (
            <div>

                <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col col-xl-10">
                                <div class="card" style={{ borderradius: "1rem" }}>
                                    <div class="row g-0">
                                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                                                alt="login form" class="img-fluid" style={{ borderradius: "1rem 0 0 1rem"}}    />
                                        </div>
                                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div class="card-body p-4 p-lg-5 text-black">
                                                <form>
                                                    <h2 class="fw-normal mb-3 pb-3" style={{ letterspacing: "1px" }}>Create New account</h2>
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="form2Example17">First Name</label>
                                                        <input type='text' class="form-control form-control-lg" name='firstName' value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })} required="required" />
                                                        <span className='text-danger'>{this.state.firstNameError}</span>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" >Last Name</label>
                                                        <input type='text' class="form-control form-control-lg" name='lastName' value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })} />
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" >Username</label>
                                                        <input type='text' class="form-control form-control-lg" name='username' value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} required="required" />
                                                        <span className='text-danger'>{this.state.usernameError}</span>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" >Email</label>
                                                        <input type='email' class="form-control form-control-lg" name='email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} required="required" />
                                                        <span className='text-danger'>{this.state.emailError}</span>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" >Password</label>
                                                        <input type='password' class='form-control' name='password' value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} required="required" />
                                                        <span className='text-danger'>{this.state.passwordError}</span>
                                                    </div>
                                                    <div class="pt-1 mb-4">
                                                   <a className="nav-link btn btn-primary" onClick={this.saveForm} href="/login">Create Account</a>
                                                    </div>

                                                    <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Already have an account? <a href="/login"
                                                        style={{ color: "#393f81" }}>Login here</a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
