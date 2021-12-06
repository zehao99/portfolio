import React from "react";
import Colors from "../Comp/Colors";
import {AnimatePresence, motion} from "framer-motion";

const ComponentWithScrollLoad = (Component) => {
  return class extends React.Component {
    state = { loading: true };
    ref = React.createRef();

    componentDidMount() {
      const node = this.ref.current;
      if(!node) {
        return;
      }
      this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setState({ loading: false });
            observer.unobserve(node);
          }
        });
      });
      this.observer.observe(node);
    }

    componentWillUnmount() {
      this.observer.disconnect();
    }

    render() {
      const { loading } = this.state;
      if (loading) {
        const loadingText = this.props.Loading || "loading";
        return (
          <AnimatePresence>
            <motion.div ref={this.ref} style={{ color: `${Colors.primaryColor}` }}>
              {loadingText}
            </motion.div>
          </AnimatePresence>
        );
      }
      return <Component {...this.props} />;
    }
  };
};

export default ComponentWithScrollLoad;
