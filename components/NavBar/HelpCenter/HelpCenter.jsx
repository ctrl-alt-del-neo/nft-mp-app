import React from 'react';
import Link from 'next/link';


//INTERNAL IMPORT
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
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
  ]
  return (
    <div className={Style.box}>
      {
        helpCenter.map((menu, index) =>(
          <div className={Style.helpCenter}>
            <Link href= {{pathname: `${menu.link}`}}>{menu.name}</Link>

          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter