import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import { Link, useParams} from 'react-router-dom'
import UserApiService from './UserApiService'

export default function EditUser() {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const {userId} = useParams()

    const updateUser= (e) => {
        e.preventDefault();

        const user = {firstName,lastName,username,email,password}
            UserApiService.updateUser(userId,user).then((response) => {
                navigate('/userProfile')
            }).catch(error=>{
                if(error.response.data.status===500){
                  toast.warning(error.response.data.error + " Check Validations ")
                }
                else{
                    console.log(error)
                    toast.warning(error.response.data)
            }})
            
        } 

    useEffect( () => {
        UserApiService.getUserById(userId).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setUsername(response.data.username)
            setEmail(response.data.email)
            setPassword(response.data.password)
        }).catch(error => {
            console.log(error)
        })
    },[])

  return (
    <div>
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             
      <h2 className='text-center'>Update Your Details</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name : </label>
                            <input type="text" placeholder='Enter First Name'
                            name="imageName" className='form-control'
                            value={firstName} onChange={ (e) => setFirstName(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name: </label>
                            <input type="text" placeholder='Enter Last Name'
                            name="lastName" className='form-control'
                            value={lastName} onChange={ (e) => setLastName(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Username: </label>
                            <input type="text" placeholder='Enter Username'
                            name="username" className='form-control'
                            value={username} onChange={ (e) => setUsername(e.target.value)}>
                            </input>
                        </div> 
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email: </label>
                            <input type="text"
                            name="email" className='form-control'
                            value={email} readOnly > 
                            </input>
                            <p style={{color: "red"}}>Cannot change Email!</p>
                        </div> 
                        <div className='form-group mb-2'>
                            <label className='form-label'>Password: </label>
                            <input type="text" placeholder='Enter Pasword'
                            name="password" className='form-control'
                            value={password} onChange={ (e) => setPassword(e.target.value)}>
                            </input>
                        </div> 

                        <button className='btn btn-success' onClick= {(e)=> updateUser(e)}>Submit</button>
                        <Link to="/userProfile" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}