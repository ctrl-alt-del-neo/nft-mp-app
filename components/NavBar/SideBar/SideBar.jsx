import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {GrCkise, GrClose} from 'react-icons/gr';
import {
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram, 
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti';

//INTERNAL IMPORT
import Style from './SideBar.module.css';
import images from '../../../img';
import Button from '../../Button/Button';

const SideBar = ({setOpenSideMenu}) => {
  // USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false)
 
    const discover = [
      {
        name:"Collection",
        link:"collection"
      },
      {
        name:"Search",
        link:"search"
      },
      {
        name:"Author Profile",
        link:"author-profile"
      },
      {
        name:"NFT Details",
        link:"nft-details"
      },
      {
        name:"Account Setting",
        link:"account-setting"
      },
      {
        name:"Connect Wallet",
        link:"connect-wallet"
      },
      {
        name:"Blog",
        link:"blog"
      },
    ];

    const helpCenter = [
      {
        name:'About',
        link:'about'
      },
      {
        name:'Contact Us',
        link:'contact-us'
      },
      {
        name:'Sign Up',
        link:'sign-up'
      },
      {
        name:'Sign In',
        link:'sign-in'
      },
      {
        name:'Subscription',
        link:'subsctiption'
      },
    ];

    const openDiscoverMenu = () => {
        !openDiscover ? setOpenDiscover(true) : setOpenDiscover(false);
    }

    const openHelpMenu = () => {
      !openHelp ? setOpenHelp(true) : setOpenHelp(false);
    }

    const closeSideBar = () => {
      setOpenSideMenu(false);
    }

  return (
    <div className={Style.sideBar}>
      <GrClose 
        className={Style.sideBar_closeBtn} 
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt='logo' width={50} height={50}/>
        <p>Discover the most outstanding articles on all topics of NFT & your own stories and share them</p>
        <div className={Style.sideBar_social}>
            <a href='#'>
              <TiSocialFacebook />
            </a>
            <a href='#'>
              <TiSocialLinkedin />
            </a>
            <a href='#'>
              <TiSocialTwitter/>
            </a>
            <a href='#'>
              <TiSocialYoutube />
            </a>
            <a href='#'>
              <TiSocialInstagram />
            </a>          
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={()=> openDiscoverMenu()}
          >
              <p>Discover</p>
              <TiArrowSortedDown/>
          </div>
        {openDiscover && (
          <div className={Style.sideBar_discover}>
            {discover.map((item, index) => (
              <p key={index+1}>
                <Link href={{pathname:`${item.link}`}}>{item.name}</Link>
              </p>
            ))}
          </div>
        )}
        </div>
        <div>
          <div className={Style.sideBar_menu_box}
          onClick={()=> openHelpMenu}
          >
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((item, index) => (
                  <p key= {index+1}>
                    <Link href={{pathname: `${item.link}`}}>item.name</Link>
                  </p>
                ))}
                </div>
            ) }
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName="Create"/>
        <Button btnName="Connect Wallet"/>
      </div>
    </div>
  )
}

export default SideBar