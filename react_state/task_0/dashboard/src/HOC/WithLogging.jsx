import React, { Component } from "react";

const withLogging = (WrappedComponent) => {
    const wrappedName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    class WithLogging extends Component {
        componentDidMount() {
            WrappedComponent.name
                ? console.log(`Component ${WrappedComponent.name} is mounted`)
                : console.log(`Component is mounted`);
        }

        componentWillUnmount() {
            WrappedComponent.name
                ? console.log(`Component ${WrappedComponent.name} is going to unmount`)
                : console.log(`Component is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    WithLogging.displayName = `WithLogging(${wrappedName})`;

    return WithLogging;
};

export default withLogging;
