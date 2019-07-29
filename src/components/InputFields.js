// Library imports
import React from "react";
import { Dropdown } from "semantic-ui-react";
// Component imports
import InputField from "./InputField";
// Options imports
import dropdownOptions from "../options/dropdownOptions";
import formFieldOptions from "../options/formFieldOptions";

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
    formFieldOptions.forEach(field => {
      if (id === field.id) {
        this.setState({ [field.id]: this.Capitalize(userInput) });
      }
    });
  };

  handleDropdownChange = e => {
    console.log(e.target);
    let result = e.target.firstChild.innerHTML;
    this.setState({ hobby: result });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.surname === "" ||
      this.state.hobby === ""
    ) {
      alert("Please fill in all the deets to proceed....");
    } else {
      this.props.addUserFn(this.state);
    }
  };

  formList = formFieldOptions.map(field => {
    return (
      <InputField
        updateFn={this.handleChange}
        formName={field.value}
        id={field.id}
        key={field.id}
      />
    );
  });

  render() {
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
          <button className="fluid ui button">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
