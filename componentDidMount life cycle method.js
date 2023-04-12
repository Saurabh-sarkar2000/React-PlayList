import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() 
  {
    super();
    this.state={
      name:"Saurabh"
    }

    // console.warn("constructor")
  }
  componentDidMount()
  {
    console.warn("  componentDidMount")
  }
  render() 
  {

    console.warn("Render")
    // this.setState({name:"sarkar"})
    return (
      <div className="App">
        <h1>Component Did Mount</h1>
        <button onClick={()=>{this.setState({name:"sarkar"})}}>Update name</button>
      </div>
    );
  }
}
export default App;
