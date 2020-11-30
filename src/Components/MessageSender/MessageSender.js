import React, {useState} from 'react';
import './MessageSender.scss';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase'

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [{user}, dipatch] = useStateValue();
    const handleSubmit = e =>{
        e.preventDefault()
        db.collection('posts').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL
        })
        setInput('')
        setImageURL('')
    }
    return (
        <div className="message__sender">
            <div className="message__sender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder={`What's on your mind, ${user.displayName}?`} className="message__sender__input" />
                    <input type="text" value={imageURL} onChange={(e)=> setImageURL(e.target.value)} placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="message__sender__bottom">
                <div className="message__sender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h4>Live video</h4>
                </div>
                <div className="message__sender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="message__sender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
