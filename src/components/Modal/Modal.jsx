const Modal = ({ children, visible, setVisible }) => {
  const styledModal = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "60vh",
    width: "60%",
    backgroundColor: "white",
    zIndex: "10",
  };
  const styledBg = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "100vh",
    width: "100%",
    backgroundColor: "rgb(000,000,000, 0.3)",
    zIndex: "1",
  };

  visible
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    visible && (
      <>
        <div style={styledModal}>
          {children}
          <button onClick={setVisible}>X</button>
        </div>
        <div style={styledBg} onClick={setVisible} />
      </>
    )
  );
};

export default Modal;
