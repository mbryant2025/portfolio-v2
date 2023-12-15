interface PDFViewerProps {
    pdfUrl: string;
}


const PDFViewer = (props: PDFViewerProps) => {
    return (
        <div>
            <iframe
                title="Embedded PDF"
                width="100%"
                height="600"
                src={props.pdfUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default PDFViewer;
