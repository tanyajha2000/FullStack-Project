import axios from 'axios'
let url="http://localhost:8089";
class UserApiService{
    getAllUsers(){
        return axios.get(`${url}/users`);
    }
    getUserById(userId){
        return axios.get(`http://localhost:8089/user/${userId}`);
    }
    userProfile(userId){
        return axios.get(`http://localhost:8089/userprofile/${userId}`);
    }
    saveUser(user)
    {
        return axios.post(`${url}/saveUser`,user);
    }
    deleteUser(Id){
        return axios.delete(url + '/user/delete/' + Id);
    }  
    checkUser(user){
        return axios.post(`${url}/isUserPresent`,user);
       }
    getUser(email){
        return axios.get(`${url}/user/userEmail/${email}`,email);
       }
    updateUser(userId,user){
        return axios.put(`http://localhost:8089/user/update/${userId}`,user)
       }
}
export default new UserApiService()