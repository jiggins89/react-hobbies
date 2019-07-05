import React from "react";

import UserCard from "./UserCard";

const UserList = props => {
  const peopleList = props.people.map((user, index) => {
    return <UserCard user={user} key={index} />;
  });

  return (
    <div className="ui link cards" style={{ justifyContent: "center" }}>
      {peopleList}
    </div>
  );
};

export default UserList;
