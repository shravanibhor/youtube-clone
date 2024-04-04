import React from 'react';
import MenuIcon from "@mui/icons-material/Menu"; 
import SearchIcon from "@mui/icons-material/Search";
import VideocallIcon from "@mui/icons-material/VideoCall";
import AppIcon from "@mui/icons-material/Apps";

function header() {
  return (
    <div className="Header">
      <MenuIcon/>
      <img 
      className='header_logo'
      src="https://www.freeiconspng.com/uploads/youtube-logo-1.png"></img>
      <input type='text'></input>
      <SearchIcon/>
      <VideocallIcon/>
      <AppIcon/>
    </div>
  )
}

export default header
