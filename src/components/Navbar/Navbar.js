import React from 'react'
import { Link } from 'react-router-dom'
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './style.js'

const Navbar =()=> {
  return (
    <NavbarSection>
        <div className="container">
            
            <Logo>
                <LogoText>Cocktail</LogoText>
            </Logo>
  
            <UlList>
                <ListItem><Link to='/'>Home</Link></ListItem>
                <ListItem><Anchor to='/about'>About</Anchor></ListItem>
                <ListItem><Link to='/contact'>contact</Link></ListItem>
            </UlList>
        </div>
        
    </NavbarSection>
  )
}

export default Navbar