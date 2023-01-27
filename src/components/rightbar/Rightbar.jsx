import React from 'react';
import './rightbar.css';
import Badge from '@mui/material/Badge';
import { user } from '../../user';

export default function Rightbar() {
  return (

    <div className='Rightbar'>

      <div ><img className='rightbarGiftIcon' src='asset/gift-box.png' alt="" />      <span className="birthdayText"><b> Arun</b> and<b> 3 other friends</b> Have A Birthday today</span>
      </div>
      <div className='containerPic' ><img className="rightbarPhoto" src="asset/rightbarPhoto.jpg" alt="" /></div>

      <div className="rightsidebarWrapper">
        <ul className="rightsidebarList">


          <li className="rightsidebarListItem">

            <span className='rightsidebarListItemText'><b>Online friends</b></span>

          </li>

          {user.map((online) => (
          <li className="rightsidebarListItem">

            <Badge overlap="circular" color="success" variant='dot' anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }} sx={{
              "& .MuiBadge-badge": {
                color: "#20dc1e",
                backgroundColor: "#20dc1e"
              }
            }}>
              <img className='onlinefriends' src={online.profilePicture} alt="" />

            </Badge>

            <span className='rightsidebarListItemText'>{online.name}</span>
          </li>
          ))}












        </ul>


      </div>




    </div>

  )
}
