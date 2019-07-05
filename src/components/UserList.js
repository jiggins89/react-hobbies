import React from "react";

import UserCard from "./UserCard";

const UserList = props => {
  const peopleList = props.people.map((user, index) => {
    if (props.people.length === 0) {
      // console.log("working?");
      return <div>Enter your details above to add a card...</div>;
    } else {
      // console.log("hello?");
      return <UserCard user={user} key={index} />;
    }
  });

  // return <div>hello</div>;
  return <div className="ui link cards">{peopleList}</div>;
};

export default UserList;
