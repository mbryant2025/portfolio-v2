import React from 'react';
import '../styles/columns.css'
import SectionTitle from './SectionTitle';

interface DetailViewProps {
    scrollWidgets: React.ReactNode;
    widgetBar?: React.ReactNode;
    title: string;
}

const DetailView: React.FC<DetailViewProps> = ({ scrollWidgets, widgetBar, title }) => {
    return (
        <div>
            <SectionTitle title={title} />
            {widgetBar}
            {scrollWidgets}
        </div>

    );
};

export default DetailView;
