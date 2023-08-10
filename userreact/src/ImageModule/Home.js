import React, { useEffect, useState } from 'react'
import ImageService from './ImageService'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import UserApiService from '../UserModule/UserApiService';
import Like from '../CommentModule/Like';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import '../Styles/commentCss.css';
import { toast } from 'react-toastify'

export default function Home() {
  const [currentUser, setCurrentUser] = useState([])
  const[search,setSearch]=useState("")
  const navigate = useNavigate(); 

  useEffect(() => {
    getuser();
  }, [])


  const getuser = async () => {
    const a = localStorage.getItem("user");
    UserApiService.getUserById(a).then((userdata) => {
      setCurrentUser(userdata.data)
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
  const [images, setImages] = useState([])

  useEffect(() => {
    getAllImages()
  }, [])

  const getAllImages = () => {
    ImageService.getAllImages().then((response) => {
      setImages(response.data)
      console.log(response.data)
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand" >PhotoFrame</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/userProfile">View Your Profile</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/add-image">Post Image </a>
            </li>
          </ul>
        </div>
        <form class="form-inline my-2 my-lg-2 w-50">
      <input class="form-control mr-xl-2 col-lg-8" type="text" 
             placeholder="Search Images by name or hashtag" aria-label="Search" 
             onChange={(e) => {
            setSearch(e.target.value);
          }}
             />
    </form>
        <ul class="navbar-nav ml-auto">
        <li className="nav-item">
              <a className="nav-link" href="/login" >Logout</a>
            </li>
        </ul>
      </nav>
      <div className='container'>
        <p key={currentUser.userId}></p>
        <h3 className="welcome">Welcome {currentUser.firstName}😀</h3>
        <div className="row gy-3 my-3">
        {images.filter((image)=> {
                if (search === "") {
                  return image;
                } else if (image.imageName.toLowerCase().includes(search.toLowerCase()) 
                    || image.imageTag.toLowerCase().includes(search.toLowerCase())) {
                  return image;
                }
              })
          .map(image =>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card' key={image.imageId}>
                <div className="card-body">@{image.user.username}</div>
                <img src={image.imageUrl} alt="image" className='card-img-top'
                  height="200px" width="200px" />
                <div className='card-body'>
                  <h5 className='card-title'>{image.imageName}</h5>
                  <p className='card-text'> #{image.imageTag}</p>
                  <div className="likeComment">
                    <Like image={image} user={currentUser} />
                    <Link to={`/image/${image.imageId}/comments`}>
                      <CommentOutlinedIcon
                        sx={{ fontSize: 40 }}
                        style={{ color: "#ed2f3c" }}
                        className="commentIcon"
                      />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
