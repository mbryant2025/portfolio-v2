import React from 'react';
import '../styles/widgets.css'

interface WidgetBarProps {
    image: string;
    title: string;
    onClick: (peek?: string) => void;
}

const WidgetBar: React.FC<WidgetBarProps> = ({ image, title, onClick }) => {
    return (
        <div className="widget-bar" onClick={() => onClick()}>
            <div className="widget-bar-image">
                <img src={image} alt="Selected Widget" className="peeking-image-bar" />
            </div>
            <div className="widget-bar-title">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default WidgetBar;
