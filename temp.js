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
