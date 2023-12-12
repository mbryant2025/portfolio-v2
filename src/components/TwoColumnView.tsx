import React from 'react';
import './styles/columns.css'

interface TwoColumnViewProps {
    scrollWidgetsLeft: React.ReactNode;
    scrollWidgetsRight: React.ReactNode;
    widgetBar?: React.ReactNode;
    title: string;
}

const TwoColumnView: React.FC<TwoColumnViewProps> = ({ scrollWidgetsLeft, scrollWidgetsRight, widgetBar, title }) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            {widgetBar}
            <div className="columns-wrapper">
                <div>
                    {scrollWidgetsLeft}
                </div>
                <div>
                    {scrollWidgetsRight}
                </div>
            </div>
        </div>

    );
};

export default TwoColumnView;
