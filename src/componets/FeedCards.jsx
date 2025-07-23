import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../store/feedSlice";

const FeedCards = ({ user }) => {
  const dispatch = useDispatch();
  const handleSendRequest = async (status, id) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img height={20} src={user?.photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user?.firstName + " " + user.lastName}</h2>
        {user.age && <p>{user.age + ", " + user?.gender}</p>}
        <p>{user.about}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignore", user?._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("intrested", user?._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCards;
