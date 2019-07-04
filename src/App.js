// Library imports
import React from "react";
// Component imports
import InputFields from "./components/InputFields";

class App extends React.Component {
  state = { people: [] };

  addPerson = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Enter your deets:</h1>
        <InputFields addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
