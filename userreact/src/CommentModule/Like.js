import React, { useState, useEffect } from 'react';
import CommentService from './CommentService';
import { toast } from 'react-toastify';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Styles/commentCss.css';

const Like = (props) => {
    const [like, setLike] = useState("")
    const [likeButton, setLikeButton] = useState(<FavoriteBorderOutlinedIcon sx={{ fontSize: 40 }} 
        style={{ color: "#ed2f3c" }}
    />)
    useEffect(() => {
        getLikesPerPost();
        check();
    }, [])

    const handleLike = () => {
        const res = CommentService.saveLike(props.image.imageId, props.user.userId).then((data) => {
            if (data.data == "Already Liked") {
                CommentService.deleteLike(props.image.imageId,props.user.userId).then((data)=>{
                    window.location.reload();
                })
            } else { 
                window.location.reload();
            }
        })
    }
    const check=()=>{
        const res = CommentService.check(props.image.imageId, props.user.userId).then((data) => {
            if(data.data == "Found") {
                setLikeButton(<FavoriteIcon sx={{ fontSize: 40 }} style={{ color: "#ed2f3c" }}/>)
            }
        })
    }

    const getLikesPerPost = async () => {
        const res = await CommentService.getNumberOfLikes(props.image.imageId)
        setLike(res.data)
    }
    return ( 
         <p onClick={handleLike} className="likeCount">{likeButton} {like}</p>
           
    );
};

export default Like;

