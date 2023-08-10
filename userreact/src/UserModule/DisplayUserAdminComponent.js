import React, { Component } from 'react'
import UserApiService from './UserApiService'
import { toast } from 'react-toastify'
export default class DisplayUserAdminComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [] 
    }
  }
  deleteUser(id) {
    UserApiService.deleteUser(id).then(res => {
      this.setState({ user: this.user.filter(user => user.userId !== id) });
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
  componentDidMount() {
    UserApiService.getAllUsers().then((res) => {
      this.setState({ user: res.data })
    })
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">PhotoFrame</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="/viewing">View Images </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/user">View Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </nav>

        <h1>User Management</h1>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.user.map(
                user =>
                  <tr>
                    <td>{user.userId}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button style={{ marginLeft: "10px" }} 
                      onClick={() => this.deleteUser(user.userId)} 
                      className="btn btn-danger"
                      >Delete </button>
                    </td>


                  </tr>
              )
            }

          </tbody>
        </table>

      </div>
    )
  }}
