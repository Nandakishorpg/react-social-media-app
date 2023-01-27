import React, { useState } from 'react';
import './newpost.css';
import { MoreVert, ThumbUp, Favorite, } from '@mui/icons-material';
import { posts } from '../../user';
import {IconButton} from '@mui/material';




export default function Newpost({ post }) {

    const [likes, setLikes] = useState(post.like)
    const [isLiked, setIsLiked] = useState(true)
    const likehandler = () => {
        setLikes(isLiked ? likes-1 : likes+1)
        setIsLiked(!isLiked)

        // console.log("hi")
    }
    {
        const [love, setLoves] = useState(post.comment)
        const [isLove, setIsLoves] = useState(true)
        const lovehandler = () => {
            setLoves(isLove ? love-1 : love+1)
            setIsLoves(!isLove)
        }

    }

    return (
        <>

            <div className='newPost'>



                <div>
                    <div className="postProfile">
                        <img className='postProfilePic' src='asset/profiles.jpg' alt="" />
                        <span className="postProfileName">{post.name}</span>
                        <span className="postTime"><i>{post.date}</i> <MoreVert style={{ marginLeft: "350px" }} /> </span>

                    </div>
                    <div className="postImageText"><span>{post.desc}</span></div>




                    <div >

                        <img className="newPostImage" src={post.photo} alt="" />
                    </div>
                    <div className="newPostIcons">

                        <p><span>
                            <IconButton color="primary" onClick={likehandler} aria-label="delete">
                                <ThumbUp  />

                            </IconButton>
                             {likes} </span>
                             
                             <span className='likeIcon'><Favorite />{post.comment}</span></p>

                    </div>
                </div>












            </div>

        </>
    )
}
