import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:280px;
    display:flex;
    flex-direction:column;
    cursor:pointer;
`;

const Image = styled.img`
    height:157px;
    width:280px;
    object-fit: cover;
`;

const Caption = styled.div`
    margin-top:15px;
    display:flex;
`;

const Profile = styled.div`
    margin-right:12px;
`;

const Desc = styled.div``;

const Title = styled.h3`
    font-size:13px;
`;

const Channel = styled.p`
    margin-top:8px;
    font-size:13px;
    color:gray;
`;
const Bottom = styled.div`
    color:gray;
    font-size:13px;
    display:flex;
`;
const Views = styled.div`
    margin-right:10px;
`;
const Time = styled.div``;


const ListItem = () => {
    return (
        <Container>
            <Image src="https://i.ytimg.com/vi/orYf6VDtj_k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQNbuw0eScVD1_WIHadYNFQ-cu3A" alt="Shershan"/>
            <Caption>
                <Profile>
                    <Avatar alt="Sony Music" src="https://yt3.ggpht.com/ytc/AKedOLRSu0SoelpGmqyAj7H-l9AvN_a4GiV145VwyF4yqA=s68-c-k-c0x00ffffff-no-rj" />
                </Profile>
                <Desc>
                    <Title>Ranjha – Official Video | Shershaah | Sidharth–Kiara </Title>
                    <Channel>Sony Music India</Channel>
                    <Bottom>
                        <Views>3.8K views</Views>
                        <Time>3 days ago</Time>
                    </Bottom>
                </Desc>
            </Caption>
        </Container>
    )
}

export default ListItem
