import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops! Sorry! Something went wrong. We're solving this problem already</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary