import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import FeedCards from "./FeedCards";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    try {
      if (feed) return;
      const res = await axios(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && (
      <div className="flex justify-center my-48">
        {feed.data.map((user) => (
          <FeedCards user={user} />
        ))}
      </div>
    )
  );
};

export default Feed;
