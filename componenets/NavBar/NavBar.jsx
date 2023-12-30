import React, {useState, useEffect}from 'react'
import {MdNotificatons} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';

//INTERNAL IMPORT
import Style from './NavBar.module.css';
import {Discover, HelpCenter, Notification, Profile, SideBar} from './index';
import {Button}from '../componentIndex';
import images from '../../img';

const NavBar = () => {
    // USESTATE COMPONENTS
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [Notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideBar, setSideBar] = useState(false);

  return (
    <div className={Style.navbar}>
        <div className={Style.navbar_container}>
            <div className={Style.navbar_container_left}>
              <div className={Style.logo}>
                <Image 
                  src={images.logo}
                  alt="NFT MARKET PLACE"
                  width={100}
                  height={100}
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar