import axios from "axios";

const base_url="http://localhost:8089";

class CommentService{
           saveComment(comment){
            return axios.post(`${base_url}/add`,comment);
           }
           getAllComments(){
            return axios.get(`${base_url}/comments`);
           }
           deleteComment(commentid){
            return axios.delete(`${base_url}/comment/delete/${commentid}`,commentid)
           }  
           updateComment(commentid,comment){
            return axios.put(`${base_url}/comment/update/${commentid}`,comment)
           }
           checkUser(user){
            return axios.post(`${base_url}/isUserPresent`,user);
           }
           getUser(email){
            return axios.get(`${base_url}/user/userEmail/${email}`,email);
           }
           getCommentByImageId(imageId){
            return axios.get(`${base_url}/image/${imageId}/comments`,imageId);
           }
           addCommentByImageId(imageId,userId,comment){           
            return axios.post(`${base_url}/image/${imageId}/addComment/${userId}`,comment);
           }          
           saveLike(imageId,userId){           
            return axios.post(`${base_url}/image/${imageId}/user/${userId}/like`);
           }
           check(imageId,userId){           
            return axios.post(`${base_url}/image/${imageId}/user/${userId}/check`);
           }
           getNumberOfLikes(imageId){           
            return axios.get(`${base_url}/image/${imageId}/getNoOfLikes`);
           }
           deleteLike(imageId,userId){
            return axios.delete(`${base_url}/image/${imageId}/user/${userId}/delete`);
           }
}
export default new CommentService();