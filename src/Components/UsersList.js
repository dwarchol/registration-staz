import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';

const Table = styled.table`
    margin-top: 3em;
`
const Tr = styled.tr`
    border: 1px solid black;
`

class UsersList extends React.Component {

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

    return (
      <ul className="ui relaxed divided list selection">
       {listUsers}
      </ul>
    )
  }
}
export default UsersList;