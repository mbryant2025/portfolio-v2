import React from 'react';
import '../styles/columns.css'

interface DetailViewProps {
    scrollWidgets: React.ReactNode;
    widgetBar?: React.ReactNode;
    title: string;
}

const DetailView: React.FC<DetailViewProps> = ({ scrollWidgets, widgetBar, title }) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            {widgetBar}
            {scrollWidgets}
        </div>

    );
};

export default DetailView;
