import React from 'react';
import './styles/full-widget.css'


interface FullWidthWidgetProps {
    children: React.ReactNode;
}

const FullWidthWidget: React.FC<FullWidthWidgetProps> = ( {children} ) => {
    return (
        <div className="full-widget">
            {children}
        </div>
    );
};

export default FullWidthWidget;
