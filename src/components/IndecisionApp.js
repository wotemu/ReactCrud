import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';



class IndecisionApp extends Component{
  state = {
    options: [],
    selectedOption:undefined
  }

  
//handleDeleteOptions
handleDeleteOptions = () =>{
  this.setState(()=>( { options:[]  }))
}

handleClearSelectedOption = () =>{
  this.setState(()=>( { selectedOption:undefined }))
}

handleDeleteOption = (optionToRemove) =>{
  this.setState((prevState) =>({
    options:prevState.options.filter((option)=>{
      return optionToRemove !== option;
    })
  }));
}

handlePick = () =>{
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];    
      this.setState(() => ({
        selectedOption:option
      }))
}

handleAddOption = (option) =>{
  if(!option){
    return 'Enter valid value to add item';
  }else if(this.state.options.indexOf(option) > -1) {
    return 'This option already exists';
  } 

  this.setState((prevState)=>( {
      options:prevState.options.concat(option)
    } ))
}

    //Life cycle  
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(()=>({options}));
    }   
    } catch (e){
      //do nothing
    }    
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
      
    }
  }

  componentWillUnmount(){
    console.log('ComponentwillUnmount');
  }



  render(){  
    const subtitle = 'Put your life in the hands of a computer';

    return (

      <div className="container">
        <div>
          <Header subtitle={subtitle}/>
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />       

            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
        </div>
         
    </div>
      
    )
  }
}

export default IndecisionApp;
