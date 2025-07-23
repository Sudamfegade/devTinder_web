import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../store/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.Request);
  const handleClick = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!requests || requests.length <= 0)
    return <h1 className="text-center my-10">No Requests Found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Connection Requests</h1>
      {requests.map((requests) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          requests.fromUserId;
        return (
          <div
            key={_id}
            className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={photoUrl}
                alt="image"
              />
            </div>
            <div className="text-left m-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex">
              <button
                className="btn btn-active btn-primary mx-4"
                onClick={() => handleClick("accepted", requests._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-active btn-secondary"
                onClick={() => handleClick("rejected", requests._id)}
              >
                Rejects
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
