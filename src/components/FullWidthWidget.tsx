import React from 'react';
import '../styles/full-widget.css'


interface FullWidthWidgetProps {
    children: React.ReactNode;
}

const FullWidthWidget: React.FC<FullWidthWidgetProps> = ({ children }) => {
    return (
        <div className="full-widget">
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default FullWidthWidget;
