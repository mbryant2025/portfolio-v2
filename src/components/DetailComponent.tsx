import React from 'react';
import { PeekWidget } from '../types';
import { Link } from 'react-router-dom';
import '../styles/widgets.css';
import '../styles/detail-widget.css';

const DetailComponent: React.FC<PeekWidget> = ({ title, subtitle, link, image, peekImages, onClick }) => {

    // If image contains "https://firebasestorage.googleapis.com/", trim off everything before "https://firebasestorage.googleapis.com/"
    const imgToShow = image.includes('https://firebasestorage.googleapis.com/') ? image.substring(image.lastIndexOf('https://firebasestorage.googleapis.com/')) : image;

    return (
        <div className="detail-widget">

            <div className="link-wrapper">
                <div className="detail-widget-text">

                    <Link to={link} className="detail-widget-title">
                        <p className="detail-widget-title">{title}</p>
                    </Link>

                    <div className="horizontal-line" />

                    <div className="peeking-images-detail">
                        {peekImages.map((peekImage: string | undefined) => (
                            peekImage && (
                                <img
                                    key={peekImage}
                                    src={peekImage}
                                    alt=""
                                    className="peeking-image"
                                    onClick={() =>
                                        onClick(
                                            peekImage.substring(
                                                peekImage.lastIndexOf('/') + 1,
                                                peekImage.lastIndexOf('.')
                                            )
                                        )
                                    }
                                />
                            )
                        ))}
                    </div>
                </div>

                <Link to={link} className="detail-widget-image">
                    <img src={imgToShow} alt={title} className="detail-widget-image" />
                </Link>
            </div>

        </div>
    );
};

export default DetailComponent;
