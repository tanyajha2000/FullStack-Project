import React, { useEffect, useState } from 'react'
import ImageService from '../ImageModule/ImageService'
import {useNavigate} from 'react-router-dom'
import { Link, useParams} from 'react-router-dom'
import UserApiService from '../UserModule/UserApiService';
import { toast } from 'react-toastify'
export default function AddImage() {

    const[currentUser,setCurrentUser]=useState([])
  
    useEffect(() => {
      getuser();
  }, [])
  
  const getuser = async () => {
    const a =  localStorage.getItem("user");
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
    console.log(currentUser.userId)
  }
  

    const [imageName,setImageName] = useState('')
    const [imageTag,setImageTag] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const navigate = useNavigate()
    const {imageId} = useParams()

    const saveImage = (e) => {
        e.preventDefault();

        const image = {imageName,imageUrl,imageTag}

        if(imageId){
            ImageService.updateImage(image,imageId).then((response) => {
                console.log(response.data)
                navigate(-1)
            }).catch(error=>{
                if(error.response.data.status===500){
                    console.log(error.response.data.message)
                    toast.warning(error.response.data.message)
                }
                else{
                    console.log(error)
                    toast.warning(error.response.data)
            }})
            
        }else{
            ImageService.createImage(currentUser.userId,image).then((response) =>{
                console.log(response.data)
                navigate(-1)
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
    }

    useEffect( () => {
        ImageService.getImageById(imageId).then((response) => {
            setImageName(response.data.imageName)
            setImageUrl(response.data.imageUrl)
            setImageTag(response.data.imageTag)
        }).catch(error => {
            console.log(error)
        })
    },[])

    const title = () => {
        if(imageId){
            return <h2 className='text-center'>Update Image</h2>
        }else{
            return <h2 className='text-center'>Add Image</h2>
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    title()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Caption : </label>
                            <input type="text" placeholder='Enter Caption'
                            name="imageName" className='form-control'
                            value={imageName} onChange={ (e) => setImageName(e.target.value)}>
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Image Url : </label>
                            <input type="text" placeholder='Enter Image Url'
                            name="imageUrl" className='form-control'
                            value={imageUrl} onChange={ (e) => setImageUrl(e.target.value)}>
                            </input>
                        </div> 

                        <div className='form-group mb-2'>
                            <label className='form-label'>Image Tag : </label>
                            <input type="text" placeholder='Enter Image Tag'
                            name="imageTag" className='form-control'
                            value={imageTag} onChange={ (e) => setImageTag(e.target.value)}>
                            </input>
                        </div> 

                        <button className='btn btn-success' onClick= {(e)=> saveImage(e)}>Submit</button>
                        <Link to="/images" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
