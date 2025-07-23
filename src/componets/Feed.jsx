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
      const res = await axios(BASE_URL + "/feed", { withCredentials: true });

      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new Users Found</h1>;
  return (
    feed && (
      <div className="flex justify-center my-48">
        <FeedCards user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
