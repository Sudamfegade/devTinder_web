import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/contants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setpass] = useState("");
  const [err, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data);
    }
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data);
    }
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-lg">
          <div className="card-body">
            <h2 className="card-title justify-center">
              {isLogin ? "Login" : "SignUp"}
            </h2>
            {!isLogin && (
              <>
                <div>
                  <label className="input validator">
                    <input
                      type="text"
                      value={firstName}
                      placeholder="Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="input validator">
                    <input
                      type="text"
                      value={lastName}
                      placeholder="Name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </>
            )}
            <div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  value={emailId}
                  placeholder="mail@site.com"
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setpass(e.target.value)}
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
            </p>
            <p className="text-red-500">{err}</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                onClick={isLogin ? handleLogin : handleSignup}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
            <p
              className="cursor-pointer m-auto p-4"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "New User? Signup here"
                : "User already exist ? Login here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
