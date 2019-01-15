import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {students} from './Students'

class App extends Component {
  constructor(){
    super();

    this.state = {
      objArr: students,
      index: 0,
      totalStudents: 14
    }
  }
  nextHandler = () => {
    this.setState({index: this.state.index +1})

  }
  previousHandler = () => {
    this.setState({index: this.state.index -1})

  }
  deleteHandler = () => {
    let newArr = [...this.state.objArr];
    newArr.splice([this.state.index],1)
    let minusStudent = this.state.totalStudents -1
    this.setState({totalStudents: minusStudent})
    this.setState({objArr: newArr})

  }
  
  render() {
    console.log(this.state.objArr[0])
    return (
      <div className="App">
        
        <header>
          <nav>
            <a className="home" href="#">Home</a>
            <a className="dir" href="#">DevMountain Directory</a>
          </nav>
        </header>
          <main>
            <div className='container'>
                
                <div className='box'>
                  <p className='ind'>{this.state.index +1} of {this.state.totalStudents}</p>
                  <p className='name'>{this.state.objArr[this.state.index].name}<br /></p>
                  <div className='minimargin'>
                  <p className='p'><b>From:</b>  {this.state.objArr[this.state.index].from}<br /></p>
                  <p className='p'><b>Fun Fact:</b>  {this.state.objArr[this.state.index].funFact}<br /></p>
                  </div>
                  
                  <p className='p'><b>Would you rather...</b></p> 
                   <div class='indent'>               
                  <p className='p'><b>...live in the city or country?</b>   {this.state.objArr[this.state.index].cityOrCountry}<br /></p>
                  <p className='p'><b>...be indoors or outdoors?</b>   {this.state.objArr[this.state.index].indoorsOrOutdoors}<br /></p>
                  <p className='p'><b>...travel every day or never leave home?</b>   {this.state.objArr[this.state.index].travel}<br /></p>
                  <p className='p'><b>...eat at Tops or Subway?</b>   {this.state.objArr[this.state.index].topsOrSubway}<br /></p>
                  <p className='p'><b>...have a dog or cat?</b>   {this.state.objArr[this.state.index].dogOrCat}<br /></p>
                  </div> 
                </div>
                <div className='buttons'>
                <button 
              onClick={this.previousHandler}
              src={this.state.objArr[this.state.index]}
              className='left'
              >&lt;Previous</button>
              <button
              onClick={this.deleteHandler}
              src={this.state.objArr[this.state.index]}
              className='delete'
              >Delete</button>
              <button
              onClick={this.nextHandler}
              src={this.state.objArr[this.state.index]}
              className='right'
              >Next&gt;
              </button> 
              
            </div>
            </div>
          
              
           </main>

        
      </div>
    );
  }
}

export default App;
