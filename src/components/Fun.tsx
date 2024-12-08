import React from 'react';
import SectionTitle from './SectionTitle';
import RowEntry from './RowEntry';
import '../styles/fun.css'




const Fun: React.FC = () => {

    return (
        <div>
            <SectionTitle title="Just for Fun" />

            <p className="general-text">
                Phew, you made it to the bottom!
            </p>

            <p  className="general-text">
                I love maps and travel. Check out my custom travel map below.
            </p>

            <div className="width-constrain button" onClick={() => window.location.href="/#/travel-map"}>
                Travel Map
            </div>

            <div style={{ marginBottom: '150px' }} />
            


        </div>
    );
};

export default Fun;
