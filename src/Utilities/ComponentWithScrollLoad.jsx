import React from "react";
import Colors from "../Comp/Colors";

const ComponentWithScrollLoad = (Component) => {
  return class extends React.Component {
    state = { loading: true };
    ref = React.createRef();

    componentDidMount() {
      const node = this.ref.current;
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
          <div ref={this.ref} style={{ color: `${Colors.primaryColor}` }}>
            {loadingText}
          </div>
        );
      }
      return <Component {...this.props} />;
    }
  };
};

export default ComponentWithScrollLoad;
