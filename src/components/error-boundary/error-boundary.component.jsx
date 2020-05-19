import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-img"></div>
                    <div className="error-msg">404 - Sorry We Cannot Load This Page </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;