import React from "react";

import UserCard from "./UserCard";

const UserList = props => {
  const peopleList = props.videos.map(user => {
    return <UserCard user={user} />;
  });

  return <div>{peopleList}</div>;
};

export default UserList;
