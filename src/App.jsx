import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const Container = styled.div`
  display:flex;
  `;

const App = () => {
    return (
        <Container>
            <Sidebar/>
            <Home/>
        </Container>
    )
}

export default App;
