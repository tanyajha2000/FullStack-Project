import React, { useEffect, useState } from 'react'
import ImageService from '../ImageModule/ImageService'
import UserApiService from '../UserModule/UserApiService';
import '../Styles/commentCss.css';
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, EmailIcon } from "react-share";
import TotalLikes from '../CommentModule/TotalLikes';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Nav from './Nav';


function UserProfile() {
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        getuser();
    }, [])

    const getuser = async () => {
        const a = localStorage.getItem("user");
        UserApiService.getUserById(a).then((userdata) => {
            setCurrentUser(userdata.data)
        }).catch(error => {
            if (error.response.data.status === 500) {
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else {
                console.log(error)
                toast.warning(error.response.data)
            }
        })
    }
    const [images, setImages] = useState([])

    useEffect(() => {
        getAllImages()
    }, [])

    const deleteUser = (userId) => {
        UserApiService.deleteUser(userId).then((response) => {
            toast.info("deleted")
            navigate("/");
        }).catch(error => {
            if (error.response.data.status === 500) {
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else {
                console.log(error)
                toast.warning(error.response.data)
            }
        })
    }
    
    const getAllImages = () => {
        ImageService.getAllImages().then((response) => {
            setImages(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    const deleteImage = (imageId) => {
        ImageService.deleteImage(imageId).then((response) => {
            getAllImages()
        }).catch(error => {
            if (error.response.data.status === 500) {
                console.log(error.response.data.message)
                toast.warning(error.response.data.message)
            }
            else {
                console.log(error)
                toast.warning(error.response.data)
            }
        })
        window.location.reload();
    }

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">PhotoFrame</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="/home">Home Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/add-image">Post images</a>
                        </li>
                    </ul>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Nav user={currentUser} />
                    </li>
                </ul>
            </nav>
            <div class="container">
                <br />

                <h3>Images you have posted!</h3>
                <div class="row g-3 p-3">
                    {
                        images.map((image) => (
                            image.user.username === currentUser.username ? (
                                <div className='col-8 col-md-6 col-lg-4'>
                                    <div class="card" >
                                        <div class="card-body uname">@{image.user.username}
                                            <div className='fb'>
                                                <FacebookShareButton
                                                    url={image.imageUrl}
                                                    hashtag={image.imageTag}
                                                    className=" fb">
                                                    <FacebookIcon size={28} round />
                                                </FacebookShareButton>

                                                <EmailShareButton
                                                    url={image.imageUrl}
                                                    subject={image.imageTag}
                                                    className="email">
                                                    <EmailIcon size={28} round />
                                                </EmailShareButton>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <img class="card-img-top" src={image.imageUrl} alt="Card Image"
                                                height="200px" width="200px" />
                                            <h5 className='card-title'>{image.imageName}</h5>
                                            <h5 class="card-title">{image.imageTag}</h5>
                                            <div className="likeComment">
                                                <TotalLikes image={image} user={currentUser} />
                                                <Link to={`/view/image/${image.imageId}/comments`}>
                                                    <CommentOutlinedIcon
                                                        sx={{ fontSize: 25 }}
                                                        style={{ color: "#ed2f3c" }}
                                                        className="commentIcon"
                                                    />
                                                </Link>

                                                <div className="icon">
                                                    <Link to={`/update-image/${image.imageId}`}>
                                                        <EditIcon
                                                            sx={{ fontSize: 25 }}
                                                            style={{ color: "#637073" }}
                                                        />
                                                    </Link>
                                                    <DeleteIcon
                                                        sx={{ fontSize: 25 }}
                                                        style={{ color: "#637073" }}
                                                        onClick={() => deleteImage(image.imageId)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>) : null
                        ))
                    }

                </div>
            </div></div>
    )
}

export default UserProfile