import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import { gsap } from "gsap";
import SocialProfiles from "../socialprofiles/socialprofiles";

import logoSVG from '../../assets/brand/woodworks.svg';

const HeaderStyled = styled.header`
    position:absolute;
    width:100%;
    padding: var(--gutter-md) var(--gutter-md) 0;
    display:flex;
    justify-content: space-around;
    align-items: stretch;
    z-index:1000;
`;
const LogoStyled = styled.div`
    flex-grow: 1;
    img{
        height:120px;
        filter: drop-shadow(0px 0px 25px rgba(0,0,0,0.8) );
    }
`;
const NavStyled = styled.nav`
    display:flex;
    flex-grow: 1;
    justify-content: right;
    color: ${( {theme} ) => theme.neutralForegroundInverted1};
    ul{
        display:inline;
        margin:0;
        padding:0;
        align-items: center;
        li{
          list-style: none;
          display: inline;
          padding-right:var(--gutter-sm);
          a{
            color: ${( {theme} ) => theme.neutralForegroundInverted1};
            text-transform:uppercase;
          }
        }
    }
`;

const Header = () => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.set(element.querySelector(".logo"),{
            opacity: 0.0,
        })
        gsap.set(element.querySelector("nav"),{
            opacity: 0.0,
        })
        gsap.to(element.querySelector(".logo"),{
            opacity: 1.0,
            delay: 0.2,
            duration: 1.5,
            ease: 'Circ.easeOut'
        })
        gsap.to(element.querySelector("nav"),{
            opacity: 1.0,
            delay: 0.2,
            duration: 1.5,
            ease: 'Circ.easeOut'
        })
    }, []);

    return (
        <HeaderStyled ref={ref} className="header">
            <LogoStyled className="logo">
                <img src={logoSVG} alt="" />
            </LogoStyled>
            <NavStyled>
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
                <SocialProfiles iconSize={'1.5rem'} />
            </NavStyled>

        </HeaderStyled>
    );
}
export default Header;
