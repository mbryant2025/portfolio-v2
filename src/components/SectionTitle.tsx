import React from 'react';
import '../styles/columns.css'

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div>            
             <h1 className="title">{title}</h1>
        </div>
    );
};

export default SectionTitle;
