import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const List = styled.ul`
  display:inline;
  margin:0;
  padding:0;
  height: ${ props => props.iconSize };
  li{
    list-style: none;
    display: inline;
    height: ${ props => props.iconSize };
    padding-right:var(--gutter-sm);
    a{
      position: relative;
      display: inline;
      color:var(--text-secondary);
      text-decoration:none;
      box-shadow: none;
      outline:none;
      svg{
        height: ${ props => props.iconSize };
        width: ${ props => props.iconSize };
        transform: scale(1);
        position: relative;
        color:var(--text-secondary);
      }
      &:hover, &:focus{
        svg{
          transition: all var(--durationSlow) var(--curveDecelerateMin);
          transform: scale(1.02);
        }
        box-shadow: none;
      }
    }
  }
`

const SocialProfiles = (props) => {
    return (
      <List {...props}>
        <li><a className="social" href="https://www.instagram.com/gotschops/">
          <span className="sr-only">Gotschops profile on</span>
          <FontAwesomeIcon icon={faInstagram} size="2x" aria-hidden="true" title="Instagram" />
        </a></li>
      </List>
    );
  }

export default SocialProfiles;