import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePostsById,
  getAllPosts,
  postPosts,
  updatePostsById,
} from "../../store/reducers/posts/action";
import ServiceBlog from "../Home/_component/Service_blog/Service_blog";
import Modal from "../../components/Modal/Modal";
import Hero from "../../components/Hero/Hero";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import ConsultDoctor from "./_component/Consult_doctor/Consult_doctor";
import WelcomeOrganic from "./_component/WelcomeOrganic/WelcomeOrganic";
import OnlineHelp from "./_component/OnlineHelp/OnlineHelp";
import Reklama from "../../components/Reklama/Reklama";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [value, setValue] = useState({ userId: 1 });

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    if (value.title !== undefined) {
      setValue({});
    }
    e.preventDefault();
    e.target[0].value = "";
    e.target[1].value = "";
    dispatch(postPosts(JSON.stringify(value)));
    toast("Here is your toast.", {
      style: {
        color: 'red'
      }
    });
  };

  const handleVisibleEdit = (data) => {
    setValue(data);
    setUpdateModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePostsById(value.id, JSON.stringify(value)));
    console.log(value);
    setUpdateModal(false);
  };

  const handleDelete = (id) => {
    dispatch(deletePostsById(id));
  };

  const handleVisibleModal = () => {
    setValue({});
    setUpdateModal(false);
  };


  return (
    <>
      <Hero />
      <ServiceBlog />
      <ConsultDoctor />
      <WelcomeOrganic />
      <OnlineHelp />
      {/* maxsulot ruyxatlari degani blog bor */}
      <Reklama />
      {/* <Row className="globalContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="title" onChange={(e) => handleChange(e)} type="text" />
          <input name="body" onChange={(e) => handleChange(e)} type="text" />
          <button disabled={value.title === undefined}>sent</button>
        </form>
        {!loading ? (
          data.map((item, i) => (
            <Col key={item.id} span={24} style={{ padding: 10 }}>
              {i + 1} {item.title}
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => handleVisibleEdit(item)}>edit</button>
            </Col>
          ))
        ) : (
          <p>loading...</p>
        )}

        <Modal visible={updateModal} setVisible={handleVisibleModal}>
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
      </Row> */}
      {/* <Toaster /> */}
      {/* <NewsComponent /> */}
    </>
  );
};

export default Home;
