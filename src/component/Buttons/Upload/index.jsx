import React from 'react';
import './upload.scss'

const Upload = ({iconUploadSource, iconArrowSource}) => {
        return (
        <div className="uploadButton" title = "Click to upload">
            <img src= {iconUploadSource} alt="upload" 
            className="uploadButton__icon__upload"/>
            
            <img src={iconArrowSource} alt="right" 
            className="uploadButton__icon__right"/>
        </div>
        );
    }

export default Upload;