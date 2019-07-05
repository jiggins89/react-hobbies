import React from "react";

const Divider = props => {
  return (
    <h4 className="ui horizontal divider header">
      <i className="user icon"></i>
      {props.description}
    </h4>
  );
};

export default Divider;
