import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    display: inline;
    margin-left: 6em;
    font-size: 1em;
    margin-top: 3em;
    weight: 20px;
`
const Td = styled.td`
    text-align: left;
    width: 15em; 
    height: 3em;
`
const TdID = styled.td`
    text-align: right;
    width: 15em; 
    height: 3em;
`
const Tr = styled.tr`
`

  class UserItem extends React.Component {
      render() {
          const id = this.props.id;
          const firstName = this.props.firstName;
          const lastName = this.props.lastName;

        return (
            <Tr>
                <TdID>
                    <Text>{id}</Text>
                </TdID>
                <Td>
                    <Text>{firstName}</Text>
                </Td>
                <Td>
                    <Text>{lastName}</Text>
                </Td>
            </Tr>
        )
      }
    }
    export default UserItem;