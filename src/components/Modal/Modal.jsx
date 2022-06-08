import React from "react";
import close from "../../icons/Union.svg";
import "./Modal.scss";
function Modal({ children, boolen, set }) {
  return (
    <>
      <>
        <section className="myModal">
          <div className="myModal__reletive">
            <div
              className="myModal__close"
              hidden={boolen}
              onClick={() => set(false)}
            >
              <img src={close} alt="img" />
            </div>
            <div className="myModal_item">{children}</div>
          </div>
        </section>
        <div className="myModal__exit"></div>
      </>
    </>
  );
}

export default Modal;


