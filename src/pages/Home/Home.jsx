import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoById, getTodoData } from "../../store/reducers/user/action";
import { postTodos } from "../../store/reducers/user/api";

const Home = () => {
  const { data } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
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

  const handleSubmit = () => {
    dispatch(postTodos(value));
  };


  console.log(data);

  return (
    <Row>
      <div>
        <input name="body" onChange={(e) => handleChange(e)} type="text" />
        <input name="title" onChange={(e) => handleChange(e)} type="text" />
        <button onClick={handleSubmit}>sent</button>
      </div>
      {data.map((item) => (
        <Col key={item.id} span={24} style={{ padding: 10 }}>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
