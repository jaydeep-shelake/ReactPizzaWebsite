import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBarMenu,SideBarLink,SideBtnWrap, SideBarRoute} from './SideBarsElement'
const SideBar = ({ isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Icon>
           <CloseIcon/>   
         </Icon>
         <SideBarMenu>
          <SideBarLink to="/">Pizzas</SideBarLink>
          <SideBarLink to="/">Desersts</SideBarLink>
          <SideBarLink to="/">Full menu</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
            <SideBarRoute to="/">Order Now</SideBarRoute>
        </SideBtnWrap>  
        </SideBarContainer>
    )
}

export default SideBar;
