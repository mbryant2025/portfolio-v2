import React from 'react';
import { PeekWidget } from '../types';
import { Link } from 'react-router-dom';
import '../styles/widgets.css';

const WidgetPeekComponent: React.FC<PeekWidget> = ({ title, subtitle, link, image, peekImages, onClick }) => {

    return (
        <div className="peek-widget">

            <div className="peeking-images">
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

            <Link to={link} className="link">
                <div className="peek-widget-inner">
                    <div className="peeking-widget-image-col">
                        <img src={image} alt={title} className="peeking-widget-image" />
                    </div>
                    <div className="text-box">
                        <p className="peeking-widget-title">{title}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default WidgetPeekComponent;
