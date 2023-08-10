import axios from 'axios'

const GetAllImage_API = "http://localhost:8089/images"
const AddImage_API = "http://localhost:8089/image/add"
const GetImageById_API = "http://localhost:8089/image"
const UpdateImage_API = "http://localhost:8089/image/update"
const DeleteImage_API = "http://localhost:8089/image/delete"

class ImageService{

    getAllImages(){
        return axios.get(GetAllImage_API);
    }

    createImage(userId,image){
        return axios.post(`http://localhost:8089/image/add/${userId}`,image)
    }

    getImageById(imageId){
        return axios.get(GetImageById_API+'/'+imageId)
    }

    updateImage(image,imageId){
        return axios.put(`http://localhost:8089/image/update/${imageId}`,image)
    }

    deleteImage(imageId){
        return axios.delete(`http://localhost:8089/image/delete/${imageId}`)
    }
}

export default new ImageService();