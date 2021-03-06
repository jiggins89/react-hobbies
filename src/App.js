// Library imports
import React from "react";
// Component imports
import InputFields from "./components/InputFields";
import UserList from "./components/UserList";
import Divider from "./components/Divider";

class App extends React.Component {
  state = { people: [] };

  addUser = user => {
    this.setState({ people: [...this.state.people, user] });
  };

  render() {
    return (
      <div className="ui container">
        <h3>Enter your deets:</h3>
        <InputFields addUserFn={this.addUser} />
        <Divider description="See our people below" />
        <UserList people={this.state.people} />
      </div>
    );
  }
}

export default App;
