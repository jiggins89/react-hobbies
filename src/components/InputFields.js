import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "football", text: "Football", value: "football" },
  { key: "basketball", text: "Basketball", value: "basketball" },
  { key: "coding", text: "Coding", value: "coding" }
];

class InputFields extends React.Component {
  state = {
    firstName: "",
    surname: "",
    hobby: ""
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleChange = e => {
    console.log(e.target.innerText);
    if (e.target === document.getElementById("firstName")) {
      this.setState({ firstName: this.Capitalize(e.target.value) });
    } else if (e.target === document.getElementById("surname")) {
      this.setState({ surname: this.Capitalize(e.target.value) });
    } else {
      this.setState({ hobby: e.target.innerText });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addUserFn(this.state);
    this.setState({ firstName: "", surname: "", hobby: "Hobbies" });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui form">
        <form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label>First Name:</label>
            <input
              onChange={this.handleChange}
              value={this.state.firstName}
              type="text"
              placeholder="First Name"
              id="firstName"
            />
          </div>
          <div className="ui field">
            <label>Surname:</label>
            <input
              value={this.state.surname}
              onChange={this.handleChange}
              type="text"
              placeholder="Surname"
              id="surname"
            />
          </div>
          <div className="ui field">
            <label>Pick your favourite hobbies:</label>
            <Dropdown
              onChange={this.handleChange}
              placeholder="Hobbies"
              fluid
              selection
              options={options}
            />
          </div>
          <button className="ui button">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
