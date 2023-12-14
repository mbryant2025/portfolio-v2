import React from 'react';
import '../../components/styles/tiles.css';

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

                    <div className="infoGridItemText">Electric tiles connect through standard headphone jacks into ports on the brain
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

const IDEInfo: React.FC = () => {
    return (

        <div className="ideInfoImage">
            <div className="sectionText">
                Online Code Editor
            </div>
            <img src="/img/depth-articles/programmable-magna-tiles/ide.png" alt="Programmable Magna Tiles" className="ideImage" />
        </div>
    );
}

const VideoDemo: React.FC = () => {
    return (

        <div className="videoDemo">
            <div className="sectionText">
                Video Demo
            </div>
            <div className="videoContainer">

                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/NJk1nMhvNfk?si=I6J_hV4eC0g5e3mC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>

            <div className="smallInfoText">
                The Brain implements a custom programming language and can run complex programs!
            </div>
            <img src="/img/depth-articles/programmable-magna-tiles/big-code.png" alt="Programmable Magna Tiles" className="ideImage" />
            <div className="smallInfoText">
                Code is stored in browser and persists on Brain once uploaded
            </div>
        </div>
    );
}

const TechnicalDetails: React.FC = () => {
    return (
        <div>
            <div className="sectionText">
                Technical Details
            </div>

            <div className="smallInfoText">
                The software is composed of two major parts:
            </div>

            <div className="infoGrid">
                <div className="infoGridRow">
                    <div className="infoGridItem">
                        <img src="/img/skill-categories/cc.png" alt="Programmable Magna Tiles" className="logoImage" />
                        <div className="smallInfoText">Lightweight custom programming language with tight integration to the hardware
                        </div>
                    </div>
                    <div className="infoGridItem">
                        <img src="/img/skill-categories/react.png" alt="Programmable Magna Tiles" className="logoImage" />

                        <div className="smallInfoText">Web-based IDE with a block code interface deployed to the internet
                        </div>
                    </div>
                </div>
            </div>


            <div className="subsectionText">
                Software Architecture
            </div>


            <img src="/img/depth-articles/programmable-magna-tiles/Software-Diagram.png" alt="Programmable Magna Tiles" className="diagram" />




            <div className="subsectionText">
                Programming Language and Embedded Software
            </div>

            <div className="smallInfoText">
                The custom language is a C-like interpreted language was implemented in C++ and designed to be ultra-lightweight as to be compiled onto an (inexpensive) ESP32.
                The language supports variables, control flow, functions, stack frames, I/O through hardware and BLE, and a variety of other features. Error handling is also implemented, and the errors are sent back to the IDE for display without crashing the ESP32.
            </div>
            <figure>
                <img src="/img/depth-articles/programmable-magna-tiles/esp32.JPG" alt="Programmable Magna Tiles" className="logoImage" />

                <figcaption className="cap">Inside of (prototype) Brain, including ESP32 and 18650 battery, rechargable with USB-C</figcaption>
            </figure>

            <div className="smallInfoText">
                Compiling to this platform is extremely difficult as there are a variety of compile-time checks, very limited memory, and constrained program size.

                The code had to be entirely refactored for compile-time checks, extreme care was taken around memory safety, including valgrind and unit testing, and the ESP32 flash memory was repartitioned to allow for larger programs and to even allocate a small region for dynamically storing user programs.

            </div>

            <figure>
                <img src="/img/depth-articles/programmable-magna-tiles/testing.png" alt="Programmable Magna Tiles" className="logoImage" />


                <figcaption className="cap">Unit testing and valgrind were used to ensure memory safety</figcaption>
            </figure>


            <div className="smallInfoText">

                All development was Dockerized to allow for easy cross-compilation and testing.
            </div>


            <div className="smallInfoText">
                Both cores on the ESP32 were utilized. One for running the interpreted program, and the other for handling BLE communication with the web interface. This includes callbacks for BLE events, and reuploading during program execution.
            </div>

            <div className="subsectionText">
                Hardware Architecture
            </div>


            <img src="/img/depth-articles/programmable-magna-tiles/Hardware-Diagram.png" alt="Programmable Magna Tiles" className="diagram" />


            <div className="subsectionText">
                Web IDE
            </div>

            <div className="smallInfoText">
                The web IDE was implemented in React and TypeScript. It was designed to be intuitive and easy to use for kids, and to be responsive to a variety of screen sizes.
            </div>

            <figure>
                <img src="/img/depth-articles/programmable-magna-tiles/ide2.png" alt="Programmable Magna Tiles" className="medImage" />


                <figcaption className="cap">Block code interface for programming the tiles</figcaption>
            </figure>


            <div className="smallInfoText">
                The IDE includes a toolbox of code blocks, a realtime text code view, and functionality for connecting and uploading programs to the Brain.
            </div>


            <figure>
                <img src="/img/depth-articles/programmable-magna-tiles/toolbox.png" alt="Programmable Magna Tiles" className="medImage" />

                <figcaption className="cap">Toolbox of code blocks</figcaption>

            </figure>

            <div className="smallInfoText">
                The IDE also has a fully featured console for print statements, system status (such as device disconnects and reuploads), and error messages.
            </div>

            <figure>
                <img src="/img/depth-articles/programmable-magna-tiles/console.png" alt="Programmable Magna Tiles" className="logoImage" />

                <figcaption className="cap">Console for debugging and error messages</figcaption>

            </figure>


            <div className="smallInfoText">
                Connecting to the device simply requires a click of a button, and the IDE will automatically detect the device and allow the user to connect to it. This does not require any OS level connection beyond enabling Bluetooth.
            </div>

            <figure>
                <img src="/img/depth-articles/programmable-magna-tiles/ble.png" alt="Programmable Magna Tiles" className="logoImage" />


                <figcaption className="cap">Connecting to the device using BLE</figcaption>
            </figure>


            <div className="smallInfoText">
                The IDE app was built and deployed to the internet at littlearn.com, and is fully functional.
            </div>

            <div className="smallInfoText">
                To see the full codebase, visit the GitHub repo linked at the top right of the page.
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

            <IDEInfo />

            <VideoDemo />

            <TechnicalDetails />

        </div>
    );
};

export default ProgrammableTiles;

