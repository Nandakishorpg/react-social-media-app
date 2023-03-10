
import './App.css';
import {
  BrowserRouter ,
  Routes ,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile'
import Newpost from './components/newpost/Newpost';
import Register from './pages/register/Register';


function App() {
    return (
      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
        </Routes>


      </BrowserRouter>



    );
  }

export default App;
