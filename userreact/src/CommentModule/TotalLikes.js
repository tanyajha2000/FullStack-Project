import React, { useState, useEffect } from 'react';
import CommentService from './CommentService';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Styles/commentCss.css';

const TotalLikes = (props) => {
    const [like, setLike] = useState("")
    useEffect(() => {
        getLikesPerPost();
    }, [])
 
    const getLikesPerPost = async () => {
        const res = await CommentService.getNumberOfLikes(props.image.imageId)
        setLike(res.data)
    }
    return ( 
         <div  className="likeCount">
         <FavoriteIcon sx={{ fontSize: 25 }} style={{ color:"#ed2f3c" }}/>
          {like}
          </div>
           
    );
};

export default TotalLikes;

