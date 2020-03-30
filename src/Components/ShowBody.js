import React from 'react';
import UsersList from './UsersList'
import styled from 'styled-components';

const Text = styled.h1`
    display: inline;
    margin-left: 6em;
    font-size: 2em;
    weight: 20px;
`
class ShowBody extends React.Component{
    state = {
        users: []
      };
    
      componentDidMount() {
        fetch("https://fast-atoll-84608.herokuapp.com/showRegistered")
        .then(responce => responce.json())
        .then(jsondata => this.setState({ users: jsondata.rows }));
      }


    render(){
        return(
            <div>
            <Text>Lista zarejestrowanych użytkowników:</Text>
            <UsersList users={this.state.users}></UsersList>
            </div>
            
        )
    }
}
export default ShowBody;