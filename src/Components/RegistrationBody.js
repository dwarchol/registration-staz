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
    state = {
    firstName: '',
    lastName: '',
    login: '',
    password:'',
    password2:'',
    info: ''
    };

    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }
    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handleChangeLogin = (event) => {
        this.setState({ login: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleChangePassword2 = (event) => {
        this.setState({ password2: event.target.value });
    }

    addUser(firstName, lastName, login, haslo){
        if(this.state.password==this.state.password2){
            
             console.log("ffffffffffff" + this.state.firstName);
            
             
            this.addUserToDb()
            .then(
                this.setState({ password2: "", password: "", login: "", firstName: "", lastName: "" })
            )

              
        }
        else{
            this.setState({info: 'Oba hasła muszą byc takie same'})
            this.setState({ password2: "", password: ""})
        }
        
        
    }
    async addUserToDb(){
        const data = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Login: this.state.login,
            Haslo: this.state.password
        }
        console.log(data);
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: 
                JSON.stringify(data)
        };
        console.log(options);
        //fetch("http://localhost:4000/registration", options)
        
         fetch("https://fast-atoll-84608.herokuapp.com/registration", options)
        .then(response => response.json())
        .then(json => console.log(json));
    }
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
                                <Input required value={this.state.firstName} onChange={this.handleChangeFirstName}></Input> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>NAZWISKO:</Text>
                            </Td>
                            <Td>
                                <Input value={this.state.lastName} onChange={this.handleChangeLastName}></Input> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>LOGIN:</Text>
                            </Td>
                            <Td>
                                <Input value={this.state.login} onChange={this.handleChangeLogin}></Input> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>HASŁO:</Text>
                            </Td>
                            <Td>
                                <InputHaslo value={this.state.password} onChange={this.handleChangePassword}></InputHaslo> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text>POWTÓRZ HASŁO:</Text>
                            </Td>
                            <Td>
                                <InputHaslo value={this.state.password2} onChange={this.handleChangePassword2}></InputHaslo> 
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            </Td>
                            <Td>
                                <Button onClick={this.addUser.bind(this)}>Zarejestruj</Button>
                            </Td>
                        </Tr>
                        <Td>
                            <h3>{this.state.info}</h3>
                        </Td>
                    </tbody>
                
                </Table>

            </div>
            
            
        )
    }
}
export default RegistrationBody;