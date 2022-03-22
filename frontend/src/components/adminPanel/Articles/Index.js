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
  const [language, setLanguage] = useState("All");
  const dispatch = useDispatch();
  const articleReducer = useSelector((store) => store.articleReducer);

  const modalHandler = (id) => {
    setId(id);
    dispatch(modalToggle());
  };

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const selectHandler = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <Filter
        changeHandler={changeHandler}
        selectHandler={selectHandler}
      />
      <Articles
        modalHandler={modalHandler}
        search={search}
        language={language}
      />
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
