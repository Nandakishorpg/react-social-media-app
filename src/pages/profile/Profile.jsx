import React from 'react';
import Newpost from '../../components/newpost/Newpost';
import Sidebar from '../../components/sidebar/Sidebar';
import Status from '../../components/status/Status';
import Topbar from '../../components/topbar/Topbar';
import './profile.css'

export default function Profile() {
    return (
        <div className='profileMain'>

            <Topbar />
            <Sidebar />
            <div className="container-fluid">



                <div className="profile">
                    <img className='profileBg' src="asset/profilebg.jpg" alt="" />

                    <div className="imgdiv">
                        <img className='profileRound' src="asset/new.png" alt="" />
                    </div>
                </div>
                <div className='kk'>
                    <span className="userInfo">John</span>
                </div>
                <div className="userinfoText">


                    <span className="userinfoTextSpan"><b>User Information</b><br />City : Newyork <br />From : Barcelona <br />Relationship : Single
                        <br /><b>User Friends</b></span>



                </div>
                <div className="profileGrid">
                    <div className="grid-container">
                        
                        <div className="item"><img className='userFriendsIMg' src="asset/profiles.jpg" alt="" /><br />Lautharo</div>
                        <div className="item"><img className='userFriendsIMg' src="asset/profiles.jpg" alt="" /><br />Lautharo</div>
                        <div className="item"><img className='userFriendsIMg' src="asset/profiles.jpg" alt="" /><br />Lautharo</div>
                        <div className="item"><img className='userFriendsIMg' src="asset/profiles.jpg" alt="" /><br />Lautharo</div>
                        <div className="item"><img className='userFriendsIMg' src="asset/profiles.jpg" alt="" /><br />Lautharo</div>
                        <div className="item"><img className='userFriendsIMg' src="asset/profiles.jpg" alt="" /><br />Lautharo</div>
                    </div>
                </div>



                <div className="profileCompStatus"><Status /></div>

                <div className='profileCompNewPost'><Newpost />
                </div>
                {/* <Newpost/> */}
                
            </div>

        </div>







    )
}
