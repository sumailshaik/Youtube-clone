import { IconButton } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    width: 100%;
    display:flex;
    align-items:center;
    background-color:white;
    border-bottom:1px solid #E0E0E0;
    position: sticky;
    top:60px;
    z-index:99;
    overflow: hidden
`;


const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding: 0px 30px;
    height:100%;
  `;

const ArrowBox = styled.div`
    position:absolute;
    z-index:1;
    left:${(props)=>!props.direction && '0px' };
    right:${(props)=>props.direction && '0px' };

`;

const Category = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    height: 30px;
    background-color:${(props)=>props.bg ? 'black': '#F0F0F0'};
    color: ${(props) => props.bg && 'white'};
    padding: 0px 10px;
    margin-right:10px;
    border:1px solid #E0E0E0;
    border-radius: 15px;
    white-space: nowrap;
    

`;

const Title = styled.div`
    font-size: 15px;
`;

const Categories = () => {

    const CatRef = useRef()
    
    const handleClick = (direction)=>{
 
        let distance = CatRef.current.getBoundingClientRect().x - 75;
        console.log(distance)

        if(direction==='left' && distance!==0 )
        {
            CatRef.current.style.transform = `translateX(${200+distance}px)`
            
        }else if (direction==='right' && distance > -600){
            CatRef.current.style.transform = `translateX(${-200+distance}px)`
        }

    }

    return (
        
        <Container>
            <ArrowBox id="left" >
                <IconButton><KeyboardArrowLeft fontSize="small" onClick={()=>{handleClick("left")}} /></IconButton>
            </ArrowBox>
            <ArrowBox direction="right">
                <IconButton><KeyboardArrowRight fontSize="small" onClick={()=>{handleClick("right")}} /></IconButton>
            </ArrowBox>
            
            <Wrapper ref={CatRef} >
                
                
                <Category bg="black"><Title >All</Title></Category>
                <Category><Title>Civil Services Exams</Title></Category>
                <Category><Title>Tamil Cinema</Title></Category>
                <Category><Title>Trailers</Title></Category>
                <Category><Title>JavaScript</Title></Category>
                <Category><Title>Computer Science</Title></Category>
                <Category><Title>Cricket</Title></Category>
                <Category><Title>Conversation</Title></Category>
                <Category><Title>Civil Services Exams</Title></Category>
                <Category><Title>Tamil Cinema</Title></Category>
                <Category><Title>Trailers</Title></Category>
                <Category><Title>JavaScript</Title></Category>
                <Category><Title>Computer Science</Title></Category>
                <Category><Title>Cricket</Title></Category>
                <Category><Title>Conversation</Title></Category>
                <Category><Title>Hero</Title></Category>
                
            </Wrapper>
            
        </Container>
    )
}

export default Categories
