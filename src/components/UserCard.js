import React from "react";
import Faker from "faker";

const UserCard = props => {
  // console.log(props.user.firstName);
  return (
    <div className="card">
      <div className="image">
        <img src={Faker.image.cats()} alt="random cat" />
      </div>
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
