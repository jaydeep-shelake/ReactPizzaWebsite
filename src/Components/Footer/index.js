import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconsLnk} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconsLnk href="/" target="_blank" arial-label="Facebook" rel="noopner noreferrer">
                             <FaFacebook/>
                            </SocialIconsLnk>
                            <SocialIconsLnk href="/" target="_blank" arial-label="Instagram" rel="noopner noreferrer">
                             <FaInstagram/>
                            </SocialIconsLnk>
                            <SocialIconsLnk href="/" target="_blank" arial-label="Github" rel="noopner noreferrer">
                             <FaGithub/>
                            </SocialIconsLnk>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
