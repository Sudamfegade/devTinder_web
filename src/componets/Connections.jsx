import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/connectionSlice";
const Connections = () => {
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.Connection);
  console.log(connection);
  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!connection) return;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Connections</h1>
      {connection.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 text-center mx-auto">
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
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
