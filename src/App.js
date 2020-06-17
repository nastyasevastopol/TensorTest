import React from 'react';
import {Header, Field} from './componentsLib.js';
// import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        needToClick: false
    }   
    // this.school = new School();
  }
    computerStep(event){
        this.setState({needToClick: true});
        event.stopPropagation();
    }
    computerStepEnd(event){
        this.setState({needToClick: false});
        event.stopPropagation();
    }
    render() {
// {/* <Battle />   */}
      return <div>
          <Header title='Морской бой' description='Сыграем?' />  
            <div id="container" className="container">
                <Field type='player' 
                    needClick = {this.state.needToClick ? true : false} 
                    computerStep = {this.computerStep.bind(this)}
                    computerStepEnd = {this.computerStepEnd.bind(this)}/> 
                <Field type='computer'/> 
            </div>  
          </div>;    
    }
}


export default App;
