import React from "react";

const UserCard = props => {
  console.log(props);
  return (
    <div className="card">
      <div className="content">
        <div className="header">
          {props.user.firstName} {props.user.surname}
        </div>
        <div className="description">
          {props.user.firstName}'s favourite hobby is {props.user.hobby}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
