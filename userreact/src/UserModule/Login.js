import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserApiService from './UserApiService'
import { toast } from 'react-toastify'
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
    } 
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email address").required("email is required"),
        password: Yup.string().required("password required"),
    })
    const onSubmit=async (values)=>{
        const response= await UserApiService.checkUser(values).then((data)=>{
            if(data.data==="userFound"){
                UserApiService.getUser(values.email).then((userdata)=>{
                navigate("/home",{state:userdata.data}) 
                localStorage.setItem("user",userdata.data.userId)
                console.log(userdata.data)
              });    
             }else if(data.data==="adminFound"){
                navigate("/admin")
             }
        }).catch(error=>{
            if(error.response.data.status===500){
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else{
                console.log(error)
                toast.warning(error.response.data)
        }})

   }
    return ( 
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" style={{ borderradius: "1rem" }}>
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                                            alt="login form" class="img-fluid" style={{ borderradius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <Form>

                                                <h2 class="fw-normal mb-3 pb-3" style={{ letterspacing: "1px" }}>Login into your account</h2>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form2Example17">Email address</label>
                                                    <Field type='email' class="form-control form-control-lg" name='email' />
                                                    <ErrorMessage className='error' component="div" name='email'></ErrorMessage>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label">Password</label>
                                                    <Field type='password' name='password' class="form-control form-control-lg" />
                                                    <ErrorMessage className='error' component="div" name='password'></ErrorMessage>
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                </div>

                                                <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/"
                                                    style={{ color: "#393f81" }}>Register here</a></p>
                                            </Form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Formik>
    )
}
export default Login
