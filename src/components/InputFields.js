import React from "react";

class InputFields extends React.Component {
  state = {
    firstName: "",
    surname: "",
    hobby: ""
  };

  handleChange = e => {
    if (e.target === document.getElementById("firstName")) {
      this.setState({ firstName: e.target.value });
    } else if (e.target === document.getElementById("surname")) {
      this.setState({ surname: e.target.value });
    } else {
      this.setState({ hobby: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addUserFn(this.state);
  };

  render() {
    return (
      <div className="ui form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="First Name"
            id="firstName"
          />
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Surname"
            id="surname"
          />
          <select onChange={this.handleChange}>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Coding!">Coding!</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
