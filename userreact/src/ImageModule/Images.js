import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ImageService from '../ImageModule/ImageService'

export default function Images() {
    const [images, setImages] = useState([])

    useEffect( () => {
        getAllImages()
    },[])

    const getAllImages = () =>{
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
          console.log(error)
        })
        window.location.reload();
    }

  return (
    <div className='container'>
        <h2>Images</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <th>Image Id</th>
                <th>Image Name</th>
                <th>Image </th>
                <th>Image Tag</th>
                <th>Actions</th>
            </thead>
            <tbody>
              { 
                images.map(
                  image => 
                  <tr key = {image.imageId}>
                    <td>{image.imageId}</td>
                    <td>{image.imageName}</td>
                    <td><img src={image.imageUrl} alt={"image"} 
                    height="75px" width="75px"></img></td>
                    <td>{image.imageTag}</td>
                    <td>
                      <button className='btn btn-danger' 
                      onClick={ () => deleteImage(image.imageId)}
                      style={{marginLeft:"10px"}}>Delete</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
        </table>
    </div>
  )
}
