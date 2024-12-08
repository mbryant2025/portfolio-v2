import React from 'react';
import SectionTitle from './SectionTitle';
import RowEntry from './RowEntry';


const Work: React.FC = () => {

    return (
        <div>
            <SectionTitle title="Experience" />

            <RowEntry
                title="ESPN"
                subtitle="Software Engineering Intern, Fantasy Sports and Games"
                date="May - Aug 2024"
                image="https://1000logos.net/wp-content/uploads/2021/05/ESPN-logo.png"
            />

            <RowEntry
                title="Duke University"
                subtitle="Co-Head TA, ECE230 — Microelectronics"
                date="Fall 2023 - Present"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/2424px-Duke_Blue_Devils_logo.svg.png"
            />

            <RowEntry
                title="Duke University"
                subtitle="Co-President, Duke Robotics Club"
                date="Fall 2021 - Present"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/2424px-Duke_Blue_Devils_logo.svg.png"
            />

            <RowEntry
                title="Robotic Research Autonomous Industries (RRAI)"
                subtitle="Software Engineering Intern, Remote Integration"
                date="May - Aug 2023"
                image="img/rrai.png"
            />

            <RowEntry
                title="Ensign Bickford Aerospace and Defense (EBAD)"
                subtitle="Electronics Products Engineer Intern"
                date="May - Aug 2022"
                image="https://ebad.com/wp-content/themes/apd_ebad/dist/img/dark-logo-stacked.svg"
            />

            <RowEntry
                title="Duke University"
                subtitle="TA, ECE383 — Robotics & Automation"
                date="Fall 2024 - Present"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/2424px-Duke_Blue_Devils_logo.svg.png"
            />

            <RowEntry
                title="Duke University"
                subtitle="TA, Multivariable Calculus & Linear Algebra"
                date="Spring 2023"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/2424px-Duke_Blue_Devils_logo.svg.png"
            />

            <div style={{ marginBottom: '150px' }} />

        </div>
    );
};

export default Work;
