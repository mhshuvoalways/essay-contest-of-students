import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../../store/actions/userAction";
import enableBtn from "../../../../store/actions/enableBtnAction";

const Register = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    phone: "",
    country: "",
    age: "",
    password: "",
    recaptch: "",
    agree: true,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((store) => store.userReducer.isAuthenticate);
  const enableBtnReducer = useSelector((store) => store.enableBtnReducer);

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCaptcha = (value) => {
    setState({
      ...state,
      recaptch: value,
    });
  };

  const onChangeAgree = () => {
    setState({
      ...state,
      agree: !state.agree,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegister(state, navigate));
    dispatch(enableBtn(false));
  };

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex justify-center mb-5">
        <NavLink
          to="/register"
          className={({ isActive }) => isActive && "text-purple-600"}
        >
          <button className="pb-2 text-2xl font-bold">Register</button>
        </NavLink>
        <p className="pb-2 text-2xl mx-2">|</p>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive && "text-purple-600"}
        >
          <button className="pb-2 text-2xl font-bold">Login</button>
        </NavLink>
      </div>
      <form>
        <div className="shadow-md text-left p-10 bg-gray-50 rounded-md">
          <label className="block">
            <span className="text-gray-700">EMAIL</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="email"
              onChange={onChange}
              value={state.email}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="name"
              placeholder="Enter Your Name"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="name"
              onChange={onChange}
              value={state.name}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PHONE</span>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="phone"
              onChange={onChange}
              value={state.phone}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">COUNTRY</span>
            <input
              type="text"
              placeholder="Enter Your Country"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="country"
              onChange={onChange}
              value={state.country}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">AGE</span>
            <input
              type="number"
              placeholder="Enter Your Age"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="age"
              onChange={onChange}
              value={state.age}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PASSWORD</span>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="password"
              onChange={onChange}
              value={state.password}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">RECAPTCHA</span>
            <div className="my-1">
              <ReCAPTCHA
                value={state.recaptch}
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={onChangeCaptcha}
              />
            </div>
          </label>
          <div className="flex mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={state.agree}
                className="form-checkbox cursor-pointer"
                onChange={onChangeAgree}
              />
              <span className="ml-2">
                I agree to the
                <span className="underline cursor-pointer">
                  {" "}
                  privacy policy
                </span>
              </span>
            </label>
          </div>
          {state.agree ? (
            enableBtnReducer ? (
              <button
                className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900"
                type="button"
                onClick={onSubmit}
              >
                REGISTER
              </button>
            ) : (
              <button
                className="bg-gray-600 opacity-50 cursor-not-allowed text-white py-2 mt-5 w-full hover:bg-gray-900"
                type="button"
              >
                REGISTER
              </button>
            )
          ) : (
            <button
              className="bg-gray-300 text-gray-500 py-2 mt-5 w-full cursor-not-allowed"
              type="button"
            >
              REGISTER
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
