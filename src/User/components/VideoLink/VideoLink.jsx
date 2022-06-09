import React from 'react';
import './VideoLink.css';
import VideoIcon from "../../../images/Polygon Play.svg"
const VideoLink = () => {
    return (
        <div className='VideoLink'>
            <a href="#"><img src={VideoIcon} alt="videoIcon" />Videoni ko’rish</a>
        </div>
    );
}

export default VideoLink;
