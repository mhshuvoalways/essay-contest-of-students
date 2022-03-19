import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { userLogin } from "../../../store/actions/adminUserAction";

const Login = () => {
  const [state, setState] = useState({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    checked: false,
  });

  const auth = useSelector((store) => store.adminUserReducer.isAuthenticate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin";

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeRemember = (event) => {
    if (event.target.checked) {
      localStorage.setItem("email", state.email);
      localStorage.setItem("password", state.password);
      setState({ ...state, checked: event.target.checked });
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      setState({ ...state, checked: event.target.checked });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    dispatch(userLogin({ email, password }, navigate, from));
    if (!state.checked) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };

  if (auth) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="mt-12 max-w-md m-auto">
      <div className="flex justify-center mb-5">
        <NavLink
          to="/admin/register"
          className={({ isActive }) => isActive && "text-purple-600"}
        >
          <button className="py-2 mt-5 text-2xl font-bold">Register</button>
        </NavLink>
        <p className="py-2 mt-5 text-2xl mx-2">|</p>
        <NavLink
          to="/admin/login"
          className={({ isActive }) => isActive && "text-purple-600"}
        >
          <button className="py-2 mt-5 text-2xl font-bold">Login</button>
        </NavLink>
      </div>
      <form onSubmit={onSubmit}>
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
          <div className="flex mt-6 justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox cursor-pointer"
                onChange={onChangeRemember}
                checked={state.checked}
              />
              <span className="ml-2 cursor-pointer">Remember me</span>
            </label>
            <label>
              <Link to="/admin/findmail">
                <span className="ml-2 cursor-pointer hover:text-purple-500">
                  Forgot Password?
                </span>
              </Link>
            </label>
          </div>
          <button className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
