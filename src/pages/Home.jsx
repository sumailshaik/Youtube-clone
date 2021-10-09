import styled from "styled-components";
import Categories from "../components/Categories";
import Header from "../components/Header";
import List from "../components/List";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#F8F8F8;
  width: 1185px;
  position:relative;
  left:75px;
  `;

const Home = () => {
    return (
        <Container>
           <Header/>
           <Categories/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
           
        </Container>
    )
}

export default Home
