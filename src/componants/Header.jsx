import React from 'react'
import { IoLogoFacebook,IoLogoLinkedin,IoLogoTwitter,IoLogoInstagram } from "react-icons/io5";
const Header = () => {
  return (
    <div>
      <header>
        <img className='logo'></img>
       <nav>
            <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>  
            <li><a>Services</a></li>
            <li>Contact</li>
            </ul>
       </nav>
        <div>
            <div> ̰
                <ul>
                    <li><a>
                        <IoLogoFacebook/> ̰
                        </a></li>
                    <li>
                        <a>
                            
                            <IoLogoLinkedin/>
                            </a>
                            </li>
                    <li>
                        <a>
                            <IoLogoTwitter/>
                            </a>
                    
                        </li>
                    <li>
                    <a>
                        <IoLogoInstagram/>
                            </a>
                        </li>
                    
                </ul>
            </div>
        </div>
      </header>
    </div>
  )
}
export default Header
