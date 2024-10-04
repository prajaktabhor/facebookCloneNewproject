import React from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
function Share() {
  return (
   <div className="share">
    <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg'  src='src\assets\person\3.jpg' alt=''/>
            <input placeholder='Aj ka din mstt he'
            className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className='shareIcon'
                    htmlColor='tomato'/>
                    <span className="shareOptionText">
                        Photo And videos
                    </span>
                </div>
                <div className="shareOption">
                    <Label className='shareIcon'
                    htmlColor='Blue'/>
                    <span className="shareOptionText">
                        Tag
                    </span>
                </div>
                <div className="shareOption">
                    <Room className='shareIcon'
                    htmlColor='green'/>
                    <span className="shareOptionText">
                        Location
                    </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions className='shareIcon'
                    htmlColor='goldrod'/>
                    <span className="shareOptionText">
                        Feelings
                    </span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
    </div>
   </div>
  )
}

export default Share
