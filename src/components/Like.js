import React, {useState} from "react";

export default function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello React!</h1>
      <input type="button" value="Function On/off" onClick={() => setFuncShow(!funcShow)}></input>
      <input type="button" value="Class On/off" onClick={() => setClassShow(!classShow)}></input>    
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

function FuncComp({initNumber}) {
  const [number, setNumber] = useState(initNumber);
  const [_date, setDate] = useState((new Date()).toString());  
  
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="random" onClick={() => setNumber(Math.random())}></input>
      <input type="button" value="date" onClick={() => setDate((new Date()).toString())}></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  };
  handleRandom = () => {
    this.setState({number: Math.random()});
  }

  handleDate = () => {
    this.setState({date: (new Date()).toString()});
  }

  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={this.handleRandom}></input>
        <input type="button" value="date" onClick={this.handleDate}></input>
      </div>
    );
  }
}