import React from "react";

class InputField extends React.Component {
  state = { userInput: "", id: "" };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // updateState(str, event) {
  //   this.setState({ str: this.Capitalize(event.target.value) })
  // }

  handleChange = e => {
    this.setState({ userInput: e.target.value, id: e.target.id }, () => {
      this.props.updateFn(this.state.userInput, this.state.id);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="ui field">
        <label>{this.props.formName}:</label>
        <input
          onChange={this.handleChange}
          value={this.state.userInput}
          type="text"
          placeholder={this.props.formName}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default InputField;
