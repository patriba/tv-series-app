import React, {Component} from 'react';
import './App.css';

//both are correct - same result
//function App() {
//or
//class App extends Component {
//  render() {

const Intro = (props) => (
  <p className="App-intro">
    Our first functional component
  </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro/>
      </div>
    );
  }
}

export default App;
