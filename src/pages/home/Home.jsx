import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Status from '../../components/status/Status';
import Newpost from '../../components/newpost/Newpost';
import Rightbar from '../../components/rightbar/Rightbar';
import {posts} from '../../user';
// import {user} from '../../user';





export default function Home() {
  return (
    <div className='text'>
       <Topbar/> 
       <div className="homecontainer">
         <Sidebar/>
         
         <Status/>
         <div className="h">
         {posts.map((m) => (
          <Newpost post={m} />
         ))}

         </div>
         
         <Rightbar/>
       </div>
     
       
       
       
       
       
         
    
    </div>
    

    

    
  )
}
