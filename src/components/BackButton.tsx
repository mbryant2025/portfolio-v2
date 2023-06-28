import React from 'react';
import './styles/back.css'

const BackButton: React.FC = () => {

    return (
        <div>
            <a href="javascript:history.back()"  className="back-button">&lt;</a>
        </div>
    );
}

export default BackButton;