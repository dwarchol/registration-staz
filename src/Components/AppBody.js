import React from 'react';
import HomeBody from './HomeBody';
import ShowBody from './ShowBody';
import RegistrationBody from './RegistrationBody';

class AppBody extends React.Component{
    
    render(){
        const props = this.props;
        console.log("xxxxxxxxxx");
        if(props.type == "home"){
            return(
                <HomeBody/>
            )
        }
        if(props.type == "show"){
            return(
                <ShowBody />
            )
        }if(props.type == "register"){
            return(
                <RegistrationBody/>
            )
        }
        else{
            return(
                <HomeBody/>
            )
        }
  
    }
}
export default AppBody;