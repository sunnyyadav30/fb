import React from 'react'
import './StoryReel.scss'
import Story from '../Story/Story'

function StoryReel() {
    return (
        <div className="story__reel">
            <Story image={require('../../assets/images/story/story_img_1.jpg')} profileSrc={require('../../assets/images/profile/profile1.jpg')} title="Robert"/>
            <Story image={require('../../assets/images/story/story_img_2.jpg')} profileSrc={require('../../assets/images/profile/profile2.jpg')} title="Sansa" />
            <Story image={require('../../assets/images/story/story_img_3.jpg')} profileSrc={require('../../assets/images/profile/profile3.jpg')} title="Arya" />
            <Story image={require('../../assets/images/story/story_img_4.jpg')} profileSrc={require('../../assets/images/profile/profile4.jpg')} title="Robb" />
            <Story image={require('../../assets/images/story/story_img_5.jpg')} profileSrc={require('../../assets/images/profile/profile5.jpg')} title="Lyna" />
            <Story image={require('../../assets/images/story/story_img_6.jpg')} profileSrc={require('../../assets/images/profile/profile6.jpg')} title="Chris" />
        </div>
    )
}

export default StoryReel