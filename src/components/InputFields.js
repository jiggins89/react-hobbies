import React from "react";

class InputFields extends React.Component {
  state = {
    firstName: "",
    surname: ""
  };

  handleChange = e => {
    if (e.target === document.getElementById("firstName")) {
      this.setState({ firstName: e.target.value });
    } else {
      this.setState({ surname: e.target.value });
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
