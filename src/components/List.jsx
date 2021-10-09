import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const Container = styled.div`
    display:flex;
    width:100%;
    padding:20px;
    justify-content: space-between;
`;

const List = () => {
    return (
        <Container>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </Container>
    )
}

export default List
