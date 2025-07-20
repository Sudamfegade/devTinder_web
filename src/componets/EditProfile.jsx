import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/contants";
import FeedCards from "./FeedCards";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotourl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [err, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveProfile = async () => {
    setError("");
    try {
      const response = await axios.patch(
        "http://localhost:3030/profile/edit",
        { firstName, lastName, photoUrl, about, age, gender },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data));
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } catch (err) {
      setError(err?.response?.data);
    }
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-lg">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs mb-2.5"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs mb-2.5"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Photo</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    className="input input-bordered w-full max-w-xs mb-2.5"
                    onChange={(e) => setPhotourl(e.target.value)}
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    className="input input-bordered w-full max-w-xs mb-2.5"
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <select
                    defaultValue={gender}
                    className="select"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option>Select gender</option>
                    <option>male</option>
                    <option>female</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs my-5">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    className="input input-bordered w-full max-w-xs mb-2.5"
                    onChange={(e) => setAbout(e.target.value)}
                    required
                  />
                </label>
                <p className="text-red-500">{err}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary" onClick={saveProfile}>
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FeedCards
            user={{ firstName, lastName, photoUrl, about, age, gender }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
