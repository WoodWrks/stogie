import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const List = styled.ul`
  display:inline-block;
  margin:var(--gutter-md) 0 0;
  padding:0;
  li{
    list-style: none;
    display: inline;
    padding-right:var(--gutter-sm);
    a{
      position: relative;
      display: inline-block;
      color:var(--text-secondary);
      padding-bottom:var(--gutter-xs);
      text-decoration:none;
      box-shadow: none;
      outline:none;
      svg{
        height:var(--font-lg);
        width:var(--font-lg);
        transform: scale(1);
        position: relative;
        color:var(--text-secondary);
      }
      &:hover, &:focus{
        svg{
          transition:all 250ms;
          transform: scale(1.1);
        }
        box-shadow: none;
      }
    }
  }
`

const SocialProfiles = () => {
    return (
      <List>
        <li><a className="social" href="https://www.instagram.com/gotschops/">
          <span className="sr-only">Gotschops profile on</span>
          <FontAwesomeIcon icon={faInstagram} size="2x" aria-hidden="true" title="Instagram" />
        </a></li>
      </List>
    );
  }

export default SocialProfiles;