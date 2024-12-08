import React from 'react';
import SectionTitle from './SectionTitle';
import '../styles/publications.css'


const extraPadding = {
    padding: '30px'
}


const Publications: React.FC = () => {

    return (
        <div>
            <SectionTitle title="Publications" />

            <div className="publications-container">
                <div className="button" style={extraPadding} onClick={() => window.open("https://arxiv.org/abs/2410.09684")}>
                    Technical Design Review of Duke Robotics Club's Oogway: An AUV for RoboSub 2024
                </div>

                <div className="button" style={extraPadding} onClick={() => window.open("https://arxiv.org/abs/2410.10900")}>
                    Oogway: Designing, Implementing, and Testing an AUV for RoboSub 2023
                </div>

            </div>

            <div style={{ marginBottom: '150px' }} />

        </div>
    );
};

export default Publications;
