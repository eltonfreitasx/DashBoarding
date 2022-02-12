import styled from 'styled-components'
import { colors } from '../../styles/themes';

//ICONS 

export const Header = styled.header`

    &{
        position: absolute;
        width: 100%;
    }
    
    nav{
        position: fixed;
        width: 300px;
        height: 100%;
        background: ${colors.blue};
        border-left: 10px solid ${colors.blue};
        transition: .5s;
        overflow: hidden;
    }

    nav ul{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    nav ul li {
        position: relative;
        width: 100%;
        list-style: none;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        cursor: pointer;
        transition: all .4s;
    }

    nav ul li:hover {
        background-color: ${colors.white};
    }

    nav ul li:nth-child(1){
        margin-bottom: 2.6rem;
        pointer-events: none;
    }

    nav ul li a {
        position: relative;
        display: block;
        width: 100%;
        text-decoration: none;
        display: flex;
        color: ${colors.white};
    }

    nav ul li:hover a {
        color: ${colors.blue};
    }

    nav ul li span {
       position: relative;
       display: block;
       min-width: 4.1rem;
       height: 4.1rem;
       line-height: 4.7rem;
        text-align: center;
    }

    nav ul li a span svg{
        font-size: 1.75rem;
    }

    nav ul li a span:nth-child(2){
        position: relative;
        display: block;
        padding: 0 10px;
        height: 4.1rem;
        line-height: 4.1rem;
        text-align: start;
        white-space: nowrap;
    }

    /*curve outside */

    nav ul li:hover a::before{
        content: '';
        position: absolute;
        right: 0;
        top: -4.1rem;
        width: 4.1rem;
        height: 4.1rem;
        background: transparent;
        border-radius: 44%;
        box-shadow: 35px 35px 0 10px ${colors.white};
    }

    nav ul li:hover a::after{
        content: '';
        position: absolute;
        right: 0;
        bottom: -4.1rem;
        width:4.1rem;
        height: 4.1rem;
        background: transparent;
        border-radius: 44%;
        box-shadow: 35px -35px 0 10px ${colors.white};
    }
`