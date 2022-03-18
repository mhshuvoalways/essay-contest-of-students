import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { activeAccount } from "../../../store/actions/adminUserAction";
import ActiveAccoutMsg from "./ActiveAccoutMsg";

const ActiveAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(activeAccount(params, navigate));
  }, [dispatch, navigate, params]);

  return <ActiveAccoutMsg />
};

export default ActiveAccount;
