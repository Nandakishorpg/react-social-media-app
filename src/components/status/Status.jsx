import React from 'react';
import './status.css';
import profiles from './profiles.jpg';
import { Label, PhotoLibraryRounded, LocationOn,EmojiEmotions} from '@mui/icons-material';



export default function Status() {
    return (
        <div className='status'>
            <div className="statusRow">

                <div className="row row-cols-1" id='koll'>
                    <div class="col"><img src={profiles} alt="..." className='statusProfileImage' /></div>
                    <div className='statusText' >
                    <input type="text" className='statusInputText'  
                    placeholder='whats in your mind wick?'/>
                    
                    </div>
                    <hr/>
                    
                    



                </div>



                <div className="row row-cols-1" id='coll'>
                    <div class="col">
                        <div className="PhotoLibraryRoundedIcon"><PhotoLibraryRounded /><span className='PhotoLibraryRoundedIconText'>Photo or video</span> </div>
                        <div className="tagIcon"><Label /> <span className='tagIconText'>tag</span></div>
                        <div className="locationIcon"><LocationOn /><span className='locationIconText'>Location</span></div>
                        <div className="feelingsIcon"><EmojiEmotions/><span className='feelingsIconText'>Feelings</span></div>
                        <div ><button className="statusShareButton"><span className='statusShareButtonText'>Share</span></button></div>


                    </div>
                </div>


            </div>
        </div>
    )
}
