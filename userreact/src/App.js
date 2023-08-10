import React from "react";
import { Routes, Route } from "react-router-dom";
import EditUser from "./UserModule/EditUser"
import Comment from "./CommentModule/Comment";
import UpdateComment from "./CommentModule/UpdateComment";
import Login from "./UserModule/Login"
import SignUp from "./UserModule/SignUp"
import DisplayUserAdminComponent from "./UserModule/DisplayUserAdminComponent";
import Home from "./ImageModule/Home"
import Images from "./ImageModule/Images"
import AddImage from "./ImageModule/AddImage"
import UserProfile from "./UserModule/UserProfile";
import ViewComment from "./CommentModule/ViewComment";

function App() {

  return (
    <div>
      <Routes>
      <Route exact path='/admin' element={<DisplayUserAdminComponent/>}></Route>
        <Route path="/Login" exact element={<Login />} />
        <Route path="/user/update/:userId" exact element={<EditUser/>} />
        <Route path="/userProfile" exact element={<UserProfile />} />
        <Route path="/updateComment" exact element={<UpdateComment />} />
        <Route exact path='/' element={<SignUp/>}></Route>
        <Route path="/viewing" element={<Images />}></Route>
        <Route path="/image/:imageId/comments" element={ <Comment />}></Route>
        <Route path="/image/comments" element={ <Comment />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/images" element={<Images />}></Route>
        <Route path="/add-image" element={<AddImage />}></Route>
        <Route path="/update-image/:imageId" element={<AddImage />}></Route>
        <Route path="/view/image/:imageId/comments" element={<ViewComment />}></Route>
        
      </Routes>
    </div>
  )

}
export default App;



