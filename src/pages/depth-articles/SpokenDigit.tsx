import React from 'react';
import PDFViewer from '../../components/PDF';
import '../../components/styles/spoken-digit.css';
import BackButton from '../../components/BackButton';


const SpokenDigit: React.FC = () => {
    const pdfUrl = "https://drive.google.com/file/d/19HqeVUgFJY_CfIQlb4ihx40nuXdxzpRl/preview";

    const pageTitle = 'Spoken Digit Recognition';
    const subtitle = 'November 2023 - December 2023';
    const gitHubLink = 'https://github.com/mbryant2025/SpokenDigits';

    return (
        <div>
            <BackButton />
            {pageTitle && <h1 className="articleTitle">{pageTitle}</h1>}
            {subtitle && <h3 className="articleSubtitle">{subtitle}</h3>}
            {gitHubLink && <img src="/img/github.png" alt="GitHub" className="github" onClick={() => window.open(gitHubLink, '_blank')} />}

            <div className="pdf-container">

                <PDFViewer pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default SpokenDigit;
