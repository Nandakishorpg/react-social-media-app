import React from 'react'
import './friends.css'




export default function Friends() {
    return (
        <div>
            <div className="friends">
                <ul className='friendList'>

                    <div className="friendListItem">
                        <li><img className='FriendImage' src='asset/profiles.jpg' alt="..." />
                            <span className='friendListItemText'>friend1</span>
                        </li>
                    </div>
                    <div className="friendListItem">
                        <li ><img className='FriendImage' src='asset/profiles.jpg' alt="..." />
                            <span className='friendListItemText'>friend2</span>
                        </li>
                    </div>
                    <div className="friendListItem">
                        <li ><img src="" alt="..." />
                            <span className='friendListItemText'>friend3</span>
                        </li>
                    </div>
                    <div className="friendListItem">
                        <li ><img src="" alt="..." />
                            <span className='friendListItemText'>friend4</span>
                        </li>
                    </div>
                    <div className="friendListItem">
                        <li><img src="" alt="..." />
                            <span className='friendListItemText'>friend4</span>
                        </li>
                    </div>
                    <div className="friendListItem">
                        <li ><img src="" alt="..." />
                            <span className='friendListItemText'>friend5</span>
                        </li>
                    </div>
                    <div className="friendListItem">
                        <li ><img src="" alt="..." />
                            <span className='friendListItemText'>friend6</span>
                        </li>
                    </div>






                </ul>
            </div>
        </div>
    )
}
