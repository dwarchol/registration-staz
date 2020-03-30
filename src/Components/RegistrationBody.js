import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Input = styled.input.attrs(({
    size: "1em",
}))`
    color: purple;
    font-size: 1em;
    border: 2px solid burgundy;
    border-radius: 2px;
    margin-left: 4em;
    margin-top: 1em;
    margin-bottom: 1em;
    display: inline;
    height: 2em;
`
const InputHaslo = styled.input.attrs(({
    type: "password",
    size: "1em",
}))`
    color: purple;
    font-size: 1em;
    border: 2px solid burgundy;
    border-radius: 2px;
    margin-left: 4em;
    margin-top: 1em;
    margin-bottom: 1em;
    display: inline;
    height: 2em;
`

const Text = styled.h1`
    display: inline;
    margin-left: 10em;
    font-size: 1.5em;
    margin-top: 3em;

`
const Td = styled.td`
    text-align: right;

`
const Table = styled.table`
    margin-top: 3em;
`
const Tr = styled.tr`
border: 1px solid black;
`
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

class RegistrationBody extends React.Component{
    
    render(){
        const props = this.props;
        return(
            <div>
                <Table>
                    <tbody>
                        <Tr>
                            <Td>
                                <Text>IMIĘ:</Text>
                            </Td>
                            <Td>
                                <Input></Input> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>NAZWISKO:</Text>
                            </Td>
                            <Td>
                                <Input></Input> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>LOGIN:</Text>
                            </Td>
                            <Td>
                                <Input></Input> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>HASŁO:</Text>
                            </Td>
                            <Td>
                                <InputHaslo></InputHaslo> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>POWTÓRZ HASŁO:</Text>
                            </Td>
                            <Td>
                                <InputHaslo></InputHaslo> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            </Td>
                            <Td>
                                <Button>Zarejestruj</Button>
                            </Td>
                        </Tr>
                    </tbody>
                
                </Table>

            </div>
            
            
        )
    }
}
export default RegistrationBody;