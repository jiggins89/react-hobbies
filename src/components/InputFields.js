import React from "react";

class InputFields extends React.Component {
  state = {
    firstName: "",
    surname: ""
  };

  handleChange = e => {
    console.log(e.target);
    if (e.target === document.getElementById("firstName")) {
      this.setState({ firstName: e.target.value });
    } else {
      this.setState({ surname: e.target.value });
    }
  };

  handleSubmit = e => {
    console.log(e);
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui form">
        <form>
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
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
