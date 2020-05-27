import React, { Component } from 'react';
import './App.scss';
import ImgurUpload from './container/ImgurUpload';

class App extends Component {
  render(){
    return (
      <div className='app'>
        <ImgurUpload/>
      </div>
    );
  }

}
export default App;
