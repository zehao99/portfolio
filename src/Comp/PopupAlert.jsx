import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styles from "./PopupForm.module.scss";

const PopupAlert = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  console.log(formData);

  const changeHandler = (e, element) => {
    setFormData((prevState) => {
      prevState[element] = e.target.value;
      return prevState;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "") {
      alert("Please fill in the form.");
    } else {
      const newData = JSON.stringify(formData);
      console.log(newData);
      fetch("https://react-hooks-update-74cc9.firebaseio.com/response.json", {
        method: "Post",
        body: newData,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((resData) => {
          alert("Thank you for your message.");
          window.location.reload(true);
        })
        .catch((err) => {
          console.log(err);
          alert("There's an error");
        });
    }
  };

  return (
    <div>
      <div
        className={styles.ErrorContainer}
        onClick={props.onClickHandler}
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.ErrorPopCard}>
          <h3>{props.title}</h3>
          <form className={styles.ContactForm} onSubmit={submitHandler}>
            <div className={styles.ContactFormInput}>
              <label className="grunion-field-label name">
                Name<span>(required)</span>
              </label>
              <input
                type="text"
                className="name"
                required
                aria-required="true"
                onChange={(e) => {
                  changeHandler(e, "name");
                }}
              />
            </div>

            <div className={styles.ContactFormInput}>
              <label className="grunion-field-label email">Email</label>
              <input
                type="email"
                className="email"
                onChange={(e) => {
                  changeHandler(e, "email");
                }}
              />
            </div>

            <div className={styles.ContactFormInput}>
              <label className="grunion-field-label textarea">
                Leave Your Comment Here<span>(required)</span>
              </label>
              <textarea
                name="leaveyourcommenthere"
                rows="10"
                className="textarea"
                required
                aria-required="true"
                onChange={(e) => {
                  changeHandler(e, "description");
                }}
              ></textarea>
            </div>
            <p className={styles.ContactFormSubmitBtn}>
              <button type="submit" style={{ margin: "1rem" }}>
                Submit
              </button>{" "}
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const PopModal = (WrappedComponent) => {
  function EnhancedComponent(props) {
    return (
      <WrappedComponent
        onClickHandler={props.onClose}
        message={props.message}
        title={props.title}
      />
    );
  }

  EnhancedComponent.show = (params) => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    function closeHandle() {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
      container = null;
    }

    ReactDOM.render(
      <EnhancedComponent {...params} onClose={closeHandle} />,
      container
    );
  };

  return EnhancedComponent;
};

export default PopModal(PopupAlert);
