import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import UserItem from './UserItem';

const Table = styled.table`
    margin-top: 3em;
`
const Tr = styled.tr`
    border: 1px solid black;
`

class UsersList extends React.Component {
//     userToUserItem = user => {
//     const id = user.id;
//     const firstName = user.firstName;
//     const lastName = user.lastName;
//     return <UserItem id={id} firstName={firstName} lastName={lastName} />;
//   };

  render() {
      const users = this.props.users;
      const listUsers = (
    <Table>
        <tbody>
        {users.map((user) =>
            <Tr key={user.id} >
                <td>
                    <table>
                        <tbody>
                        <UserItem id={user.id} firstName={user.firstname} lastName={user.lastname} />
                        </tbody>
                    </table>
                </td>
                
            
            </Tr>
        )}
      </tbody>
    </Table>
      );
      
      
      
      
    //   users.map((userToUserItem) =>
    //   <UserItem key={userToUserItem.id} id={userToUserItem.id} firstName={userToUserItem.firstName} lastName={userToUserItem.lastName}/>
    //   );
    return (
      <ul className="ui relaxed divided list selection">
       {listUsers}
      </ul>
    )
  }
}
export default UsersList;