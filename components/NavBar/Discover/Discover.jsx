import React from 'react';
import Link from 'next/link';

// INTERNAL IMPORT
import Style from './Discover.module.css';
const Discover = () => {
  //DISCOVER NAVIGATIONMENU
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
  ]
  return (
    <div>Discover</div>
  )
}

export default Discover