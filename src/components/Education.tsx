import React from 'react';
import SectionTitle from './SectionTitle';
import RowEntry from './RowEntry';



const Education: React.FC = () => {

    return (
        <div>
            <SectionTitle title="Education" />

            <RowEntry
                title="Duke University"
                subtitle="Master of Science in Electrical and Computer Engineering, Concentration in Robotics"
                date="December 2025"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/2424px-Duke_Blue_Devils_logo.svg.png"
            />

            <RowEntry
                title="Duke University"
                subtitle="Bachelor of Science, Double Major in Electrical & Computer Engineering and Computer Science"
                date="May 2025"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/2424px-Duke_Blue_Devils_logo.svg.png"
            />

            <div style={{ marginBottom: '150px' }} />


        </div>
    );
};

export default Education;
