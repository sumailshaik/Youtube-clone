import { IconButton } from "@material-ui/core";
import { Explore, ExploreOutlined, History, Home, Menu, Subscriptions, SubscriptionsOutlined, VideoLibraryOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  min-width: 75px;
  height:100vh;
  position:fixed;
  left:0px;
  `;

const IconBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 75px;
    cursor: pointer;
    &:hover{
        background-color:${props => props.bg ? 'transparent' : '#F0F0F0'};
    }
    
`;

const Title = styled.p`
    font-size: 10px;
    font-weight:400;
    
`;

const Sidebar = () => {
    return (
        <Container>
            <IconBox bg="white">
                <IconButton aria-label="menu">
                    <Menu/>
                </IconButton>
            </IconBox>
            <IconBox>
                <Home/>
                <Title>Home</Title>
            </IconBox>
            <IconBox>
                <ExploreOutlined/>
                <Title>Explore</Title>
            </IconBox>
            <IconBox>
                <SubscriptionsOutlined/>
                <Title>Subscriptions</Title>
            </IconBox>
            <IconBox>
                <VideoLibraryOutlined/>
                <Title>Library</Title>
            </IconBox>
            <IconBox>
                <History/>
                <Title>History</Title>
            </IconBox>
        </Container>
    )
}

export default Sidebar
