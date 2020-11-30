import React, {useEffect, useState} from 'react'
import './Feed.scss'
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import db from '../../firebase'

function Feed() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        db.collection('posts').orderBy('timeStamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({id: doc.id,data: doc.data()})))
        })
    },[])
    return <div className="feed">
                <StoryReel />
                <MessageSender />
                {
                    posts.map((post)=>(
                        <Post 
                            key={post.id}
                            profilePic={post.data.profilePic}
                            image={post.data.image}
                            userName={post.data.userName}
                            timeStamp={post.data.timeStamp}
                            message={post.data.message}
                        />
                    )) 
                }
            </div>
}

export default Feed