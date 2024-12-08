import React from 'react';
import '../styles/row-entry.css'

interface RowEntryProps {
    title: string;
    subtitle: string;
    date: string;
    image: string;
}

const RowEntry: React.FC<RowEntryProps> = ({ title, subtitle, date, image }) => {
    return (
        <div className="row-entry-row">
            <img className="row-entry-image" src={image} alt={title} />
            <div className="row-entry-column">
                <div className="top-row">
                    <p className="row-entry-title">{title}</p>
                    <h4>{date}</h4>
                </div>
                <div className="horizontal-line" />
                <h3>{subtitle}</h3>
                {/* <p>{description}</p> */}
            </div>
        </div>
    );
};

export default RowEntry;