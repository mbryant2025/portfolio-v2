import React from 'react';
import './styles/full-widget.css'

interface WidgetComponentProps {
    title: string;
}

const FullWidthWidget: React.FC<WidgetComponentProps> = ({ title }) => {
    return (
        <div className="full-widget">
            <div className="full-widget-title">
                <h1>{title}</h1>
            </div>
            <div className="full-widget-content">
                <p>Content goes here</p>
            </div>
        </div>
    );
};

export default FullWidthWidget;