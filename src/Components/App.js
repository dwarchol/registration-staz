import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import ButtonsLayer from './ButtonsLayer';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            body: null
        };
        this.selectBody = this.selectBody.bind(this);
    }

    selectBody = (bodySelected)=>{
        
        this.setState({
            body: bodySelected
        },() => console.log('Updated Parent State:', this.state.body));
    }

    render(){
        const props = this.props;
        const body = this.state.body;
        return(
            <div>
                <AppHeader ></AppHeader>
                <ButtonsLayer buttonClick={this.selectBody}/>
                <AppBody type = {body}></AppBody>
            </div>
        )
        
    }
    
}
export default App;