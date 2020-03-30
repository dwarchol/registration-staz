import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'


const Text1 = styled.h1`
    margin-left: 10em;
    font-size: 2em;
    margin-top: 2em;
    color: purple;
`
const Text2 = styled.h2`
    margin-left: 10em;
    font-size: 1em;
    margin-top: 1em;
`
const Text3 = styled.h3`
    margin-left: 10em;
    font-size: 1em;
    margin-top: 1em;
`

class HomeBody extends React.Component{
    
    render(){
        const props = this.props;
        return(
            <div>
            <Text1>Miłego dnia :D</Text1>
            <Text2>Aplikacja stworzona w celu rekrutacji na staż.</Text2>
            <Text3>Wykonała: Dominika Warchoł</Text3>
            </div>
        )
    }
}
export default HomeBody;