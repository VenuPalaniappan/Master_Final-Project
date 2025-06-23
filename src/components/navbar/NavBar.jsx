import './navbar.scss'
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Link, Links } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';




const NavBar = () => {
  const {currentUser} =useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration:"none"}} >
        <span>
          JustClickLa
        </span>
        </Link>
        <AddHomeOutlinedIcon/>
        <BedtimeOutlinedIcon/>
        <AppsOutlinedIcon/>
        <div className='search'>
          <SearchOutlinedIcon/>
          <input type='text' placeholder="Search"/>
      </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon/>
        <MessageOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className='user'>
          <img src={currentUser.profilePic}
          alt=""
          />
          <span>{currentUser.name}</span>
           
        </div>
       

      </div>
    </div>
  )
}

export default NavBar