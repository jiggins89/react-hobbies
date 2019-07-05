import React from "react";
import { Dropdown } from "semantic-ui-react";

import InputField from "./InputField";

const dropdownOptions = [
  { key: "football", text: "Football", value: "football" },
  { key: "basketball", text: "Basketball", value: "basketball" },
  { key: "coding", text: "Coding", value: "coding" }
];

const formFields = [
  { id: "firstName", value: "First Name" },
  { id: "surname", value: "Surname" }
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

  handleChange = (userInput, id) => {
    console.log(id);
    formFields.forEach(field => {
      if (id === field.id) {
        this.setState({ [field.id]: this.Capitalize(userInput) });
      }
    });
  };

  handleDropdownChange = (userInput, id) => {
    this.setState({ hobby: this.Capitalize(userInput.target.innerText) });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.surname === "" ||
      this.state.hobby === ""
    ) {
      window.location.reload();
      alert("Please fill in all the deets to proceed....");
    } else {
      this.props.addUserFn(this.state);
    }
  };

  formList = formFields.map(field => {
    return (
      <InputField
        formName={field.value}
        key={field.id}
        updateFn={this.handleChange}
        id={field.id}
      />
    );
  });

  render() {
    console.log(this.state);
    return (
      <div className="ui form">
        <form onSubmit={this.handleSubmit}>
          {this.formList}
          <div className="ui field">
            <label>Pick your favourite hobby:</label>
            <Dropdown
              onChange={this.handleDropdownChange}
              placeholder="Pick a hobby..."
              fluid
              selection
              options={dropdownOptions}
            />
          </div>
          <button className="ui button">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
