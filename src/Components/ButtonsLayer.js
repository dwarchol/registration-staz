import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';

const Wraper = styled.section`
    padding: 0.1em;
    background: #052555;
    text-align: center;
`;

const Button = styled.button`
background-color:#2dabf9;
color:#ffffff;
font-family:Arial;
font-size:15px;
border-radius:4px;
padding:9px 23px;
border:2px solid #1a2026;
cursor:pointer;
background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
margin-left:5px;
margin-right:5px;
`;

class ButtonsLayer extends React.Component{
    render(){
        const props = this.props;
        return(
            <Wraper>
                <Button onClick={() => props.buttonClick("home")} >Home</Button>
                <Button onClick={() => props.buttonClick("register")} >Zarejestruj</Button>
                <Button onClick={() => props.buttonClick("show")}>Wyswietl zarejestrowanych</Button>
            </Wraper>
            
        )
        
        
    }
}

function fun(){
        return(
            <App type = "body1"></App>
        )
    
}
export default ButtonsLayer;