import { useState } from 'react'
import styled from 'styled-components';
import { BiExpandHorizontal } from "react-icons/bi";

interface Props {
    bar: boolean;
}

export function Navbar() {
    const [bar, setBar] = useState(false);
    return (
    <Container bar={bar}>
        <Logo>
            <span className='green'><BiExpandHorizontal/></span>
        </Logo>
        <Nav bar={bar}>
            <span><a href="#home">INICIO</a></span>
            <span><a href="#service">SERVIÇOS</a></span>
            <span><a href="#footer">CONTATO</a></span>
        </Nav>
        <div
            onClick={() => setBar(!bar)}
            className="bars"
        >
            <div className="bar"></div>
        </div>
    </Container>
    )
}

const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#000"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }
                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }
                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #01be96;
    span{
        font-size: 2rem;
    }
    h1{
        font-weight: 600;
        font-size: 1.2rem;
        color: #000;
    }
`
const Nav = styled.div<Props>`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        a{
            text-decoration: none;
            position: relative;
            font-weight: 600;
            font-size: 0.9rem;
            color: #000;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`