import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodoById,
  getTodoData,
  postTodoData,
  updateTodoById,
} from "../../store/reducers/user/action";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const { data } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [value, setValue] = useState({ userId: 1 });

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodoById(id));
  };

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    e.target[1].value = "";
    dispatch(postTodoData(JSON.stringify(value)));
  };

  const handleVisible = (data) => {
    setValue(data);
    setUpdateModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodoById(value.id, JSON.stringify(value)));
    console.log(value);
    setUpdateModal(false);
  };

  return (
    <Row>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="title" onChange={(e) => handleChange(e)} type="text" />
        <input name="body" onChange={(e) => handleChange(e)} type="text" />
        <button>sent</button>
      </form>
      {data.map((item) => (
        <Col key={item.id} span={24} style={{ padding: 10 }}>
          {item.id} {item.title}
          <button onClick={() => handleDelete(item.id)}>delete</button>
          <button onClick={() => handleVisible(item)}>edit</button>
        </Col>
      ))}

      <Modal visible={updateModal} setVisible={setUpdateModal}>
        <form onSubmit={(e) => handleUpdate(e)}>
          <input
            onChange={(e) => handleChange(e)}
            name="title"
            type="text"
            value={value.title}
          />
          <input
            onChange={(e) => handleChange(e)}
            name="body"
            type="text"
            value={value.body}
          />
          <button>submit</button> <br />
        </form>
      </Modal>

      <Modal visible={createModal} setVisible={setCreateModal}>
        hello
      </Modal>
      <button onClick={() => setCreateModal(true)}> create Modal</button>
    </Row>
  );
};

export default Home;
