import React from "react";

import UserCard from "./UserCard";

const UserList = props => {
  // console.log(props);
  const peopleList = props.people.map((user, index) => {
    return <UserCard user={user} key={index} />;
  });

  // return <div>hello</div>;
  return <div>{peopleList}</div>;
};

export default UserList;
