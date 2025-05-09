import React, {Component} from "react";

function WithLogging(WrappedComponent) {
    class HOC extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name} is going to unmount`);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    HOC.displayName = `WithLogging(${WrappedComponent.name})`;
    return HOC;
}

export default WithLogging;