import React from 'react';
import MenuIcon from "@mui/icons-material/Menu"; 
import SearchIcon from "@mui/icons-material/Search";
import VideocallIcon from "@mui/icons-material/VideoCall";
import "./Header.css";
import AppIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function header() {
  return (
    <div className="header">

      <div className='heade_left'>
      <MenuIcon/>
      <img 
      className='header_logo'
      src="https://www.freeiconspng.com/uploads/youtube-logo-1.png"></img>
      </div>

      <div className='header_input'>
      <input placeholder="Search" type='text'></input>
      <SearchIcon className='header_inputButton'/>
      </div>

      <div className='header_right'>
      <VideocallIcon/>
      <AppIcon/>
      <NotificationIcon/>
      <Avatar alt="Shravani" src="https://imagetolink.com/ib/JS4k23RFvx"/>
      </div>

    </div>
  )
}

export default header
