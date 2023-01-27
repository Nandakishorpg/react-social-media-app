import React from 'react'
import '../sidebar/sidebar.css';
import { School, WorkOutline, Group, PlayCircleFilledOutlined, Chat, RssFeed, Bookmark,QuestionMark, Event } from '@mui/icons-material';
import Friends from '../friends/Friends';








export default function Sidebar() {
    return (
        <div className="sidebar1">
            <div className="sidebarWrapper">
                <ul className="sidebarList">


                    <li className="sidebarListItem">
                        <RssFeed />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>

                    <li className="sidebarListItem">

                        <Chat />
                        <span className='sidebarListItemText'>Chats</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined />
                        <span className='sidebarListItemText'>Videos</span>
                    </li>

                    <li className="sidebarListItem">
                        <Group />
                        <span className='sidebarListItemText'>Groups</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark />

                        <span className='sidebarListItemText'>Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">

                        <QuestionMark />


                        <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className="sidebarListItem">

                        <WorkOutline />


                        <span className='sidebarListItemText'>Jobs</span>
                    </li>
                    <li className="sidebarListItem">

                        <Event />


                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className="sidebarListItem">

                        <School />


                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                    <li><button type="button" class="btn btn-secondary">Show more</button></li>


                    <hr />
                    <div className="friendListScroll">
                        <Friends />
                    </div>
                </ul>
                

            </div>

            
        </div >



    )
}


