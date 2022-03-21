import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalToggle } from "../../../store/actions/articleAction";
import Filter from "./Filter";
import Articles from "./Articles";
import Marks from "./Marks";
import Modal from "../../Modal";

const Index = () => {
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const articleReducer = useSelector((store) => store.articleReducer);

  const modalHandler = (id) => {
    setId(id);
    dispatch(modalToggle());
  };

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Filter changeHandler={changeHandler} />
      <Articles modalHandler={modalHandler} search={search} />
      <Modal
        modal={articleReducer.modal}
        modalHandler={modalHandler}
        title="Marks"
      >
        <Marks id={id} articleReducer={articleReducer} />
      </Modal>
    </div>
  );
};

export default Index;
