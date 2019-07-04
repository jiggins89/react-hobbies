import React from "react";

const UserCard = props => {
  // console.log(props.user.firstName);
  return (
    <div>
      <ul>
        <li>First Name: {props.user.firstName}</li>
        <li>Surname: {props.user.surname}</li>
        <li>Hobby: {props.user.hobby}</li>
      </ul>
    </div>
  );
};

export default UserCard;
