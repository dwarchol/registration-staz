import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import UsersList from './UsersList'

class ShowBody extends React.Component{
    state = {
        users: []
      };
    
      componentDidMount() {
        fetch("https://fast-atoll-84608.herokuapp.com/showRegistered")
        .then(responce => responce.json())
        .then(jsondata => this.setState({ users: jsondata.rows }));
        //    console.log(jsondata.rows))
        // console.log(x);
        // console.log(x.result);

        //.then(res => this.setState({result: res}))  
        //.then(res => res.json())
          //.then(json => this.setState({ users: json.results }));
      }


    render(){
        return(
            <div>
            <UsersList users={this.state.users}></UsersList>
            </div>
            
        )
    }
}
export default ShowBody;