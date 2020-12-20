import React ,{useState} from 'react'
import Navbar from '../Navbar/index';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './HeroElements';
import SideBar from '../SideBar/index'
const Hero = () => {
    const [isOpen,setIsOpen]= useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return (
    <HeroContainer>
        <Navbar toggle={ toggle}/>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <HeroContent >
            <HeroItems>
                <HeroH1>Greatest Pizzas Ever</HeroH1>
                <HeroP>Ready in just 10min </HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
    )
}

export default Hero;