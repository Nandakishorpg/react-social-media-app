import React from 'react';
import './topbar.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchIcon from '@mui/icons-material/Search';
import profiles from './profiles.jpg';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Link } from 'react-router-dom';


export default function Topbar() {
    return (
        <div className='topbar'>
            <nav class="navbar navbar-expand-lg navbar-dark bg" id='topbarNavBar'>

                <span class="navbar-brand">Mai_Tweet</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>

                </button>
                <form class="form-inline my-2 my-lg-0" >
                    <input class="form-control mr-sm-2" id='topbarSearch' type="search" placeholder="     Search for friends,photos or video" aria-label="Search" />
                    <button class="btn btn-default my-2 my-sm-0" type="submit" id='topbarSearchIcon'><SearchIcon /></button>


                </form>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                         <Link className='navLinkProfile' to='Profile'>Profile</Link>
                         
                        <Link className='navLinkHome' to='/'>Home</Link>
                        <Link className='navLinkReg' to='/Register'>Register</Link>
                        <div className='topBarUserIcon'><PersonRoundedIcon /></div>
                        <div className="topbarMessageIcon"><MessageRoundedIcon /></div>
                        <div className="topbarAlarmIcon"><NotificationsRoundedIcon /></div>





                    </div>
                    <div className="navbarProfile">
                        <img src={profiles} alt="..." className='ProfileImage' />
                    </div>
                </div>

            </nav>

        </div>

    )
}
