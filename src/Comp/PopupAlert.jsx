import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styles from "./PopupForm.module.scss";

const PopupAlert = (props) => {
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
          <form
            action="https://philipli.art/contact_me/#contact-form-3"
            method="post"
            className={styles.ContactForm}
          >
            <div className={styles.ContactFormInput}>
              <label className="grunion-field-label name">
                Name<span>(required)</span>
              </label>
              <input
                type="text"
                name="g3-name"
                id="g3-name"
                className="name"
                required
                aria-required="true"
              />
            </div>

            <div className={styles.ContactFormInput}>
              <label className="grunion-field-label email">Email</label>
              <input type="email" id="g3-email" className="email" />
            </div>

            <div className={styles.ContactFormInput}>
              <label className="grunion-field-label textarea">
                Leave Your Comment Here<span>(required)</span>
              </label>
              <textarea
                name="g3-leaveyourcommenthere"
                id="contact-form-comment-g3-leaveyourcommenthere"
                rows="10"
                className="textarea"
                required
                aria-required="true"
              ></textarea>
            </div>
            <p className={styles.ContactFormSubmitBtn}>
              <button
                type="submit"
                onClick={props.onClickHandler}
                style={{ margin: "1rem" }}
              >
                Submit
              </button>{" "}
              <input
                type="hidden"
                id="_wpnonce"
                name="_wpnonce"
                value="51aaef2f7b"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                value="/contact_me/"
              />
              <input type="hidden" name="contact-form-id" value="3" />
              <input type="hidden" name="action" value="grunion-contact-form" />
              <input
                type="hidden"
                name="contact-form-hash"
                value="be39d6ec07ed037cc16ab93c574a3fbf4b091d95"
              />
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
