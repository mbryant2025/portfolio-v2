import React from 'react';
import '../../components/styles/programmable-magna-tiles.css';

import BackButtonLight from '../../components/BackButtonLight';


const Title: React.FC = () => {

    return (
        < div className="tileFrame" >
            <div className="left-column">
                <img src="/img/depth-articles/programmable-magna-tiles/tiles-left.png" alt="Programmable Magna Tiles" className="tileFraming" />
            </div>
            <div className="main-column">
                <div className="mainTextContainer">
                    <p className="mainText">A toy to teach kids all aspects of engineering</p>

                </div>
                <img src="/img/depth-articles/programmable-magna-tiles/basketball-overview.png" alt="Programmable Magna Tiles" className="mainImage" />
            </div>
            <div className="right-column">
                <img src="/img/depth-articles/programmable-magna-tiles/tiles-right.png" alt="Programmable Magna Tiles" className="tileFraming" />

            </div>
        </div >
    );
};




const BasketballConnections: React.FC = () => {


    return (

        <div className="basketball-connection">


            <div className="secondTextContainer">
                <p className="secondText">Electric tiles can be easily programmed using block code on a web-based interface  </p>

            </div>
            <img src="/img/depth-articles/programmable-magna-tiles/wide-connection.png" alt="Programmable Magna Tiles" className="basketball-connection-image" />


        </div>

    );
};

const PlayFlowColumns: React.FC = () => {


    return (

        <div className="playFlowColumns">



            <div>
                <img src="/img/depth-articles/programmable-magna-tiles/play-flow-physical.png" alt="Programmable Magna Tiles" className="flowImage" />
            </div>

            <div>
                <img src="/img/depth-articles/programmable-magna-tiles/play-flow.png" alt="Programmable Magna Tiles" className="flowImage2" />
            </div>
            <div className="flowTextContainer1">
                <p className="flowText">1) Design it</p>

            </div>

            <div className="flowTextContainer2">
                <p className="flowText">2) Connect tiles</p>

            </div>

            <div className="flowTextContainer3">
                <p className="flowText">3) Upload your program</p>

            </div>

        </div>

    );
};

const InfoGrid: React.FC = () => {

    return (
        <div className="infoGrid">
            <div className="infoGridRow">
                <div className="infoGridItem">
                    <img src="/img/depth-articles/programmable-magna-tiles/grid1.png" alt="Programmable Magna Tiles" className="gridImage" />
                    <div className="infoGridItemText">Tiles create a strong connection to each other using magnets
                    </div>
                </div>
                <div className="infoGridItem">
                    <img src="/img/depth-articles/programmable-magna-tiles/grid2.png" alt="Programmable Magna Tiles" className="gridImage" />

                    <div className="infoGridItemText">Brain connects tiles to the web interface through Bluetooth</div>
                </div>
            </div>
            <div className="infoGridRow">
                <div className="infoGridItem">
                    <img src="/img/depth-articles/programmable-magna-tiles/grid3.png" alt="Programmable Magna Tiles" className="gridImage" />

                    <div className="infoGridItemText">Electric tiles connect through standard headphone jacks into ports in the brain
                    </div>
                </div>
                <div className="infoGridItem">
                    <img src="/img/depth-articles/programmable-magna-tiles/grid4.png" alt="Programmable Magna Tiles" className="gridImage" />

                    <div className="infoGridItemText">Block code generates a program which is saved and run real time on the brain
                    </div>
                </div>
            </div>
        </div>

    );
}







const ProgrammableTiles: React.FC = () => {

    const gitHubLink = 'https://github.com/mbryant2025/Littlearn';

    const pageTitle = 'Programmable Magnetic Tiles';
    const subtitle = 'September 2023 - December 2023';


    return (
        <div className="magna-page-wrapper">
            <BackButtonLight />
            <div className="margin">

            </div>
            {pageTitle && <div className="articleTitleLight">{pageTitle}</div>}
            {subtitle && <div className="articleSubtitleLight">{subtitle}</div>}


            {gitHubLink && <img src="/img/github_light.png" alt="GitHub" className="github" onClick={() => window.open(gitHubLink, '_blank')} />}


            <Title />

            <BasketballConnections />

            <PlayFlowColumns />

            <InfoGrid />


        </div>
    );
};

export default ProgrammableTiles;

