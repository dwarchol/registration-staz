import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ButtonsLayer from './ButtonsLayer';



const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #ffffff;
`;

const Wraper = styled.section`
    padding: 1em;
    background: #002d6d;
`;

class AppHeader extends React.Component{
    render(){
        return(
            <div>
                <Wraper>
                    <Title>Witaj w aplikacji do rejestracji!</Title>
                </Wraper>
            </div>
        )
        
        
    }
}
export default AppHeader;