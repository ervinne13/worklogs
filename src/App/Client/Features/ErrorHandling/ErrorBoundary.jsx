import React from 'react';
import { logError } from 'App/Common/Logger';
import ErrorScene from './ErrorScene';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            hasError: false 
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            error,
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        logError(error);
        console.log('ErrorBoundary', info);
    }
    
    generatePageTitleAndMessage() {
        const { error } = this.state;
        const httpCode = error.httpCode || 500;
        let title = "";
        let message = "";

        switch(httpCode) {
            case 404:
                title = "Oops! Page not found!";
                message = "The page you are looking for may have already expired, or is not existing at all. Please navigate back home.";
                break;
            default:
                title = "Something Went Wrong";
                message = "The developers will be working on this to resolve this issue ASAP. (TODO: message on how to contact devs)";                
        }

        return { title, message };
    }

    render() {
        if (this.state.hasError) {
            const { title, message } = this.generatePageTitleAndMessage();
            return <ErrorScene title={ title } message={ message } />
        }
    
        return this.props.children; 
    }
}

export default ErrorBoundary;