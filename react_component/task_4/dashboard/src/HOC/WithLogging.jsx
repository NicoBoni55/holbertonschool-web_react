import React, {Component} from "react";

function WithLogging(WrappedComponent) {
    class HOC extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name || 'Component'} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount`);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    HOC.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;
    return HOC;
}

export default WithLogging;