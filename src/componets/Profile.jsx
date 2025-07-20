import React from "react";
import EditProfile from "./Editprofile";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.User);
  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
