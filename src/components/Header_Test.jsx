import { Avatar, Badge, IconButton } from "@material-ui/core";
import { AppsOutlined, Mic, NotificationsNoneOutlined, Search, VideoCallOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #E0E0E0;
    background-color:white;
    height: 60px;
    position: sticky;
    top:0px;
    z-index:99;
    width:1185px;
  `;


const Left = styled.div`
    position:relative;
    cursor: pointer;
`;

const Image = styled.img`
    height:60px;   
`;

const Lang = styled.span`
    position: absolute;
    font-size: 10px;
    color: gray;
    top: 14px;
    right: -9px;
`;

const Middle = styled.div`
    display:flex;
    align-items:center;
    // width:700px;
`;

const SearchBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    margin-right:10px;
`;

const Input = styled.input`
    border:1px solid #E0E0E0;
    font-weight:400;
    font-size:15px;
    padding: 10px;
    height:40px;
    flex:1;
`;
const Button = styled.button`
    border:none;
    background-color:#F8F8F8;
    cursor: pointer;
    width:100%;
    height:100%;
`;
const SearchIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #E0E0E0;
    background-color:#F8F8F8;
    height:40px;
    width:65px;
`;

const MicBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:40px;
    width:40px;
    border-radius:50%;
    background-color:#F8F8F8;

`;

const Right = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const IconBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:23px;
    cursor: pointer;
`;


const Header = () => {
    return (
        <Container>
           <Left>
               <Image src="https://seeklogo.com/images/Y/youtube-2017-logo-D4F7D77EB5-seeklogo.com.png"/>
               <Lang>IN</Lang>
           </Left>
           <Middle>
               <SearchBox>
                    <Input placeholder="Search"/>
                    <SearchIcon>
                    <Button><Search/></Button>
                    </SearchIcon>
               </SearchBox>
               
               <MicBox>
                   <IconButton style={{height:"40px",width:"40px"}}>
                       <Mic/>
                   </IconButton>
                </MicBox>
            </Middle>
           <Right>
               <IconBox><VideoCallOutlined/></IconBox>
               <IconBox><AppsOutlined/></IconBox>
               <IconBox>
                    <Badge badgeContent={9} color="primary">
                        <NotificationsNoneOutlined />
                    </Badge>
               </IconBox>
               <IconBox>
                   <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/yti/APfAmoGVYWNUsdgHc06m-gFlA_c40Vr0LgyVH1If4Ad9oQ=s88-c-k-c0x00ffffff-no-rj-mo" />
                </IconBox>
           </Right>
        </Container>
    )
}

export default Header
